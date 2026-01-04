"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import Partners from "@/components/Partners";

// --- Data ---
const locations = ["서울", "세종", "나주"];


// --- Sub Components ---
function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [count, to, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[1.2em] relative overflow-hidden inline-block align-top min-w-[140px] whitespace-nowrap">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 whitespace-nowrap"
        >
          {locations[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// --- Main Component ---
export default function About() {
  const [activeYear, setActiveYear] = useState(2024);

  const historyData = [
    { year: 2024, events: ["Ahnlab 매출 우수 파트너상 수상", "경기도소방재난본부 악성코드 탐지 시스템 납품"] },
    { year: 2023, events: ["Ahnlab 매출 우수 파트너상 수상"] },
    { year: 2022, events: ["Ahnlab 기술지원 우수 파트너상 수상", "문화체육관광부 보안 솔루션 납품"] },
    { year: 2021, events: ["Ahnlab 매출 우수 파트너사 등록", "컨설팅 사업부 설립", "법무부 보안 솔루션 납품"] },
    { year: 2020, events: ["아이원시큐리티 사명 변경"] },
    { year: 2019, events: ["Ahnlab 공인파트너 등록"] },
    { year: 2018, events: ["아이에스원 창립"] },
  ];

  const activeHistory = historyData.find(item => item.year === activeYear) || historyData[0];

  return (
    <section id="about" className="bg-slate-950 text-white">
      {/* 1. Top Container: Vision & Stats (with Graph Background) */}
      <div className="relative py-32 overflow-hidden">
        {/* Background Graph (SVG) - 상단 영역에만 */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
            <motion.path
              d="M0 800 C 300 700, 600 400, 1440 200"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Headline & Stats */}
          <div className="pb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-20 max-w-4xl"
            >
              안심의 경험을 위해<br />
              믿음을 만들어 가고 있습니다.
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
              {/* Stat 1: Locations */}
              <div>
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-3">지역 거점</div>
                <div className="text-5xl md:text-7xl font-bold mb-2 leading-tight">
                  <RollingText />
                </div>
                <div className="text-slate-500 text-xs mt-2">Main Hubs</div>
              </div>

              {/* Stat 2: Clients */}
              <div>
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-3">이용기관</div>
                <div className="text-5xl md:text-7xl font-bold mb-2 leading-tight">
                  <Counter from={0} to={50} />+
                </div>
                <div className="text-slate-500 text-xs mt-2">2025.06.30 기준</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Container: History (Solid Background) */}
      <div className="pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[140px_1fr] gap-10 max-w-6xl">
            {/* Left: Timeline */}
            <div className="flex flex-col border-r border-slate-800 pr-0">
              {historyData.map((item) => (
                <div
                  key={item.year}
                  onMouseEnter={() => setActiveYear(item.year)}
                  className="relative text-right pr-8 py-8 cursor-pointer"
                >
                  {/* Dot - 선 위에 배치 */}
                  <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 z-10">
                    {activeYear === item.year ? (
                      <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white transition-all" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-800 transition-all" />
                    )}
                  </div>
                  <div
                    className={`text-[18px] transition-colors ${
                      activeYear === item.year
                        ? 'text-white font-bold'
                        : 'text-slate-600'
                    }`}
                  >
                    {item.year}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Content */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ul className="space-y-4">
                    {activeHistory.events.map((event, index) => (
                      <li key={index} className="text-[17px] text-slate-300 leading-relaxed">
                        {event}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-20">
        <Partners />
      </div>
    </section>
  );
}
