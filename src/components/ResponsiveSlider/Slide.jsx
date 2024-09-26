'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Image from './Image';

const Slide = ({
  data = [],
  step = 2,
  showTitleImage = true,
  imageIsLarge = false,
  autoPlay = false,
}) => {
  const lengthData = data.length;
  const [index, setIndex] = useState({
    from: 0,
    to: step,
  });
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    setIndex({
      from: 0,
      to: step,
    });
  }, [step]);

  const onNextStep = () =>
    setIndex((prev) => {
      const newFrom = Math.min(prev.from + step, lengthData - step);
      const newTo = Math.min(prev.to + step, lengthData);
      return { from: newFrom, to: newTo };
    });
  
  const onPrevStep = () =>
    setIndex((prev) => {
      const newFrom = Math.max(prev.from - step, 0);
      const newTo = Math.max(prev.to - step, step);
      return { from: newFrom, to: newTo };
    });

  useEffect(() => {
    if (!autoPlay) return;

    const autoPlayInterval = setInterval(() => {
      if (index.from === 0) {
        setIsReversing(false);
      }
      
      if (index.to >= lengthData) {
        setIsReversing(true);
      }

      if (isReversing) {
        onPrevStep();
      } else {
        onNextStep();
      }
    }, 1500);

    return () => clearInterval(autoPlayInterval);
  }, [index, autoPlay, step]);

  const arrayData = [];
  const limitDown = index.from > index.to ? index.to : index.from;
  const islimitUp = lengthData <= index.to;

  if (islimitUp) {
    for (let i = index.to - step; i <= index.to - 1; i += 1) {
      arrayData.push(i);
    }
  } else {
    for (let i = limitDown; i < limitDown + step; i += 1) {
      arrayData.push(i);
    }
  }

  const renderListSlide = (items) =>
    items.map(
      (_index) =>
        data[_index] && (
          <Image
            key={_index}
            image={data[_index].image}
            label={data[_index].label}
            showTitleImage={showTitleImage}
            imageIsLarge={imageIsLarge}
          />
        )
    );

  return (
    <Container
      onNextStep={onNextStep}
      onPrevStep={onPrevStep}
      disableLeft={index.from === 0}
      disableRight={islimitUp}
    >
      {renderListSlide(arrayData)}
    </Container>
  );
};
Slide.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, label: PropTypes.string })
  ),
  step: PropTypes.number,
  showTitleImage: PropTypes.bool,
  imageIsLarge: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

export default Slide;
