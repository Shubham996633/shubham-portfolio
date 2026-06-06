import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Open to Work - Freelance / Contract / Full Time
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-2xl mb-6"
          >
            AI Full-Stack Developer · Web · AI/LLM · Automation · DevOps · Cloud
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <div className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
              <span className="dark:text-white text-black">
                I Build Complete Products,{" "}
              </span>
              <span className="text-purple">End to End</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl"
          >
            Hi! I&apos;m{" "}
            <span className="text-blue-400 font-semibold">Shubham</span> — an AI
            Full-Stack Developer who ships entire products end-to-end: frontend,
            backend, AI/LLM, DevOps and the business integrations companies
            actually run on (QuickBooks, Zapier, Zoho, Stripe &amp; more). 2.5+
            years delivering for startups, agencies and clients worldwide.
          </motion.p>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-sm text-gray-200">
              <span className="text-purple font-bold">2.5+</span> Years Experience
              <span className="text-gray-500">·</span>
              <span className="text-gray-400">Since Nov 2023</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-sm text-gray-200">
              <span className="text-blue-400 font-bold">10+</span> Clients &amp; Projects Delivered
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-medium text-green-300">
              Full-time · Freelance · Contract
            </div>
          </motion.div>

          {/* Connect CTAs */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <a
              href="mailto:shubhammaurya996633@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-purple text-black-100 font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <FaEnvelope className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01bcc7bba082732c9c/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-[#14a800] text-white font-semibold rounded-full hover:bg-[#108a00] transition-all duration-300 transform hover:scale-105"
            >
              <FaUpwork className="w-4 h-4" />
              Hire on Upwork
            </a>
            <a
              href="https://www.linkedin.com/in/shubham996633/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-[#0a66c2] text-white font-semibold rounded-full hover:bg-[#084e98] transition-all duration-300 transform hover:scale-105"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/shubham996633"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://x.com/Shubham99663333"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <FaXTwitter className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
