import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';

import photoOne from '@assets/grok_image_1783544362923_1783620480323.jpg';
import photoTwo from '@assets/grok_image_1783544367897~2_1783620480367.jpg';
import photoThree from '@assets/grok_image_1783544358780_1783620480424.jpg';
import photoFour from '@assets/grok_image_1783544430469~2_1783620480479.jpg';
import photoFive from '@assets/grok_image_1783544923500~2_1783620480549.jpg';
import photoSix from '@assets/grok_image_1783262434742_1783620480643.jpg';
import newOne from '@assets/att.KBCkluyCB5ipSrAIFl7BQmMoOgA2jHdvka9a2y5i6kg.jpg_1783621341044.jpeg';
import newTwo from '@assets/Messenger_creation_A779F943-F2FC-4A0F-9719-8BECAE086266_1783621341102.jpeg';
import newThree from '@assets/att.320wZ1HNb8L-eiGvydRtbOyQn5pH75BJrNo0GcmU2jU.jpg_1783621341133.jpeg';
import newFour from '@assets/Messenger_creation_0049B76C-9BD8-401A-8780-6406493FF851_1783621341162.jpeg';
import newFive from '@assets/Messenger_creation_C9ADC891-ACB7-42E4-A71E-4BAEC0767730_1783621341188.jpeg';
import newSix from '@assets/Messenger_creation_7FC442C4-AEFF-4AAC-8986-5D2EA1924AE2_1783621341223.jpeg';
import newSeven from '@assets/att.WpbZurcXQxHO6rfT_kxeXg5Zue11Y9IX67QIS3apL-g.jpg_1783621341261.jpeg';
import newEight from '@assets/Messenger_creation_DE88ABA8-3AF7-46F3-8BED-E426C87F4958_1783621341290.jpeg';
import newNine from '@assets/Messenger_creation_879608AA-6A53-4299-8E67-8A9F68EE6EFE_1783621341321.jpeg';
import newTen from '@assets/Messenger_creation_8904F64A-6118-465D-806D-157F9901DF77_1783621341350.jpeg';
import newEleven from '@assets/Messenger_creation_143E05BE-6310-4D01-8749-6D3DDB8BD22B_1783621341385.jpeg';
import newTwelve from '@assets/Messenger_creation_BA103442-E7B1-4EEE-AB70-E3CD7F0341E5_1783621341421.jpeg';

// Reusable cinematic easing
const easeInOutCubic = [0.16, 1, 0.3, 1] as const;

