import { TIKTOK_OEMBED_API_URL } from "@/utils/constants";

export async function getTiktokVideo(tiktokUrls: string[]): Promise<Array<any>> {
  try {
    const responses = await Promise.all(
      tiktokUrls.map(url => fetch(`${TIKTOK_OEMBED_API_URL}${url}`))
    );

    const data = await Promise.all(responses.map(res => res.json()));

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}