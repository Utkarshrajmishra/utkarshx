
"use client"
// unused imports removed
import CustomIcon from "../svgs/patterns/CurveLine";
import { Button } from "../ui/button";
import Image from "next/image";
import CalComModal from "../common/calcom-modal";
import { Plus } from "lucide-react";
import { useCalCom } from "@/context/calcom-context";

const CTA = () => {

  const { open, setOpen } = useCalCom()

  return (

    <section className="mt-20 relative  overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 px-6 py-10 flex flex-col items-center justify-center text-center">

      <div className="absolute inset-0 pointer-events-none transition-transform duration-700 group group-hover:scale-105">
        <CustomIcon className="absolute top-0 left-0 text-neutral-800 opacity-40" size={500} />
        <CustomIcon className="absolute -top-20 -left-60 text-neutral-800 opacity-40" size={500} />
        <CustomIcon className="absolute -bottom-20 left-40 text-neutral-800 opacity-40" size={500} />
        <CustomIcon className="absolute -bottom-20 left-0 text-neutral-800 opacity-40" size={500} />
        <CustomIcon className="absolute -top-20 -right-30 text-neutral-800 opacity-40" size={500} />
        <CustomIcon className="absolute -bottom-20 -right-20 text-neutral-800 opacity-40" size={500} />
      </div>

      <p className="relative z-10 text-xl font-semibold bg-gradient-to-r 
        from-neutral-500 via-white to-neutral-500 
        bg-[length:200%_100%] bg-clip-text text-transparent 
        
      ">
        Hey, you have scrolled this far, lets talk!
      </p>


      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="mt-4 cursor-pointer relative z-10 overflow-hidden group flex items-center gap-2 
        bg-neutral-800 border-neutral-700  
        transition-all duration-300 "
      >

        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

        <Image
          src="/assets/logo.png"
          alt="About"
          width={40}
          height={40}
          className="h-5 w-5"
        />

        <span className="flex gap-1 items-center">
          <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
          <span className="text-xs px-2 py-[1px] bg-neutral-700 whitespace-nowrap rounded-md 
          transition-all duration-300 ">
            You
          </span>
        </span>

        <span className="relative">Book a call</span>
      </Button>

      <CalComModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default CTA;
