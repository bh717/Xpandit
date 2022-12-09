/* eslint-disable jsx-a11y/alt-text */
import Film1 from "./../../../../assets/images/eventfilm/Film1.png"
import Film2 from "./../../../../assets/images/eventfilm/Film2.png"
import Film3 from "./../../../../assets/images/eventfilm/Film3.png"
import Film4 from "./../../../../assets/images/eventfilm/Film4.png"
import Film5 from "./../../../../assets/images/eventfilm/Film5.png"
import Film6 from "./../../../../assets/images/eventfilm/Film6.png"

import Film1Logo from "./../../../../assets/images/eventfilm/Film1-logo.png"
import Film2Logo from "./../../../../assets/images/eventfilm/Film2-logo.png"
import Film3Logo from "./../../../../assets/images/eventfilm/Film3-logo.png"
import Film4Logo from "./../../../../assets/images/eventfilm/Film4-logo.png"
import Film5Logo from "./../../../../assets/images/eventfilm/Film5-logo.png"
import Film6Logo from "./../../../../assets/images/eventfilm/Film6-logo.png"




function FilmProducts() {
    return (
        <section className="w-full flex justify-center flex-col items-center py-[6rem]">
            <div className="w-[85%] flex gap-12">
                <div className="grid grid-rows-2">
                    <div className="grid grid-cols-3">
                        <div className="relative">
                            <img src={Film1} />
                            <img className = "absolute inset-0 m-auto" src={Film1Logo}/>
                        </div>

                        <div className="relative">
                            <img src={Film2} />
                            <img className = "absolute inset-0 m-auto" src={Film2Logo}/>
                        </div>

                        <div className="relative">
                            <img src={Film3} />
                            <img className = "absolute inset-0 m-auto" src={Film3Logo}/>
                        </div>

                    </div>
                    <div className="grid grid-cols-3">
                        <div className="relative">
                            <img src={Film4} />
                            <img className = "absolute inset-0 m-auto" src={Film4Logo}/>
                        </div>

                        <div className="relative">
                            <img src={Film5} />
                            <img className = "absolute inset-0 m-auto" src={Film5Logo}/>
                        </div>

                        <div className="relative">
                            <img src={Film6} />
                            <img className = "absolute inset-0 m-auto" src={Film6Logo}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FilmProducts;
