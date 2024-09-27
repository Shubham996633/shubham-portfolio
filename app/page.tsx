"use client";

import { navItems } from "@/data";

import QualificationAndExperience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import SkillSet from "@/components/SkillSet";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <div>
          <a href="https://jo-portfolio2.vercel.app/#portfolio" target="blank">
            <button className="justify-center ml-[42%] items-center hover:underline p-0 bg-transparent shadow-md font-bold text-3xl text-white-100">
              See all projects
            </button>
          </a>
        </div>
        <QualificationAndExperience />
        <SkillSet />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
