import React from "react";

// ant core
import { Checkbox, Tooltip } from "antd";

// ant icons
import { DeleteOutlined } from "@ant-design/icons";

function CreativeCategory({ name, length, creative, campaigns, handleDeleteCreativeRow, onChangeCreativeCell }) {

  return (
    <tr>
      <td rowSpan={length} className="cellStickyGroupType">
        <div className="cellGroupType">
          <p className="">{name}</p>
        </div>
        <div className="creativeType_line" />
      </td>
      <td className="bg-[#fef3fc] cellStickyCreative">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Tooltip title={creative.name}>
              <div className="creativeCellEllipsis">{creative.name}</div>
            </Tooltip>
          </div>
          <div className="cursor-pointer ml-2" onClick={() => handleDeleteCreativeRow(creative)}>
            <DeleteOutlined style={{ color: "#f00" }} />
          </div>
        </div>
      </td>
      {campaigns.map((campaign, index) => {
        return (
          <td key={campaign.id} align="center">
            <Checkbox 
              disabled={campaign.channel.creativeSetTypes.length === 0} 
              onChange={(event) => onChangeCreativeCell(event.target.checked, creative, campaign, index)} 
            />
          </td>
        );
      })}
    </tr>
  );
}

export default CreativeCategory;
