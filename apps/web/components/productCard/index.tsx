import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import BuyNowBtn from "../buyNowBtn";

type Props = {};

function ProductCard({}: Props) {
  return (
    <article className="false relative flex h-full flex-col overflow-hidden rounded-[5px] border-[0.14px] border-[#DDDDD9] lg:min-h-max lg:rounded-[8px] lg:border-[0.5px]">
      <a href="/abc">
        {/* Image Section */}
        <div className="relative">
          <div>
            <img src="/productImg.webp" />
          </div>

          {/* Ratings */}
          <div className="absolute flex items-center left-2 bottom-2 text-xs">
            <StarIcon className="w-[12px] text-green-800 mr-[2px]" />
            4.5/5
          </div>
          {/* Discount in %age */}
          <div className="absolute text-xs right-2 top-2 flex gap-1 bg-[#80a03c8b] p-[2px] rounded-sm font-bold">
            22% OFF
          </div>
        </div>
      </a>

      <div className="mb-2.5 p-2.5 pb-0 lg:mb-4">
        <h1 className="kp-show-2line text-[length:var(--text-base)] font-normal leading-[1.2] hover:text-[color:var(--cr-primary)] lg:text-[length:var(--text-lg)] lg:leading-[1.3] lg:tracking-[0.30px] line-clamp-2">
          Shilajit Gold Resin
        </h1>
      </div>

      <p className="mb-3 mt-auto flex flex-wrap items-center gap-x-2 px-2.5 lg:gap-x-3">
        <span className="font-bold tracking-[0.25px] lg:text-2xl">₹1399</span>
        <span className="text-xs font-light tracking-[0.22] text-[#868686] line-through decoration-[#808080] decoration-[1px] lg:text-[42px] lg:tracking-[0.4]">
          1799
        </span>
      </p>
      <BuyNowBtn />
    </article>
  );
}

export default ProductCard;
