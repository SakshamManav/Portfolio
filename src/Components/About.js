import React, { useState } from "react";
import "./About.css";
export default function About() {
    const [skillOpen, setSkillOpen] = useState(true);
    const [experienceOpen, setExpereienceOpen] = useState(false);
    const [educationOpen, setEducationOpen] = useState(false);

  return (
    <>
    <div className="abt-contnr" id="about">
<div class="about-container">
      <div class="about-content">
        <div class="img-container">
          <img class="about-img" src="images/uwp3536740.jpeg" alt="" />
        </div>
        <div class="my-content">
          <h1 style={{textDecoration:"none", color:"#ffd8b8", fontFamily:"cursive"}}>About Me</h1>
          <p>
          Hi, I'm Saksham, a passionate full-stack developer from Moradabad. I completed my 12th in 2023 and am currently pursuing engineering at Teerthanker Mahaveer University.

I specialize in JavaScript, React, Node.js, and MongoDB, building scalable and efficient applications. From interactive frontend designs to optimized backend systems, I love crafting seamless user experiences.

I'm also an avid problem solver, continuously improving my Data Structures & Algorithms (DSA) skills in C++. Beyond coding, I share my knowledge through my YouTube channel, Chotu Coder, where I create tutorials on web development and programming concepts.

Always eager to learn and take on new challenges, I aim to build innovative and user-friendly digital experiences. Let’s connect and create something amazing!
          </p>
          
        </div>
      </div>

     
    </div>
    </div>
    <div>
    <div className="about-btn-container">
      <div class="about-btns">
      <div className="about-container-2">
            <button class="skills" style={{ color:skillOpen ? "#ffd8b8" : "pink" }} onClick={()=>{
                setExpereienceOpen(false);
                setEducationOpen(false);
                setSkillOpen(true);
            }}>Skills {skillOpen ? <i class="fa-solid fa-angle-down"></i> : ""}</button>
            {skillOpen && <div class="skills-expand">
                <span style={{color:"#ba273d", fontWeight:"bold"}} > HTML <i class="fa-brands fa-html5"></i></span>
                <span style={{color:"#886bfa", fontWeight:"bold"}}  > CSS <i class="fa-brands fa-css3"></i></span>
                <span style={{color:"#f7e74f", fontWeight:"bold"}} > JavaScript <i class="fa-brands fa-js"></i></span>
                <span style={{color:"#8dd4fc", fontWeight:"bold"}} > React Js <i class="fa-brands fa-react"></i></span>
                <span style={{color:"#047502", fontWeight:"bold"}}> MongoDB <i class="fa-brands fa-envira"></i> </span>
                <span style={{color:"#8ffc8d", fontWeight:"bold"}}> Node Js <i class="fa-brands fa-node-js"></i></span>
                <span style={{color:"#f53659", fontWeight:"bold"}}> Express</span>
            </div>}
            </div>
            <div className="about-container-2">
            <button class="experience" style={{ color:experienceOpen ? "#ffd8b8" : "pink"  }} onClick={()=>{
                setSkillOpen(false);
                setEducationOpen(false);
                setExpereienceOpen(true)
            }}>Experience {experienceOpen ? <i class="fa-solid fa-angle-down"></i> : ""}</button>
            {experienceOpen && <div class="experience-expand" >
              <span> Created a Instagram Clone using MERN stack</span>
              <span> Created chrome extension like weather extension, game extensions.</span>
            </div>}
            </div>
            <div className="about-container-2">
               <button class="education" style={{ color:educationOpen ? "#ffd8b8" : "pink"  }} onClick={()=>{
                setSkillOpen(false);
                setEducationOpen(true);
                setExpereienceOpen(false)
            }}>Education {educationOpen ? <i class="fa-solid fa-angle-down"></i> : ""}</button>
            {educationOpen && <div class="education-expand">
            <span>Xth from Vasundhara Inter College(VIC) in UP Board</span>
            <span>XIIth from Vasundhara Inter College(VIC) in UP Board</span>
            <span>Graduation from Teerthanker Mahaveer University(TMU)</span>
              
            </div>}
            </div>
           
          </div>
          
    </div>  
    </div>
    
    </>
  );
}
