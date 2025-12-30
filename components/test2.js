"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function VShapeTransition() {
  const sectionRef = useRef(null);

  // 1. Scroll tracking for the specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress to avoid jitter
 // 1. Spring ko "Stiff" rakhein taaki jhatkay se shape change ho (Boathouse feel)
const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 300, // Fast reaction
  damping: 40,    // No bouncing
  restDelta: 0.0001
});
// 2. Seamless Transition Logic
// 1. INPUT RANGE (Boathouse Magic Timing)
// Humne 0 se 0.05 ka bohat chota gap rakha hai taaki switch itni tez ho ke pta na chale
// 1. Timing ko itna tight kar dein ke ankh follow na kar sakay


const clipPath = useTransform(
  smoothProgress,
  [0, 0.01, 1], // 0.01 matlab scroll karte hi foran triangle ban jaye
  [
    // STAGE 1: Overshot Rectangle
    // Humne Y ko 150% rakha hai taaki corners screen se bohat niche hon
    "polygon(-100% 0%, 100% 0%, 100% 250%, 0% 150%)", 
    
    // STAGE 2: Sharp V (Snap point)
    // Sirf 1% scroll par corners center mein snap ho jayenge
    "polygon(0% 0%, 100% 0%, 50% 100%, 50% 100%)",

    // STAGE 3: Smooth Collapse
    // Baqi 99% scroll sirf height kam karega
    "polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)"
  ]
);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#E5E5E5]">
      {/* Sticky container taaki box screen ke beech mein hi phailay */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div
          style={{ clipPath }}
          className="relative w-full h-full bg-black flex flex-col items-center justify-center text-white"
        >
          {/* Content inside the black section */}
          <div className="max-w-4xl px-10 text-center">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
              DRIVING ENGAGEMENT AT ALL STAGES OF THE FUNNEL
            </h2>
            <p className="text-sm md:text-lg uppercase tracking-[0.3em] opacity-80">
              For a unique customer experience
            </p>
          </div>

          {/* Optional: The vertical white line from your screenshot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
}