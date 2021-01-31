/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { motion } from 'framer-motion';
import { Box } from './Box';
import { Flex } from './Flex';
import { Counter } from './Counter';
import { IntersectionContext } from './IntersectionObserver';

export const ProgressCircle = ({
  percents,
  stroke = '#4CAF50',
  emptyStroke = stroke,
  emptyStrokeOpacity = 0.25,
  duration = 2,
  delay = 0.25,
  size = 100,
  strokeWidth = 6,
}) => {
  const { inView } = useContext(IntersectionContext);
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100)),
  );

  const transition = {
    duration,
    delay,
    ease: 'easeIn',
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          className="counter"
          fontSize={size >= 100 ? 5 : 3}
          fontWeight={2}
          color="text500"
        >
          <Counter valueTo={percents} totalDuration={duration + delay} />
          %
        </Box>
        <Box height={size}>
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            width={size}
            height={size}
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="circle"
              strokeWidth={strokeWidth}
              stroke={emptyStroke}
              strokeOpacity={emptyStrokeOpacity}
              fill="transparent"
            />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            style={{
              position: 'absolute',
              transform: 'rotate(-90deg)',
              overflow: 'visible',
              marginLeft: -size,
            }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              strokeWidth={strokeWidth}
              stroke={stroke}
              fill="transparent"
              strokeDashoffset={fillPercents}
              strokeDasharray={circumference}
              variants={variants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            />
          </svg>
        </Box>
      </Flex>
    </>
  );
};

export default ProgressCircle;
