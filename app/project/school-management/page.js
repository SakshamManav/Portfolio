"use client";
import React from "react";
import {
  FaReact,
  FaNode,
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaDatabase,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMysql } from "react-icons/si";

export default function SchoolManagement() {
  const techStack = [
    "Next.js",
    "Node.js",
    "Express.js",
    "SQL",
    "JWT",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            School Management System
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive, full-stack school management platform engineered
            with Next.js, Node.js, and SQL. SchoolFlow provides a seamless,
            real-time ecosystem for Admins, Teachers, and Students, featuring
            three distinct portals to streamline all academic operations from
            attendance to fee management.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Demo Video</h2>
            <div className="flex justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/fNFVdfkdjKM`}
                  title="Project Demo Video"
                  width="800"
                  height="450"
                  style={{ maxWidth: '100%', borderRadius: '16px' }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            disabled
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-medium opacity-70 cursor-not-allowed"
          >
            <FaExternalLinkAlt />
            Live Demo
          </button>
          <a
            href="https://github.com/SakshamManav/SchoolFlow-A-Real-Time-Educational-Operations-Platform"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Three distinct portals (Admin, Teacher, Student)</li>
              <li>• Real-time attendance tracking system</li>
              <li>• Comprehensive fee management</li>
              <li>• Student profile and scheduling tracking</li>
              <li>• Teacher scheduling and student attendance tracking</li>
              <li>• Secure authentication with JWT</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Full-stack solution with modern web technologies
            </p>
          </div>
        </div>

        {/* Three Portals Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Three Distinct Portals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Admin Portal</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Manage teachers and students</li>
                <li>• Fee collection tracking</li>
                <li>• Student Management</li>
                <li>• Teacher Management</li>
                <li>• Timetable Management</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaCalendarAlt className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Teacher Portal</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Mark student attendance</li>
                <li>• Profile</li>
                <li>• Class scheduling</li>
                <li>• Student Details</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaDatabase className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Student Portal</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• View attendance records</li>
                <li>• Check profiles</li>
                <li>• Timetable</li>
                <li>• Class schedules</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl text-center">
          <p className="text-blue-300">
            <strong>Educational Project:</strong> Designed to streamline school
            operations and provide a comprehensive management solution for
            educational institutions.
          </p>
        </div>
      </div>
    </div>
  );
}
