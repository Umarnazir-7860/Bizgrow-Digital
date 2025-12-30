"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BoathouseFinal() {
  const containerRef = useRef(null);
  const vShapeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(vShapeRef.current, {
        // END: Bilkul top line ban jaye
        clipPath: "polygon(-200% 0%, 300% 0%, 50% 0%, 50% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2, // Smooth follow
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      <div 
        ref={vShapeRef}
        className="h-screen w-full bg-black flex items-center justify-center text-white"
        style={{ 
          // START: Wide & Deep V
          // Point 1 & 2: Screen se bohat door (Side lines ka angle set karte hain)
          // Point 3 & 4: Screen se kafi niche (V ki depth set karte hain)
          clipPath: "polygon(-200% 0%, 300% 0%, 50% 180%, 50% 180%)" 
        }}
      >
        <div className="text-center px-10 z-10">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
            DRIVING ENGAGEMENT
          </h2>
        </div>
      </div>
    </div>
  );
}