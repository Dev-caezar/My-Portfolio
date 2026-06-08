import React, { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  FaTerminal,
  FaCompass,
  FaLayerGroup,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiStyledcomponents,
  SiChakraui,
  SiRadixui,
  SiFramer,
  SiMui,
  SiAntdesign,
  SiGooglecardboard,
  SiAnthropic,
  SiOpenai,
} from "react-icons/si";

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Starfield particle logic added here
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

  // Motion values to track absolute coordinates across the entire component background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth springs so the background glow lags elegantly behind the cursor
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  // Tracks mouse movement across the whole section wrapper
  const handleSectionMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    // Pass positions to local CSS variables to power the interactive grid parallax
    e.currentTarget.style.setProperty("--bg-mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--bg-mouse-y", `${y}px`);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const skillsList = [
    {
      name: "HTML5 / CSS3",
      icon: (
        <div className="flex gap-1">
          <FaHtml5 className="text-[#E34F26]" />
          <FaCss3Alt className="text-[#1572B6]" />
        </div>
      ),
    },
    {
      name: "JavaScript (ES6+)",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
    },
    { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    {
      name: "shadcn/ui",
      icon: (
        <div className="flex items-center justify-center w-4 h-4">
          <svg
            viewBox="0 0 256 256"
            className="w-full h-full text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M128 0L0 128l128 128V128h128L128 0z" opacity=".1" />
            <path d="M200 40L40 200h120L200 40z" />
            <path d="M120 120L40 200h80l40-40-40-40z" opacity=".5" />
          </svg>
        </div>
      ),
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign className="text-[#1890FF]" />,
    },
    {
      name: "Material UI",
      icon: <SiMui className="text-[#007FFF]" />,
    },
    {
      name: "Framer Motion",
      icon: (
        <SiFramer
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00C7] to-[#00F0FF]"
          style={{ WebkitTextFillColor: "transparent" }}
        />
      ),
    },
    {
      name: "Radix UI",
      icon: <SiRadixui className="text-white" />,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="text-[#319795]" />,
    },
    {
      name: "Styled-Component",
      icon: <SiStyledcomponents className="text-[#DB7093]" />,
    },
    { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Gemini", icon: <SiGooglecardboard className="text-blue-500" /> }, // Using Googlebard icon as placeholder for Gemini
    {
      name: "v0.dev",
      icon: <span className="text-white font-bold font-mono">v0</span>,
    },
    { name: "Claude", icon: <SiAnthropic className="text-orange-600" /> },
    { name: "ChatGPT", icon: <SiOpenai className="text-green-500" /> },
  ];

  const rollingSkills = [...skillsList, ...skillsList, ...skillsList];

  const stats = [
    {
      id: "01",
      label: "Core Focus",
      title: "Frontend Development & Modern Web Applications",
      value:
        "I specialize in building responsive, accessible, and high-performance web applications using React, Next.js, and modern JavaScript technologies. My focus is creating intuitive user experiences backed by clean, maintainable code.",
      icon: <FaTerminal className="text-purple-400" />,
      tag: "STACK_CORE",
    },
    {
      id: "02",
      label: "Interests",
      title: "User Experience, Performance & Product Thinking",
      value:
        "I enjoy crafting seamless digital experiences through thoughtful UI design, smooth interactions, and performance optimization. I approach development with both technical quality and user needs in mind.",
      icon: <FaCompass className="text-indigo-400" />,
      tag: "ENGINEERING_UX",
    },
    {
      id: "03",
      label: "Tech Stack",
      title: "Frontend Ecosystem & Supporting Technologies",
      value:
        "My primary stack includes React, Next.js, JavaScript, TypeScript, Tailwind CSS, Styled Components, Zustand, and Redux Toolkit. I also have experience building backend services with Node.js, Express, and MongoDB.",
      icon: <FaLayerGroup className="text-blue-400" />,
      tag: "MODULES_ENV",
    },
    {
      id: "04",
      label: "Currently Learning",
      title: "Backend Development & Scalable Architecture",
      value:
        "I am actively expanding my backend expertise with Node.js, Express, MongoDB, authentication systems, and microservice architecture while continuing to deepen my frontend engineering skills.",
      icon: <FaGraduationCap className="text-pink-400" />,
      tag: "UPSTREAM_DEV",
    },
  ];

  return (
    <section
      id="about"
      onMouseMove={handleSectionMouseMove}
      className="w-full pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-36 bg-[#05030a] text-white scroll-mt-[90px] relative overflow-hidden group/section"
    >
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(white 0.5px, transparent 0.5px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              top: particle.top,
              left: particle.left,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(#1e1538_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none transition-all"
        style={{
          backgroundPosition:
            "calc(50% + (var(--bg-mouse-x, 0px) * 0.02)) calc(50% + (var(--bg-mouse-y, 0px) * 0.02))",
        }}
      />

      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#791cf3]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-3 relative z-10">
        <div className="mb-10 md:mb-16 lg:mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#791cf3]" />
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-purple-400">
              01 // CORE PROFILE
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl lg:text-4xl font-bold tracking-tight">
            Meet Oko Christian
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start mb-16 md:mb-24">
          <div className="lg:col-span-5 flex flex-col space-y-2 md:space-y-3">
            {stats.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative w-full p-4 md:p-5 rounded-xl border text-left flex items-center justify-between transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-[#0d091a]/80 border-purple-500/50 shadow-[0_4px_20px_rgba(121,28,243,0.1)] backdrop-blur-sm"
                      : "bg-transparent border-purple-900/10 hover:border-purple-800/30"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="matrixIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] md:w-[4px] bg-purple-500"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <div className="flex items-center gap-3 md:gap-4 relative z-10 pl-1 md:pl-2">
                    <span
                      className={`font-mono text-xs md:text-sm font-bold transition-colors ${isActive ? "text-purple-400" : "text-gray-600 group-hover:text-gray-400"}`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`text-xs md:text-sm tracking-wide font-semibold transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div
                    className={`text-sm md:text-base transition-all duration-300 ${isActive ? "scale-110 opacity-100" : "opacity-30 group-hover:opacity-60"}`}
                  >
                    {item.icon}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 h-full">
            <div className="w-full h-full min-h-[250px] md:min-h-[320px] rounded-2xl border border-purple-900/20 bg-[#0c071a]/60 backdrop-blur-xl p-5 md:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-purple-500/10 pointer-events-none rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-purple-500/10 pointer-events-none rounded-bl-2xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-purple-900/20 pb-3 mb-4 md:mb-6">
                      <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
                        {stats[activeIndex].tag}
                      </span>
                      <span className="text-[10px] md:text-[11px] font-mono text-gray-600">
                        STATUS: SYSTEM_OK
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3">
                      {stats[activeIndex].title}
                    </h4>

                    <p className="text-xs md:text-base text-gray-400 leading-relaxed font-normal">
                      {stats[activeIndex].value}
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8 pt-3 border-t border-purple-900/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>INDEX_PTR // {stats[activeIndex].id}</span>
                    <span>MERN_ENV_ACTIVE</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-16 border-t border-b border-purple-900/20 bg-[#07040f]/60 py-4 md:py-6 overflow-hidden left-1/2 right-1/2 mr-[-50vw] ml-[-50vw] w-screen group">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#05030a] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#05030a] to-transparent z-20 pointer-events-none" />

          <div className="w-full overflow-hidden flex items-center">
            <motion.div
              className="flex gap-3 md:gap-4 whitespace-nowrap will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: "-33.333%" }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              style={{ animationPlayState: "running" }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {rollingSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 md:gap-3 px-4 py-2 md:py-2.5 rounded-xl bg-[#0e091f]/80 border border-purple-500/10 hover:border-purple-500/30 transition-colors shrink-0 select-none cursor-pointer"
                >
                  <span className="text-base md:text-lg flex items-center shrink-0">
                    {skill.icon}
                  </span>
                  <span className="text-[11px] md:text-xs font-mono tracking-wider font-semibold text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
