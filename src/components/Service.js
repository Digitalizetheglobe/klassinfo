import React, { useState } from 'react';
import './Service.css'
const Service = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setActiveBox((prevBox) => (prevBox === boxId ? null : boxId));
  };

  const boxes = [
    {
      id: "box1",
      title: "IT Strategy Development",
      content:
        "We work closely with you to develop a robust IT strategy that aligns with your business objectives.",
    },
    {
      id: "box2",
      title: "Enterprise Solutions",
      content:
        "Our enterprise solutions are designed to optimize your operational efficiency.",
    },
    {
      id: "box3",
      title: "Digital Transformation Consulting",
      content:
        "Transform your business processes with cutting-edge digital tools.",
    },
    {
      id: "box4",
      title: "Cloud Strategy and Implementation",
      content:
        "Achieve scalability and flexibility with our cloud services expertise.",
    },
  ];

  return (
    <>
      <section className="services-section">
      <div class="w-full sm:w-[450px] mt-[70px] sm:mt-[50px] px-4">
  <h4 class="inline-block bg-[#12424B] text-white text-sm uppercase rounded-full px-4 py-2 tracking-[0.1em] mb-4">
    Our Services
  </h4>

  <h2 class="font-[Blacker] text-gray-800 mb-4 text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] leading-[150%]">
    Solutions Tailored For Your Success
  </h2>

  <p class="text-base text-gray-700 tracking-[0.1em] leading-[150%]">
    Empowering your business with tailored technology solutions designed to drive growth, streamline operations, and foster innovation. Discover how our expertise in IT strategy, digital transformation, cloud services, and enterprise solutions can propel you forward.
  </p>
</div>



        <div className="right-content">
          <div className="box-container">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`box ${activeBox === box.id ? "active" : ""}`}
                id={box.id}
                onClick={() => handleBoxClick(box.id)}
              >
                <h3>{box.title}</h3>
                <p>{box.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
