import React from 'react'
import MemberSection from "../Components/MemberSection";
import Members from "../Services/memberService";

const MemberPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <MemberSection></MemberSection>
    </div>
  );
};

export default MemberPage