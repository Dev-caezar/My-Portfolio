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
         className="w-full h-screen relative flex items-center justify-center px-6"
         style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
         }}
      >
         {/* Overlay */}
         <div
            className="absolute inset-0 z-10 w-full h-full"
            style={{
               backgroundColor: isDarkMode
                  ? 'rgba(0, 0, 0, 0.6)'   // darker overlay for dark mode
                  : 'rgba(255, 255, 255, 0.3)', // lighter but more transparent for light mode
               backdropFilter: 'blur(6px)',
            }}
         ></div>

         {/* Content */}
         <div className="relative z-20 w-full max-w-5xl flex flex-col items-center text-center space-y-10 md:space-y-14">
            <motion.img
               src={myself}
               alt="Oko Christian"
               className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 shadow-xl"
               style={{ borderColor: isDarkMode ? '#FFFFFF' : '#1e40af' }}
               variants={imageVariants}
               initial="hidden"
               animate="visible"
            />

            <motion.div
               className="flex flex-col items-center"
               variants={textVariants}
               initial="hidden"
               animate="visible"
            >
               <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                  Oko Christian
               </h1>
               <h2
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-4"
                  style={{ color: isDarkMode ? '#93c5fd' : '#1e40af' }}
               >
                  {displayedText}
                  <span className="animate-pulse">|</span>
               </h2>
               <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed max-w-4xl text-gray-800 dark:text-gray-200">
                  Welcome to my portfolio! I'm a passionate frontend developer specializing in building
                  responsive and scalable web applications. My expertise lies in modern technologies like React,
                  and I am currently expanding my skills into mobile development using React Native.
                  I am committed to delivering high-quality solutions that focus on performance,
                  user experience, and clean, maintainable code.
               </p>
            </motion.div>
         </div>
      </div>
   );
};

export default Hero;
