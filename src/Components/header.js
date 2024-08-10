import React from "react";
import Skylab from "../Images/skylab-uzun-logo.png";
import Ytu from "../Images/yildiz-logo.png";
import Gecekodu from "../Images/gecekodu-logo.png";
import YtuSM from "../Images/yildiz-logo-sm.png";
import SkylabSM from "../Images/skylab-uzun-logo-sm.png";

const Header = () => {
  return (
    <header className="relative w-full h-full lg:py-7 md:py-5 sm:py-3 max-sm:py-2 bg-[#ffffff20] backdrop-blur-md flex flex-col items-center justify-center px-8 max-sm:px-4">
      <div className="flex items-center justify-between w-full">
        <img
          src={Skylab}
          alt="SKY LAB Logo"
          className="lg:w-64 md:w-48 sm:w-40 max-sm:hidden h-auto"
        />
        <img
          src={SkylabSM}
          alt="SKY LAB Logo"
          className="sm:hidden max-sm:w-10 h-auto"
        />
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl font-[900] text-white">
          GECEKODU
        </h1>
        <img
          src={Ytu}
          alt="YTU Logo"
          className="lg:w-52 md:w-40 sm:w-32 max-sm:hidden h-auto"
        />
        <img
          src={YtuSM}
          alt="YTU Logo"
          className="sm:hidden max-sm:w-24 h-auto"
        />
      </div>
      <div className="absolute lg:bottom-[-55px] md:bottom-[-40px] sm:bottom-[-37px] max-sm:hidden border border-white rounded-full">
        <img
          src={Gecekodu}
          alt="GECEKODU Logo"
          className="lg:w-[4.5rem] md:w-14 sm:w-12 h-auto"
        />
      </div>
    </header>
  );
};

export default Header;
