"use client";
import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFileUpload,
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaExchangeAlt,
} from "react-icons/fa";

export default function FileSynchronization() {
  const techStack = ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"];

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            File Synchronization System
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A simple yet powerful system that allows users to instantly transfer
            files and messages from mobile to laptop within seconds. Files such
            as PDFs, Word documents, images, and videos are stored temporarily
            for 15 minutes before being automatically deleted for privacy and
            efficiency.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Demo Video</h2>
          <div className="flex justify-center">
            <iframe
              src={`https://www.youtube.com/embed/1XqNBTG_BBc`}
              title="File Synchronization Project Demo"
              width="800"
              height="450"
              style={{ maxWidth: "100%", borderRadius: "16px" }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            disabled
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium opacity-70 cursor-not-allowed"
          >
            <FaExternalLinkAlt />
            Live Demo
          </button>
          <a
            href="https://github.com/SakshamManav/File-Synchronization"
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
              <li>• Instantly send files from mobile to laptop in 1–2 seconds</li>
              <li>• Supports PDFs, images, videos, Word files, and text messages</li>
              <li>• Temporary file storage for 15 minutes with auto-deletion</li>
              <li>• Secure and fast transfer using local network connection</li>
              <li>• Simple and minimal web interface for quick usage</li>
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
              Lightweight and efficient design focused on quick file transfers.
            </p>
          </div>
        </div>

        {/* System Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaMobileAlt className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Upload</h3>
              <p className="text-gray-300 text-sm">
                User uploads any file or message through their mobile browser.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaExchangeAlt className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Sync</h3>
              <p className="text-gray-300 text-sm">
                File is transferred instantly to the laptop using the Node.js
                backend and stored in the upload directory.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaLaptop className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Laptop Download</h3>
              <p className="text-gray-300 text-sm">
                The user can view and download files directly on the laptop.
                Files are automatically deleted after 15 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl text-center">
          <p className="text-blue-300">
            <strong>File Synchronization:</strong> A lightweight and efficient
            project built for quick file sharing between mobile and laptop, with
            an emphasis on speed, simplicity, and security.
          </p>
        </div>
      </div>
    </div>
  );
}
