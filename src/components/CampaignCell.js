import React from "react";

// ant core
import { Tooltip } from "antd";

// ant icons
import { DeleteOutlined } from "@ant-design/icons";

export default function CampaignCell({ campaign, handleDeleteCampaignColumn }) {
  return (
    <th className="bg-[#fef3fc] px-4 py-2 h-[70px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Tooltip title={campaign.name}>
            <div className="creativeCellEllipsis">{campaign.name}</div>
          </Tooltip>
        </div>
        <div className="cursor-pointer ml-2 flex" onClick={() => handleDeleteCampaignColumn(campaign)}>
          <DeleteOutlined style={{ color: "#f00" }} />
        </div>
      </div>
    </th>
  );
}
