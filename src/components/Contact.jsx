import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    myEmail: "okochristian6@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.fullname.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("All fields are required");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = "https://email-service-vu7f.onrender.com/email";

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post(API_BASE_URL, formData);
      toast.success("Message sent successfully!");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMsg);
      console.error(error);
    } finally {
      setLoading(false);
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
        myEmail: "okochristian6@gmail.com",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className={`w-full py-24 transition-colors duration-500 overflow-hidden
          ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-black"}`}
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-5">
            <motion.h2
              variants={itemVariants}
              className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-8"
            >
              Contact
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-5xl md:text-6xl font-light italic tracking-tight mb-8"
            >
              Let’s build <br /> something{" "}
              <span className="text-purple-500">great.</span>
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className={`text-lg font-light leading-relaxed max-w-md ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              I’m currently available for freelance work and full-time
              opportunities. If you have a project in mind or just want to chat,
              drop me a message.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-12">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">
                Direct Email
              </p>
              <a
                href="mailto:okochristian6@gmail.com"
                className="text-xl font-medium hover:text-purple-500 transition-colors"
              >
                okochristian6@gmail.com
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    type="text"
                    name="fullname"
                    autoComplete="name"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full bg-transparent border-b py-3 focus:outline-none transition-colors
                                  ${isDarkMode ? "border-gray-800 focus:border-purple-500" : "border-gray-200 focus:border-purple-500"}`}
                  />
                  <label
                    className={`absolute left-0 top-3 text-[10px] uppercase tracking-widest font-bold opacity-40 transition-all pointer-events-none
                                  peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:opacity-100
                                  peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100`}
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full bg-transparent border-b py-3 focus:outline-none transition-colors
                                  ${isDarkMode ? "border-gray-800 focus:border-purple-500" : "border-gray-200 focus:border-purple-500"}`}
                  />
                  <label
                    className={`absolute left-0 top-3 text-[10px] uppercase tracking-widest font-bold opacity-40 transition-all pointer-events-none
                                  peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:opacity-100
                                  peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100`}
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-transparent border-b py-3 focus:outline-none transition-colors
                               ${isDarkMode ? "border-gray-800 focus:border-purple-500" : "border-gray-200 focus:border-purple-500"}`}
                />
                <label
                  className={`absolute left-0 top-3 text-[10px] uppercase tracking-widest font-bold opacity-40 transition-all pointer-events-none
                              peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:opacity-100
                              peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100`}
                >
                  Subject
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder=" "
                  className={`peer w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none
                               ${isDarkMode ? "border-gray-800 focus:border-purple-500" : "border-gray-200 focus:border-purple-500"}`}
                ></textarea>
                <label
                  className={`absolute left-0 top-3 text-[10px] uppercase tracking-widest font-bold opacity-40 transition-all pointer-events-none
                              peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:opacity-100
                              peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100`}
                >
                  Your Message
                </label>
              </div>

              <div className="flex justify-start pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`group flex items-center gap-4 py-4 px-10 rounded-full bg-purple-600 text-white font-bold uppercase text-[11px] tracking-[0.2em] transition-all shadow-lg shadow-purple-500/20 
                    ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-purple-700 active:scale-95"}`}
                >
                  {loading ? (
                    <>
                      Sending...
                      <FaSpinner className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Discovery
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
