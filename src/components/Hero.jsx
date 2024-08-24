import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const Hero = () => {
  return (
    <section>
      <div className="flex flex-col py-20 items-start justify-start px-16">
        <div>
          <h1 className="font-bold text-9xl opacity-50">PRODUCT</h1>
        </div>
        <div>
          <h1 className="font-bold text-9xl ml-40 opacity-50">DESIGNER</h1>
        </div>
        <div className="flex items-center w-[780px] justify-end">
          <h6>BASED IN TORONTO</h6>
        </div>
        <div className="w-full  flex flex-col items-end justify-end">
          <div>
            <h1 className="uppercase">available for freelance</h1>
            <h1 className="uppercase">work from may 23'</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-10">
        <div className='flex items-center gap-x-2 justify-center'>
          <h1>CURRENTLY WORKING AT YML</h1>
          <BsArrowUpRight/>
        </div>
        <div className='flex items-center gap-x-2 justify-center'>
          <h1>PROTOPIE AMBASSADOR</h1>
          <BsArrowUpRight/>
        </div>
        <div className='flex items-center gap-x-2 justify-center'>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-500">
          <BsArrowUpRight className="-rotate-45 "/>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-500">
          <BsArrowUpRight className="-rotate-45 "/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
