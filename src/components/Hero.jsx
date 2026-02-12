import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import heroImage from "../assets/image/myself.jpg";
import myself from "../assets/image/myself.jpg";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const Hero = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const phrases = ["Frontend Developer", "React Enthusiast"];
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [displayedText, isDeleting, typingSpeed]);

  const tick = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const updatedText = isDeleting
      ? fullText.substring(0, displayedText.length - 1)
      : fullText.substring(0, displayedText.length + 1);

    setDisplayedText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1500);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
        delayChildren: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="w-full h-[130vh] relative flex items-center md:items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-10 flex items-center md:items-end"
        style={{
          background: isDarkMode
            ? "rgba(0, 0, 0, 0.55)"
            : "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
          backdropFilter: "blur(4px)",
        }}
      ></div>

      <div
        className="relative z-20 flex flex-col justify-center items-center text-center px-6 md:px-12 mt-6 md:mt-0"
        style={{ color: isDarkMode ? "#FFFFFF" : "#111827" }}
      >
        <motion.img
          src={myself}
          alt="Oko Christian"
          className="w-28 md:w-40 h-28 md:h-40 rounded-full object-cover border-4 shadow-lg"
          style={{ borderColor: isDarkMode ? "#FFFFFF" : "#8B5CF6" }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="flex flex-col items-center mt-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-xl md:text-4xl font-bold">Oko Christian</h1>
          <h2
            className="text-2xl md:text-5xl font-semibold mt-2"
            style={{ color: isDarkMode ? "#A5B4FC" : "#6D28D9" }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-lg max-w-2xl leading-relaxed">
            Welcome to my portfolio! I'm a passionate frontend developer
            specializing in building responsive and scalable web applications.
            My expertise lies in modern technologies like React, and I am
            currently expanding my skills into mobile development using React
            Native. I am committed to delivering high-quality solutions that
            focus on performance, user experience, and clean, maintainable code.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            variants={textVariants}
          >
            <motion.a
              href="/Oko-Christian-CV.docx"
              download="Oko-Christian-CV"
              className="flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full text-white transition-colors duration-300 bg-purple-700 hover:bg-purple-800"
              variants={buttonVariants}
            >
              <FaPaperPlane />
              Download CV
            </motion.a>

            <div className="flex gap-4">
              <motion.a
                href="http://linkedin.com/in/oko-christian-aa7262352"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
              >
                <FaLinkedin className="text-3xl hover:text-purple-500 transition-colors" />
              </motion.a>
              <motion.a
                href="https://github.com/Dev-caezar"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
              >
                <FaGithub className="text-3xl hover:text-purple-500 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
