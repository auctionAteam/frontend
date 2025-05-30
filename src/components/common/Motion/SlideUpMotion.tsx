import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, type Ref } from 'react';

import type { MotionProps } from '.';

const SlideUpMotion = forwardRef(({ motionKey, children }: MotionProps, ref: Ref<HTMLDivElement>) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={motionKey}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
});

export default SlideUpMotion;
