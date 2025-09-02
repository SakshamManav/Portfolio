'use client';
import React from 'react';
import { FaReact, FaGithub, FaExternalLinkAlt, FaUpload, FaDownload, FaMobile } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

export default function BackgroundRemover() {
  const techStack = ["React.js", "HTML", "CSS", "JavaScript", "AI API"];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 pt-24">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Background Remover Tool
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            This is a simple web application that removes the background from images using AI. 
            I built the frontend using React. The actual background 
            removal API code was generated using AI. The tool lets users upload an image and 
            get the background-removed version in seconds.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Demo Video</h2>
            <div className="flex justify-center">
              <iframe
                  src={`https://www.youtube.com/embed/S2rxidHtvE8`}
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
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium opacity-70 cursor-not-allowed"
          >
            <FaExternalLinkAlt />
            Live Demo
          </button>
          <button
            disabled
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium opacity-70 cursor-not-allowed"
          >
            <FaGithub />
            GitHub
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Upload and preview image</li>
              <li>• Remove background using AI-generated API</li>
              <li>• Download the processed image</li>
              <li>• Responsive UI for all devices</li>
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
              Simple frontend with AI-powered backend API
            </p>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaReact className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="text-gray-300 text-sm">
                Built with React.js for interactive user interface and smooth user experience
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaUpload className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">API Integration</h3>
              <p className="text-gray-300 text-sm">
                Background removal logic generated using AI for efficient processing
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <FaDownload className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Process Flow</h3>
              <p className="text-gray-300 text-sm">
                Accepts image, sends to API, returns transparent PNG instantly
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Upload Image</h3>
                <p className="text-gray-300 text-sm">Users select and upload an image from their device</p>
              </div>
              <div>
                <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-300 text-sm">AI-powered API removes the background automatically</p>
              </div>
              <div>
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Download Result</h3>
                <p className="text-gray-300 text-sm">Get transparent PNG ready for download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Experience */}
        <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Learning Experience</h3>
          <p className="text-gray-300">
            &quot;This tool helped me learn how to use third-party APIs with React and build clean UI using minimal code.&quot;
          </p>
        </div>

      </div>
    </div>
  );
}