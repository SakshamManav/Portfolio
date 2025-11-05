"use client";
import React from "react";
import {
  FaReact,
  FaNode,
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function InstagramClone() {
  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Socket.io",
    "JWT",
  ];

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Instagram Clone
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A full-stack Instagram clone built with the MERN stack. Features
            user authentication, real-time posts, likes, comments, and Socket.io
            chat. One of my first projects to learn full-stack development.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Demo Video</h2>
            <div className="flex justify-center">
               <iframe
                  src={`https://www.youtube.com/embed/jknnVrtwluQ`}
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
          <a
            href="https://instagram-clone-mocha-zeta.vercel.app/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-200"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
          <a
            href="https://github.com/SakshamManav/Instagram-Clone"
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
              <li>• User registration & login with JWT</li>
              <li>• Upload and view posts with images</li>
              <li>• Like and comment system</li>
              <li>• Real-time chat with Socket.io</li>
              <li>• Protected routes and user profiles</li>
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
              Backend takes up to 1 minute to load initially
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-xl text-center">
          <p className="text-yellow-300">
            <strong>Learning Project:</strong> Built to gain hands-on experience
            with full-stack development and real-time features.
          </p>
        </div>
      </div>
    </div>
  );
}
