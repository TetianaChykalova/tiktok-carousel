import CustomCarousel from "@/components/CustomCarousel";

type VideoBlockProps = {
  data: any[];
};

const VideoBlock: React.FC<VideoBlockProps> = ({ data }) => {

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