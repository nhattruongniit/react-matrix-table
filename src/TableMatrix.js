import React from 'react';

import { dataImages, dataCampaigns, dataVideo, dataCreativeChecked } from './mocks/dataTableMatrix'

function TableMatrix() {
  const [campaings, setCampaigns] = React.useState(dataCampaigns)
  const [images, setImages] = React.useState(dataImages)
  const [videos, setVideos] = React.useState(dataVideo)
  const [creativeChecked, setCreativeChecked] = React.useState({});

  // initial creative checkbox
  // React.useEffect(() => {
  //   function transformCreativeChecked() {
  //     const newCreativeChecked = {};
  //     const creatives = [...images, ...videos];

  //     campaings.forEach((campaign) => {
  //       creatives.forEach((creative) => {
  //         newCreativeChecked[`${creative.id}|${campaign.id}`] = true;
  //       });
  //     })
     
  //     return newCreativeChecked;
  //   }
  //   const dataCreativeChecked = transformCreativeChecked();
  //   setCreativeChecked(dataCreativeChecked);
  // }, [campaings, images, videos])


  console.log('creativeChecked: ', creativeChecked)


  return (
    <div>
      <h3>TableMatrix</h3>

      <table className="tableMatrix tg">
        <tbody>
          
          <tr>
            <td className="tg-0pky" colspan="2"></td>
            {campaings.map((campaign, index) => (
              <td className="tg-0pky" key={index}>{campaign.name}</td>
            ))}
          </tr>
          <tr>
            <td className="tg-0pky" rowspan={images.length}>image</td>
            <td className="tg-0pky">image 1</td>
            {campaings.map((campaign, index) => (
              <>
                {images.slice(0, 1).map((image, index) => {
                   const id = `${image.id}|${campaign.id}`;
                  return (
                    <td className="tg-0pky" key={index}><input type="checkbox" checked={creativeChecked[id]} /></td>
                  )
                })}
              </>
            ))}
          </tr>

          {images.slice(1, images.length).map((image, index) => {
            return (
              <tr key={index}>
                <td className="tg-0pky">{image.name}</td>
                {campaings.map((campaign, index) => {
                  const id = `${image.id}|${campaign.id}`;
                  return (
                    <td className="tg-0pky" key={index}><input type="checkbox" checked={creativeChecked[id]} /></td>
                  )
                })}
              </tr>
            )
          })}
         
          <tr>
            <td className="tg-0pky" rowspan={videos.length}>video</td>
            <td className="tg-0pky">video 1</td>
             {campaings.map((campaign, index) => (
              <>
                {videos.slice(0, 1).map((video, index) => {
                   const id = `${video.id}|${campaign.id}`;
                  return (
                    <td className="tg-0pky" key={index}><input type="checkbox"  checked={creativeChecked[id]} /></td>
                  )
                })}
              </>
            ))}
          </tr>

          {videos.slice(1, videos.length).map((video, index) => (
            <tr key={index}>
              <td className="tg-0pky">{video.name}</td>
              {campaings.map((campaign, index) => {
                  const id = `${video.id}|${campaign.id}`;
                  return (
                    <td className="tg-0pky" key={index}><input type="checkbox" checked={creativeChecked[id]} /></td>
                  )
                })}
            </tr>
          ))}
          
        </tbody>
        </table>

    </div>
  )
}

export default TableMatrix