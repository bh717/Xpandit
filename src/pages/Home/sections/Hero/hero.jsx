/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroImage from "./../../../../assets/images/dashboard/background.png";
import defa from "./../../../../assets/icons/hero-logo/Defa.png";
import lamborghini from "./../../../../assets/icons/hero-logo/Lamborghini.png";
import mitsubishi from "./../../../../assets/icons/hero-logo/Mitsubishi.png";
import netflix from "./../../../../assets/icons/hero-logo/Netflix.png";



function Hero() {
  return (
    <section
      className="relative flex justify-center h-screen w-full bg-cover bg-center bg-no-repeat"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${HeroImage})`,
      }}
    >
      <div className="flex w-full h-full justify-center items-center">
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
            <button className="bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal">
              Snacka content
            </button>
          </div>
        </div>
      </div>
      <div className="justify-between items-center w-[75%] rounded-[16px] absolute bottom-[5%] h-[100px] bg-[#1E1E1E] bg-opacity-50 flex p-6 pl-12 pr-12">

        <img src={mitsubishi} className="w-[140px] h-[40px]"/>
        <img src={netflix} className="w-[100px] h-[30px]"/>
        <img src={defa} className="w-[100px] h-[40px]"/>
        <img src={lamborghini} className="w-[140px] h-[40px]"/>
        <img src={defa} className="w-[100px] h-[40px]"/>
        <img src={lamborghini} className="w-[140px] h-[40px]"/>
        
      </div>
    </section>
  );
}

export default Hero;
