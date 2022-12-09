/* eslint-disable jsx-a11y/alt-text */
import Film1 from "./../../../../assets/images/omoss/Film1.png"
import Film2 from "./../../../../assets/images/omoss/Film2.png"

import mail from "./../../../../assets/images/omoss/mail.png"
import linkedin from "./../../../../assets/images/omoss/linkedin.png"




function FilmProducts() {
    return (
        <section className="w-full flex justify-center flex-col items-center py-[6rem]">
            <div className="w-[85%] flex gap-12">
                <div className="w-full grid grid-cols-3 gap-6">
                    <div className="relative">
                        <img className="w-full" src={Film1} />
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-[24px] text-[#0B0B0B] font-bold font-acumin">TRULS MÖRFELT</p>
                            <div className="flex flex-row gap-2">
                                <img className="w-[20px] h-[18px]" src={mail} />
                                <img className="w-[20px] h-[18px]" src={linkedin} />
                            </div>
                        </div>
                        <p className="text-[15px] text-[#747474] font-bold font-acumin">Strategist & Project Manager</p>
                        <p className="text-[15px] text-[#0B0B0B] font-light font-acumin">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commo
                            do consequat.</p>
                    </div>

                    <div className="relative">
                        <img className="w-full" src={Film2} />
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-[24px] text-[#0B0B0B] font-bold font-acumin">DAVID LUDEWIG</p>
                            <div className="flex flex-row gap-2">
                                <img className="w-[20px] h-[18px]" src={mail} />
                                <img className="w-[20px] h-[18px]" src={linkedin} />
                            </div>
                        </div>
                        <p className="text-[15px] text-[#747474] font-bold font-acumin">Director of Photography</p>
                        <p className="text-[15px] text-[#0B0B0B] font-light font-acumin">Med ett livslångt intresse för filmproduktion har David en
                            stor passion för det kreativa skapandet. Hans färdigheter
                            sträcker sig från kameratekniskt utförande, redigering
                            och animering till mer strategiskt tänkande för större
                            produktioner..</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FilmProducts;
