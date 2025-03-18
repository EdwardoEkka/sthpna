import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel: React.FC = () => {
  const images = [
    { id: 1, src: "/imgs/homeig.jpg", alt: "Slide 1" },
    { id: 2, src: "/imgs/homeig2.jpg", alt: "Slide 2" },
    // { id: 3, src: "/imgs/homeig3.jpg", alt: "Slide 3" },
    { id: 4, src: "/imgs/homeig4.jpg", alt: "Slide 4" },
    { id: 5, src: "/imgs/homeig5.jpg", alt: "Slide 5" },
    { id: 6, src: "/imgs/homeig6.jpg", alt: "Slide 6" },
  ];

  const settings: import("react-slick").Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full p-6">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full aspect-video object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
