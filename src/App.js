import React, { useCallback } from "react";

// mock data
import { creatives, campaigns } from "./data";

import { mappingCreativeAndCampaign } from './mappingCreativeAndCampaign';

// components
import CreativeCategory from "./components/CreativeCategory";
import CreativeRow from "./components/CreativeRow";
import CampaignCell from "./components/CampaignCell";
import { useForm, FormProvider } from "react-hook-form";

function getAllConfigurations(creativeSetTypes) {
  return creativeSetTypes.reduce((listConfigurations, creativeSetType) => {
    return [].concat(listConfigurations).concat(creativeSetType.creativeConfigurations.map((config) => ({
      ...config,
      setType: creativeSetType.name,
      setTypeId: creativeSetType.id,
    })));
  }, []);
}

function getMatchConfiguration(configurations, creativeItem) {
  const fileWidth = creativeItem.resolution.width;
  const fileHeight = creativeItem.resolution.height;
  const fileType = creativeItem.file_type;
  const ratio = fileWidth / fileHeight;
  const index = configurations.findIndex((configuration) => {
    const isRatioMatch = ratio >= configuration.metadata.min_ratio && ratio <= configuration.metadata.max_ratio;
    const isWidthMatchDimension = fileWidth >= configuration.metadata.min_dimension && fileWidth <= configuration.metadata.max_dimension;
    const isHeightMatchDimension = fileHeight >= configuration.metadata.min_dimension && fileHeight <= configuration.metadata.max_dimension;
    const generalCondition = configuration.file_types.includes(fileType) && isRatioMatch;
    if (fileType === 'video') {
      return generalCondition;
    }
    return generalCondition && isWidthMatchDimension && isHeightMatchDimension;
  });

  return {
    index: index,
    data: index === -1 ? null : ({
      type: "videoAndCarousel",
      typeId: "f230a39c-1653-4495-9221-d7bebf51b5b4",
      ratio: ratio,
      resolution: `${fileWidth}x${fileHeight}`,
      name: creativeItem.name,
      drive_url: "http://img.google.com/abcxyz.jpg", // I don't know how to get
      mimeType: creativeItem.mimeType,
      file_size: creativeItem.file_size,
      file_type: creativeItem.file_type,
      id: creativeItem.id,
      usageType: configurations[index].type,
    }),
  };
}

const CONFIGURATION_MAP = campaigns.reduce((campaignMap, campaign) => {
  return {
    ...campaignMap,
    [campaign.id]: getAllConfigurations(campaign.channel.creativeSetTypes),
  }
}, {});


export default function ConfirmCreative() {
  const creativeImages = creatives.filter((creative) =>  ["png", "jpg", "jpeg", "gif"].includes(creative.file_type));
  const creativePlayables = creatives.filter((creative) => ["html"].includes(creative.file_type));
  const creativeVideos = creatives.filter((creative) => ["video"].includes(creative.file_type));
 
  function handleDeleteCampaignColumn(campaign) {
    console.log('handleDeleteCampaignColumn', campaign)
  }

  function handleDeleteCreativeRow(creative) {
    console.log('handleDeleteCreativeRow', creative)
  }

  function onChangeCreativeCell(checked, creativeItem, campaignItem, campaignIndex) {
    console.log('onChange: ', {checked, creativeItem, campaignItem});
  }

  const configurationMapCloned = JSON.parse(JSON.stringify(CONFIGURATION_MAP));
  const lengthCreative = creatives.length;

  function recursion() {
    Object.keys(CONFIGURATION_MAP).forEach((campaignId) => {
      const configurations = CONFIGURATION_MAP[campaignId];
      console.log('configurations', configurations);
    })
  }

  

 

  console.log({creatives, campaigns, CONFIGURATION_MAP})


  return (
    <FormProvider>
      <div className="flex mb-8 w-full overflow-x-auto max-h-[700px]">
        <table width="100%" cellPadding={0} cellSpacing={0} className="tableMatrixCreative">
          <thead>
            <tr>
              <th className="tableMatrixCreative_blank1" />
              <th className="tableMatrixCreative_blank2" />
              {campaigns.map((campaign) => {
                return (
                  <CampaignCell
                    key={campaign.id}
                    campaign={campaign}
                    handleDeleteCampaignColumn={handleDeleteCampaignColumn}
                    onChangeCreativeCell={onChangeCreativeCell}
                  />
                );
              })}
            </tr>
          </thead>
          <tbody>
            {creativeImages.length > 0 && (
              <>
                {creativeImages.slice(0, 1).map((creative) => (
                  <CreativeCategory
                    key={creative.id}
                    name="Image"
                    length={creativeImages.length}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
                    configurations={CONFIGURATION_MAP}
                  />
                ))}

                {creativeImages.slice(1, creativeImages.length).map((creative) => (
                  <CreativeRow
                    key={creative.id}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
                    configurations={CONFIGURATION_MAP}
                  />
                ))}
              </>
            )}

            {creativePlayables.length > 0 && (
              <>
                {creativePlayables.slice(0, 1).map((creative) => (
                  <CreativeCategory
                    key={creative.id}
                    name="Playable"
                    length={creativePlayables.length}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
                    configurations={CONFIGURATION_MAP}
                  />
                ))}

                {creativePlayables.slice(1, creativePlayables.length).map((creative) => (
                  <CreativeRow
                    key={creative.id}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
                    configurations={CONFIGURATION_MAP}
                  />
                ))}
              </>
            )}

            {creativeVideos.length > 0 && (
              <>
                {creativeVideos.slice(0, 1).map((creative) => (
                  <CreativeCategory
                    key={creative.id}
                    name="Video"
                    length={creativeVideos.length}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
                    configurations={CONFIGURATION_MAP}
                  />
                ))}

                {creativeVideos.slice(1, creativeVideos.length).map((creative) => (
                  <CreativeRow
                    key={creative.id}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
                    configurations={CONFIGURATION_MAP}
                  />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </FormProvider>
  );
}

