import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import heroImage from "../assets/image/myself5.png";
import myself from "../assets/image/myself4.png";

const Hero = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   const phrases = ["Frontend Developer", "React Enthusiast"];
   const [displayedText, setDisplayedText] = useState('');
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
         setTypingSpeed(prevSpeed => prevSpeed / 2);
      }

      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setTypingSpeed(1500);
      } else if (isDeleting && updatedText === '') {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setTypingSpeed(150);
      }
   };

   const imageVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
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
            delay: 0.5
         }
      }
   };

   return (
      <div
         className="w-full h-screen relative flex items-center md:items-end justify-center pb-9"
         style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
         }}
      >
         {/* Overlay with better readability */}
         <div
            className="absolute inset-0 z-10 flex items-center md:items-end mt-6 md:mt-0"
            style={{
               background: isDarkMode
                  ? 'rgba(0, 0, 0, 0.55)'
                  : 'linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.65))',
               backdropFilter: 'blur(4px)',
            }}
         ></div>

         {/* Content */}
         <div
            className="relative z-20 flex flex-col items-center text-center px-6 md:px-12"
            style={{ color: isDarkMode ? '#FFFFFF' : '#111827' }} 
         >
            <motion.img
               src={myself}
               alt="Oko Christian"
               className="w-28 md:w-40 h-28 md:h-40 rounded-full object-cover border-4 shadow-lg"
               style={{ borderColor: isDarkMode ? '#FFFFFF' : '#1e3a8a' }}
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
               <h1 className="text-xl md:text-4xl font-bold">
                  Oko Christian
               </h1>
               <h2
                  className="text-2xl md:text-5xl font-semibold mt-2"
                  style={{ color: isDarkMode ? '#a5b4fc' : '#1e3a8a' }}
               >
                  {displayedText}
                  <span className="animate-pulse">|</span>
               </h2>
               <p className="mt-6 text-[15px] md:text-lg max-w-2xl leading-relaxed">
                  Welcome to my portfolio! I'm a passionate frontend developer specializing in building
                  responsive and scalable web applications. My expertise lies in modern technologies like React,
                  and I am currently expanding my skills into mobile development using React Native. I am committed to delivering high-quality solutions that focus on
                  performance, user experience, and clean, maintainable code.
               </p>
            </motion.div>
         </div>
      </div>
   );
};

export default Hero;
