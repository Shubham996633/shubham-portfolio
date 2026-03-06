"use client";

import { motion } from "framer-motion";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WorkSchedule = () => {
  const scheduleData = [
    {
      id: 1,
      period: "Current",
      title: "Full-Stack & AI/LLM Backend Engineer (Lead)",
      company: "CareerCraft360",
      duration: "Sep 2024 - Present",
      location: "Remote",
      description:
        "Building and maintaining AI-powered career coaching platform with Next.js, FastAPI, GCP. LLM/RAG integration, Stripe payments, real-time WebSocket features.",
      hours: "40+ hours/week",
      status: "Active",
    },
    {
      id: 2,
      period: "Current",
      title: "Software Developer Engineer Intern",
      company: "Xoidlabs",
      duration: "Jan 2026 - Present",
      location: "Remote",
      description:
        "Full-stack development for Trukoder client project, Zapier automations, and contributing to core product Recapi.ai.",
      hours: "40+ hours/week",
      status: "Active",
    },
    {
      id: 3,
      period: "Recent",
      title: "Full-Stack & Automation Lead",
      company: "ArkaHub",
      duration: "Jun 2025 - Jan 2026",
      location: "Remote",
      description:
        "Zoho Bigin & Analytics automation, Next.js + Supabase portal, Python roof extraction system, CircleCI + Docker pipelines.",
      hours: "40+ hours/week",
      status: "Completed",
    },
    {
      id: 4,
      period: "Recent",
      title: "Backend & DevOps Engineer Intern",
      company: "GoPool",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote",
      description:
        "Scalable GoLang services, FastAPI WebSocket for real-time AI gym analytics, zero-downtime Azure deployments.",
      hours: "30 hours/week",
      status: "Completed",
    },
    {
      id: 5,
      period: "Long-term",
      title: "Full-Stack Developer Intern",
      company: "Monkey Science",
      duration: "Nov 2023 - Jun 2025",
      location: "Remote, Bangalore",
      description:
        "Designed 8 scalable FastAPI microservices with Zoho Books invoicing automation. Built centralized admin dashboard.",
      hours: "40+ hours/week",
      status: "Completed",
    },
    {
      id: 6,
      period: "Academic",
      title: "B.Tech - Computer Science & Engineering",
      company: "Dr. A.P.J. Abdul Kalam Technical University",
      duration: "Nov 2022 - Jun 2026",
      location: "Lucknow, India",
      description:
        "SGPA: 7.51. Relevant: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Artificial Intelligence.",
      hours: "Full-time student",
      status: "In Progress",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const getTimelineColor = (period: string) => {
    switch (period) {
      case "Current":
        return "bg-green-500";
      case "Recent":
        return "bg-blue-500";
      case "Long-term":
        return "bg-purple-500";
      case "Academic":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
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
          My professional journey and current work commitments across roles.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/[0.08]" />

          {scheduleData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-3 h-3 rounded-full ${getTimelineColor(item.period)} ring-4 ring-[#0a0d1a]`} />
              </div>

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-0 md:mr-auto md:pl-0" : "md:pl-0 md:ml-auto md:pr-0"
              }`}>
                <div className="rounded-2xl border border-white/[0.1] bg-[#0a0d1a] p-5 hover:border-purple/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs text-gray-500">{item.period}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-purple text-sm font-medium mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-gray-600" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-gray-600" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-gray-600" />
                      {item.hours}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto px-4">
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0d1a] p-5 text-center">
            <div className="text-2xl font-bold text-purple mb-1">5</div>
            <div className="text-gray-500 text-xs">Companies</div>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0d1a] p-5 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">2+</div>
            <div className="text-gray-500 text-xs">Years Experience</div>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0d1a] p-5 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
            <div className="text-gray-500 text-xs">Active Roles</div>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0d1a] p-5 text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">Remote</div>
            <div className="text-gray-500 text-xs">Work Style</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkSchedule;
