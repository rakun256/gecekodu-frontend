import React from 'react'
import MemberSection from "../Components/MemberSection";
import Members from "../Services/memberService";
import MemberProjectsList from "../Components/MemberProjectsList";
import Countdown from "../Components/Countdown";
import Timeline from "../Services/timelineService";
import Projects from "../Services/projectsService";

const MemberPage = () => {
  const { nextEventDate } = Timeline;
  return (
    <div className="min-h-screen flex flex-col lg:gap-10 md:gap-8 sm:gap-6 gap-7 items-center justify-center py-24 px-10">
      <MemberSection></MemberSection>
      <Countdown targetDate={nextEventDate} />
      <MemberProjectsList projects={Projects} />
    </div>
  );
};

export default MemberPage