import { useState } from "react";
import picture1 from "./../../assets/images/dashboard/picture1.png";
import picture2 from "./../../assets/images/dashboard/picture2.png";
import picture3 from "./../../assets/images/dashboard/picture3.png";
import VideoQuickView from "../QuickView/VideoQuickView";

function SubProductSlider() {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState('flag1');

  return (
    <div className="grid grid-cols-3 w-full gap-12 py-[4rem] mt-[50px]">
      <div className="h-[350px] relative">
        <div
          className="w-[104px] h-[104px] absolute top-[-30px] left-[-30px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${picture1})`,
          }}
        />
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left pl-[100px]">
            <p className="font-semibold text-white text-[19px]">
              Alexander Sjölin
            </p>
            <p className="text-[12px] text-[#DDDDDD] font-normal">
              CMO, Picsmart
            </p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              ”Vi tog kontakt med Xpand It Media för att fånga dels våra fordon
              och personal i naturliga miljöer och för att kommunicera våra
              unika USPar. Där tycker vi att Xpand It Media gjort ett grymt jobb
              och vi är otroligt nöjda med det materialet som de tagit fram. Vi
              rekommenderar absolut Xpand It Media”
            </p>
            <button className="bg-white rounded-[40px] w-[135px] h-[35px]" onClick={() => {setOpen(true); setFlag('flag1');}}>
              Till caset
            </button>
          </div>
        </div>
      </div>
      <div className="h-[350px] relative">
        <div
          className="w-[104px] h-[104px] absolute top-[-30px] left-[-30px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${picture2})`,
          }}
        />
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left pl-[100px]">
            <p className="font-semibold text-white text-[19px]">
              Martin Jonsson
            </p>
            <p className="text-[12px] text-[#DDDDDD] font-normal">CEO, DEFA</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              ”Vi jobbar idag väldigt tätt med Xpand It Media, ett ytterst
              fruktbart och intressant samarbete. När det kommer till den här
              typen av samarbete så söker jag personligen alltid efter en
              exceptionell talang. Vi vill ha en partner som kan göra oss unika
              och det får vi verkligen med Xpand It Media”
            </p>
            <button className="bg-white rounded-[40px] w-[135px] h-[35px]" onClick={() => {setOpen(true); setFlag('flag2');}}>
              Till caset
            </button>
          </div>
        </div>
      </div>
      <div className="h-[350px] relative">
        <div
          className="w-[104px] h-[104px] absolute top-[-30px] left-[-30px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${picture3})`,
          }}
        />
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left pl-[100px]">
            <p className="font-semibold text-white text-[19px]">
              Amanda Liffner
            </p>
            <p className="text-[12px] text-[#DDDDDD] font-normal">VD, Jackie</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              ”Vi är supernöjda med Xpand It Media. Vi känner verkligen att de
              har matchat oss i denna process (...) De har verkligen kommit med
              mycket bra idéer och input samt svarat och återkopplat väldigt
              snabbt (...) Jag kan vamt rekommendera dem till andra.”
            </p>
            <button className="bg-white rounded-[40px] w-[135px] h-[35px]" onClick={() => {setOpen(true); setFlag('flag3');}}>
              Till caset
            </button>
          </div>
        </div>
      <VideoQuickView open={open} setOpen={setOpen} flag={flag}/>

      </div>
    </div>
  );
}

export default SubProductSlider;
