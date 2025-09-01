import {
  FaLocationArrow,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { socialMedia } from "@/data";
import Link from "next/link";
import MagicButton from "./MagicButton";

const Footer = () => {
  const date = new Date();

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "Shubham Maurya",
      link: "mailto:shubhammaurya996633@gmail.com",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+91 6393309346",
      link: "https://wa.me/916393309346",
    },
    {
      icon: <FaTelegram className="w-5 h-5" />,
      label: "Telegram",
      value: "@shubham996633",
      link: "https://t.me/shubham996633",
    },
  ];

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-gray-400 md:mt-6 my-5 text-center max-w-2xl">
            I&apos;m currently available for freelance work, contract opportunities,
            and full-time positions. Let&apos;s discuss how I can help you achieve
            your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="mailto:shubhammaurya996633@gmail.com">
              <MagicButton
                title="Let&apos;s get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="/Shubham.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 h-10 mt-10 hover:11 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center p-6 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors duration-300">
                <div className="text-blue-400">{info.icon}</div>
              </div>
              <div className="ml-4 min-w-0 flex-1">
                <p className="text-sm text-gray-400 font-medium">
                  {info.label}
                </p>
                <p className="text-white font-semibold break-words">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex gap-4">
            {socialMedia.map((info, index) => (
              <motion.a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 cursor-pointer flex justify-center items-center bg-gray-500 border border-gray-700 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex mt-16 md:flex-row flex-col justify-between items-center border-t border-gray-800 pt-8"
        >
          <p className="md:text-base text-sm md:font-normal font-light text-gray-400">
            Copyright © {date.getFullYear()} Shubham Maurya. All rights
            reserved.
          </p>

          <p className="md:text-base text-sm md:font-normal font-light text-gray-400 mt-4 md:mt-0">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
