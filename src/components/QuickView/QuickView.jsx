/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import number1 from "./../../assets/icons/quickview/number1.png";
import number2 from "./../../assets/icons/quickview/number2.png";
import number3 from "./../../assets/icons/quickview/number3.png";
import number4 from "./../../assets/icons/quickview/number4.png";
import number5 from "./../../assets/icons/quickview/number5.png";
import finish from "./../../assets/icons/quickview/finish.png";

function QuickView({ open, setOpen }) {
  const [step, setStep] = useState("step0");

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-end h-[100%] text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-[0.25]"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-[0.25]"
              >
                <Dialog.Panel className="relative overflow-hidden bg-white text-left shadow-xl transition-all w-[50%] h-[100%] ">
                  <div className="flexgap-4 w-full h-full">
                    <div className="relative">
                      <div className="absolute top-0 left-0 sm:block p-1">
                        <ExitButton setOpen={setOpen} isMobile={true} />
                      </div>
                    </div>
                    <div className="h-full">
                      {step === "step0" && (
                        <div className="flex p-14 items-center w-full h-full justify-center flex-col">
                          <div>
                            <div className="mb-6">
                              <p className="font-serif font-semibold text-[#222222] text-[60px] mb-8">
                                Vi brainstormar idéer
                              </p>
                              <p className="font-serif font-[328px] text-[#747474] text-[24px] mb-8">
                                I ett kort möte med vårt team går vi tillsammans
                                igenom:
                              </p>
                              <p className="font-serif font-[328px] text-[#747474] text-[24px] mb-8">
                                → en analys av er affärsidé och varumärke ur ett
                                con-tent-perspektiv.
                              </p>
                              <p className="font-serif font-[328px] text-[#747474] text-[24px] mb-8">
                                → Vilken typ av content som hjälper er att nå
                                era affärsmål
                              </p>
                              <p className="font-serif font-[328px] text-[#747474] text-[24px] mb-8">
                                → Framtagande av idéer
                              </p>
                            </div>
                            <div className="flex flex-row w-full px-4 justify-between gap-4">
                              <button className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]">
                                Bli kontaktad
                              </button>
                              <button
                                className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]"
                                onClick={() => {
                                  setStep((step) => "step1");
                                }}
                              >
                                Boka i kalender
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {step === "step1" && (
                        <div className="flex p-14 w-full h-full justify-center flex-col">
                          <div className="mb-2">
                            <img src={number1} />
                          </div>
                          <div className="flex flex-col ml-2 mb-6">
                            <p className="font-serif font-semibold text-[#222222] text-[60px] mb-10">
                              Vad är din e-post?*
                            </p>
                            <input
                              className="w-full pb-2 border-b-[1px] outline-none border-[#747474] overflow-auto h-full"
                              placeholder="david@expandit.se"
                            ></input>
                          </div>
                          <div className="flex flex-row w-full px-4 justify-between gap-4">
                            <button
                              className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]"
                              onClick={() => {
                                setStep((step) => "step2");
                              }}
                            >
                              Fortsätt
                            </button>
                          </div>
                        </div>
                      )}

                      {step === "step2" && (
                        <div className="flex p-14 w-full h-full justify-center flex-col">
                          <div className="mb-2">
                            <img src={number2} />
                          </div>
                          <div className="flex flex-col ml-2 mb-6">
                            <p className="font-serif font-semibold text-[#222222] text-[60px] mb-10">
                              Ditt fullständiga namn?
                            </p>
                            <input
                              className="w-full pb-2 border-b-[1px] outline-none border-[#747474] overflow-auto h-full"
                              placeholder="Skriv här..."
                            ></input>
                          </div>
                          <div className="flex flex-row w-full px-4 justify-between gap-4">
                            <button
                              className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]"
                              onClick={() => {
                                setStep((step) => "step3");
                              }}
                            >
                              Fortsätt
                            </button>
                          </div>
                        </div>
                      )}

                      {step === "step3" && (
                        <div className="flex p-14 w-full h-full justify-center flex-col">
                          <div className="mb-2">
                            <img src={number3} />
                          </div>
                          <div className="flex flex-col ml-2 mb-6">
                            <p className="font-serif font-semibold text-[#222222] text-[60px] mb-10">
                              Vad vill du skapa?
                            </p>
                            <input
                              className="w-full pb-2 border-b-[1px] outline-none border-[#747474] overflow-auto h-full"
                              placeholder="Välj kategori"
                            ></input>
                          </div>
                          <div className="flex flex-row w-full px-4 justify-between gap-4">
                            <button
                              className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]"
                              onClick={() => {
                                setStep((step) => "step4");
                              }}
                            >
                              Fortsätt
                            </button>
                          </div>
                        </div>
                      )}

                      {step === "step4" && (
                        <div className="flex p-14 w-full h-full justify-center flex-col">
                          <div className="mb-2">
                            <img src={number4} />
                          </div>
                          <div className="flex flex-col ml-2 mb-6">
                            <p className="font-serif font-semibold text-[#222222] text-[60px] mb-10">
                              Beskriv projektet
                            </p>
                            <input
                              className="w-full pb-2 border-b-[1px] outline-none border-[#747474] overflow-auto h-full"
                              placeholder="Skriv meddelande..."
                            ></input>
                          </div>
                          <div className="flex flex-row w-full px-4 justify-between gap-4">
                            <button
                              className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]"
                              onClick={() => {
                                setStep((step) => "step5");
                              }}
                            >
                              Fortsätt
                            </button>
                          </div>
                        </div>
                      )}

                      {step === "step5" && (
                        <div className="flex p-14 w-full h-full justify-center flex-col">
                          <div className="mb-2">
                            <img src={number5} />
                          </div>
                          <div className="flex flex-col ml-2 mb-6">
                            <p className="font-serif font-semibold text-[#222222] text-[60px] mb-10">
                              Budget på projektet?
                            </p>
                            <input
                              className="w-full pb-2 border-b-[1px] outline-none border-[#747474] overflow-auto h-full"
                              placeholder="25 000 Kr "
                            ></input>
                          </div>
                          <div className="flex flex-row w-full px-4 justify-between gap-4">
                            <button
                              className="flex flex-row items-center justify-center px-4 py-2 bg-[#1E1E1E] rounded-[32px] w-[238px] h-[56px] text-white text-[24px]"
                              onClick={() => {
                                setStep((step) => "finish");
                              }}
                            >
                              Skicka
                            </button>
                          </div>
                        </div>
                      )}

                      {step === "finish" && (
                        <div className="flex p-14 w-full h-full justify-center items-center flex-col">
                          <div className="mb-2">
                            <img src={finish} />
                          </div>
                          <div className="flex flex-col ml-2 mb-6">
                            <p className="font-serif font-semibold text-center text-[#222222] text-[60px] mb-10">
                              Tack för ditt meddelande!
                            </p>
                            <p className="font-serif font-[328px] text-[#747474] text-[24px] mb-2 text-center">
                              Vi kommer så snart vi kan besvara din förfrågan
                              och återkomma med en plan.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const ExitButton = ({ setOpen, isMobile }) => {
  console.log(isMobile);
  return (
    <button
      className={`p-2 rounded-full group ${
        isMobile ? "hover:bg-black/10" : "hover:bg-porche/50"
      } transition`}
      onClick={() => {
        setOpen(false);
      }}
    >
      <XMarkIcon className="w-6 h-6 text-black/60 group-hover:text-black transition" />
    </button>
  );
};

export default QuickView;
