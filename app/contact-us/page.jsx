"use client";
import React, { useState } from "react"; // useState add kiya
import Image from "next/image";
import { Mail, Phone, MapPin, Send, MessageSquareCode, Loader2, CheckCircle } from "lucide-react"; // Extra icons
import FadeIn from "@components/MotionWrapper";

const ContactPage = () => {
  // 1. Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+44 7903 332433 / 020 8090 4209",
      desc: "Mon-Fri from 9am to 5pm.",
      bgColor: "bg-orange-100",
      iconColor: "text-[#B54118]",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "Info@bizgrow-digital.co.uk",
      desc: "We respond within 24 hours.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "CEME Campus, Marsh Way, RM13 8EU",
      desc: "Come say hello at our office.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <MessageSquareCode className="w-6 h-6" />,
      title: "Social Connect",
      details: "BizGrow Holdings Ltd.",
      desc: "Follow us on Facebook for latest updates.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      isSocial: true,
      link: "https://www.facebook.com/bizgrowholdings"
    },
  ];

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000); // 5 sec baad normal
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full bg-gray-50 dark:bg-black dark:border-y-2 dark:border-orange-700 antialiased">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[75vh] md:h-screen w-full">
        <Image
          src="/contact-us-hero.jpg"
          alt="Contact Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4">
          <FadeIn direction="up">
            <h1 className="text-white text-5xl md:text-7xl text-center font-bold tracking-tighter">
              Let’s Start a <span className="text-orange-500">Conversation</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="w-full flex justify-center">
              <p className="text-gray-200 text-lg md:text-xl text-center mt-4 max-w-2xl font-light">
                Have a project in mind? Reach out to us and let’s build something incredible together.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTACT CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 py-20 dark:border-t dark:border-orange-700 relative z-10">
        <h1 className="text-5xl mb-4 font-black text-center text-slate-900 dark:text-white uppercase">
          Get in Touch
        </h1>
        <div className="w-1/5 h-1 my-6 bg-[#B54118] mx-auto rounded-full" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Contact Info Cards */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {contactInfo.map((item, index) => {
              const CardInner = (
                <div className="bg-white dark:bg-[#000B25] p-7 rounded-[2rem] shadow-sm border border-[#B54118] flex items-start gap-5 group hover:shadow-xl transition-all h-full shrink-0">
                  <div className={`p-4 rounded-2xl ${item.bgColor} ${item.iconColor} group-hover:scale-110 transition-transform shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-xl font-bold dark:text-white text-slate-800">{item.title}</h3>
                    <p className={`font-semibold my-1 truncate ${item.isSocial ? "text-blue-600" : "text-[#B54118]"}`}>
                      {item.details}
                    </p>
                    <p className="text-gray-500 text-sm leading-tight">{item.desc}</p>
                  </div>
                </div>
              );

              return (
                <FadeIn key={index} direction="right" delay={index * 0.1}>
                  {item.isSocial ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                      {CardInner}
                    </a>
                  ) : (
                    <div className="h-full">{CardInner}</div>
                  )}
                </FadeIn>
              );
            })}
          </div>

          {/* 2. Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn direction="up">
              <div className="bg-white dark:bg-[#000B25] p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-[#B54118]">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Send us a Message</h2>
                  <div className="w-12 h-1 bg-[#B54118] mt-2 rounded-full" />
                </div>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                    <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} className="text-[#B54118] font-bold underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2 ">
                      <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Full Name</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="px-6 py-4 bg-gray-50 dark:bg-slate-900 border border-black-600  dark:text-white  dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all" 
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Email Address</label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="px-6 py-4 bg-gray-50 dark:bg-slate-900 dark:text-white border border-black-600 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all" 
                      />
                    </div>
                    <div className="flex flex-col space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Subject</label>
                      <input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        type="text" 
                        placeholder="How can we help?" 
                        className="px-6 py-4 bg-gray-50 dark:bg-slate-900 dark:text-white border border-black-600 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all" 
                      />
                    </div>
                    <div className="flex flex-col space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Message </label>
                      <textarea 
                        name="message"
                        value={formData.message}  
                        onChange={handleChange}
                        required
                        rows={4} 
                        placeholder="Your project details..." 
                        className="px-6 py-4 bg-gray-50 dark:bg-slate-900 dark:text-white border border-black-600 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all resize-none" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button 
                        disabled={status === "sending"}
                        className="w-full md:w-max px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-lg uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                        ) : (
                          <>Send Message <Send className="w-5 h-5" /></>
                        )}
                      </button>
                      {status === "error" && <p className="text-red-500 mt-2 text-sm font-bold">Failed to send message. Please try again.</p>}
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* --- MAP SECTION --- */}
      <section className="pb-20 px-4 md:px-20">
        <FadeIn direction="up">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden border-5 
             border-white dark:border-orange-500 shadow-2xl bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.565874492323!2d0.15570537704646543!3d51.53951557182046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a59483015f6f%3A0xc07a2164a2752174!2sCEME%20Innovation%20Centre!5e0!3m2!1sen!2suk!4v1709123456789!5m2!1sen!2suk"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="transition-all duration-700"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </section>
  );
};

export default ContactPage;