import { useState } from "react";
// import QuickView from "../../../../components/QuickView/QuickView";
import QuickView from "../QuickView/QuickView";

function Blog() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-[85%] flex flex-col">
        <div className="text-center self-left">
          <h3 className="text-8xl mb-10 text-left font-bold text-[#0B0B0B]">
            Har du en brilljant
            <br />
            idé (eller inte)?
          </h3>
          <div className="flex">
            <button
              className="rounded-[32px] bg-[#1E1E1E] w-[188px] h-[46px] text-[white] font-light text-[20px]"
              onClick={() => setOpen(true)}
            >
              Starta projekt
            </button>
          </div>
        </div>
      </div>
      <QuickView open={open} setOpen={setOpen} />
    </section>
  );
}

export default Blog;
