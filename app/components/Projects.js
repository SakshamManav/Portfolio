"use client";

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "School Management System",
      description:
        "A comprehensive, full-stack school management platform engineered with Next.js, Node.js, and SQL. SchoolFlow provides a seamless, real-time ecosystem for Admins, Teachers, and Students, featuring three distinct portals to streamline all academic operations from attendance to fee management.",
      technologies: ["Next.js", "Node.js", "Express", "SQL", "JWT"],
      liveUrl: "#",
      githubUrl:
        "https://github.com/SakshamManav/SchoolFlow-A-Real-Time-Educational-Operations-Platform",
      projectUrl: "/project/school-management",
      image: "/images/fee-management.png",
    },
    {
      id: 2,
      title: "Instagram Clone",
      description:
        "Built an Instagram Clone using the MERN stack with real-time messaging, authentication, and post-sharing features. Users can create posts, follow others, and chat in real-time.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io",
        "JWT",
      ],
      liveUrl: "https://instagram-clone-mocha-zeta.vercel.app/",
      githubUrl: "https://github.com/SakshamManav/Instagram-Clone",
      projectUrl: "/project/insta-clone",
      image: "/images/instagram-clone.png",
    },
    {
      id: 3,
      title: "Background Remover",
      description:
        "Created a background remover tool with a sleek UI. Users can upload images and remove backgrounds seamlessly using advanced AI algorithms for clean results.",
      technologies: ["React", "API",],
      liveUrl: "#",
      githubUrl: "https://github.com/SakshamManav/Background-Remover",
      projectUrl: "/project/bg-remover",
      image: "/images/background-remover.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  {project.liveUrl === "#" ? (
                    <div
                      className="flex-1 bg-gray-600 text-gray-400 px-4 py-2 rounded-lg text-sm font-medium text-center cursor-not-allowed relative group"
                      title="Live demo not available"
                    >
                      Demo N/A
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Live demo not available
                      </span>
                    </div>
                  ) : (
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-200 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.projectUrl && (
                    <Link
                      href={project.projectUrl}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-500 transition-colors"
                    >
                      Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Link href="https://github.com/SakshamManav">
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-200">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
