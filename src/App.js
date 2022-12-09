import React, { useCallback } from "react";

// mock data
import { creatives, campaigns } from "./data";

// components
import CreativeCategory from "./components/CreativeCategory";
import CreativeRow from "./components/CreativeRow";
import CampaignCell from "./components/CampaignCell";
import { useForm } from "react-hook-form";
import { FormProvider } from "rc-field-form";

function getAllConfigurations(creativeSetTypes) {
  return creativeSetTypes.reduce((listConfigurations, creativeSetType) => {
    return [].concat(listConfigurations).concat(creativeSetType.creativeConfigurations);
  }, []);
}

function getMatchConfiguration(configurations, { fileType, fileWidth, fileHeight }) {
  return configurations.find((configuration) => {
    const ratio = fileWidth / fileHeight;
    const isRatioMatch = ratio >= configuration.metadata.min_ratio && ratio <= configuration.metadata.max_ratio;
    // const isMatchDimension = fileWidth max_dimension
    return configuration.file_types.includes(fileType);
  });
}

export default function ConfirmCreative() {
  const creativeImages = creatives.filter((creative) =>  ["png", "jpg", "jpeg", "gif"].includes(creative.file_type));
  const creativePlayables = creatives.filter((creative) => ["html"].includes(creative.file_type));
  const creativeVideos = creatives.filter((creative) => ["video"].includes(creative.file_type));
  const methods = useForm({
    defaultValues: {
      appIds: ["bf16dd34-cc44-49f7-9874-28ee9809833d"],
      campaignIds: campaigns.map((campaign) => campaign.id),
      channelIds: campaigns.map((campaign) => campaign.channel.id),
      language: "en",
      summary: "Creative Summary",
      campaignsWithCreativeSets: campaigns.map((campaign) => ({
        id: campaign.id,
        sets: [],
      })),
      // "campaignsWithCreativeSets": [
      //   {
      //     "id": "4c4ae977-4f1b-4aa5-9f7b-ecbf57f85759",
      //     "sets": [
      //       {
      //         "type": "videoAndCarousel",
      //         "typeId": "f230a39c-1653-4495-9221-d7bebf51b5b4",
      //         "creatives": [
      //           {
      //             "ratio": 1,
      //             "resolution": "1920x1080",
      //             "name": "creative1.png",
      //             "drive_url": "http://img.google.com/abcxyz.jpg",
      //             "mimeType": "image/png",
      //             "file_size": 20442,
      //             "file_type": "image",
      //             "id": "ID_IMAGE_FROM_GOOGLE_DRIVE",
      //             "usageType": "left"
      //           }
      //         ],
      //       }
      //     ]
      //   }
      // ]
    }
  })

  function handleDeleteCampaignColumn(campaign) {
    console.log('handleDeleteCampaignColumn', campaign)
  }

  function handleDeleteCreativeRow(creative) {
    console.log('handleDeleteCreativeRow', creative)
  }

  const getEmptySlot = useCallback((configurations, fileType, fileWidth, fileHeight, campaignIndex) => {
    const slot = getMatchConfiguration(configurations, fileType, fileWidth, fileHeight);
  }, []);


  function onChangeCreativeCell(checked, creativeItem, campaignItem, campaignIndex) {
    console.log('onChange: ', {checked, creativeItem, campaignItem});
    const fileWidth = creativeItem.resolution.width;
    const fileHeight = creativeItem.resolution.height;
    const fileType = creativeItem.file_type;
    const configurations = getAllConfigurations(campaignItem.channel.creativeSetTypes);
  }

  console.log({creatives, campaigns})


  return (
    <FormProvider {...methods}>
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
                  />
                ))}

                {creativeImages.slice(1, creativeImages.length).map((creative) => (
                  <CreativeRow
                    key={creative.id}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
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
                  />
                ))}

                {creativePlayables.slice(1, creativePlayables.length).map((creative) => (
                  <CreativeRow
                    key={creative.id}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
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
                  />
                ))}

                {creativeVideos.slice(1, creativeVideos.length).map((creative) => (
                  <CreativeRow
                    key={creative.id}
                    creative={creative}
                    campaigns={campaigns}
                    handleDeleteCreativeRow={handleDeleteCreativeRow}
                    onChangeCreativeCell={onChangeCreativeCell}
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
