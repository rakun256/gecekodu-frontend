import youtube from "../Images/YouTube.png";

export default function YoutubeLink() {
  return (
    <a
      href="https://youtube.com/channel/UCF_qBKpUnM3X_C3L-gLEO4A?si=AEh1sEGCCPqoWxj5"
      target="blank"
      className="block"
    >
      <div className="bg-[#FF0000] text-white font-bold rounded-3xl flex justify-center items-center gap-2 lg:px-5 lg:py-2 md:px-4 px-3 py-1 hover:scale-110 active:scale-100 hover:cursor-pointer transition-all text-lg lg:text-3xl md:text-2xl sm:text-xl">
        <img src={youtube} alt="youtube logo" className="w-1/4" />
        <span className="w-full">YTU SKYLAB</span>
      </div>
    </a>
  );
}
