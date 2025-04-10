'use client';

import CustomCarousel from "@/components/CustomCarousel";
import { useEffect } from "react";

type VideoBlockProps = {
  data: any[];
};

const VideoBlock: React.FC<VideoBlockProps> = ({ data }) => {

  useEffect(() => {
    const oldScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [data]);

  return (
    <>
      <CustomCarousel
        autoPlay={false}
        centerMode={true}
        showArrows={true}
        numberIndicator={true}>
        {
          data.map((video: any) => {

            return (

              <div
                key={video.embed_product_id}
                dangerouslySetInnerHTML={{
                  __html: video.html
                }}
              />

            )
          })
        }
      </CustomCarousel>
    </>
  )
}

export default VideoBlock;