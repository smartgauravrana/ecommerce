import React from "react";

type Props = {};

function IntroSection({}: Props) {
  return (
    <section className="relative mb-14 lg:mb-32">
      <div className="kp-container">
        <div>
          <div className="mb-8 text-[length:var(--text-lg)] font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
            Why Kapiva?
          </div>
        </div>
        <p className="text-center text-[length:var(--text-sm)] font-medium leading-[1.25] tracking-[1.92px] text-[color:var(--cr-danger-light)] lg:text-[length:var(--heading-sm)] lg:font-normal  lg:tracking-[3.84px]">
          HEALTHY INSIDE, HAPPY OUTSIDE
        </p>
        <div className="flex flex-col ">
          <div className="kp-direction-flow even:text-right lg:mb-5">
            <h2 className="font-play_regular text-[length:var(--heading-2xl)] leading-[1.5] tracking-[-2.84px] text-[color:var(--cr-danger-light)] lg:text-[length:var(--heading-3xl)] lg:tracking-[-4.32px]">
              01
            </h2>
            <p className="mb-2.5 max-w-[70%] text-[length:var(--text-base)] font-bold leading-[1.1] text-[color:var(--cr-black)] lg:mb-4 lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:leading-[1.4]">
              FORMULATED BY EXPERTS
              <br />
              AT KAPIVA ACADEMY OF AYURVEDA
            </p>
            <p className="kp-text-direction max-w-[70%] text-[length:var(--text-sm)] font-normal leading-[1.25] text-[color:var(--cr-black)] lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:font-normal">
              Experts at Kapiva Academy of Ayurveda, PhD.’s, and Ayurvedacharya
              with over 50 years of cumulative experience build formulations
              with scientifically and clinically tested ingredients, to make our
              proprietary products that help you reach your health goals.
            </p>
          </div>
          <div className="kp-direction-flow even:text-right lg:mb-5">
            <h2 className="font-play_regular text-[length:var(--heading-2xl)] leading-[1.5] tracking-[-2.84px] text-[color:var(--cr-danger-light)] lg:text-[length:var(--heading-3xl)] lg:tracking-[-4.32px]">
              02
            </h2>
            <p className="mb-2.5 max-w-[70%] text-[length:var(--text-base)] font-bold leading-[1.1] text-[color:var(--cr-black)] lg:mb-4 lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:leading-[1.4]">
              THE BEST INGREDIENTS
              <br />
              PASSED THROUGH TOUGHEST PROCESS
            </p>
            <p className="kp-text-direction max-w-[70%] text-[length:var(--text-sm)] font-normal leading-[1.25] text-[color:var(--cr-black)] lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:font-normal">
              We go the extra mile to source the best ingredients like Shilajit
              from 18000 Ft. in the Himalayas, Aloe Vera from the Thar Desert,
              and Noni from Andamans. Our Hair Oils are made with herbs slowly
              heated with Oil for days or Body butter with Ghee 100 times
              washed. We manufacture our products in GMP-certified facilities,
              of which 8 are USFDA approved.
            </p>
          </div>
          <div className="kp-direction-flow even:text-right lg:mb-5">
            <h2 className="font-play_regular text-[length:var(--heading-2xl)] leading-[1.5] tracking-[-2.84px] text-[color:var(--cr-danger-light)] lg:text-[length:var(--heading-3xl)] lg:tracking-[-4.32px]">
              03
            </h2>
            <p className="mb-2.5 max-w-[70%] text-[length:var(--text-base)] font-bold leading-[1.1] text-[color:var(--cr-black)] lg:mb-4 lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:leading-[1.4]">
              HOLISTIC SOLUTIONS
              <br />
              FOR EVERY NEED
            </p>
            <p className="kp-text-direction max-w-[70%] text-[length:var(--text-sm)] font-normal leading-[1.25] text-[color:var(--cr-black)] lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:font-normal">
              Be it acne, hair fall, or diabetes, we don’t stop at just giving
              you products as that is just one element of solving your problem.
              We also give free health expert advice, personalized diet plans,
              and lifestyle recommendations including Yoga Asanas.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[13%] translate-y-1/2 md:top-0 lg:top-[5%] lg:translate-y-1/4">
        <picture>
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=100 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=150 2x "
            media="(max-width: 767px)"
          />
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=120 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=170 2x "
            media="(max-width: 1023px)"
          />
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=200 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=250 2x "
            media="(max-width: 1023px)"
          />
          <img
            loading="lazy"
            src="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?w=250"
            height="143"
            width="100"
            className="h-auto md:w-[120px] lg:w-[200px]"
            alt=""
          />
        </picture>
      </div>
      <div className="absolute left-0 top-[43%] translate-y-1/2 md:top-[24%] lg:top-[33%] lg:translate-y-1/4">
        <picture>
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=100 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=150 2x "
            media="(max-width: 767px)"
          />
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=120 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=170 2x "
            media="(max-width: 1023px)"
          />
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=200 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=250 2x "
            media="(max-width: 1023px)"
          />
          <img
            loading="lazy"
            src="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?w=250"
            height="143"
            width="100"
            className="h-auto md:w-[120px] lg:w-[200px]"
            alt=""
          />
        </picture>
      </div>
      <div className="absolute right-0 top-[77%] translate-y-1/2 md:top-[65%] lg:top-[76%] lg:translate-y-0">
        <picture>
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=100 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=150 2x "
            media="(max-width: 767px)"
          />
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=120 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=170 2x "
            media="(max-width: 1023px)"
          />
          <source
            srcSet="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=200 1x,https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=250 2x "
            media="(max-width: 1023px)"
          />
          <img
            loading="lazy"
            src="https://kapiva-cdn.gumlet.io/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?w=250"
            height="143"
            width="100"
            className="h-auto md:w-[120px] lg:w-[200px]"
            alt=""
          />
        </picture>
      </div>
    </section>
  );
}

export default IntroSection;
