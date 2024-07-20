import React from "react";
import Skylab from "../Images/skylab-uzun-logo.png";
import Ytu from "../Images/yildiz-logo.png";
import Gecekodu from "../Images/gecekodu-logo.png";

const Header = () => {
  return (
    <header className="relative w-full h-[230px] bg-[#ffffff20] backdrop-blur-md flex flex-col items-center justify-center">
      <div className="flex items-center justify-between m-auto w-full px-8">
        <img src={Skylab} alt="SKY LAB Logo" className="h-[4rem] " />
        <h1 className="text-8xl font-[900] text-white">GECEKODU</h1>
        <img src={Ytu} alt="YTU Logo" className="h-[4rem]" />
      </div>
      <div className="absolute bottom-[-40px]">
        <img src={Gecekodu} alt="GECEKODU Logo" className="h-[6rem]" />
      </div>
    </header>
  );
};

export default Header;
