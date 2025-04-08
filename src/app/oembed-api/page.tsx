import { Suspense } from "react";
import { tiktokUrls } from "./data"
import { getTiktokVideo } from "./helper"
import VideoBlock from "./VideoBlock";

export default async function OembedApi() {
  const data = await getTiktokVideo(tiktokUrls);

  return (
    <Suspense fallback={'Loading...'}>
      <VideoBlock data={data} />
    </Suspense>
  )
}