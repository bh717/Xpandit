/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroImage from "./../../../../assets/images/dashboard/background.png";
import defa from "./../../../../assets/icons/hero-logo/Defa.png";
import lamborghini from "./../../../../assets/icons/hero-logo/Lamborghini.png";
import mitsubishi from "./../../../../assets/icons/hero-logo/Mitsubishi.png";
import netflix from "./../../../../assets/icons/hero-logo/Netflix.png";
import ReactPlayer from "react-player";
import QuickView from "../../../../components/QuickView/QuickView";
import background_video from "../../../../assets/background-video/background.mp4";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="flex justify-center item-center h-[90vh] w-full bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="flex items-center justify-center relative w-full h-full">
        <div className="absolute top-0 w-full h-full z-[-1]">
          <video autoPlay loop muted src={background_video} type="video/mp4"/>
        </div>
        <div className="flex w-full h-full justify-center items-center z-10">
          <div className="mb-16 ml-12 text-center">
            <div className="mb-4">
              <h1 className="uppercase font-acumin font-bold text-6xl text-white leading-[4.8rem] not-italic">
                FILMPRODUKTION
              </h1>
            </div>
            <div className="flex justify-between gap-8 mb-8">
              <p className="font-[275] font-acumin text-[25px] text-white not-italic">
                {" "}
                En digital mediabyrå med fokus på engagerande filmer <br />
                för spridning & annonsering på sociala medier
              </p>
            </div>
            <div>
              <button
                className="bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            </div>
          </div>
        </div>
        <div className="justify-between items-center w-[75%] rounded-[16px] absolute bottom-[5%] h-[100px] bg-[#1E1E1E] bg-opacity-50 flex p-6 pl-12 pr-12">
          <img src={mitsubishi} className="w-[140px] h-[40px]" />
          <img src={netflix} className="w-[100px] h-[30px]" />
          <img src={defa} className="w-[100px] h-[40px]" />
          <img src={lamborghini} className="w-[140px] h-[40px]" />
          <img src={defa} className="w-[100px] h-[40px]" />
          <img src={lamborghini} className="w-[140px] h-[40px]" />
        </div>
        <QuickView open={open} setOpen={setOpen} />
      </div>
    </section>
  );
}

export default Hero;
