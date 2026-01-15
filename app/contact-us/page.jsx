"use client";
import React, { useState } from "react"; // useState add kiya
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquareCode,
  Loader2,
  CheckCircle,
} from "lucide-react"; // Extra icons
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
      link: "https://www.facebook.com/bizgrowholdings",
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
          fetchPriority="high"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4">
          <FadeIn direction="up">
            <h1 className="text-white text-5xl md:text-7xl text-center font-bold tracking-tighter">
              Let’s Start a{" "}
              <span className="text-orange-500">Conversation</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="w-full flex justify-center">
              <p className="text-gray-200 text-lg md:text-xl text-center mt-4 max-w-2xl font-light">
                Have a project in mind? Reach out to us and let’s build
                something incredible together.
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
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
  {/* 1. Contact Info - Minimalist Floating Style */}
  <div className="lg:col-span-1 space-y-8">
    <div className="space-y-2 mb-10 text-left">
      <h3 className="text-[#B54118] font-black text-xs tracking-[0.4em] uppercase">
        Contact Details
      </h3>
      <h2 className="text-4xl font-black dark:text-white text-slate-900 leading-none">
        LET'S START <br /> SOMETHING BIG.
      </h2>
    </div>

    {contactInfo.map((item, index) => {
      const ItemContent = (
        <div className="group flex items-center gap-6 p-2 cursor-pointer">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border border-gray-100 dark:border-white/10 group-hover:border-[#B54118] group-hover:bg-[#B54118] group-hover:text-white ${item.iconColor} bg-white dark:bg-slate-900 shadow-xl group-hover:shadow-[#B54118]/40 shrink-0`}
          >
            <div className="group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              {item.title}
            </span>
            <span className="text-lg font-bold dark:text-white text-slate-800 group-hover:text-[#B54118] transition-colors duration-300">
              {item.details}
            </span>
          </div>
        </div>
      );

      return (
        <FadeIn key={index} direction="right" delay={index * 0.1}>
          {item.isSocial ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
              {ItemContent}
            </a>
          ) : (
            <div>{ItemContent}</div>
          )}
        </FadeIn>
      );
    })}
  </div>

  {/* 2. Contact Form Container */}
  <div className="lg:col-span-2 relative">
    <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#B54118]/20 blur-[120px] rounded-full z-0 pointer-events-none" />
    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/10 blur-[120px] rounded-full z-0 pointer-events-none" />

    <FadeIn direction="up">
      <div className="relative z-10 overflow-hidden bg-white/80 dark:bg-black/40 backdrop-blur-2xl p-8 md:p-14 rounded-[3.5rem] border border-gray-200 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] min-h-[500px] flex flex-col justify-center">
        
        {status === "success" ? (
          /* --- ULTRA PREMIUM SUCCESS STATE --- */
          <div className="flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
                <CheckCircle className="w-24 h-24 text-green-500 relative z-10 animate-bounce" />
            </div>
            <div className="space-y-2">
                <h3 className="text-4xl font-black dark:text-white text-slate-900 tracking-tighter uppercase">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
            </div>
            <button 
                onClick={() => setStatus("idle")} 
                className="text-[#B54118] font-black text-xs uppercase tracking-[0.3em] hover:underline pt-4"
            >
                Send another message
            </button>
          </div>
        ) : (
          /* --- CONTACT FORM --- */
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { label: "Your Name", name: "name", type: "text", placeholder: "JOHN DOE" },
                { label: "Email Address", name: "email", type: "email", placeholder: "HELLO@BIZGROW.COM" },
              ].map((field) => (
                <div key={field.name} className="relative group text-left">
                  <input
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    type={field.type}
                    placeholder=" "
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 focus:border-[#B54118] outline-none transition-all duration-500 peer dark:text-white font-bold text-lg"
                  />
                  <label className="absolute left-0 top-0 text-gray-400 text-xs font-black uppercase tracking-widest transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#B54118] pointer-events-none">
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative group md:col-span-2 text-left">
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder=" "
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 focus:border-[#B54118] outline-none transition-all duration-500 peer dark:text-white font-bold text-lg"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-xs font-black uppercase tracking-widest transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#B54118] pointer-events-none">
                  What are you looking for?
                </label>
              </div>

              <div className="relative group md:col-span-2 text-left">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder=" "
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 focus:border-[#B54118] outline-none transition-all duration-500 peer dark:text-white font-bold text-lg resize-none"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-xs font-black uppercase tracking-widest transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#B54118] pointer-events-none">
                  Project Details
                </label>
              </div>
            </div>

            <div className="pt-6 text-left">
              <button
                disabled={status === "sending"}
                className="relative overflow-hidden w-full md:w-auto px-20 py-6 bg-black dark:bg-white text-white dark:text-black font-black rounded-full transition-all duration-500 hover:bg-[#B54118] dark:hover:bg-[#B54118] hover:text-white shadow-2xl group active:scale-95 disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-xs font-black">
                  {status === "sending" ? "Processing..." : "Submit Inquiry"}
                  <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </div>
              </button>
              {status === "error" && (
                <p className="text-red-500 mt-4 text-xs font-bold uppercase tracking-widest">
                  ⚠️ Error! Please try again.
                </p>
              )}
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
            <div
              className="relative w-full h-[450px] rounded-[3rem] overflow-hidden border-5 
             border-white dark:border-orange-500 shadow-2xl bg-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.565874492323!2d0.15570537704646543!3d51.53951557182046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a59483015f6f%3A0xc07a2164a2752174!2sCEME%20Innovation%20Centre!5e0!3m2!1sen!2suk!4v1709123456789!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="BizGrow Digital Location" //
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
