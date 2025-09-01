import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/shubham996633/responsive-web-design",
      description: "Completed 300-hour course mastering responsive design principles"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/shubham996633/javascript-algorithms-and-data-structures",
      description: "Finished 300-hour certification, building 20+ projects"
    },
    {
      id: 3,
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/shubham996633/front-end-development-libraries",
      description: "Earned 300-hour certification focusing on React and Bootstrap"
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/shubham996633/data-analysis-with-python-v7",
      description: "Completed 300-hour course analyzing datasets with Pandas and NumPy"
    },
  ];

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
    <section className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="heading">
          <span className="text-purple">Certifications</span> & Achievements
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Professional certifications and achievements demonstrating continuous learning and expertise.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Certificate Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-blue-400 font-medium mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* View Certificate Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-200 group-hover:scale-105"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2 w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
