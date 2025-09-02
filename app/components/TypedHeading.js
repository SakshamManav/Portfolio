"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedHeading() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "DSA Enthusiast",
        "Problem Solver",
        "Engg. Student",
        
        
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: false, // Disable auto CSS injection to prevent conflicts
      preStringTyped: function (arrayPos, self) {
        // This will be called before each string is typed
      },
    };

    typed.current = new Typed(el.current, options);

    return () => {
      if (typed.current) {
        typed.current.destroy();
        typed.current = null;
      }
    };
  }, []);

  return (
    <div className="text-center lg:text-left">
      <div className="h-32 md:h-40 lg:h-48 flex items-center justify-center lg:justify-start">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mt-16 sm:mt-0 stylish-heading"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          I&apos;m Saksham Manav - <br className="sm:hidden" />
          <span ref={el} className="typed-element"></span>
        </h1>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .stylish-heading {
          font-family: 'Playfair Display', serif;
        }
        .typed-element .typed-cursor {
          opacity: 1;
          animation: typedjsBlink 0.7s infinite;
          color: currentColor;
        }
        @keyframes typedjsBlink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
