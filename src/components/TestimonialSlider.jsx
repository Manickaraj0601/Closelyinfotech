import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';

const testimonials = [
  {
    quote: "Closely Info Tech transformed our legacy logistics operations into a super-fast automated dispatch system. The dashboard is incredibly intuitive, and our fleet response times have dropped by 30%. Outstanding engineering!",
    author: "Karthik Srinivasan",
    role: "Director of Operations",
    company: "Apex Logistics India",
    avatar: "👨‍💼",
  },
  {
    quote: "The mobile app they built is stunning. The policyholders love the clean UX, and we saw a 45% increase in self-service claims submission in the first month alone. They are true partners in product design.",
    author: "Sarah D'Souza",
    role: "Co-Founder",
    company: "InsurGo Technologies",
    avatar: "👩‍💼",
  },
  {
    quote: "Their cloud architectural redesign helped us solve critical scalability issues during peak traffic. We went from periodic crashes to 99.99% uptime, while cutting cloud costs by 40%. Highly recommended consulting team!",
    author: "Manish Mehta",
    role: "Chief Technology Officer",
    company: "SwiftCart Solutions",
    avatar: "💻",
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8 overflow-hidden">
      <div className="relative h-[280px] sm:h-[220px] md:h-[200px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full text-center flex flex-col items-center justify-center"
          >
            <div className="text-5xl mb-4 opacity-25 text-primary">“</div>
            <p className="text-lg md:text-xl text-theme-muted italic max-w-3xl leading-relaxed">
              {testimonials[current].quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-theme-text text-sm md:text-base">
                  {testimonials[current].author}
                </h4>
                <p className="text-xs text-theme-muted">
                  {testimonials[current].role}, <span className="text-primary font-medium">{testimonials[current].company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-[var(--card-bg)] text-theme-text hover:bg-primary/10 hover:text-primary transition-all"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === current ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-750 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-[var(--card-bg)] text-theme-text hover:bg-primary/10 hover:text-primary transition-all"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
