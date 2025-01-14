import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import product from '../assets/images/klas.png'
import product1 from '../assets/images/klas.png';
import product4 from '../assets/images/klas.png';
import icon from '../assets/images/image-37.png';
import iconss from '../assets/images/clock.png';

const Product = () => {

  useEffect(()=>{
 AOS.init({
  duration: 1000,
 })
  },[])

  return (

    <div
  className=" pb-20 pt-20 space-y-16 font-sofia-pro -mt-8 bg-[#12424B]"
  style={{ backgroundSize: 'cover' }}
>
  {/* First Section: Image on the left, Content on the right */}
  <div className="text-center mb-8">
    <div className="flex justify-center items-center mb-4">
      <img src={iconss} alt="Target Icon" className="w-[100px] h-[100px]" />
    </div>
    <h2
      className="text-white text-[48px]"
      style={{ fontFamily: 'Blacker Sans Display Trial Light', color: '#FFFFFF' }}
    >
      The Heart of What <br /> Drives Us
    </h2>
  </div>

  <div className="flex flex-wrap justify-center gap-8">
  {/* Mission Card */}
  <div
    className="bg-white pl-8 pr-8 pb-8 pt-1 shadow-lg w-[360px] h-[460px]"
    style={{ borderRadius: '4px' }}
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="mb-4 "  style={{ marginTop: '15px' }}>
      <img src={icon} alt="Mission Icon" className="w-10 h-10" />
    </div>
    <h2
      className="text-3xl mb-4 tracking-[0.1em] leading-[150%]"
      style={{ fontFamily: 'Blacker Sans Display Trial Light', color: '#000000' }}
    >
      Our Mission
    </h2>
    <p className="text-gray-700 leading-[220%] tracking-[0.1em]">
      We are dedicated to identifying cutting-edge opportunities across the tech landscape, seeking startups with bold visions and disruptive potential. KLAS provides the essential support, resources, mentorship, and network to help these ventures thrive.
    </p>
  </div>

  {/* Expertise Card */}
  <div
    className="bg-white pl-8 pr-8 pb-8 pt-1  shadow-lg w-[360px] h-[460px]"
    style={{ borderRadius: '4px' }}
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div className="mb-4" style={{ marginTop: '15px' }}>
      <img src={icon} alt="Expertise Icon" className="w-10 h-10" />
    </div>
    <h2
      className="text-3xl mb-4 tracking-[0.1em] leading-[150%]"
      style={{ fontFamily: 'Blacker Sans Display Trial Light', color: '#000000' }}
    >
      Our Expertise
    </h2>
    <p className="text-gray-700 leading-[220%] tracking-[0.1em] ">
      With deep-rooted experience across both traditional and frontier technologies, KLAS brings a wealth of insights and proven strategies to every partnership. Our expertise equips us to make informed, high-impact decisions, fostering value creation and sustainable growth.
    </p>
  </div>

  {/* Approach Card */}
  <div
    className="bg-white pl-8 pr-8 pb-8 pt-1 shadow-lg w-[360px] h-[460px]"
    style={{ borderRadius: '4px' }}
    data-aos="fade-up"
    data-aos-duration="3000"
  >
    <div className="mb-4" style={{ marginTop: '15px' }}>
      <img src={icon} alt="Approach Icon" className="w-10 h-10" />
    </div>
    <h2
      className="text-3xl mb-4 tracking-[0.1em] leading-[150%]"
      style={{ fontFamily: 'Blacker Sans Display Trial Light', color: '#000000' }}
    >
      Our Approach
    </h2>
    <p className="text-gray-700 tracking-[0.1em] leading-[220%]">
      Our philosophy is hands-on and collaborative. We work closely with our partner companies, providing both strategic guidance and operational support to unlock their highest potential.
    </p>
  </div>
</div>
</div>

  );
};

export default Product;
