import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  classes?: {
    root: string;
  };
};

function BuyNowBtn({ className = "" }: Props) {
  return (
    <div
      className={twMerge(
        "flex h-[40px] w-full items-center lg:h-[54px]",
        className
      )}
    >
      <button className=" relative flex h-full w-[35%] items-center justify-center bg-[color:var(--cr-dark)] text-white hover:bg-[color:var(--cr-primary-dark)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.866"
          className="h-[24px] w-auto lg:h-[34px]"
          height="18.55"
          fill="white"
          viewBox="0 0 20.866 18.55"
        >
          <path
            id="cart_icon"
            d="M370.632,63.272c-.931,0-1.81,0-2.69,0-.156,0-.349.034-.46-.043-.17-.117-.4-.328-.387-.477a.633.633,0,0,1,.457-.406c.593-.051,1.194-.021,1.792-.022.5,0,1.007.014,1.51,0a.581.581,0,0,1,.689.585c.138,1.121.3,2.239.457,3.416h15.107c.867,0,1.011.206.711,1.02q-1.7,4.619-3.407,9.237a3.537,3.537,0,0,0-.143.589.484.484,0,0,0,.324.582,1.616,1.616,0,0,1,.838,1.869,1.674,1.674,0,0,1-3.231.023,1.686,1.686,0,0,1,.806-1.9,2.179,2.179,0,0,0,.32-.29,1.643,1.643,0,0,0-.45-.135q-4.531-.012-9.064,0a1.6,1.6,0,0,0-.412.116,1.621,1.621,0,0,0,.3.293,1.65,1.65,0,0,1,.842,1.871,1.625,1.625,0,0,1-1.607,1.269,1.65,1.65,0,0,1-1.616-1.205,1.625,1.625,0,0,1,.833-1.915.473.473,0,0,0,.3-.546c-.147-1.217-.282-2.434-.442-3.649q-.629-4.791-1.275-9.579C370.709,63.754,370.672,63.538,370.632,63.272ZM386.824,67.3H372.137l.1.8h9.988c.141,0,.316-.048.417.017.164.106.383.282.389.435s-.2.355-.355.462c-.111.075-.3.033-.461.033h-9.861c.309,2.3.627,4.522.892,6.752.058.481.229.571.669.568q4.508-.027,9.015,0a.675.675,0,0,0,.762-.549c.689-1.937,1.418-3.861,2.13-5.79C386.156,69.136,386.481,68.24,386.824,67.3ZM373.662,79.213a.738.738,0,0,0-1.475-.031.738.738,0,0,0,1.475.031Zm10.877-.025a.725.725,0,1,0-1.45.041.7.7,0,0,0,.744.685A.709.709,0,0,0,384.539,79.188Z"
            transform="translate(-367.094 -62.314)"
          ></path>
        </svg>
        <div className="absolute right-0 top-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--cr-danger-light)] text-xs lg:-translate-x-1/2">
          1
        </div>
      </button>
      <button className="  relative h-full grow bg-[color:var(--cr-primary)] text-[length:var(--text-base)] font-bold leading-none tracking-[1.28px] text-white hover:bg-[color:var(--cr-primary-dark)] lg:text-[length:var(--heading-sm)] lg:tracking-[1.92px]">
        BUY NOW
      </button>
    </div>
  );
}

export default BuyNowBtn;
