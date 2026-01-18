"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 이미지 경로: public/img/plogo/plogo_01.png ...
const logos = Array.from({ length: 10 }, (_, i) => 
  `/img/plogo/plogo_${String(i + 1).padStart(2, "0")}.png`
);

export default function Partners() {
  return (
    <div className="w-full overflow-hidden py-10 bg-slate-950 border-t border-slate-800/50">
      <div className="flex">
        {/* Track 1 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {logos.map((src, idx) => (
            <div
              key={`a-${idx}`}
              className="relative h-12 w-32 flex-shrink-0"
            >
              <Image 
                src={src} 
                alt={`Partner Logo ${idx + 1}`}
                fill
                sizes="128px"
                className="object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Track 2 (Duplicate for infinite loop) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {logos.map((src, idx) => (
            <div
              key={`b-${idx}`}
              className="relative h-12 w-32 flex-shrink-0"
            >
              <Image 
                src={src} 
                alt={`Partner Logo ${idx + 1}`}
                fill
                sizes="128px"
                className="object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
