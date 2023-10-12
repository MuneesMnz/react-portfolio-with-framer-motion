export const fadeInLeftVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
export const fadeInRightVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInTopVariant = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
export const fadeInBottomVariant = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const slideInLeft = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: {
    type: "tween",
    duration: 1,
  },
  exit: {
    opacity: 0,
    x: "-100vh",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
