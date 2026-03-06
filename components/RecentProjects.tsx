"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { projects } from "@/data";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "DevOps": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Full Stack": "bg-green-500/20 text-green-300 border-green-500/30",
  "Tools": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Automation": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

const RecentProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="heading">
          Featured <span className="text-purple">Projects</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating expertise in full-stack
          development, AI integration, DevOps, and automation.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
      >
        {projects.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Link
              target="_blank"
              href={item.link}
              className="group block h-full"
            >
              <div className="relative h-full rounded-2xl border border-white/[0.1] bg-[#0a0d1a] p-6 transition-all duration-300 hover:border-purple/50 hover:bg-[#0d1025]">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      categoryColors[item.category] ||
                      "bg-gray-500/20 text-gray-300 border-gray-500/30"
                    }`}
                  >
                    {item.category}
                  </span>
                  <FaExternalLinkAlt className="text-gray-500 text-sm group-hover:text-purple transition-colors duration-200" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {item.des}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.05] text-gray-300 border border-white/[0.08]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentProjects;
