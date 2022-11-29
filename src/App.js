import React from "react";

import { Checkbox, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function App() {
  const numFolders = 4;
  const numCreatives = 7;

  const onChange = (e) => {
    // eslint-disable-next-line no-console
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="flex mb-8">
      <div className="w-[350px]">
        <div className="h-[70px]" />
        <div className="flex w-[350px] bg-[#EFDBFF]">
          <div className="bg-[#ADC6FF] w-[55px] flex flex-col items-center shrink-0 relative">
            <div className="text-center flex-1">
              <p className="rotate-90 flex justify-center flex-col h-full font-bold w-full">PNG</p>
            </div>
            <div
              style={{
                borderBottom: "1px solid #EFDBFF",
                width: "50%",
                position: "absolute",
                bottom: 0,
                transform: "translateX(-50%)",
                left: "50%",
              }}
            />
          </div>
          <div className="w-full">
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[350px]  bg-[#EFDBFF]">
          <div className="bg-[#ADC6FF] w-[55px] flex items-center shrink-0 relative">
            <div className="text-center flex-1">
              <p className="rotate-90 flex justify-center flex-col h-full font-bold w-full">JPG</p>
            </div>
            <div
              style={{
                borderBottom: "1px solid #EFDBFF",
                width: "50%",
                position: "absolute",
                bottom: 0,
                transform: "translateX(-50%)",
                left: "50%",
              }}
            />
          </div>
          <div className=" w-full">
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
            <div className="px-4 py-2 h-[55px] flex items-center w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="w-[72px] h-[48px] mr-2 shrink-0">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Creative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>Name 1</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between w-full overflow-auto">
        <div className="flex flex-nowrap flex-1">
          {Array.from(Array(numFolders).keys()).map((item) => (
            <div key={item} className="min-w-[300px] flex-1">
              <div className="bg-[#EFDBFF] px-4 py-2 h-[70px] flex justify-between items-center">
                <div className="flex items-center">
                  <Tag color="gold">MT</Tag>
                  <div>Folder {item + 1}</div>
                </div>
                <div className="cursor-pointer ml-2">
                  <DeleteOutlined style={{ color: "#f00" }} />
                </div>
              </div>
              <div>
                {Array.from(Array(numCreatives).keys()).map((creative) => (
                  <div
                    key={creative}
                    className="px-4 py-2 flex w-full items-center justify-center h-[55px]"
                    style={{
                      borderBottom: "1px solid #EFDBFF",
                    }}
                  >
                    <Checkbox onChange={onChange} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
