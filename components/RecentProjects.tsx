/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { projects } from "@/data";
import Link from "next/link";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
          A showcase of my recent work, demonstrating expertise in full-stack development, 
          AI integration, and modern web technologies.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10"
      >
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <Link
              target="_blank"
              href={item.link}
              className="w-full h-full"
            >
              <PinContainer>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6">
                  <div
                    className="relative w-full h-[80%] overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 object-cover rotate-3"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      item.status === "Completed" 
                        ? "bg-green-500 text-white" 
                        : "bg-yellow-500 text-black"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-3">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-sm line-clamp-3 mb-4"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:scale-110 transition-transform duration-200"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center group">
                    <p className="flex lg:text-lg md:text-xs text-sm text-purple group-hover:text-blue-400 transition-colors duration-200">
                      View Project
                    </p>
                    <FaExternalLinkAlt className="ms-3 group-hover:translate-x-1 transition-transform duration-200" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentProjects;
