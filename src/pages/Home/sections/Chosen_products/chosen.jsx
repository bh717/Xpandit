/* eslint-disable jsx-a11y/alt-text */
import kunder from "./../../../../assets/images/dashboard/Kunder.png";
import video1 from "../../../../assets/TopPage/1.mp4";
import video2 from "../../../../assets/TopPage/2.mp4";
import video3 from "../../../../assets/TopPage/3.mp4";
import { useRef } from "react";

function ChosenProducts() {
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  return (
    <section className="w-full flex items-center justify-center flex-col">
      <div className="w-[85%]">
        <div className="w-full grid flex-row grid-cols-3">
          <div className="w-full flex flex-col relative">
            <video
              loop
              muted
              ref={videoRef}
              className="w-full max-h-full"
              type="video/mp4"
              onMouseOver={() => {
                videoRef.current?.play();
              }}
              onMouseOut={() => {
                videoRef.current?.pause();
              }}
            >
              <source src={video1} type="video/mp4" />
            </video>
            <p className="font-bold text-[50px] text-white absolute left-[3%] top-[88%]">
              REKLAMFILM
            </p>
          </div>
          <div className="w-full flex flex-col relative">
            <video
              loop
              muted
              ref={videoRef1}
              className="w-full max-h-full"
              type="video/mp4"
              onMouseOver={() => {
                videoRef1.current?.play();
              }}
              onMouseOut={() => {
                videoRef1.current?.pause();
              }}
            >
              <source src={video2} type="video/mp4" />
            </video>
            <p className="font-bold text-[50px] text-white absolute left-[3%] top-[88%]">
              EVENTFILM
            </p>
          </div>
          <div className="w-full flex flex-col relative">
            <video
              loop
              muted
              ref={videoRef2}
              className="w-full max-h-full"
              type="video/mp4"
              onMouseOver={() => {
                videoRef2.current?.play();
              }}
              onMouseOut={() => {
                videoRef2.current?.pause();
              }}
            >
              <source src={video3} type="video/mp4" />
            </video>
            <p className="font-bold text-[50px] text-white absolute left-[3%] top-[88%]">
              CORPORATE
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center py-[4rem]">
          <div
            className="w-[60%] h-[131px] bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kunder})`,
            }}
          />
          <div
            className="w-[60%] h-[131px] bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kunder})`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default ChosenProducts;
