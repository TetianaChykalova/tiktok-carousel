import { TIKTOK_EMBED_PLAYER_URL } from "@/utils/constants";

export default function EmbedPlayerDoc() {

  return (
    <>
      <iframe
        height="300"
        width="400"
        src={`${TIKTOK_EMBED_PLAYER_URL}6718335390845095173?&music_info=1&description=1`}
        allow="fullscreen"
        title="test">
      </iframe>
    </>
  )
}