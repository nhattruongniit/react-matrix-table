import React from "react";

// mock data
import { creatives, campaigns } from "./data";

// components
import CreativeCategory from "./components/CreativeCategory";
import CreativeRow from "./components/CreativeRow";
import CampaignCell from "./components/CampaignCell";

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


  function onChangeCreativeCell(checked, creativeItem, campaignItem) {
    console.log('onChange: ', {checked, creativeItem, campaignItem});
  }

  console.log({creatives, campaigns})


  return (
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
  );
}

