/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroImage from "./../../../../assets/images/omoss/background.png";

import facebook from "./../../../../assets/images/social/facebook.png";
import instagram from "./../../../../assets/images/social/instagram.png";
import linkedin from "./../../../../assets/images/social/linkedin.png";

function Hero() {
  return (
    <section
      className="flex justify-center items-center h-screen w-full bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div
        className="w-[85%] h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${HeroImage})`,
        }}
      >
        <div className="flex w-full h-full justify-center items-center">
          <div className="mb-16 ml-12 text-center">
            <div className="">
              <h1 className="uppercase font-bold font-premier text-[120px] text-white tracking-wider">
                OM OSS
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute w-full bottom-0 flex flex-row justify-between px-6">
          <p className="text-[15px] font-medium text-white">
            info@xpanditmedia.se
          </p>
          <div className="flex gap-4">
            <img className="w-[10px] h-[15px]" src={facebook} />
            <img className="w-[10px] h-[15px]" src={linkedin} />
            <img className="w-[10px] h-[15px]" src={instagram} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
