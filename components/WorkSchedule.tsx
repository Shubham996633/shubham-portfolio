import { motion } from "framer-motion";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

const WorkSchedule = () => {
  const scheduleData = [
    {
      id: 1,
      period: "Current",
      title: "Full-Time Internship",
      company: "Arkahub",
      duration: "Jun 2025 - Present",
      location: "Remote, India",
      description:
        "Working on website development, solar design flow, and CI/CD pipelines",
      hours: "40+ hours/week",
      status: "Active",
    },
    {
      id: 2,
      period: "Recent",
      title: "Part-Time Internship",
      company: "GoPool",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote, India",
      description:
        "Backend development in GoLang, CI/CD implementation, WebSocket integration",
      hours: "30 hours/week",
      status: "Completed",
    },
    {
      id: 3,
      period: "Long-term",
      title: "Extended Internship",
      company: "Monkey Science",
      duration: "Nov 2023 - Jun 2025",
      location: "Remote, India",
      description:
        "Admin panel development, microservices architecture, invoicing system",
      hours: "40+ hours/week",
      status: "Completed",
    },
    {
      id: 4,
      period: "Ongoing",
      title: "Freelance Projects",
      company: "Various Clients",
      duration: "Apr 2023 - Present",
      location: "Remote, Germany/India",
      description:
        "Full-stack web development, responsive design, client management. Currently engaged in one active project",
      hours: "30 hours/week",
      status: "Active",
    },
    {
      id: 5,
      period: "Academic",
      title: "B.Tech Studies",
      company: "Galgotias College",
      duration: "Nov 2022 - Jun 2026",
      location: "Greater Noida, India",
      description:
        "Computer Science with focus on software engineering and algorithms",
      hours: "Full-time student",
      status: "In Progress",
    },
    {
      id: 6,
      period: "Beta Testing",
      title: "Product Testing",
      company: "Nothing",
      duration: "Dec 2024 - Present",
      location: "Remote, India",
      description: "Device beta testing, bug reporting, quality assurance",
      hours: "5-10 hours/week",
      status: "Active",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPeriodColor = (period: string) => {
    switch (period) {
      case "Current":
        return "from-green-500 to-emerald-500";
      case "Recent":
        return "from-blue-500 to-cyan-500";
      case "Long-term":
        return "from-purple-500 to-pink-500";
      case "Ongoing":
        return "from-orange-500 to-red-500";
      case "Academic":
        return "from-indigo-500 to-purple-500";
      case "Beta Testing":
        return "from-teal-500 to-green-500";
      default:
        return "from-gray-500 to-gray-600";
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
          Work <span className="text-purple">Schedule</span> & Timeline
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A comprehensive overview of my current work commitments, internship
          schedule, and time allocation across different projects and roles.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
      >
        {scheduleData.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Period Badge */}
            <div
              className={`absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r ${getPeriodColor(
                item.period
              )} text-white text-xs font-bold rounded-full`}
            >
              {item.period}
            </div>

            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-blue-400 font-medium text-lg">
                    {item.company}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-400" />
                  <span>{item.duration}</span>
                </div>

                <div className="flex items-center text-gray-400 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-400" />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center text-gray-400 text-sm">
                  <FaClock className="w-4 h-4 mr-2 text-blue-400" />
                  <span>{item.hours}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Time Allocation Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className={`h-2 bg-gradient-to-r ${getPeriodColor(
                    item.period
                  )} rounded-full transition-all duration-300`}
                  style={{
                    width: item.hours.includes("40+")
                      ? "100%"
                      : item.hours.includes("30")
                      ? "75%"
                      : item.hours.includes("25")
                      ? "60%"
                      : item.hours.includes("15")
                      ? "40%"
                      : item.hours.includes("5")
                      ? "20%"
                      : "50%",
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 text-center">{item.hours}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
            <div className="text-gray-400 text-sm">Active Roles</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-gray-400 text-sm">Hours/Week</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Availability</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkSchedule;