// Staggered word/character reveal for the hero text
const TextReveal = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const letters = Array.from(text);
  return (
    <div className={`flex overflow-hidden ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.2,
            ease: easeInOutCubic,
            delay: delay + index * 0.05,
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Counter component for stats
const Counter = ({ from = 0, to, duration = 2, delay = 0, inView }: { from?: number, to: number, duration?: number, delay?: number, inView: boolean }) => {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime - (delay * 1000);
      
      if (progress < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      
      const percentage = Math.min(progress / (duration * 1000), 1);
      // easeOutExpo
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(from + (to - from) * ease));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, delay, inView]);
  
  return <>{count}</>;
};

const facts = [
  { label: "Age", value: "22" },
  { label: "Height", value: "5'1\" / 155cm" },
  { label: "Hair", value: "Straight Brunette" },
  { label: "Eyes", value: "Green" },
  { label: "Body", value: "Petite" },
  { label: "Bust", value: "D cup" },
  { label: "Dress Size", value: "8" },
  { label: "Ethnicity", value: "Caucasian" },
  { label: "Language", value: "English" },
];

const schedule = [
  { day: "Monday", hours: "12:00 PM – till late", available: true },
  { day: "Tuesday", hours: "4:00 PM – till late", available: true },
  { day: "Wednesday", hours: "4:00 PM – till late", available: true },
  { day: "Thursday", hours: "5:00 PM – till late", available: true },
  { day: "Friday", hours: "Available 24 hours", available: true, highlight: true },
  { day: "Saturday", hours: "Available 24 hours", available: true, highlight: true },
  { day: "Sunday", hours: "4:00 PM – till late", available: true },
];

const services = [
  "GFE", "PSE", "DFK", "Affectionate cuddling", "Affectionate kissing", "Anal play", 
  "Body Slide", "Costumes & role play", "DATY", "Dinner companion", "Erotic sensual massage", 
  "Facial", "Fetish", "Filming", "Foot fetish", "Full oil massage", "GS (on you)", 
  "Happy ending", "Light bondage", "Light spanking", "MSOG", "Multiple positions", 
  "Overnight stays", "Photography", "Rimming (on me)", "School girl", "Sex toys", 
  "Sexy lingerie", "Sexy shower for 2", "Social escort", "Spanking (on me)", 
  "Squirting", "Strip tease", "Mutual masturbation", "Dirty talk", "Passionate kissing", 
  "Teasing", "Sissy play", "Slave/sub play", "Submissive"
];

const pseIncludes = [
  "toys", "spanking", "deepthroating", "rimming on me", "COB", "gagging", 
  "role play", "sloppy BBBJ", "MSOG", "costumes", "hair pulling", 
  "light anal play", "rough sex in any position"
];

// Helper to chunk services into 3 arrays for the marquee
const chunk1 = services.slice(0, 14);
const chunk2 = services.slice(14, 27);
const chunk3 = services.slice(27);

const ImageReveal = ({ src, alt, className = "", aspectClass = "" }: { src: string, alt: string, className?: string, aspectClass?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: easeInOutCubic }}
      className={`relative overflow-hidden group ${aspectClass} ${className}`}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none border border-gold/40" />
    </motion.div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const [navBlurred, setNavBlurred] = useState(false);
  const dossierRef = useRef(null);
  const isDossierInView = useInView(dossierRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    const handleScroll = () => {
      setNavBlurred(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="film-grain" />

      {/* 1. NAVIGATION */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          navBlurred ? 'bg-black/40 backdrop-blur-xl border-b border-gold/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="px-6 md:px-12 flex justify-between items-center max-w-[1600px] mx-auto">
          <div className="font-serif font-light text-gold text-2xl tracking-[0.25em]">AG</div>
          
          <div className="hidden md:flex gap-12">
            <a href="#about" className="text-label hover:text-gold transition-colors">About</a>
            <a href="#gallery" className="text-label hover:text-gold transition-colors">Gallery</a>
            <a href="#rates" className="text-label hover:text-gold transition-colors">Investment</a>
            <a href="#book" className="text-label hover:text-gold transition-colors">Book</a>
          </div>

          <div className="text-label text-muted">Perth, WA</div>
        </div>
        <div className={`absolute bottom-0 left-0 h-[1px] bg-gold/20 transition-all duration-1000 ${navBlurred ? 'w-full' : 'w-0'}`} />
      </nav>

      {/* 2. HERO — CINEMATIC REVEAL */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-[#080808]">
        {/* Cinematic Letterbox */}
        <div className="absolute top-0 left-0 w-full h-[5vh] bg-black z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[5vh] bg-black z-10" />
        
        {/* Background */}
        <div className="absolute inset-0">
          <img src={newTwo} alt="Alexa Gray" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,8,0.3)] to-[rgba(8,8,8,0.85)]" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-[15vh] w-full px-6 flex flex-col items-center z-20">
          <h1 className="font-serif text-[clamp(4rem,12vw,14rem)] font-extralight text-foreground tracking-[0.15em] leading-[0.8] mb-6 flex justify-center uppercase ml-[0.15em]">
            <TextReveal text="ALEXA" delay={0} className="mr-[clamp(1rem,3vw,3rem)]" />
            <TextReveal text="GRAY" delay={0.3} />
          </h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: easeInOutCubic }}
            className="w-[120px] h-[1px] bg-gold origin-center mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: easeInOutCubic }}
            className="font-sans font-light text-[clamp(0.8rem,1.2vw,1rem)] tracking-[0.1em] text-gold/80 mb-8 text-center"
          >
            Cheeky. Confident. Just the right amount of trouble.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8, ease: easeInOutCubic }}
            className="border border-gold/20 rounded-full px-4 py-1.5"
          >
            <span className="text-label text-gold/70">Perth, WA</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gold/30 overflow-hidden relative">
            <div className="w-full h-full bg-gold absolute top-0 left-0 animate-scroll-pulse" />
          </div>
        </motion.div>
      </section>

      {/* 3. MANIFESTO / QUOTE SECTION */}
      <section className="w-full bg-[#080808] py-[20vh] px-6 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: easeInOutCubic }}
          className="max-w-[1200px] mx-auto text-center relative"
        >
          <span className="absolute -top-12 -left-12 md:-top-24 md:-left-24 text-[8rem] md:text-[16rem] font-serif italic text-gold/5 leading-none select-none">"</span>
          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,6rem)] font-light text-foreground leading-[1.1] relative z-10">
            I'm the kind of woman who can make you laugh one minute and lose your train of thought the next.
          </h2>
          <span className="absolute -bottom-12 -right-12 md:-bottom-24 md:-right-24 text-[8rem] md:text-[16rem] font-serif italic text-gold/5 leading-none select-none rotate-180">"</span>
          
          <div className="mt-12">
            <p className="text-label text-muted">— Alexa Gray</p>
          </div>
        </motion.div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="w-full bg-[#080808] relative">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Sticky Image */}
          <div className="w-full lg:w-[55%] relative">
            <div className="lg:sticky lg:top-0 h-[70vh] lg:h-[100vh] w-full overflow-hidden">
              <img src={newTwo} alt="Alexa Gray Portrait" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#080808]" />
              
              <div className="absolute bottom-8 right-8 border border-gold/30 bg-black/40 backdrop-blur-md px-4 py-2 corner-brackets">
                <div className="corner-brackets-inner" />
                <span className="text-label text-gold/90">22 · Perth WA</span>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Bio Text */}
          <div className="w-full lg:w-[45%] px-6 py-24 lg:py-48 lg:px-20 xl:px-32 flex flex-col justify-center bg-[#080808] z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: easeInOutCubic }}
              className="mb-16"
            >
              <h3 className="text-label text-muted">01 / The Experience</h3>
            </motion.div>

            <div className="space-y-12">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: easeInOutCubic }}
                className="font-serif text-[clamp(1.5rem,2vw,2.5rem)] italic text-gold font-light leading-snug border-l border-gold/20 pl-8 ml-[-2rem]"
              >
                Soft lips, tempting energy, and a playful spark that loves to blur the line between sweet and sinful.
              </motion.p>

              {[
                "A cheeky Aussie brunette with hypnotic green eyes and a petite 5'1\" frame, perfectly balanced with curves in all the right places. I turn casual chats into irresistible temptation and leave you wondering what might happen next.",
                "My GFE style is warm, relaxed, and deliciously intimate. Think slow touches, genuine connection, and that addictive feeling of being completely seen and wanted.",
                "But when the mood shifts, my adventurous side takes over. PSE is where I truly shine — exploring chemistry, teasing boundaries, and creating moments that feel spontaneous, electric, and unforgettable."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: easeInOutCubic }}
                  className="font-serif font-light text-[1.2rem] lg:text-[1.4rem] text-foreground/80 leading-[1.8]"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY — EDITORIAL LAYOUT */}
      <section id="gallery" className="w-full bg-[#0f0f0f] py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: easeInOutCubic }}
            className="mb-20 text-center"
          >
            <h3 className="text-label text-muted">02 / Gallery</h3>
          </motion.div>

          <div className="flex flex-col gap-8 md:gap-16">
            {/* Row 1: Full-bleed tall */}
            <ImageReveal src={newThree} alt="Gallery 1" aspectClass="w-full h-[70vh]" />
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 2: Two images side by side */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="w-full md:w-1/2">
                <ImageReveal src={photoTwo} alt="Gallery 2" aspectClass="w-full aspect-[3/4]" />
              </div>
              <div className="w-full md:w-1/2 md:pt-32">
                <ImageReveal src={newFour} alt="Gallery 3" aspectClass="w-full aspect-[4/5]" />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 3: Three images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <ImageReveal src={photoOne} alt="Gallery 4" aspectClass="w-full aspect-[3/5]" />
              <ImageReveal src={newFive} alt="Gallery 5" aspectClass="w-full aspect-square" />
              <ImageReveal src={newOne} alt="Gallery 6" aspectClass="w-full aspect-[3/5]" />
            </div>
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 4: Full bleed wide */}
            <ImageReveal src={newTwo} alt="Gallery 7" aspectClass="w-full h-[50vh]" />
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 5: Two images equal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageReveal src={photoThree} alt="Gallery 8" aspectClass="w-full aspect-[4/5]" />
              <ImageReveal src={newSix} alt="Gallery 9" aspectClass="w-full aspect-[4/5]" />
            </div>
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 6: Three equal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImageReveal src={newSeven} alt="Gallery 10" aspectClass="w-full aspect-square" />
              <ImageReveal src={newEight} alt="Gallery 11" aspectClass="w-full aspect-square" />
              <ImageReveal src={newNine} alt="Gallery 12" aspectClass="w-full aspect-square" />
            </div>
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 7: Wide + portrait */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <ImageReveal src={newTen} alt="Gallery 13" aspectClass="w-full aspect-[16/9] md:h-full" />
              </div>
              <div className="md:col-span-1">
                <ImageReveal src={newEleven} alt="Gallery 14" aspectClass="w-full aspect-[3/4]" />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 8: Full bleed */}
            <ImageReveal src={newTwelve} alt="Gallery 15" aspectClass="w-full h-[60vh]" />
            <div className="w-full h-[1px] bg-gold/20 my-8" />

            {/* Row 9: Final three */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImageReveal src={photoFour} alt="Gallery 16" aspectClass="w-full aspect-[4/5]" />
              <ImageReveal src={photoFive} alt="Gallery 17" aspectClass="w-full aspect-[4/5]" />
              <ImageReveal src={photoSix} alt="Gallery 18" aspectClass="w-full aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOSSIER / QUICK FACTS */}
      <section className="w-full bg-[#080808] py-32 px-6" ref={dossierRef}>
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: easeInOutCubic }}
            className="mb-16 text-center"
          >
            <h3 className="text-label text-muted">03 / Dossier</h3>
          </motion.div>

          {/* Luxury Data Table */}
          <div className="corner-brackets p-8 md:p-12 mb-20 relative">
            <div className="corner-brackets-inner" />
            <div className="space-y-6">
              {facts.map((fact, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: easeInOutCubic }}
                  className="flex items-end"
                >
                  <span className="text-label text-muted whitespace-nowrap pt-2">{fact.label}</span>
                  <div className="flex-1 dashed-line mx-4 mb-[6px] h-[1px]" />
                  <span className="font-serif text-xl md:text-2xl text-foreground whitespace-nowrap">{fact.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stat Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gold/10">
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="font-serif text-[4rem] md:text-[5rem] text-gold leading-none font-light">
                <Counter to={22} inView={isDossierInView} />
              </span>
              <span className="text-label mt-4">Years</span>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="font-serif text-[4rem] md:text-[5rem] text-gold leading-none font-light">
                <Counter to={5} inView={isDossierInView} />'<Counter to={1} inView={isDossierInView} />"
              </span>
              <span className="text-label mt-4">Petite</span>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="font-serif text-[2.5rem] md:text-[3rem] text-gold leading-none font-light mt-4 mb-3 italic">
                Independent
              </span>
              <span className="text-label mt-4">Status</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AVAILABILITY & RATES */}
      <section id="rates" className="w-full bg-[#0f0f0f] py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: easeInOutCubic }}
            className="mb-20 text-center"
          >
            <h3 className="text-label text-muted">04 / Investment</h3>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-20 lg:gap-0">
            {/* Availability */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: easeInOutCubic }}
              className="w-full lg:w-1/2 lg:pr-20 lg:border-r border-gold/10"
            >
              <h4 className="font-serif text-4xl italic text-gold mb-12 font-light">Availability</h4>
              
              <div className="space-y-6">
                {schedule.map((slot, i) => (
                  <div key={i} className="group relative flex justify-between items-end pb-4 border-b border-white/5 cursor-default overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-crimson/10 w-0 group-hover:w-full transition-all duration-700 ease-out z-0" />
                    
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="font-serif text-xl md:text-2xl text-foreground/90 group-hover:text-gold transition-colors duration-300">
                        {slot.day}
                      </span>
                      {slot.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(196,169,107,0.8)]" />
                      )}
                    </div>
                    <span className={`relative z-10 font-sans text-sm tracking-wide ${slot.highlight ? 'text-gold' : 'text-muted'}`}>
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rates */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeInOutCubic }}
              className="w-full lg:w-1/2 lg:pl-20 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-serif text-4xl italic text-gold mb-12 font-light">Investment</h4>
                
                <div className="space-y-6 mb-16">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="font-serif text-3xl text-foreground">30 min</span>
                    <span className="font-serif text-3xl text-gold/70">$500</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="font-serif text-3xl text-foreground">1 hr</span>
                    <span className="font-serif text-3xl text-gold/70">$800</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="font-serif text-3xl text-foreground">2 hrs</span>
                    <span className="font-serif text-3xl text-gold/70">$1,600</span>
                  </div>
                </div>

                <div className="corner-brackets-inner p-6 border border-gold/10 bg-black/20">
                  <h5 className="text-label text-muted mb-6">Enhancements</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex justify-between items-end pb-2 border-b border-white/5">
                      <span className="text-sm font-light text-foreground/70 tracking-wide">COB</span>
                      <span className="text-sm text-gold/50">+$50</span>
                    </div>
                    <div className="flex justify-between items-end pb-2 border-b border-white/5">
                      <span className="text-sm font-light text-foreground/70 tracking-wide">BBBJ</span>
                      <span className="text-sm text-gold/50">+$100</span>
                    </div>
                    <div className="flex justify-between items-end pb-2 border-b border-white/5">
                      <span className="text-sm font-light text-foreground/70 tracking-wide">PSE</span>
                      <span className="text-sm text-gold/50">+$200</span>
                    </div>
                    <div className="flex justify-between items-end pb-2 border-b border-white/5">
                      <span className="text-sm font-light text-foreground/70 tracking-wide">Anal</span>
                      <span className="text-sm text-gold/50">+$400</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center lg:text-left">
                <span className="text-label text-gold/60">Enquire for custom arrangements</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SERVICES — HORIZONTAL TICKER */}
      <section className="w-full bg-[#080808] py-32 overflow-hidden relative ticker-hover-pause">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: easeInOutCubic }}
          className="mb-20 text-center px-6"
        >
          <h3 className="text-label text-muted">05 / Curated Desires</h3>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {/* Row 1: Left */}
          <div className="ticker-wrap w-full">
            <div className="ticker-content-left gap-12 md:gap-24 px-6 md:px-12">
              {[...chunk1, ...chunk1, ...chunk1].map((service, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-24">
                  <span className="font-serif italic text-3xl md:text-5xl lg:text-7xl font-light text-foreground/80 whitespace-nowrap">{service}</span>
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gold/40" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="ticker-wrap w-full">
            <div className="ticker-content-right gap-12 md:gap-24 px-6 md:px-12">
              {[...chunk2, ...chunk2, ...chunk2].map((service, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-24 flex-row-reverse">
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gold/40" />
                  <span className="font-serif italic text-3xl md:text-5xl lg:text-7xl font-light text-foreground/80 whitespace-nowrap">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Left Fast */}
          <div className="ticker-wrap w-full">
            <div className="ticker-content-left-fast gap-12 md:gap-24 px-6 md:px-12">
              {[...chunk3, ...chunk3, ...chunk3].map((service, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-24">
                  <span className="font-serif italic text-3xl md:text-5xl lg:text-7xl font-light text-foreground/80 whitespace-nowrap">{service}</span>
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gold/40" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto mt-32 px-6 text-center">
          <p className="text-label text-gold mb-8">PSE Includes</p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="flex flex-wrap justify-center gap-x-3 gap-y-2 leading-relaxed"
          >
            {pseIncludes.join(" • ").split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOutCubic } }
                }}
                className="font-serif text-2xl md:text-4xl italic text-foreground/90 font-light"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. BOOKING CTA */}
      <section id="book" className="w-full min-h-[100dvh] relative flex items-center bg-[#080808]">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={newFour} alt="Booking Background" className="w-full h-full object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:items-stretch gap-16 md:gap-8">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: easeInOutCubic }}
            >
              <h3 className="text-label text-muted mb-8">06 / Book</h3>
              <div className="flex flex-col">
                <span className="font-serif text-[clamp(4rem,8vw,10rem)] font-thin text-foreground leading-[0.85] tracking-tight">Ready for</span>
                <span className="font-serif text-[clamp(4rem,8vw,10rem)] italic text-gold/80 leading-[0.85] pr-8">trouble?</span>
              </div>
              <p className="mt-12 text-sans font-light text-foreground/60 tracking-wide max-w-md mx-auto md:mx-0">
                Ensure you have read the protocol before reaching out.
              </p>
            </motion.div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: easeInOutCubic }}
              className="w-full max-w-[480px] bg-[rgba(8,8,8,0.7)] backdrop-blur-2xl border border-[rgba(196,169,107,0.2)] p-10 md:p-14 corner-brackets relative"
            >
              <div className="corner-brackets-inner" />
              
              <h4 className="font-serif text-4xl text-gold mb-8 italic">Begin</h4>
              
              <div className="space-y-4 mb-12">
                <p className="text-sm font-sans tracking-wide text-foreground/80">Please include in your text:</p>
                <ul className="space-y-3 font-sans text-sm font-light text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">/</span> Exact location in Perth
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">/</span> Desired length of booking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">/</span> Any specific enhancements
                  </li>
                </ul>
              </div>

              <a 
                href="sms:?body=Hi%20Alexa%2C%20I%20would%20like%20to%20book%20a%20session."
                className="block w-full py-5 bg-crimson text-foreground text-center font-serif text-xl tracking-widest hover:bg-crimson-bright transition-colors duration-300 pulse-glow mb-8"
              >
                TEXT TO BOOK
              </a>

              <div className="text-center">
                <span className="font-sans text-sm tracking-[0.1em] text-muted">@alexagray2003</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="w-full bg-[#080808] border-t border-[rgba(196,169,107,0.12)] py-12 px-6 flex flex-col items-center justify-center relative z-20">
        <div className="font-serif text-3xl text-gold/60 mb-6 font-light">AG</div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted mb-4 text-center">
          Photos are recent and verified. Independent.
        </p>
        <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-muted/50 text-center">
          © {new Date().getFullYear()} Alexa Gray. All rights reserved.
        </p>
      </footer>
    </>
  );
}