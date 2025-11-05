"use client";
import Link from "next/link";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiCplusplus,
  SiKubernetes,
  SiTensorflow,
  SiTypescript,
  SiBootstrap,
  SiPostman,
  SiFigma,
  SiVercel,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiVisualstudiocode,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FaReact className="text-3xl text-blue-400" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-500" />,
        },
      ],
    },
    {
      category: "Backend Development",
      icon: <FaNode className="text-3xl text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      category: "Programming Languages",
      icon: <FaJs className="text-3xl text-yellow-400" />,
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      ],
    },
    {
      category: "Data Science & ML",
      icon: <FaPython className="text-3xl text-yellow-400" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
        { name: "Pandas", icon: <SiPandas className="text-blue-600" /> },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="text-orange-400" />,
        },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <FaGitAlt className="text-3xl text-red-500" />,
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      category: "Problem Solving",
      icon: <SiCplusplus className="text-3xl text-blue-600" />,
      skills: [
        {
          name: "Data Structures",
          icon: <FaNode className="text-green-500" />,
        },
        { name: "Algorithms", icon: <SiCplusplus className="text-blue-600" /> },
        {
          name: "Competitive Programming",
          icon: <FaJava className="text-red-500" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across
            different domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Interested in working together? Let&apos;s discuss your project!
          </p>
          <Link href="/#contact">
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 hover:bg-gray-200 transition-all duration-200">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
