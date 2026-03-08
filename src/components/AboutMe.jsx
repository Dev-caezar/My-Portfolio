import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const AboutMe = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const stats = [
    { label: "Focus", value: "Modern frontend development with React" },
    {
      label: "Interests",
      value: "UI/UX, performance optimization, and responsive design",
    },
    {
      label: "Stack",
      value: "React, Next.js, TailwindCSS, JavaScript, HTML, CSS",
    },
    {
      label: "Currently Learning",
      value: "Mobile development with React Native",
    },
  ];

  return (
    <section
      id="about"
      className={`w-full py-24 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-purple-500 mb-4">
                About Me
              </h2>

              <h3 className="text-4xl md:text-5xl font-light italic mb-8">
                Frontend Developer
              </h3>

              <div
                className={`space-y-6 text-lg leading-relaxed font-light ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <p>
                  I am{" "}
                  <span className="font-medium text-purple-500">
                    Oko Christian
                  </span>
                  , a frontend developer passionate about building modern,
                  responsive, and user-friendly web interfaces.
                </p>

                <p>
                  I work primarily with{" "}
                  <span className="font-medium">
                    React, Next.js, and Tailwind CSS
                  </span>{" "}
                  to create clean, scalable, and high-performing web
                  applications.
                </p>

                <p>
                  I focus on delivering smooth user experiences, well-structured
                  components, and visually polished interfaces while
                  continuously improving my frontend development skills.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`p-10 rounded-[2.5rem] border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/40 border-gray-800 backdrop-blur-xl shadow-2xl"
                  : "bg-white border-gray-100 shadow-xl"
              }`}
            >
              <div className="space-y-10">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2 group-hover:text-purple-500 transition-colors">
                      {item.label}
                    </h4>

                    <p
                      className={`text-sm md:text-base font-medium leading-relaxed ${
                        isDarkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
