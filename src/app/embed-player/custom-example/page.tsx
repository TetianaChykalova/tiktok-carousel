'use client';

import CustomCarousel from "@/components/CustomCarousel";
import { videoReviewsDataIds } from "./data";
import { TIKTOK_EMBED_PLAYER_URL } from "@/utils/constants";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from './page.module.css';

export default function EmbedPlayerCustom() {
  const isTablet = useMediaQuery('(min-width: 834px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className={styles.carousel}>
      <CustomCarousel
        centerMode={isTablet}
        autoPlay={false}
        showArrows={true}
        numberIndicator={true}>
        {
          videoReviewsDataIds.map(id => {
            return (
              <div key={id} className={styles.carouselItem}>
                <iframe
                  height={isDesktop ? '500px' : '430px'}
                  sandbox='allow-scripts allow-same-origin'
                  src={`${TIKTOK_EMBED_PLAYER_URL}${id}?&music_info=1&description=1&rel=0`}
                  title='breeze review'
                  style={{ margin: '0', borderRadius: '24px', width: '100%' }}
                >
                </iframe>
              </div>
            )
          })
        }
      </CustomCarousel>
    </div>
  )
}
