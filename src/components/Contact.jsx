import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

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
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    e.currentTarget.style.setProperty("--bg-mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--bg-mouse-y", `${y}px`);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://email-service-vu7f.onrender.com/email", {
        ...formData,
        myEmail: "okochristian6@gmail.com",
      });
      toast.success("Message sent successfully!");
      setFormData({ fullname: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#791cf3]" />
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-purple-400">
                04 // CONTACT
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Let’s build <br />{" "}
              <span className="text-purple-500">something great.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Currently open for new opportunities. Let's start a conversation.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-[#0c071a]/60 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <input
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full focus:border-purple-500 outline-none transition-all"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full focus:border-purple-500 outline-none transition-all"
                required
              />
            </div>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full mb-8 focus:border-purple-500 outline-none transition-all"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full mb-8 focus:border-purple-500 outline-none transition-all resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto flex items-center justify-center gap-3 py-4 px-10 rounded-full bg-purple-600 hover:bg-purple-700 font-bold uppercase text-[11px] tracking-[0.2em] transition-all"
            >
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>
                  Send Message <FaPaperPlane size={12} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
