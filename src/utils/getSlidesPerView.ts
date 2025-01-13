const getSlidesPerView = (slideWidth: number): number => {
  const { innerWidth } = window;
  const slidesPerView = innerWidth / slideWidth;

  return slidesPerView;
};

export default getSlidesPerView;
