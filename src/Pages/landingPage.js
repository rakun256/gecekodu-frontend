import React from "react";
import Timeline from "../Components/Timeline";
import ResponsiveCarousel from "../Components/Carousel";
import ArgeList from "../Components/ArgeList";
import YoutubeLink from "../Components/YoutubeLink";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:gap-20 md:gap-16 sm:gap-12 gap-10 w-screen min-h-screen lg:my-16 md:my-10 sm:my-6 mb-5 max-sm:px-7">
      <ResponsiveCarousel />
      <YoutubeLink />
      <Timeline />
      <ArgeList />
    </div>
  );
};

export default LandingPage;
