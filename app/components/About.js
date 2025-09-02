"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for
            development
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Hi, I&apos;m Saksham Manav 
              </h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  A passionate and curious <strong>Web Developer</strong>,
                  currently pursuing my engineering degree at
                  <strong> Teerthanker Mahaveer University</strong>. I
                  specialize in Full-Stack Web Development using technologies
                  like HTML, CSS, JavaScript, React, Next.js, Node.js, Express,
                  and MongoDB, SQL. I enjoy building intuitive user interfaces
                  and robust backend systems that deliver real value.
                </p>
                <p>
                  Alongside web development, I&apos;m also exploring the world
                  of <strong>Data Science and Machine Learning</strong>.
                  I&apos;m learning tools like Python, NumPy, Pandas, Matplotlib
                  and Scikit-learn to build intelligent applications powered by
                  data.
                </p>
                <p>
                  I&apos;m also actively sharpening my problem-solving skills
                  with <strong>Data Structures and Algorithms in C++</strong>.
                  I&apos;m always excited to learn, experiment, and collaborate
                  on new projects. Let&apos;s build something impactful
                  together!
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Education
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <h5 className="text-base font-semibold text-white mb-2">
                    Graduation (Engineering)
                  </h5>
                  <p className="text-gray-300 text-sm mb-1">
                    Teerthanker Mahaveer University (TMU)
                  </p>
                  <p className="text-gray-400 text-xs">2023-2027</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <h5 className="text-base font-semibold text-white mb-2">
                    XIIth (Intermediate)
                  </h5>
                  <p className="text-gray-300 text-sm mb-1">
                    Vasundhara Inter College (VIC)
                  </p>
                  <p className="text-gray-400 text-xs">2023</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <h5 className="text-base font-semibold text-white mb-2">
                    Xth (High School)
                  </h5>
                  <p className="text-gray-300 text-sm mb-1">
                    Vasundhara Inter College (VIC)
                  </p>
                  <p className="text-gray-400 text-xs">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
