"use client";
import React from "react";
import Slider from "react-slick";
import ProductCard from "../productCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

type Props = {};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={twMerge(className, "absolute -left-4 bottom-[50%]")}
    //   style={style}
    // >
    <ChevronLeftIcon
      className={twMerge(
        className,
        "absolute -left-4 bottom-[50%]",
        " w-6 h-6 text-gray-600"
      )}
      onClick={onClick}
    />
    // </div>
  );
};

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    // <div className="absolute -right-4 bottom-[50%]">
    <ChevronRightIcon
      className={twMerge(
        className,
        "absolute -right-4 bottom-[50%]",
        " w-6 h-6 text-gray-600"
      )}
      onClick={onClick}
    />
    // </div>
  );
};

function ProductGrid({}: Props) {
  const items = new Array(8).fill(1);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time on smaller screens
    slidesToScroll: 2, // Scroll 2 slides at a time
    slidesPerRow: 2,
    rows: 2,
    arrows: true,
    // centerMode: true,
    centerPadding: "60px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Laptop screen size or larger
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
          vertical: false, // Horizontal slider
        },
      },
    ],
  };
  return (
    <div>
      <div className="mb-5 flex items-center justify-start lg:mb-10">
        <span className="text-[length:var(--text-lg)] font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
          Gym Foods
        </span>
        <a
          href=""
          className="ml-auto text-[length:var(--text-sm)] text-[color:var(--cr-danger-light)] lg:text-[length:var(--text-lg)]"
        >
          View all
        </a>
      </div>
      <Slider {...settings}>
        {items.map((_, idx) => (
          <div className="px-1 pb-5">
            <ProductCard key={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductGrid;
