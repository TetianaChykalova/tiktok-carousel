'use client';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import clsx from 'clsx';

import { useState } from 'react';

import { useMediaQuery } from '@mui/material';

import styles from './CustomCarousel.module.css';

import { ArrowBackIcon, ArrowForwardIcon } from '@/components/Icons';

interface CustomCarouselProps {
  children: any[];
  autoPlay?: boolean;
  centerMode?: boolean;
  showArrows?: boolean;
  numberIndicator?: boolean;
  dynamicHeight?: boolean;
  interval?: number;
}

export default function CustomCarousel({
  children,
  autoPlay = true,
  centerMode = false,
  showArrows = false,
  numberIndicator = false,
  dynamicHeight = false,
  interval = 3000,
}: CustomCarouselProps) {
  const isTablet = useMediaQuery('(min-width: 834px)');

  const visibleStartIndicatorsNumber = isTablet ? 3 : 1;
  const totalIndicators = children.length;

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className={styles.carousel}>
      <Carousel
        onChange={setSelectedItem}
        dynamicHeight={dynamicHeight}
        autoPlay={autoPlay}
        interval={interval}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        showArrows={showArrows}
        centerMode={centerMode}
        centerSlidePercentage={33.333}
        swipeScrollTolerance={5}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              className={clsx(styles.arrow, styles.arrowPrev)}
            >
              <ArrowBackIcon className={styles.arrowIcon} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              className={clsx(styles.arrow, styles.arrowNext)}
            >
              <ArrowForwardIcon className={styles.arrowIcon} />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const showEllipsis =
            totalIndicators > visibleStartIndicatorsNumber + 2;

          if (numberIndicator) {
            if (
              index < visibleStartIndicatorsNumber ||
              isSelected ||
              index === totalIndicators - 1
            ) {
              return (
                <li
                  className={clsx(
                    styles.indicatorNumbers,
                    isSelected && styles.indicatorNumbersSelected
                  )}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={isSelected ? undefined : onClickHandler}
                  onKeyDown={isSelected ? undefined : onClickHandler}
                  value={index}
                  key={index}
                  role={isSelected ? undefined : 'button'}
                  tabIndex={isSelected ? undefined : 0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${isSelected ? 'Selected: ' : ''}${label} ${
                    index + 1
                  }`}
                >
                  {index + 1}
                </li>
              );
            } else if (showEllipsis && index === visibleStartIndicatorsNumber) {
              return (
                <li className={styles.indicatorNumbers} key='left-ellipsis'>
                  ...
                </li>
              );
            } else if (
              showEllipsis &&
              selectedItem < totalIndicators - 1 &&
              selectedItem >= visibleStartIndicatorsNumber &&
              index === totalIndicators - 2
            ) {
              return (
                <li className={styles.indicatorNumbers} key='right-ellipsis'>
                  ...
                </li>
              );
            } else {
              return null;
            }
          } else {
            if (isSelected) {
              return (
                <li
                  className={clsx(
                    styles.indicatorCircle,
                    styles.indicatorCircleSelected
                  )}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            } else {
              return (
                <li
                  className={styles.indicatorCircle}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role='button'
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }
          }
        }}
      >
        {children}
      </Carousel>
    </div>
  );
}
