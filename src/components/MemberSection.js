import React from "react";
import Member from "../Services/memberService";

const MemberSection = () => {


  return (
    <div className='max-w-4xl w-5/6 mx-auto bg-gray-100 rounded-3xl shadow-md p-12 flex flex-col md:flex-row md:items-center'>
      <div className='flex flex-col items-center mb-4 md:mb-0 md:mr-12'>
        <div className='bg-gray-300 rounded-full h-32 w-32 flex items-center justify-center mb-4 overflow-hidden'>
          <img className="h-full" src={Member.photoUrl} alt="Profile Picture"/>
        </div>
        <h2 className='text-2xl mx-auto font-bold'>{Member.name}</h2>
      </div>

      <div className='flex items-center justify-between md:w-full md:px-10'>
        <div className='text-center mr-8'>
          <span className='font-semibold block'>
            Ürettiğim Projelerin Sayısı
          </span>
          <span className='text-4xl'>{Member.projectCount}</span>
        </div>
        <div className='text-center'>
          <span className='font-semibold block'>
            Katıldığım Gecekodu Sayısı
          </span>
          <span className='text-4xl'>{Member.eventCount}</span>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
