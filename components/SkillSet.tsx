import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const SkillSet = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      des: "Expert in modern frontend frameworks and libraries including React, Next.js, TypeScript, and Tailwind CSS. Creating responsive, accessible, and performant user interfaces.",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Redux", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      des: "Proficient in building scalable backend services using Node.js, Python, and various databases. Experience with REST APIs, GraphQL, and microservices architecture.",
      skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Microservices"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      des: "Specialized in AI integration, RAG systems, and machine learning applications. Building intelligent solutions with 75%+ accuracy in trading algorithms.",
      skills: ["OpenAI API", "RAG Systems", "Machine Learning", "Python", "TensorFlow", "NLP", "Computer Vision"]
    },
    {
      title: "DevOps & Deployment",
      icon: "🚀",
      des: "Experience with CI/CD pipelines, cloud deployment, and containerization. Proficient in Docker, Kubernetes, and various cloud platforms.",
      skills: ["Docker", "Kubernetes", "AWS", "Vercel", "Git", "CI/CD", "Jenkins", "Cloud Services"]
    },
    {
      title: "3D & Graphics",
      icon: "🎮",
      des: "Creating immersive 3D experiences using Three.js, WebGL, and modern graphics technologies. Building interactive visualizations and gaming applications.",
      skills: ["Three.js", "WebGL", "GSAP", "3D Modeling", "Animation", "Graphics Programming"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      des: "Proficient with modern development tools, version control, and project management. Experience with various APIs and third-party integrations.",
      skills: ["Git", "VS Code", "Postman", "Figma", "Stripe API", "Cloudinary", "Appwrite"]
    }
  ];

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
          My <span className="text-purple">Skills & Expertise</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise across various domains.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            icon={category.icon}
            des={category.des}
            skills={category.skills}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default SkillSet;

const SkillCard = ({
  title,
  icon,
  des,
  skills,
  delay
}: {
  title: string;
  icon: string;
  des: string;
  skills: string[];
  delay: number;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {des}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + index * 0.05 }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Hover effect overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
