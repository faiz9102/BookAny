"use client";

import { chevronleft, chevronRight, GoldStar, greenCheck } from "@/consonants";
import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

function Reviews() {
  return (
    <section className="mt-[147px]">
      <div className="flex items-center flex-col gap-[56px] max-w-[1245px] w-full m-auto">
        <h2 className="h2-cl">Reviews</h2>
        <Slider />
      </div>
    </section>
  );
}

export default Reviews;

const Slider = () => {
  const [scope, animate] = useAnimate();
  const [currentSlide, setcurrentSlide] = useState(0);
  const [totalSlides, settotalSlides] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll("#slider-cont").length;
    let slides = items / 3;
    settotalSlides(slides);
  }, []);

  return (
    <div className="flex gap-[18px] items-center w-full">
      <Arrow
        left={true}
        scope={scope}
        animate={animate}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        setcurrentSlide={setcurrentSlide}
      />
      <Contents scope={scope} />
      <Arrow
        scope={scope}
        animate={animate}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        setcurrentSlide={setcurrentSlide}
      />
    </div>
  );
};

const Arrow = ({
  left,
  animate,
  scope,
  currentSlide,
  totalSlides,
  setcurrentSlide,
}) => {
  const AnimationFunc = () => {
    let st = currentSlide;
    if (currentSlide < totalSlides && !left) {
      st++;
      animate(
        scope.current,
        { x: st * -383 },
        { duration: 0.4, ease: "easeInOut" }
      );
      setcurrentSlide(st);
    } else if (left && currentSlide > 1) {
      st--;
      animate(
        scope.current,
        { x: st * -383 },
        { duration: 0.4, ease: "easeInOut" }
      );
      setcurrentSlide(st);
    }
  };

  return (
    <button
      onClick={AnimationFunc}
      className="w-[41px] flex-center h-[41px] -bg--light-gray rounded-[10px]"
    >
      {left ? chevronleft : chevronRight}
    </button>
  );
};

const Contents = ({ scope }) => {
  return (
    <div className="flex gap-[22px] max-w-[1127px] w-full overflow-hidden">
      <div ref={scope} className="flex gap-[22px] w-max ">
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <ReviewCard
          name={"Jamshed Ali"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
      </div>
    </div>
  );
};

const ReviewCard = ({ name, stars, message, verified, time }) => {
  return (
    <div
      id={`slider-cont`}
      className="flex flex-col items-start justify-between rounded-[15px] border bg-white -border--devide-line-clr px-[24px] pt-[24px] min-w-[361px] w-full h-[320px] pb-[18px]"
    >
      <div>
        <p className="med-22">{name}</p>
        <div className="flex gap-[4px] mt-[5px]">
          <span>{GoldStar}</span>
          <span>{GoldStar}</span>
          <span>{GoldStar}</span>
          <span>{GoldStar}</span>
          <span>{GoldStar}</span>
        </div>
        <p className="bk-16 !-text--primary-gray mt-[19px]">{message}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex-center gap-[5px]">
          {greenCheck}
          <span className="med-14">Verified Customer</span>
        </div>
        <span className="med-14">2 days ago</span>
      </div>
    </div>
  );
};
