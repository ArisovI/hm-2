import React, { useEffect, useState } from "react";
import "./ImageCarousel.scss";
import Slider from "react-slick";
interface ICarouselProps {
  images: string[];
}
const ImageCarousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="imageCarousel">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} alt={`Image ${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageCarousel;
