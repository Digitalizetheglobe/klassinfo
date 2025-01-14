import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import videoHero from "../../assets/video/hero.mp4";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="relative pt-[70px] pb-[70px]">
      <video
  src={videoHero}
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-black bg-opacity-50 hover:bg-opacity-30 transition-all duration-500 ease-in-out"
/>


      <div className="flex flex-col lg:flex-row justify-end lg:mr-[70px]">
        <div className="w-full lg:w-auto mr-20">
          <div className="w-full sm:w-[450px] lg:max-w-none justify-center mt-[70px] lg:mt-[120px] mx-auto lg:mx-0 mb-[20px] lg:mb-[120px] text-center lg:text-left px-4">
            <h4 className="font-[Blacker] text-white mb-4 text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] leading-[150%]">
              Making an Impact
            </h4>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white mt-4 font-normal tracking-[0.1em] leading-[150%]">
              At KLAS Infotech, our projects are more than initiatives; they are milestones on the path to digital transformation.
            </p>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mx-auto"
          >
            <img
              src={testimonials[active].src}
              draggable={false}
              className="h-[400px] lg:h-[450px] w-[250px] lg:w-[350px] object-cover object-center"
            />
          </motion.div>

          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <img
                src={testimonials[active].src1}
                draggable={false}
                className="h-[200px] lg:h-[350px] w-[150px] lg:w-[280px] object-cover object-center"
              />
            </motion.div>
            <div className="flex gap-4 pt-6 lg:pt-12">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>

              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
