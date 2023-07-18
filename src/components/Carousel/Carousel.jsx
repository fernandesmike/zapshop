import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = () => {
  // Embla carousel has their integration hook
  const [emblaRef] = useEmblaCarousel();

  // Copied this snippet from documentation
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default Carousel;
