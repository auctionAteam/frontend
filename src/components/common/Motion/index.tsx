import { forwardRef, type HTMLAttributes, type Ref } from 'react';

import FadeInOutMotion from './FadeInOutMotion';
import SlideLeftMotion from './SlideLeftMotion';
import SlideUpMotion from './SlideUpMotion';

type MotionEffectType = 'fade-in-out' | 'slide-up' | 'slide-left';

export type MotionProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  motionKey?: any;
  type?: MotionEffectType;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Motion = forwardRef(
  ({ type = 'fade-in-out', motionKey, children, ...props }: MotionProps, ref: Ref<HTMLDivElement>) => {
    const motionProps = { ref, motionKey, children, ...props };

    switch (type) {
      case 'fade-in-out':
        return <FadeInOutMotion {...motionProps} />;
      case 'slide-up':
        return <SlideUpMotion {...motionProps} />;
      case 'slide-left':
        return <SlideLeftMotion {...motionProps} />;
      default:
        return <FadeInOutMotion {...motionProps} />;
    }
  },
);

export default Motion;
