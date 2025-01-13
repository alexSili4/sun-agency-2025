const linearAnimationContainerVariants = {
  hidden: {},
  visible: {},
};

const fastAnimationContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const slowAnimationContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const smallMovementAnimationVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const largeMovementAnimationVariants = {
  hidden: {
    y: 200,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const framerMotionVariants = {
  fastAnimationContainerVariants,
  smallMovementAnimationVariants,
  slowAnimationContainerVariants,
  linearAnimationContainerVariants,
  largeMovementAnimationVariants,
};

export default framerMotionVariants;
