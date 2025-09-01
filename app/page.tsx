"use client";

import { navItems } from "@/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import QualificationAndExperience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import SkillSet from "@/components/SkillSet";
import Certifications from "@/components/Certifications";
import WorkSchedule from "@/components/WorkSchedule";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <section id="about" className="min-h-screen">
          <Hero />
        </section>

        {/* Grid/About Section */}
        <section className="py-20">
          <Grid />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <RecentProjects />
          <div className="text-center mt-10">
            <a
              href="https://jotion-sand.vercel.app/preview/3hsyrt2wjj5mcw2h2rcw7d009r7phmr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <QualificationAndExperience />
        </section>

        {/* Work Schedule Section */}
        <section id="schedule" className="py-20">
          <WorkSchedule />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <SkillSet />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
