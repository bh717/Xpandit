/* eslint-disable jsx-a11y/alt-text */
import Film1 from "./../../../../assets/images/eventfilm/Film1.png";
import Film2 from "./../../../../assets/images/eventfilm/Film2.png";
import Film3 from "./../../../../assets/images/eventfilm/Film3.png";
import Film4 from "./../../../../assets/images/eventfilm/Film4.png";
import Film5 from "./../../../../assets/images/eventfilm/Film5.png";
import Film6 from "./../../../../assets/images/eventfilm/Film6.png";

import Film1Logo from "./../../../../assets/images/eventfilm/Film1-logo.png";
import Film2Logo from "./../../../../assets/images/eventfilm/Film2-logo.png";
import Film3Logo from "./../../../../assets/images/eventfilm/Film3-logo.png";
import Film4Logo from "./../../../../assets/images/eventfilm/Film4-logo.png";
import Film5Logo from "./../../../../assets/images/eventfilm/Film5-logo.png";
import Film6Logo from "./../../../../assets/images/eventfilm/Film6-logo.png";

import { useState } from "react";


import VideoQuickView from "../../../../components/QuickView/VideoQuickView";


function FilmProducts() {

    const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [flag3, setflag3] = useState(false);
  const [flag4, setflag4] = useState(false);
  const [flag5, setflag5] = useState(false);
  const [flag6, setflag6] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full h-screen flex justify-center flex-col items-center ">
      <div className="w-full h-screen flex flex-col">
        <div className="flex w-full h-[50%] grid grid-cols-3">
          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${Film1})` }}
            onMouseOver={() => {
              setflag1(true);
            }}
            onMouseOut={() => {
              setflag1(false);
            }}
          >
            {flag1 === false ? (
              <img className="absolute inset-0 m-auto" src={Film1Logo} />
            ) : (
              <button
                className="absolute inset-0 m-auto bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${Film2})` }}
            onMouseOver={() => {
              setflag2(true);
            }}
            onMouseOut={() => {
              setflag2(false);
            }}
          >
            {flag2 === false ? (
              <img className="absolute inset-0 m-auto" src={Film2Logo} />
            ) : (
              <button
                className="absolute inset-0 m-auto bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${Film3})` }}
            onMouseOver={() => {
              setflag3(true);
            }}
            onMouseOut={() => {
              setflag3(false);
            }}
          >
            {flag3 === false ? (
              <img className="absolute inset-0 m-auto" src={Film3Logo} />
            ) : (
              <button
                className="absolute inset-0 m-auto bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            )}
          </div>
        </div>
        <div className="w-full h-[50%] grid grid-cols-3">
          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${Film4})` }}
            onMouseOver={() => {
              setflag4(true);
            }}
            onMouseOut={() => {
              setflag4(false);
            }}
          >
            {flag4 === false ? (
              <img className="absolute inset-0 m-auto" src={Film4Logo} />
            ) : (
              <button
                className="absolute inset-0 m-auto bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${Film5})` }}
            onMouseOver={() => {
              setflag5(true);
            }}
            onMouseOut={() => {
              setflag5(false);
            }}
          >
            {flag5 === false ? (
              <img className="absolute inset-0 m-auto" src={Film5Logo} />
            ) : (
              <button
                className="absolute inset-0 m-auto bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${Film6})` }}
            onMouseOver={() => {
              setflag6(true);
            }}
            onMouseOut={() => {
              setflag6(false);
            }}
          >
            {flag6 === false ? (
              <img className="absolute inset-0 m-auto" src={Film6Logo} />
            ) : (
              <button
                className="absolute inset-0 m-auto bg-white rounded-[32px] w-[188px] h-[46px] text-[20px] text-[#222222] font-arcum font-normal"
                onClick={() => setOpen(true)}
              >
                Snacka content
              </button>
            )}
          </div>
        </div>
      </div>
      <VideoQuickView open={open} setOpen={setOpen} flag={"flag1"} />
    </section>
  );
}

export default FilmProducts;
