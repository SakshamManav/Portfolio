import Image from "next/image";
import Navbar from "./components/navbar";
import TypedHeading from "./components/TypedHeading";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            <div className="text-center lg:text-left">
              <TypedHeading />
              <p className="mt-12 text-l md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Passionate about creating amazing web experiences and solving
                complex problems through code.
              </p>

              {/* Mobile Image - Only visible on mobile */}
              <div className="mt-8 lg:hidden flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                  <div className="absolute inset-0 bg-gray-700 rounded-2xl shadow-2xl flex items-center justify-center">
                    {/* Placeholder for photo - replace with your actual image */}
                    <div className="text-center text-gray-400">
                     <div className="flex items-center justify-center w-full h-full">
                       <Image
                         src="/images/batman-photo.png"
                         alt="Profile Image"
                         fill
                         sizes="100vw"
                         className="object-cover rounded-2xl"
                         priority
                       />
                     </div>
                    </div>
                  </div>
                  {/* Decorative elements
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full opacity-20"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gray-300 rounded-full opacity-30"></div> */}
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/files/Sakshammanav.pdf"
                  download
                  className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-200 text-center"
                >
                  My Resume
                </a>
                <button className="border border-gray-700 text-gray-300 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-200">
                  <Link href="/#contact">Contact Me</Link>
                </button>
              </div>
            </div>

            {/* Right Column - Photo (hidden on mobile) */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gray-700 rounded-2xl shadow-2xl flex items-center justify-center">
                  {/* Placeholder for photo - replace with your actual image */}
                  <div className="text-center text-gray-400">
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src="/images/batman-photo.png"
                        alt="Profile Image"
                        fill
                        sizes="100vw"
                        className="object-cover rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300 rounded-full opacity-30"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}
