"use client";
import React from "react";
import Slider from "react-slick";

const BANNERS: {
  imgUrl: string;
  slug: string;
}[] = [
  {
    imgUrl: "/banner1.webp",
    slug: "banner1",
  },
  {
    imgUrl: "/banner2.webp",
    slug: "banner2",
  },
  {
    imgUrl: "/banner3.webp",
    slug: "banner3",
  },
];

export default function BannerSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {BANNERS.map((item) => (
        <a key={item.imgUrl}>
          <div>
            <img src={item.imgUrl} />
          </div>
        </a>
      ))}
    </Slider>
  );
}
