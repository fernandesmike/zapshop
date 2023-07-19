import React from "react";

// Hooks
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Assets & Styles
import slide_a from "../../assets/carousel-images/carousel_a.png";
import slide_b from "../../assets/carousel-images/carousel_b.jpeg";
import slide_c from "../../assets/carousel-images/carousel_c.jpg";
import "../../styles/carousel.css";

const Carousel = () => {
  // Embla carousel has their integration hook
  // After installing the Autoplay plugin, pass it as an array, always include loop
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // Copied this snippet from documentation
  return (
    <div className="embla rounded" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={slide_a} alt="First slide of the carousel" />
        </div>
        <div className="embla__slide">
          <img src={slide_b} alt="Second slide of the carousel" />
        </div>
        <div className="embla__slide">
          <img src={slide_c} alt="Last slide of the carousel" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
