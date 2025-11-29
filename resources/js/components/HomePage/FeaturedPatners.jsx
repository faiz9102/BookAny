import React from "react";
import NewsLetter from "./NewsLetter";

function FeaturedPatners() {
  return (
    <section className="w-full pt-[147px]">
      <div className="w-full  flex-center flex flex-col gap-[58px]">
        <h2 className="h2-cl">Featured Partners</h2>
        <div className="flex-center gap-[53px] w-full box-border">
          {Array.from({ length: 10 }, (_, ind) => ind).map((it) => (
            <img src={`/patners/${it}.png`} key={it} alt={`patner-${it + 1}`} />
          ))}
        </div>
      </div>
      <NewsLetter />
    </section>
  );
}

export default FeaturedPatners;
