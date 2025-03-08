import React, { useState } from "react";
import "./Contact.css"; 

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(true);
    const [loader, setLoader] = useState(false);
    const onSubmit = async (event) => {
        setLoader(true)
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f0700c0f-1c62-44b2-92a2-a98997277ed1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
            
        }).then((res) => res.json());

        if (res.success) {
            setLoader(false)
            setShow(false);  // Hide form
            setSubmitted(true); // Show thank-you message
            console.log("Success", res);
        }
    };

    return (
        <>
        <div className="contact-container" id="contact">
            {show && ( 
                <div className="contact-content">
                    <div className="contact-form">
                        <h2>Get in touch</h2>
                        <form onSubmit={onSubmit}>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="message" placeholder="Your Message" required></textarea>
                            <button type="submit" >{loader ? <span class="loader"></span> : "Submit"} </button>
                            
                        </form>
                    </div>
                    <div className="contact-image">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/508/957/small_2x/3d-chat-mail-message-notification-chatting-illustration-png.png" alt="Illustration" />
                    </div>
                </div>
            )}
            {submitted && (
                <div className="thank-you">
                    <h2>🎉 Thank You! 🎉</h2>
                    <p>Your message has been received.</p>
                    <p>I'll get back to you soon! 😊</p>
                    <button onClick={() => { setShow(true); setSubmitted(false); }}>Send Another Message</button>
                </div>
            )}        </div>
            <div className="connect-container">
                <h1>Connect with me</h1>
                <div className="connect-icons">
                {/* <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="Github" /> */}
                <a href="https://www.linkedin.com/in/saksham-manav-18b303334/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" href="https://www.instagram.com/sakshammanav/" alt="LinkedIn" /></a> 
                <a href="https://github.com/SakshamManav" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github" /></a>
                <a href="https://www.instagram.com/sakshammanav/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>     
                </div>
                    
            </div>
            </>
    );
}

export default Contact;
