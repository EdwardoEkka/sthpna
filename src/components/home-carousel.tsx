import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel: React.FC = () => {
  const images = [
    { id: 1, src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3GgkKundG6WGpPHOPFBdDq/7cba9177de38af6c6fd9f30b7d377a91/Construction-workers-and-architect-looking-at-blueprints-on-construction-site-514311930_5413x3609__1_.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000", alt: "Slide 1" },
    { id: 2, src: "https://pinnacleiit.com/wp-content/uploads/2024/09/XXL.webp", alt: "Slide 2" },
    { id: 3, src: "https://cdn.mos.cms.futurecdn.net/q4sTR3JXhPyKRGJbEFjq8c-1000-80.jpg", alt: "Slide 3" }
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
              className="w-full aspect-video object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
