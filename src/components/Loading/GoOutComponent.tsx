import React from 'react';
import { animated, useSpring } from '@react-spring/web';

type GoOutComponentProps = {
  isLeft: boolean;
};

const GoOutComponent: React.FC<GoOutComponentProps> = ({ isLeft }) => {
  const style = useSpring({
    config: { duration: 1000 },
    from: { x: 0 },
    to: { x: -1000 },
  });

  return (
    <animated.div
      className="flex h-[20%] items-center justify-center"
      style={{
        ...style,
        backgroundColor: '#46e891',
        borderRadius: 16,
      }}
    />
  );
};

export default GoOutComponent;
