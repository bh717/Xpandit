import { useState } from "react";
import picture1 from "./../../assets/images/dashboard/picture1.png";
import picture2 from "./../../assets/images/dashboard/picture2.png";
import picture3 from "./../../assets/images/dashboard/picture3.png";
import VideoQuickView from "../QuickView/VideoQuickView";

function RekSubProductSlider() {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState("flag1");

  return (
    <div className="grid grid-cols-3 w-full gap-12 py-[4rem] mt-[50px]">
      <div className="h-[350px] relative">
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">Briefmöte</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              Kunden går igenom sina behov - t.ex har de en produkt som de vill
              marknadsföra med hjälp av video. Vi tar anteckningar och bollar
              idéer med kunden.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[350px] relative">
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">Idédokument</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              Vi brainstormar idéer utifrån briefmötet och skapar ett dokument
              som skickas över till kunden. Dokumentet innehåller 2-3 idéer som
              vi tror på och som är genomförbara inom ramarna för budgeten. Vid
              godkännande av kunden går det vidare till nästa steg. Om kunden
              har feedback korrigeras idéerna därefter.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[350px] relative">
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">Storyboard</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-[#FFFFFF] font-extralight font-interpol text-left">
              Om kunden önskar/filmen kräver en storyboard skapas den i detta
              steg. En scen-för-scen beskrivning av filmen från början till slut
              i textform. Produktionsdatum och deadline inkluderas. Vi
              hargenerellt upp till 2 arbetsveckor leveranstid men om möjligt
              skickas filmen så fort den är redigerad, gärna första versionen
              inom 1 vecka. En shotlist som beskriver vilka klipp som används
              kan även skapas här. Dokumentet skickas till kund som kan komma
              med feedback.
            </p>
          </div>
        </div>
        <VideoQuickView open={open} setOpen={setOpen} flag={flag} />
      </div>
    </div>
  );
}

export default RekSubProductSlider;
