/* eslint-disable linebreak-style */
import { useState, useContext } from 'react';

import { IntersectionContext } from '../IntersectionObserver';
import useInterval from './use-interval';

export const Counter = ({
  valueFrom = 0,
  valueTo = 100,
  totalDuration = 1.5,
}) => {
  const { inView } = useContext(IntersectionContext);
  const [count, setCount] = useState(valueFrom);

  useInterval(() => {
    if (inView && count < valueTo) {
      setCount(count + 1);
    }
  }, (totalDuration / valueTo) * 1000);

  return count;
};

export default Counter;
