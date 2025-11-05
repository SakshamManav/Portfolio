"use client";
import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaVideo,
  FaPlayCircle,
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function EduKnow() {
  const techStack = [
    "Next.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Supabase",
    "Auth0",
    "JWT",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            eduKnow – Learning Management System
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A full-featured Learning Management System built to provide a
            seamless experience for both students and instructors. It includes
            course creation, enrollment tracking, secure video streaming using
            Supabase signed URLs, and complete role-based access control.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Demo Video</h2>
            <div className="flex justify-center">
              <iframe
                src={`https://www.youtube.com/embed/nxGjP1AozA8`}
                title="eduKNow Project Demo Video"
                width="800"
                height="450"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
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
            href="https://github.com/SakshamManav/eduKnow"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

        {/* Features and Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Role-based access for students and instructors</li>
              <li>• Students can browse, enroll, and access video-based courses</li>
              <li>• Instructors can create and manage their own courses</li>
              <li>• Secure video streaming using Supabase signed URLs</li>
              <li>• Profile management for both user types</li>
              <li>• Dynamic sections and video uploads per course</li>
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
              Full-stack architecture designed for secure, scalable e-learning.
            </p>
          </div>
        </div>

        {/* Role Overview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Role-Based System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaUserGraduate className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Student Panel</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Explore and view all available courses</li>
                <li>• Enroll and access course videos securely</li>
                <li>• View all enrolled courses in My Enrollments</li>
                <li>• Manage personal profile</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaChalkboardTeacher className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instructor Panel</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Create and manage personal courses</li>
                <li>• Add sections and upload videos</li>
                <li>• Preview courses as students see them</li>
                <li>• Edit personal details and profile</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl text-center">
          <p className="text-green-300">
            <strong>Project eduKNow:</strong> Designed to simplify online learning
            by providing an intuitive, secure, and scalable platform for students
            and instructors alike.
          </p>
        </div>
      </div>
    </div>
  );
}
