/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroImage from "./../../../../assets/images/dashboard/background.png"

function Hero() {
    return (
        <section className="h-screen w-full bg-cover bg-center bg-no-repeat" id="hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${HeroImage})` }}>
            <div className="flex w-full h-full justify-center items-center">
                <div className="mb-16 ml-12 text-center">
                    <div className="">
                        <h1 className="uppercase font-light font-premier text-6xl text-white tracking-wider">FILMPRODUKTION</h1>
                    </div>
                    <div className="flex justify-between gap-8 mb-4">
                        {/* <a href="#" className="hover-link text-xl capitalize font-rival text-white">FILMPRODUKTION</a>
                        <a href="#" className="hover-link text-xl capitalize font-rival text-white">Borreti</a>
                        <a href="#" className="hover-link text-xl capitalize font-rival text-white">Lodge Cast Iron</a> */}
                        <p className="font-normal font-acumin text-[25px] text-white"> En digital mediabyrå med fokus på engagerande filmer <br />för spridning & annonsering på sociala medier</p>
                    </div>
                    <div>
                        <button className="bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal">Snacka content</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;