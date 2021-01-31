/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, {
  useEffect, useState, createContext, useRef,
} from 'react';
import { useIntersection } from 'react-use';

export const IntersectionContext = createContext({ inView: true });

export const IntersectionObserver = ({
  children,
  reset = false,
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  );
};
