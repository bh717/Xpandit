/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroImage from "./../../../../assets/images/eventfilm/background.png";

import facebook from "./../../../../assets/images/social/facebook.png";
import instagram from "./../../../../assets/images/social/instagram.png";
import linkedin from "./../../../../assets/images/social/linkedin.png";

function Hero() {
  return (
    <section
      className="flex h-[90vh] w-full bg-cover bg-center bg-no-repeat items-center justify-center"
      id="hero"
    >
      <div
        className="w-full h-full w-full bg-cover bg-center bg-no-repeat relative justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${HeroImage})`,
        }}
      >
        <div className="flex w-full h-full justify-center items-center">
          <div className="mb-16 ml-12 text-center">
            <h1 className="uppercase font-bold font-premier text-[120px] text-white tracking-wider">
              EVENTFILM
            </h1>
          </div>
        </div>
        <div className="absolute w-full bottom-0 flex flex-row justify-between px-6 py-10">
          <p className="text-[15px] font-medium text-white">
            info@xpanditmedia.se
          </p>
          <div className="flex gap-4">
            <img className="w-[10px] h-[12px]" src={facebook} />
            <img className="w-[10px] h-[12px]" src={linkedin} />
            <img className="w-[10px] h-[12px]" src={instagram} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
