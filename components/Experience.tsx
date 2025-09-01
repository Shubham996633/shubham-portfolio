import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion";

const QualificationAndExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="heading">
          My <span className="text-purple">Experience & Education</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A journey through my professional experience, education, and
          continuous learning path.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8"
      >
        {workExperience.map((card) => (
          <motion.div key={card.id} variants={itemVariants} className="w-full">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full"
            >
              <div className="flex lg:flex-row flex-col lg:items-start p-6 md:p-8 lg:p-10 gap-4 h-full">
                <div className="flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="lg:w-20 md:w-16 w-14"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                      {card.title}
                    </h1>
                    <span className="text-blue-400 text-sm font-medium mt-1 lg:mt-0">
                      {card.duration}
                    </span>
                  </div>

                  <p className="text-start text-gray-300 font-medium mb-2">
                    {card.company}
                  </p>

                  <p className="text-start text-gray-400 mt-3 font-normal leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Skills Tags */}
                  {card.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default QualificationAndExperience;
