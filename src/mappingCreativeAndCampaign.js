import _ from "lodash";

export function mappingCreativeAndCampaign(creativesList, campaignsList) {
  if (creativesList.length === 0) return null;

  const creatives = JSON.parse(JSON.stringify(creativesList));
  const campaigns = JSON.parse(JSON.stringify(campaignsList));
  const result = [];

  creatives.forEach((file) => {
    for (let i = 0; i < campaigns.length; i += 1) {
      const campaign = campaigns[i];

      for (let j = 0; j < campaign.channel.creativeSetTypes.length; j++) {
        const creativeSetType = campaign.channel.creativeSetTypes[j];

        const _file = creativeSetType.creativeConfigurations.reduce((acc, config) => {
          const configName = config.name.toLowerCase();
          // metadata
          const ratio = file.resolution.width / file.resolution.height;

          if (file.mimeType.startsWith("video") && configName === 'video') {
            const isMatch = _.inRange(ratio, config.metadata.min_ratio, config.metadata.max_ratio);

            if (isMatch) {
              return { file, configId: config.id };
            }
          } else if (file.mimeType.startsWith("image") && configName === 'image') {
            const isMatch =
              _.inRange(ratio, config.metadata.min_ratio, config.metadata.max_ratio) &&
              (_.inRange(file.resolution.width, config.metadata.min_dimension, config.metadata.max_dimension) ||
                _.inRange(file.resolution.height, config.metadata.min_dimension, config.metadata.max_dimension));

            if (isMatch) {
              return { file, configId: config.id };
            }
          } else if (file.mimeType === "text/html" && configName === 'html') {
            return { file, configId: config.id };
          }
        }, undefined);

        if (_file && creativeSetType.creativeConfigurations.length !== 0) {
          creativeSetType.creativeConfigurations = creativeSetType.creativeConfigurations.filter(
            (config) => config.id !== _file.configId,
          );

          result.push({
            campaignId: campaign.id,
            creativeSetTypeId: creativeSetType.id,
            creativeConfigurationId: _file.id,
            campaignName: campaign.name,
            creativeSetName: creativeSetType.name,
            file: _file.file,
          });
        }
      }
    }
  });
  // console.log('result: ', result)

  /* Output:
  result3 = [{
    campaignId: 1,
    creativeSetTypeId: 1,
    files: [file, ...]
  }]
  */
  return result.reduce((acc, cur) => {
    const { campaignId, creativeSetTypeId, file } = cur;

    const _file = {
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      url: file.videoUrl,
    };

    const index = acc.findIndex(
      (item) => item.campaignId === campaignId && item.creativeSetTypeId === creativeSetTypeId,
    );

    if (index === -1) {
      acc.push({
        campaignId,
        creativeSetTypeId,
        campaignName: cur.campaignName,
        creativeSetName: cur.creativeSetName,
        files: [_file],
      });
    } else {
      acc[index].files.push(_file);
    }

    return acc;
  }, []);
}