import img1 from '../src/assets/images/silvertoon.png';
import img2 from '../src/assets/images/avatr.png';
import img3 from '../src/assets/images/silvertoon.png';
import img4 from '../src/assets/images/avatr.png';
// import img5 from '../src/assets/images/silvertoon.png';
import { AnimatedTestimonials } from '../src/components/ui/card'; 


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    { src: img1, src1: img2 },
    { src: img2, src1: img3 },
    { src: img3, src1: img4 },
    { src: img4, src1: img1 },
    // { src: img5, src1: img1 },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
