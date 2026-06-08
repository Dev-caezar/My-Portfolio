import React, { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import myself from "../assets/image/myself.jpg";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Hero = () => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 140, mass: 0.5 };

  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);
  const textRotateX = useSpring(rotateX, springConfig);
  const textRotateY = useSpring(rotateY, springConfig);

  const textGradientColor1 = useTransform(
    mouseX,
    [0, 600, 1200],
    ["#791cf3", "#6366f1", "#2b124c"],
  );
  const textGradientColor2 = useTransform(
    mouseY,
    [0, 400, 800],
    ["#3b82f6", "#a855f7", "#791cf3"],
  );

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * -10,
    }));
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
    const multiplier = 12;
    const rX = (y / height - 0.5) * -multiplier;
    const rY = (x / width - 0.5) * multiplier;
    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(600);
    mouseY.set(400);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
      className="relative w-full min-h-screen flex items-center justify-center pt-[76px] pb-12 lg:pt-[90px] lg:pb-0 bg-[#05030a] text-gray-100 overflow-hidden group/hero"
    >
      <div className="absolute inset-0 bg-[#05030a] pointer-events-none" />
      <motion.div
        animate={{
          transform: [
            "rotate(-45deg) translateY(-10%)",
            "rotate(-41deg) translateY(0%)",
            "rotate(-45deg) translateY(-10%)",
          ],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-2/6 w-[2px] h-[150vh] bg-gradient-to-b from-transparent via-[#791cf3] to-transparent blur-[3px] pointer-events-none origin-center"
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#791cf3]/20 via-[#3b82f6]/10 to-transparent blur-[120px] rounded-full pointer-events-none opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 hidden md:block"
        style={{ left: glowX, top: glowY, transform: "translate(-50%, -50%)" }}
      />
      <div className="absolute top-[-10%] right-[10%] w-[300px] h-[300px] bg-[#791cf3]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-purple-400 rounded-full opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              top: particle.top,
              left: particle.left,
            }}
            animate={{ x: [0, 30, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-[85%] mx-auto px-2 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-6 lg:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            rotateX: textRotateX,
            rotateY: textRotateY,
            transformStyle: "preserve-3d",
          }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left will-change-transform"
        >
          <motion.span
            variants={itemVariants}
            style={{ transform: "translateZ(25px)" }}
            className="text-[8px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.4em] font-bold text-purple-400 mb-4 bg-purple-950/40 px-2.5 py-1 md:px-2 md:py-1.5 rounded-md border border-purple-800/30 inline-block"
          >
            Frontend-Focused Full-Stack Developer
          </motion.span>
          <motion.h1
            variants={itemVariants}
            style={{
              transform: "translateZ(50px)",
              backgroundImage: `linear-gradient(to right, var(--color1, #791cf3), var(--color2, #3b82f6))`,
            }}
            animate={{
              "--color1": textGradientColor1.get(),
              "--color2": textGradientColor2.get(),
            }}
            className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-none mb-6 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            Oko Christian
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{ transform: "translateZ(35px)" }}
            className="text-base md:text-md max-w-xl leading-relaxed mb-10 font-normal text-gray-400"
          >
            I specialize in building responsive, user-centric web applications
            with React, Next.js, and modern JavaScript technologies. Focused on
            clean code, performance optimization, and crafting seamless digital
            experiences that deliver real value to users.
          </motion.p>
          <motion.div
            variants={itemVariants}
            style={{ transform: "translateZ(30px)" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto mt-2"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/07072084646?text=Hello%20Christian,%20I'm%20interested%20in%20working%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-[#791cf3] to-indigo-600 hover:from-[#8932f5] hover:to-indigo-500 text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-[0_4px_20px_rgba(121,28,243,0.3)] active:scale-98 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/Oko-Christian-CV.docx"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold border border-purple-900/40 bg-purple-950/10 hover:bg-purple-900/20 text-gray-300 shadow-sm transition-all duration-300"
              >
                <FaDownload className="text-xs" /> Resume
              </a>
            </div>
            <div className="flex items-center gap-5 mt-2 sm:mt-0">
              <div className="flex items-center justify-center relative">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#791cf3]" />
                <span className="absolute w-4 h-4 rounded-full bg-purple-500/40 animate-ping" />
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="http://linkedin.com/in/oko-christian-aa7262352"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#791cf3] hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://github.com/Dev-caezar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#791cf3] hover:scale-110 transition-all duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            style={{ transform: "translateZ(20px)" }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-purple-400/60"
          >
            <div>
              Location:{" "}
              <span className="text-gray-300 ml-1">Lagos, Nigeria</span>
            </div>
            <div>
              Open to:{" "}
              <span className="text-purple-400 ml-1">Remote / Contract</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{
            rotateX: textRotateX,
            rotateY: textRotateY,
            transformStyle: "preserve-3d",
          }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end will-change-transform px-2 sm:px-0"
        >
          <div
            style={{ transform: "translateZ(40px)" }}
            className="relative w-full max-w-[270px] sm:max-w-[340px] lg:max-w-[380px] aspect-[5/5] group"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#791cf3]/25 via-indigo-500/10 to-transparent blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border border-purple-500/30 rounded-full translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 ease-out pointer-events-none" />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-purple-500/20 bg-[#0c071a] shadow-2xl">
              <img
                src={myself}
                alt="Oko Christian"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05030a] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
