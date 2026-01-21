"use client"
import { useState } from "react";
import CustomIcon from "../svgs/patterns/CurveLine";
import { Button } from "../ui/button";
import Image from "next/image";
import CalComModal from "../common/calcom-modal";

const CTA = () => {
  const [open, setOpen]=useState(false)
  return (
    <section className="mt-20 relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 px-6 py-10 flex flex-col items-center justify-center text-center">

      <div className="z-10">
        <CustomIcon className="absolute top-0 left-0 text-neutral-800 opacity-50" size={500} />
        <CustomIcon className="absolute -top-20 -left-60 text-neutral-800 opacity-50" size={500} />
        <CustomIcon className="absolute -bottom-20 left-40 text-neutral-800 opacity-50" size={500} />
        <CustomIcon className="absolute -bottom-20 left-0 text-neutral-800 opacity-50" size={500} />
        <CustomIcon className="absolute -top-20 -right-30 text-neutral-800 opacity-50" size={500} />
        <CustomIcon className="absolute -bottom-20 -right-20 text-neutral-800 opacity-50" size={500} />
      </div>

      <p className="text-neutral-400 text-lg font-semibold relative z-10">
        Hey, you have scrolled this far, lets talk!
      </p>

      <Button
        onClick={()=>setOpen(true)}
        variant="outline"
        className="mt-4 group relative z-10 flex items-center  bg-neutral-800 "
      >
        <Image
          src="/assets/logo.png"
          alt="About"
          width={40}
          height={40}
          className="h-5 w-5"
        />

        {/* <span
          className="
            inline-flex items-center justify-center
            overflow-hidden
            max-w-0 opacity-0 hidden
            group-hover:max-w-[70px] group-hover:opacity-100
            transition-all duration-500 ease-in-out
            text-xs px-2 py-0.5 rounded bg-neutral-700/80 whitespace-nowrap
          "
        >
          & You
        </span> */}
<span className="flex items-center  gap-1 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
  +
  <span className="text-xs  px-2 py-[1px] bg-neutral-700 whitespace-nowrap rounded-md">
    You
  </span>
</span>
        <span>Book a call</span>
      </Button>
      <CalComModal open={open} onOpenChange={setOpen}/>
    </section>
  );
};

export default CTA;