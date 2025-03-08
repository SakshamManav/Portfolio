import React, { useEffect, useRef } from "react";
import "./MainBody.css";
import Typed from "typed.js";

export default function MainBody() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Welcome to my Portfolio!", "I am Saksham Manav, A full stack web developer"],
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of deleting
      backDelay: 1000, // Delay before deleting starts
      startDelay: 500, // Delay before typing starts
      // loop: true, // Keep repeating
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span ref={typedRef} className="span"></span>
        </h1>
        {/* <h2>and I am a Developer</h2> */}
      </div>
      <div className="hero-image">
        <img
          src="images/uwp3536740.jpeg"
          alt="Saksham"
          className="responsive-image"
        />
      </div>
    </section>
  );
}
