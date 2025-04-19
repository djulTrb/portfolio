import React from "react";

import starsScribbles from "../assets/pictures/scribbles/stars.png";
import crownScribbles from "../assets/pictures/scribbles/crown.png";
import underline2Scribble from "../assets/pictures/scribbles/underline2.png";
import programmer from "../assets/pictures/scribbles/Minimalist_Desk_Worker1.png";

const HeroSection = ({ setTooltipOn }) => {
  return (
    <>
      <section className="lg:px-28 md:px-14 sm:px-10 xs:px-8 px-5  max-w-screen-2xl mx-auto xl:pt-4 pt-10 pb-12 overflow-x-hidden relative">
        <div className="flex flex-col ">
          <p
            className={`font-amatic font-bold md:text-3xl xl:text-4xl sm:max-md:text-3xl xxs:max-xs:text-[1.6rem] xxxs:text-[1.4rem] flex items-center cursor-default gap-1`}
          >
            Hey! I’m{" "}
            <span
              className="underline decoration-dotted underline-offset-[3px] cursor-pointer flex items-center gap-1.5"
              onMouseEnter={() => {
                setTooltipOn(true);
              }}
              onMouseLeave={() => {
                setTooltipOn(false);
              }}
            >
              Djillali Tareb
            </span>
          </p>
          <div className="lg:text-[4rem] xl:text-[5rem] md:text-[3.6rem] sm:text-[3.4rem] xs:text-[3.2rem] xxs:text-5xl xxxs:text-[2.5rem] lg:text-center xxxs:leading-[2.7rem] xxs:leading-[3.2rem] xs:leading-[3.5rem] sm:leading-[4rem] lg:leading-[4.3rem] xl:leading-[5.3rem] text-zinc-950 font-semibold font-urbanist my-0.5 mb-10 relative cursor-default">
            <p className="capitalize">
              I am a{" "}
              <span className="font-amatic font-bold text-6xl xxxs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl relative ">
                {" "}
                frontend developer
              </span>{" "}
              crafting{" "}
              <span className="relative inline-block">
                <img
                  src={underline2Scribble}
                  alt="underline handdrawn illustration"
                  className="block sm:w-full h-auto xxs:w-44 xxxs:w-36 absolute -bottom-1 left-0 filter_color_blue"
                />{" "}
                modern
              </span>
              ,{" "}
              <span className="relative inline-block">
                {" "}
                <img
                  src={starsScribbles}
                  alt="star illusration"
                  className="xs:h-[4.1rem] xl:h-20 xxs:h-14 xxxs:h-12 w-auto object-cover absolute -top-4 xl:-top-5 -right-[1.15rem]  filter_color_yellow"
                />{" "}
                clean
              </span>{" "}
              and{" "}
              <span className="relative inline-block">
                <img
                  src={crownScribbles}
                  alt="underline handdrawn illustration"
                  className="absolute -top-4 -right-8 w-auto xs:h-12 xl:h-14 xxs:h-11 xxxs:h-10 z-10 rotate-[30deg] filter_color_rose"
                />{" "}
                <span className="">User-friendly</span>
              </span>{" "}
              websites. Let’s Build Amazing Things{" "}
              <span className="inline-flex gap-2">
                <span>Together ! </span>
                <figure className="xxxs:w-16 sm:w-20 lg:w-24 xl:w-28 w-[6.5rem] relative xxxs:bottom-2 xxs:bottom-1 lg:bottom-2 xl:bottom-1">
                  {" "}
                  <img
                    src={programmer}
                    alt="small illustration of an office worker"
                    className="w-full h-auto object-cover block"
                  />
                </figure>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
