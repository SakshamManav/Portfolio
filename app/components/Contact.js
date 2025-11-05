"use client";
import React, { useState } from "react";
import Image from "next/image";


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(true);
  const [loader, setLoader] = useState(false);

  const onSubmit = async (event) => {
    setLoader(true);
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
      setLoader(false);
      setShow(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Get in touch</h2>
            {show && (
              <form onSubmit={onSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
                  disabled={loader}
                >
                  {loader ? (
                    <span className="loader border-2 border-t-2 border-white border-t-blue-500 rounded-full w-6 h-6 animate-spin"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
            {submitted && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">🎉 Thank You! 🎉</h2>
                <p className="mb-2">Your message has been received.</p>
                <p className="mb-6">I &apos;ll get back to you soon! 😊</p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
                  onClick={() => {
                    setShow(true);
                    setSubmitted(false);
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
          {/* Contact Illustration & Socials */}
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/008/508/957/small_2x/3d-chat-mail-message-notification-chatting-illustration-png.png"
              alt="Contact Illustration"
              width={260}
              height={260}
              className="rounded-xl object-contain shadow-xl"
              priority
            />
            <div className="flex gap-6 mt-4">
              <a href="https://x.com/SakshamManav25" target="_blank" rel="noreferrer">
                <Image src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="X (Twitter)" width={40} height={40} />
              </a>
              <a href="https://www.linkedin.com/in/saksham-manav-18b303334/" target="_blank" rel="noreferrer">
                <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width={40} height={40} />
              </a>
              <a href="https://github.com/SakshamManav" target="_blank" rel="noreferrer">
                <Image src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github" width={40} height={40} />
              </a>
              <a href="https://www.youtube.com/@Chotucoder" target="_blank" rel="noreferrer">
                <Image src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" alt="YouTube" width={40} height={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
