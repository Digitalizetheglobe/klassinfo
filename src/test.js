// import Image from "react/image";
import React from "react";
import { Timeline } from "./components/ui/3d";

export function TimelineDemo() {
  const data = [
   
    {
      title: "Founded Silverline Technologies",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <b>Mr. Subramanian</b> co-founded Silverline Technologies, laying the groundwork for India’s IT services expansion.
          </p>
          
        </div>
      ),
    },
    {
      title: "Established Industry Leadership",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Silverline ranked as 7th Largest I.T. firm in India in 2000 by NASSCOM, paralleling global icons such as Infosys, HCL, and Wipro.</p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Global Recognition",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Mr. Subramanian brings his legacy to KLAS Infotech, setting the stage for future innovation.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    
    
  ];

  return (
    <>
    <div className="flex" style={{ backgroundColor: '#FFFFFF', padding: '30px' }}>
      {/* Leadership Section */}
      <div className="flex-1 w-full max-w-full lg:max-w-[450px] h-auto mr-[0px] ml-[70px]">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 text-[48px] font-[Jost]">
          Leadership and Legacy
        </h2>
        <p className="text-gray-600 leading-relaxed font-blacker">
          Building on a Legacy of Innovation and Industry Leadership – KLAS drives digital transformation with expertise that has evolved India’s tech landscape. We benefit from the strategic guidance of Mr. Kumar Subramanian, Founder and Former Vice Chairman of Silverline Technologies—one of India’s pioneering IT firms that shaped the nation’s tech industry alongside icons like Infosys, HCL, and Wipro.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="flex-1 w-full max-w-full lg:max-w-[450px] h-auto mt-[70px] mr-[70px] mb-[70px] ml-[10px]">
        
        <div className="w-auto">
          <Timeline data={data} />
          {/* <Timeline data={data} /> */}
        </div>
      </div>
    </div>
  </>
  );
}
