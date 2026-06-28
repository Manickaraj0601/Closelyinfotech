import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiGlobe, FiSmartphone, FiLayers, FiCpu, FiCloud, FiSettings, 
  FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, 
  FiArrowUp, FiSend, FiExternalLink, FiClock
} from 'react-icons/fi';
import { 
  FaReact, FaNodeJs, FaServer, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaWhatsapp 
} from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { SiDotnet } from 'react-icons/si';

import ParticlesBg from '../components/ParticlesBg';
import StatsCounter from '../components/StatsCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import Logo from '../components/Logo';
import logoImg from '../assets/image/C-logo.webp';
import logoDarkImg from '../assets/image/C-logo-dark.webp';
import logirouteImg from '../assets/image/logiroute_wms_concept.png';
import insurclaimImg from '../assets/image/insurclaim.webp';
import fleettrackerImg from '../assets/image/fleettracker.webp';

gsap.registerPlugin(ScrollTrigger);

// Animated Tech Illustration Component
function TechIllustration() {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center max-w-[500px] mx-auto select-none">
      {/* Background glow bulbs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl animate-pulse duration-[6s]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary/10 dark:bg-secondary/15 blur-3xl animate-pulse duration-[8s] delay-1000" />
      
      {/* Interactive SVG illustration */}
      <motion.svg 
        viewBox="0 0 500 500" 
        className="w-full h-full relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Outer orbital rings */}
        <motion.circle 
          cx="250" cy="250" r="210" 
          fill="none" stroke="currentColor" className="text-slate-350/10 dark:text-slate-700/20" 
          strokeWidth="1.5" strokeDasharray="5 15"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="250" cy="250" r="160" 
          fill="none" stroke="currentColor" className="text-primary/20 dark:text-primary/30" 
          strokeWidth="1.5" strokeDasharray="10 10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating tech stack nodes */}
        {/* Core Node */}
        <motion.g 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main platform box */}
          <rect x="175" y="195" width="150" height="110" rx="16" fill="none" />
          
          {/* Brand Logo images (toggled by light/dark modes) centered in the platform box */}
          <image href={logoImg} x="190" y="222" width="120" height="56" className="light-logo" />
          <image href={logoDarkImg} x="190" y="222" width="120" height="56" className="dark-logo" />
          
          <circle cx="295" cy="270" r="8" fill="var(--accent)" />
          <circle cx="295" cy="270" r="14" fill="none" stroke="var(--accent)" strokeWidth="1" className="animate-ping origin-center" />
        </motion.g>

        {/* Orbit Node 1: Web */}
        <motion.g 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="100" cy="150" r="30" fill="url(#blueGradient)" />
          <path d="M92 142h16v16H92z" fill="none" stroke="white" strokeWidth="2" />
          <path d="M88 150h24M100 138v24" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <text x="100" y="195" textAnchor="middle" className="text-xs font-semibold fill-slate-400 dark:fill-slate-400">Web</text>
        </motion.g>

        {/* Orbit Node 2: Mobile */}
        <motion.g 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <circle cx="400" cy="160" r="32" fill="url(#purpleGradient)" />
          <rect x="390" y="146" width="20" height="28" rx="3" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="170" r="1.5" fill="white" />
          <text x="400" y="210" textAnchor="middle" className="text-xs font-semibold fill-slate-400 dark:fill-slate-400">Mobile</text>
        </motion.g>

        {/* Orbit Node 3: Cloud & API */}
        <motion.g 
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <circle cx="250" cy="80" r="28" fill="url(#cyanGradient)" />
          <path d="M242 85a6 6 0 014-10 6 6 0 0110 0 6 6 0 014 10z" fill="none" stroke="white" strokeWidth="2" />
          <text x="250" y="125" textAnchor="middle" className="text-xs font-semibold fill-slate-400 dark:fill-slate-400">Cloud</text>
        </motion.g>

        {/* Connections and sparks */}
        <motion.path 
          d="M130 150 Q 180 180 200 210" 
          fill="none" stroke="url(#lineGradient1)" strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="0"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M370 160 Q 320 180 300 210" 
          fill="none" stroke="url(#lineGradient2)" strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="0"
          animate={{ strokeDashoffset: [-200, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M250 108 L 250 195" 
          fill="none" stroke="var(--accent)" strokeWidth="2.5" opacity="0.3"
          strokeDasharray="6 6"
        />

        {/* Definitions */}
        <defs>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bg2)" />
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

export default function Home({ onOpenFeedback, onShowToast }) {
  // Sticky Scroll Portfolio state
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  // Bounding rect scroll listener for tracking closest active project card to center screen
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      projectRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveProject(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial positioning
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [msg, setMsg] = useState('');
  const [isContactSuccess, setIsContactSuccess] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const timelineRef = useRef(null);

  // Monitor scroll for Back-to-Top visibility
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // GSAP timeline animation for the growth roadmap
  useEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    if (!timelineItems || timelineItems.length === 0) return;

    // Trigger line grow and items fade in
    gsap.fromTo(
      timelineRef.current.querySelector('.timeline-line'),
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 65%",
          scrub: true
        }
      }
    );

    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      onShowToast('Please fill required fields (Name, Email, Message).');
      return;
    }

    setIsContactSuccess(true);
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0A%0A${msg}`;
    
    setTimeout(() => {
      window.location.href = `mailto:closelyinfotech@gmail.com?subject=Project Inquiry from ${name}&body=${body}`;
      
      // Reset form states
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setMsg('');
      setIsContactSuccess(false);
      onShowToast('📬 Redirecting to your email client...');
    }, 1200);
  };

  const scrollToSection = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: "Web Development",
      desc: "High-performance web apps built with cutting-edge React frameworks. Scalable, clean code engineered for growth.",
      icon: <FiGlobe size={24} className="text-primary" />,
      colorClass: "hover:shadow-lg hover:shadow-primary/10 hover:border-primary/45"
    },
    {
      title: "Mobile App Development",
      desc: "Robust iOS and Android experiences. Smooth cross-platform performance that keeps users engaged day after day.",
      icon: <FiSmartphone size={24} className="text-secondary" />,
      colorClass: "hover:shadow-lg hover:shadow-secondary/10 hover:border-secondary/45"
    },
    {
      title: "UI/UX Design",
      desc: "Premium, user-centered product design. Prototyping and interfaces built for absolute clarity and visual wow factor.",
      icon: <FiLayers size={24} className="text-accent" />,
      colorClass: "hover:shadow-lg hover:shadow-accent/10 hover:border-accent/45"
    },
    {
      title: "API Development",
      desc: "Custom REST and GraphQL microservices architectures. Highly secure, optimized data layers and third-party integrations.",
      icon: <FiCpu size={24} className="text-primary" />,
      colorClass: "hover:shadow-lg hover:shadow-primary/10 hover:border-primary/45"
    },
    {
      title: "Cloud Solutions",
      desc: "Cloud strategy, DevOps automations (CI/CD), secure databases, and infrastructure configured for 99.99% uptime.",
      icon: <FiCloud size={24} className="text-secondary" />,
      colorClass: "hover:shadow-lg hover:shadow-secondary/10 hover:border-secondary/45"
    },
    {
      title: "Software Maintenance",
      desc: "Continuous performance audits, bug patches, technical debt reduction, and active post-deployment infrastructure support.",
      icon: <FiSettings size={24} className="text-accent" />,
      colorClass: "hover:shadow-lg hover:shadow-accent/10 hover:border-accent/45"
    }
  ];

  const technologies = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={28} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={28} /> },
    { name: "Express.js", icon: <FaServer className="text-slate-400" size={28} /> },
    { name: "MySQL", icon: <DiMysql className="text-[#4479A1]" size={28} /> },
    { name: "MongoDB", icon: <DiMongodb className="text-[#47A248]" size={28} /> },
    { name: "C# / .NET", icon: <SiDotnet className="text-[#512BD4]" size={28} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={28} /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={28} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={28} /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={28} /> }
  ];

  const portfolio = [
    {
      name: "LogiRoute WMS",
      desc: "An automated Warehouse Management System designed to optimize logistics dispatch times. Built with smart routing algorithms to speed up fleet operations.",
      image: logirouteImg,
      techs: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demo: "#",
      github: "#"
    },
    {
      name: "InsurClaim Portal",
      desc: "A secure insurtech web application that automates policy claims calculations and reduces processing bottlenecks from days to minutes.",
      image: insurclaimImg,
      techs: ["React", ".NET Core", "MySQL", "Azure"],
      demo: "#",
      github: "#"
    },
    {
      name: "Closely Fleet Tracker",
      desc: "A hybrid mobile application built for cross-country logistics companies, offering real-time fleet GPS tracking and active warehouse integrations.",
      image: fleettrackerImg,
      techs: ["React Native", "Express.js", "PostgreSQL", "Google Maps API"],
      demo: "#",
      github: "#"
    }
  ];

  return (
    <div className="relative min-h-screen bg-theme-bg text-theme-text selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Dynamic Particle Canvas */}
      <ParticlesBg />

      {/* 2. HERO SECTION */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 sm:px-8 overflow-hidden z-10"
      >
        {/* Radial mesh background glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            {/* Header Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs tracking-wider uppercase mb-6 w-fit animate-fade-in"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SaaS Solutions Architect
            </motion.div>

            {/* Title text reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-theme-text">
              We Build Modern <br />
              <span className="text-primary">Web & Mobile</span> <span className="text-secondary">Solutions</span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-theme-muted leading-relaxed mb-10 max-w-xl"
            >
              Transforming Ideas into Digital Experiences with innovative technology solutions. Custom web development, mobile apps, and scalable cloud architectures.
            </motion.p>


          </div>

          {/* Right SVG animation */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <TechIllustration />
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 sm:px-8 border-t border-slate-800/40 relative z-10 bg-theme-bg-accent">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-3">About Us</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text mb-4">We are Closely Info Tech</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
            <p className="text-theme-muted mt-6 leading-relaxed">
              Based in Coimbatore, Tamil Nadu, we partner with startups and forward-thinking enterprises to architect clean, responsive, and performance-optimized digital products.
            </p>
          </div>

          {/* About grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            
            {/* Left Column: Intro */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-theme-text">Engineering Digital Transformation</h3>
              <p className="text-theme-muted leading-relaxed">
                Great software goes beyond just coding. We deep-dive into your operational logics, target workloads, and market objectives. Our collaborative approach ensures that we engineer future-proof architectures built specifically for your scalability.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme-text">Client-first Engineering</h4>
                    <p className="text-sm text-theme-muted mt-1">We align every micro-decision with your core revenue and scaling objectives.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme-text">Agile Architecture</h4>
                    <p className="text-sm text-theme-muted mt-1">Sprint-based delivery keeps you involved in testing feedback loops continuously.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission / Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="glass-panel p-8 rounded-2xl border border-slate-700/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300" />
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="text-lg font-bold text-theme-text mb-2">Our Mission</h4>
                <p className="text-sm text-theme-muted leading-relaxed">
                  To empower global businesses by creating highly scalable, reliable, and modern digital ecosystems.
                </p>
              </div>

              {/* Vision Card */}
              <div className="glass-panel p-8 rounded-2xl border border-slate-700/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full group-hover:bg-secondary/10 transition-all duration-300" />
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="text-lg font-bold text-theme-text mb-2">Our Vision</h4>
                <p className="text-sm text-theme-muted leading-relaxed">
                  To be the preferred global software partner, recognized for exceptional engineering and stunning designs.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline of Company Growth */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-theme-text mb-12">Our Journey Roadmap</h3>
            
            <div ref={timelineRef} className="relative max-w-3xl mx-auto">
              {/* Center Line */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 origin-top timeline-line" />

              {/* Timeline Item 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between mb-12 timeline-item">
                <div className="hidden md:block w-[45%]" />
                {/* Node Dot */}
                <div className="absolute left-[13px] md:left-1/2 md:-ml-[8px] w-4 h-4 rounded-full bg-primary border-4 border-slate-900 z-10" />
                
                <div className="glass-panel ml-10 md:ml-0 w-[85%] md:w-[45%] p-6 rounded-xl border border-slate-700/40 text-left">
                  <span className="text-xs font-bold text-primary">2024</span>
                  <h4 className="font-bold text-theme-text mt-1">Foundation In Coimbatore</h4>
                  <p className="text-sm text-theme-muted mt-2">Established closely. started building custom logistics platforms and core software foundations.</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-start md:justify-between mb-12 timeline-item">
                <div className="hidden md:block w-[45%]" />
                {/* Node Dot */}
                <div className="absolute left-[13px] md:left-1/2 md:-ml-[8px] w-4 h-4 rounded-full bg-secondary border-4 border-slate-900 z-10" />
                
                <div className="glass-panel ml-10 md:ml-0 w-[85%] md:w-[45%] p-6 rounded-xl border border-slate-700/40 text-left">
                  <span className="text-xs font-bold text-secondary">2025</span>
                  <h4 className="font-bold text-theme-text mt-1">Expanding to Insurtech</h4>
                  <p className="text-sm text-theme-muted mt-2">Expanded domain expertise into insurtech, delivering automated claim administration systems to early-stage startups.</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between timeline-item">
                <div className="hidden md:block w-[45%]" />
                {/* Node Dot */}
                <div className="absolute left-[13px] md:left-1/2 md:-ml-[8px] w-4 h-4 rounded-full bg-accent border-4 border-slate-900 z-10" />
                
                <div className="glass-panel ml-10 md:ml-0 w-[85%] md:w-[45%] p-6 rounded-xl border border-slate-700/40 text-left">
                  <span className="text-xs font-bold text-accent">2026 (Present)</span>
                  <h4 className="font-bold text-theme-text mt-1">Global Scale & Custom Mobile Systems</h4>
                  <p className="text-sm text-theme-muted mt-2">Pioneering hybrid tracking apps and strategic cloud architectures for international partners.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 px-6 sm:px-8 relative z-10 bg-theme-bg">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Expertise</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text mb-4">Core Engineering Services</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
            <p className="text-theme-muted mt-6 leading-relaxed">
              We design, build, and scale products. Our tech stack is built for speed, security, and responsive UX.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel p-8 rounded-2xl border border-slate-700/30 flex flex-col justify-between hover:scale-[1.03] duration-300 transition-all ${svc.colorClass}`}
              >
                <div>
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-slate-800/10 dark:bg-slate-800/80 flex items-center justify-center mb-6">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-theme-text mb-4">{svc.title}</h3>
                  <p className="text-sm text-theme-muted leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-8 text-xs font-semibold text-primary">
                  Learn More &rarr;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES SECTION */}
      <section id="technologies" className="py-20 px-6 sm:px-8 border-t border-slate-800/40 relative z-10 bg-theme-bg-accent overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Stack</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text">Technologies We Master</h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full flex overflow-x-hidden border-y border-slate-200/80 dark:border-slate-800/40 py-7 bg-slate-50/40 dark:bg-slate-900/15 backdrop-blur-sm">
          {/* Side gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-theme-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-theme-bg to-transparent z-10 pointer-events-none" />

          {/* Marquee Track (Double content inside one track for seamless looping) */}
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/30 px-6 py-2.5 rounded-full hover:scale-105 hover:border-primary/40 hover:shadow-md transition-all duration-200 shadow-sm"
              >
                {tech.icon}
                <span className="text-sm font-semibold text-theme-text">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6 sm:px-8 relative z-10 bg-theme-bg border-t border-slate-200 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Case Studies</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text mb-4">Featured Work</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
            <p className="text-theme-muted mt-6 leading-relaxed">
              Explore solutions we designed and shipped. Engineered to satisfy complex workflows and high-concurrency traffic.
            </p>
          </div>

          {/* Sticky Scroll Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* Left Column: Scrolling Content */}
            <div className="lg:col-span-6 space-y-[35vh] pb-[20vh] pt-[5vh]">
              {portfolio.map((proj, idx) => (
                <div
                  key={idx}
                  ref={(el) => (projectRefs.current[idx] = el)}
                  data-index={idx}
                  className={`transition-all duration-500 flex flex-col justify-center min-h-[55vh] ${
                    activeProject === idx ? 'opacity-100 translate-x-3 scale-[1.01]' : 'opacity-20 translate-x-0 scale-100'
                  }`}
                >
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Project 0{idx + 1}</span>
                  <h3 className={`text-4xl font-extrabold mb-4 transition-colors duration-300 ${
                    activeProject === idx ? 'text-primary' : 'text-theme-text'
                  }`}>
                    {proj.name}
                  </h3>
                  
                  {/* Mobile-Only Image Layout */}
                  <div className="block lg:hidden w-full aspect-video rounded-xl overflow-hidden border border-slate-355 dark:border-slate-700/50 my-6 shadow-lg">
                    <img 
                      src={proj.image} 
                      alt={proj.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-base text-theme-muted leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.techs.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/5 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/35 text-theme-text font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    <a 
                      href={proj.demo} 
                      className="text-sm px-5 py-2.5 rounded-xl bg-primary hover:opacity-90 text-white font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-primary/10"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                    <a 
                      href={proj.github} 
                      className="text-sm px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100/40 dark:bg-slate-800/20 text-theme-text hover:bg-slate-200 dark:hover:bg-slate-700/40 flex items-center gap-1.5 transition-all"
                    >
                      <FiGithub size={14} /> GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Image Wrapper */}
            <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-[140px] lg:h-[65vh] flex items-center justify-center self-start">
              <div className="w-full h-full relative rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800/40 shadow-2xl bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md">
                {/* Background soft glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/5 z-0" />
                
                {/* Vertical Sliding Viewport */}
                <div className="w-full h-full overflow-hidden relative z-10">
                  <div 
                    className="w-full h-full flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transform: `translateY(-${activeProject * 100}%)` }}
                  >
                    {portfolio.map((proj, idx) => (
                      <div
                        key={idx}
                        className="w-full h-full flex-shrink-0 p-8 flex flex-col justify-center items-center relative"
                      >
                        {/* Modern Image Container with Shadow */}
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-slate-300/30 dark:border-slate-700/30 relative">
                          <img 
                            src={proj.image} 
                            alt={proj.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Info card (overlay style) */}
                        <div className="absolute bottom-12 right-12 z-20 bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-md border border-slate-700/50 px-4 py-2.5 rounded-xl text-white text-xs font-semibold flex items-center gap-2 shadow-xl">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Active Production Deployment</span>
                        </div>

                        <div className="absolute top-12 left-12 z-20 bg-primary/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-lg tracking-wider">
                          CASE STUDY 0{idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. STATISTICS SECTION */}
      <section className="py-16 px-6 sm:px-8 border-t border-slate-800/40 relative z-10 bg-theme-bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                <StatsCounter target="10" suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-theme-muted uppercase">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                <StatsCounter target="5" suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-theme-muted uppercase">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                <StatsCounter target="2" suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-theme-muted uppercase">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-accent">
                <StatsCounter target="100" suffix="%" />
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-theme-muted uppercase">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 px-6 sm:px-8 border-t border-slate-800/40 relative z-10 bg-theme-bg">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Testimonials</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text mb-4">What Our Clients Say</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-16 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800/40 relative z-10 bg-theme-bg-accent overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[80px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-[80px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Enquiries</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3">Let's Build Together</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm text-theme-muted max-w-md mx-auto leading-relaxed">
              Have a project in mind? Fill out the form or reach out directly. We usually respond in under 2 hours.
            </p>
          </div>

          {/* Unified Compact Glassmorphism Dashboard */}
          <div className="glass-panel rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl border border-slate-200 dark:border-slate-700/40">
            {/* Left side: Compact Contact Details Sidebar (lg:col-span-5) */}
            <div className="lg:col-span-5 bg-slate-900/5 dark:bg-black/15 border-b lg:border-b-0 lg:border-r border-slate-200/50 dark:border-slate-800/50 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-theme-text flex items-center gap-2">
                    Contact Info
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Online
                    </span>
                  </h3>
                </div>

                <p className="text-xs text-theme-muted leading-relaxed">
                  Let's bring your ideas to life. Contact us directly or use the secure project form.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <a href="mailto:closelyinfotech@gmail.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                      <FiMail className="text-primary text-sm" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-theme-muted font-bold uppercase tracking-wider">Email Us</div>
                      <span className="text-xs font-semibold text-theme-text group-hover:text-primary transition-colors">
                        closelyinfotech@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+919876543210" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                      <FiPhone className="text-secondary text-sm" />
                    </div>
                    <div>
                      <div className="text-[10px] text-theme-muted font-bold uppercase tracking-wider">Phone Number</div>
                      <span className="text-xs font-semibold text-theme-text group-hover:text-secondary transition-colors">
                        +91 98765 43210
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <FiMapPin className="text-accent/85 dark:text-accent text-sm" />
                    </div>
                    <div>
                      <div className="text-[10px] text-theme-muted font-bold uppercase tracking-wider">Address</div>
                      <div className="text-xs font-semibold text-theme-text">
                        Coimbatore, Tamil Nadu, India
                      </div>
                      <div className="text-[9px] text-theme-muted">Serving clients globally</div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <FiClock className="text-amber-500 text-sm" />
                    </div>
                    <div>
                      <div className="text-[10px] text-theme-muted font-bold uppercase tracking-wider">Hours</div>
                      <div className="text-xs font-semibold text-theme-text">
                        Mon - Fri: 9 AM - 6 PM (IST)
                      </div>
                      <div className="text-[9px] text-theme-muted">
                        Sat: 10 AM - 2 PM | Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/60">
                {/* WhatsApp button */}
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-600/15"
                >
                  <FaWhatsapp size={14} /> Chat on WhatsApp
                </a>

                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-theme-muted font-bold uppercase tracking-wider">Follow Us</span>
                  <div className="flex gap-2">
                    <a href="https://github.com/Manickaraj0601" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-theme-text hover:text-primary hover:border-primary/30 transition-all">
                      <FiGithub size={13} />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-slate-800/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-theme-text hover:text-primary hover:border-primary/30 transition-all">
                      <FiLinkedin size={13} />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-slate-800/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-theme-text hover:text-primary hover:border-primary/30 transition-all">
                      <FiTwitter size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              {!isContactSuccess ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-theme-muted font-bold uppercase tracking-wider" htmlFor="c-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="c-name"
                        placeholder="Your name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white/40 dark:bg-slate-900/30 text-theme-text text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-theme-muted font-bold uppercase tracking-wider" htmlFor="c-phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="c-phone"
                        placeholder="+91 XXXXX XXXXX" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white/40 dark:bg-slate-900/30 text-theme-text text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-theme-muted font-bold uppercase tracking-wider" htmlFor="c-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="c-email"
                      placeholder="your@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white/40 dark:bg-slate-900/30 text-theme-text text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-theme-muted font-bold uppercase tracking-wider" htmlFor="c-service">Service Interested In</label>
                    <select 
                      id="c-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900 text-theme-text text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design</option>
                      <option>API Development</option>
                      <option>Cloud Solutions</option>
                      <option>Software Maintenance</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-theme-muted font-bold uppercase tracking-wider" htmlFor="c-msg">Message *</label>
                    <textarea 
                      id="c-msg"
                      placeholder="Tell us about your project..." 
                      rows={3}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white/40 dark:bg-slate-900/30 text-theme-text text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-lg bg-primary hover:opacity-90 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.99] duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-primary/15"
                  >
                    <FiSend /> Send Message
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary text-xl animate-bounce">
                    <FiSend />
                  </div>
                  <h4 className="text-base font-bold text-theme-text">Message Received!</h4>
                  <p className="text-xs text-theme-muted max-w-xs mx-auto leading-relaxed">
                    Thank you, {name}. Your message has been sent successfully. We are redirecting you to your email client to complete the message transit.
                  </p>
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mt-2" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-theme-footer-bg border-t border-slate-800/40 relative z-10 py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* Column 1: Info */}
            <div className="md:col-span-5 space-y-4">
              <div 
                className="flex items-center logo-container-wrap mb-4" 
                onClick={() => scrollToSection('home')}
              >
                <Logo width={130} height={60} />
              </div>
              <p className="text-sm text-theme-muted leading-relaxed max-w-sm">
                Transforming Ideas into Digital Experiences with innovative technology solutions.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="p-2.5 rounded-full bg-slate-800/10 border border-slate-700/50 text-theme-text hover:text-primary transition-all">
                  <FiGithub size={16} />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-slate-800/10 border border-slate-700/50 text-theme-text hover:text-primary transition-all">
                  <FiLinkedin size={16} />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-slate-800/10 border border-slate-700/50 text-theme-text hover:text-primary transition-all">
                  <FiTwitter size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-bold text-theme-text text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Technologies', 'Portfolio', 'Contact'].map((sect) => (
                  <li key={sect}>
                    <a 
                      href={`#${sect.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(sect.toLowerCase()); }}
                      className="text-sm text-theme-muted hover:text-primary transition-colors"
                    >
                      {sect}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-bold text-theme-text text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2">
                {services.map((svc, idx) => (
                  <li key={idx}>
                    <a 
                      href="#services" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                      className="text-sm text-theme-muted hover:text-primary transition-colors"
                    >
                      {svc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="h-px bg-slate-400/20 my-8" />

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-theme-muted">
            <div>&copy; {new Date().getFullYear()} Closely Info Tech. Coimbatore, Tamil Nadu, India. All rights reserved.</div>
            <div className="flex gap-4">
              <span className="text-slate-650 dark:text-slate-450 hover:text-slate-500 transition-colors">#CloselyInfoTech</span>
              <span className="text-slate-650 dark:text-slate-450 hover:text-slate-500 transition-colors">#InnovatingBuildingGrowing</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary border border-primary/25 text-white hover:opacity-90 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          title="Back to Top"
        >
          <FiArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
