"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, MessageSquareCode } from "lucide-react";
import FadeIn from "@components/MotionWrapper";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+92 300 1234567",
      desc: "Mon-Fri from 9am to 6pm.",
      bgColor: "bg-orange-100",
      iconColor: "text-[#B54118]",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@bizgrow.com",
      desc: "We respond within 24 hours.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Lahore, Punjab, Pakistan",
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

  return (
    <section className="relative w-full bg-gray-50 antialiased">
      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full">
        <Image
          src="/services-hero.jpg"
          alt="Contact Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4">
          <FadeIn direction="up">
            <h1 className="text-white text-5xl md:text-7xl text-center font-bold tracking-tighter [text-rendering:optimizeLegibility]">
              Let’s Start a <span className="text-orange-500">Conversation</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-200 text-lg md:text-xl text-center mt-4 max-w-2xl font-light" style={{ transform: 'translateZ(0)' }}>
              Have a project in mind? Reach out to us and let’s build something incredible together.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTACT CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 py-20  relative z-10">
               <h1 className="text-5xl mb-4 font-black text-center text-slate-900 uppercase">
              Get in Touch
            </h1>
             <div className="w-1/5 h-1 my-6 bg-[#B54118]  mx-auto rounded-full" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Contact Info Cards (Left Side) */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {contactInfo.map((item, index) => {
              const CardInner = (
                <div className="bg-white dark:bg-[#000B25] p-7 rounded-[2rem] shadow-sm border border-[#B54118] flex items-start gap-5 group hover:shadow-xl transition-all h-full shrink-0" style={{ transform: 'translateZ(0)' }}>
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

          {/* 2. Contact Form (Right Side) */}
          <div className="lg:col-span-2">
            <FadeIn direction="up">
              <div className="bg-white  dark:bg-[#000B25] p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-[#B54118]">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Send us a Message</h2>
                  <div className="w-12 h-1 bg-[#B54118] mt-2 rounded-full" />
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all" />
                  </div>
                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Subject</label>
                    <input type="text" placeholder="How can we help?" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all" />
                  </div>
                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-white ml-1">Message</label>
                    <textarea rows={4} placeholder="Your project details..." className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#B54118]/20 focus:border-[#B54118] outline-none transition-all resize-none" />
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full md:w-max px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-lg uppercase tracking-widest flex items-center justify-center gap-3">
                      Send Message <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* --- FIXED MAP SECTION --- */}
      <section className="pb-20 px-4 md:px-20">
        <FadeIn direction="up">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317788.248899627!2d0.17185!3d51.51834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a559375c3235%3A0xd4e3f499e51befee!2sCEME%20Campus!5e0!3m2!1sen!2sus!4v1767348057582!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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