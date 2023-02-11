/* eslint-disable jsx-a11y/alt-text */
import Film1 from "./../../../../assets/images/reklam/Film1.png";
import Film2 from "./../../../../assets/images/reklam/Film2.png";
import Film3 from "./../../../../assets/images/reklam/Film3.png";
import Film4 from "./../../../../assets/images/reklam/Film4.png";
import Film5 from "./../../../../assets/images/reklam/Film5.png";
import Film6 from "./../../../../assets/images/reklam/Film6.png";

import Film1Logo from "./../../../../assets/images/reklam/Film1-logo.png";
import Film2Logo from "./../../../../assets/images/reklam/Film2-logo.png";
import Film3Logo from "./../../../../assets/images/reklam/Film3-logo.png";
import Film4Logo from "./../../../../assets/images/reklam/Film4-logo.png";
import Film5Logo from "./../../../../assets/images/reklam/Film5-logo.png";
import Film6Logo from "./../../../../assets/images/reklam/Film6-logo.png";

function FilmProducts() {
  return (
    <section className="w-full h-screen flex justify-center flex-col items-center ">
      <div className="w-full h-screen flex flex-col">
        <div className="flex w-full h-[50%] grid grid-cols-3">
          <div className="w-full h-[100%] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Film1})`}}>
            <img className="absolute inset-0 m-auto" src={Film1Logo} />
          </div>

          <div className="w-full h-[100%] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Film2})`}}>
            <img className="absolute inset-0 m-auto" src={Film2Logo} />
          </div>

          <div className="w-full h-[100%] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Film3})`}}>
            <img src={Film3} />
            <img className="absolute inset-0 m-auto" src={Film3Logo} />
          </div>
        </div>
        <div className="w-full h-[50%] grid grid-cols-3">
          <div className="w-full h-[100%] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Film4})`}}>
            <img className="absolute inset-0 m-auto" src={Film4Logo} />
          </div>

          <div className="w-full h-[100%] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Film5})`}}>
            <img className="absolute inset-0 m-auto " src={Film5Logo} />
          </div>

          <div className="w-full h-[100%] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Film6})`}}>
            <img className="absolute inset-0 m-auto" src={Film6Logo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmProducts;
