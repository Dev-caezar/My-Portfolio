import React, { useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // 1. Background Interaction Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * -10,
      })),
    [],
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    e.currentTarget.style.setProperty(
      "--bg-mouse-x",
      `${e.clientX - rect.left}px`,
    );
    e.currentTarget.style.setProperty(
      "--bg-mouse-y",
      `${e.clientY - rect.top}px`,
    );
  };

  // Content data
  const skills = [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React JS",
    "Next.js",
    "Tailwind CSS",
    "Styled-Component",
    "React Native",
    "Zustand",
    "Node.js",
  ];
  const experiences = [
    {
      title: "Frontend Developer",
      organization: "Quicklah",
      years: "2025 - Present",
      description:
        "Leading frontend implementation for a startup product, building performant user interfaces, integrating backend services, and improving overall user experience.",
    },
    {
      title: "Frontend Developer",
      organization: "The Curve Africa",
      years: "2024 - Present",
      description:
        "Developed responsive web applications and collaborated within cross-functional teams to translate business requirements into scalable frontend solutions.",
    },
  ];
  const education = [
    {
      title: "Software Development",
      organization: "The Curve Africa",
      years: "2023 — 2024",
      description:
        "Completed intensive software engineering training focused on modern web development, JavaScript, React, backend fundamentals, version control, and industry-standard development practices.",
    },
    {
      title: "Senior Secondary School Certificate (SSCE)",
      organization: "Expressway Senior High School",
      years: "2013 — 2019",
      description:
        "Completed secondary education with a strong academic foundation and developed an early interest in technology and problem-solving.",
    },
  ];

  const activeData = activeTab === "experience" ? experiences : education;

  return (
    <section
      id="experience"
      onMouseMove={handleMouseMove}
      className="w-full py-24 bg-[#05030a] text-white relative overflow-hidden group/section"
    >
      {/* 2. Starfield & Grid Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(white 0.5px, transparent 0.5px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3. Mouse Follow Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen z-0"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 4. Interactive Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e1538_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"
        style={{
          backgroundPosition:
            "calc(50% + (var(--bg-mouse-x, 0px) * 0.02)) calc(50% + (var(--bg-mouse-y, 0px) * 0.02))",
        }}
      />

      {/* 5. Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <header className="mb-20">
          <div className="inline-flex items-center gap-3 mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#791cf3]" />
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-purple-400">
              03 // JOURNEY
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-purple-900/30 pb-4">
            <h3 className="text-4xl font-bold tracking-tight">
              Experience & Education
            </h3>
            <div className="flex gap-10">
              {["experience", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all ${activeTab === tab ? "text-white" : "text-gray-600 hover:text-white"}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabUnderline"
                      className="h-[2px] bg-purple-500 mt-2"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="py-3 border-l border-purple-900/30 pl-6 text-sm font-mono text-gray-400"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="md:col-span-8">
            <div className="relative border-l border-purple-900/30 ml-2 pl-8 md:pl-10 space-y-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {activeData.map((item, index) => (
                    <div
                      key={index}
                      className="relative group mb-12 bg-[#0c071a]/60 p-6 rounded-2xl border border-white/5 backdrop-blur-sm"
                    >
                      <div className="absolute -left-[50px] top-6 w-4 h-4 rounded-full border-2 border-[#05030a] bg-purple-600 z-10" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                        {item.years}
                      </span>
                      <h5 className="text-xl font-bold mt-2">{item.title}</h5>
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
