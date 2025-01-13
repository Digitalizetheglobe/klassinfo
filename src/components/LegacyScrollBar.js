import React from 'react';
import blogimg2 from "../assets/images/th.jpg"
import { Timeline } from "./ui/3d";
export default function OneBlog() {
  const data = [
   
    {
      title: "Founded Silverline Technologies",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4 tracking-[0.1em] leading-[150%]">
          <b>Mr. Subramanian</b> co-founded Silverline Technologies, laying the groundwork for India’s IT services expansion.
          </p>
          
        </div>
      ),
    },
    {
      title: "Established Industry Leadership",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4 tracking-[0.1em] leading-[150%]">
          Silverline ranked as 7th Largest I.T. firm in India in 2000 by NASSCOM, paralleling global icons such as Infosys, HCL, and Wipro.</p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Global Recognition",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4 tracking-[0.1em] leading-[150%]">
          Silverline becomes India’s first company to be listed in the prestigious New York Stock Exchange (NYSE) with a <b>peak valuation</b> of <b>$1.2 Billion</b>. The company also operated in other major global exchanges such as the <b>BSE, NSE, Luxembourg Stock Exchange and NASDAQ</b>.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "KLAS Infotech’s New Era Begins",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4 tracking-[0.1em] leading-[150%]">
          Mr. Subramanian brings his legacy to KLAS Infotech, setting the stage for future innovation.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    
    
  ];
  return (
    <>
    <div className="relative isolate overflow-hidden bg-[#FFFFFF] px-6 pb-24 sm:pb-32 lg:overflow-visible lg:px-0">
  <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:items-start">
    
    {/* Sticky Left Section */}
    <div className="lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2">
<div className="flex-1 w-full max-w-full lg:max-w-[450px] h-auto mt-[70px] lg:ml-[70px] lg:mr-[70px] ml-0 mr-0">
      <h2 
  className="font-[Blacker] text-gray-800 mb-4" 
  style={{ fontSize: '3.25rem', lineHeight: '3.5rem' }}
>
  Leadership And Legacy
</h2>

        <p className="text-gray-600 leading-relaxed font-[Jost] text-justify" style={{ fontSize: '1.10rem', lineHeight: '2rem', }}>
          Building on a Legacy of Innovation and Industry Leadership – KLAS drives digital transformation with expertise that has evolved India’s tech landscape. We benefit from the strategic guidance of Mr. Kumar Subramanian, Founder and Former Vice Chairman of Silverline Technologies—one of India’s pioneering IT firms that shaped the nation’s tech industry alongside icons like Infosys, HCL, and Wipro.
        </p>
      </div>
    </div>

    {/* Scrolling Right Section */}
    <div className="lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:pr-8">
      <div className="flex-1 w-full max-w-full lg:max-w-[450px] h-auto mt-[70px] mr-[70px] mb-[70px] ml-[10px]">
              
              <div className="w-auto">
                <Timeline data={data} />
                {/* <Timeline data={data} /> */}
              </div>
            </div>
    </div>

  </div>
</div>

    
    </>
  );
}
