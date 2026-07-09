import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Smartphone, ShieldCheck, ChevronRight } from 'lucide-react';
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
import bookingBg from '@assets/Messenger_creation_7FC442C4-AEFF-4AAC-8986-5D2EA1924AE2_1783621341223.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
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
  { day: "Monday", hours: "12:00 PM – till late" },
  { day: "Tuesday", hours: "4:00 PM – till late" },
  { day: "Wednesday", hours: "4:00 PM – till late" },
  { day: "Thursday", hours: "5:00 PM – till late" },
  { day: "Friday", hours: "Available 24 hours" },
  { day: "Saturday", hours: "Available 24 hours" },
  { day: "Sunday", hours: "4:00 PM – till late" },
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

const galleryImages = [
  photoOne,
  photoTwo,
  photoThree,
  photoFour,
  photoFive,
  photoSix,
  newOne,
  newTwo,
  newThree,
  newFour,
  newFive,
  newSix,
  newSeven,
  newEight,
  newNine,
  newTen,
  newEleven,
  newTwelve,
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white overflow-hidden">
      
      {/* Navbar / Fixed Elements */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="text-secondary font-serif text-xl tracking-widest uppercase">AG</div>
        <div className="text-muted-foreground text-sm flex items-center gap-2">
          <MapPin size={14} className="text-secondary" />
          Perth, WA
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-velvet">
        {/* Animated ambient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,26,42,0.15)_0%,rgba(10,10,10,1)_70%)]" />
          <motion.div 
            style={{ y: y1, opacity: opacity1 }}
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] opacity-20 mix-blend-screen"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-secondary text-glow mb-6 leading-none"
          >
            Alexa Gray
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary to-transparent mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-2xl font-light text-foreground/80 tracking-wide"
          >
            Cheeky. Confident. Just the right amount of trouble.
          </motion.p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll to enter</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-12">The Experience</h2>
            <div className="text-lg md:text-2xl leading-relaxed font-light text-foreground/90 space-y-8">
              <p>
                A cheeky Aussie brunette with hypnotic green eyes and a petite 5' frame, perfectly balanced with curves in all the right places. Soft lips, tempting energy, and a playful spark that loves to blur the line between sweet and sinful.
              </p>
              <p>
                I'm the kind of woman who can make you laugh one minute and lose your train of thought the next. Flirty, confident, and just the right amount of trouble. I turn casual chats into irresistible temptation and leave you wondering what might happen next.
              </p>
              <p>
                My GFE style is warm, relaxed, and deliciously intimate. Think slow touches, genuine connection, and that addictive feeling of being completely seen and wanted. But when the mood shifts, my adventurous side takes over. PSE is where I truly shine — exploring chemistry, teasing boundaries, and creating moments that feel spontaneous, electric, and unforgettable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={photoOne} 
                alt="Alexa Gray" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-card/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4 text-glow">Gallery</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Recent & verified</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border/50 cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Alexa Gray ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-secondary/0 group-hover:border-secondary/30 transition-colors duration-500 rounded-xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Facts Dossier */}
      <section className="py-24 px-6 relative bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-secondary uppercase tracking-widest text-glow">Dossier</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/50 rounded-lg overflow-hidden border border-border border-gold-glow"
          >
            {facts.map((fact, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-card p-6 md:p-8 flex flex-col justify-center items-center text-center group hover:bg-card/80 transition-colors duration-500 cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 relative z-10">{fact.label}</span>
                <span className="text-lg md:text-xl font-serif text-foreground relative z-10">{fact.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rates & Schedule */}
      <section className="py-32 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Schedule */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h2 className="text-3xl font-serif text-secondary text-glow">Availability</h2>
            <div className="h-px w-12 bg-border" />
          </div>
          
          <ul className="space-y-4">
            {schedule.map((slot, i) => (
              <li key={i} className="flex justify-between items-end border-b border-border/50 pb-2 group hover:border-secondary/50 transition-colors">
                <span className="text-foreground/80 font-medium tracking-wide group-hover:text-secondary transition-colors">{slot.day}</span>
                <span className="text-muted-foreground text-sm font-light">{slot.hours}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Rates */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-border" />
            <h2 className="text-3xl font-serif text-secondary text-glow">Investment</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="space-y-8">
            <div className="bg-card/50 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-secondary mb-6 border-b border-border/50 pb-2">In-calls</h3>
              <ul className="space-y-4">
                <li className="flex justify-between"><span className="text-foreground/90">30 min</span><span className="text-secondary">$500</span></li>
                <li className="flex justify-between"><span className="text-foreground/90">1 hr</span><span className="text-secondary">$800</span></li>
                <li className="flex justify-between"><span className="text-foreground/90">2 hrs</span><span className="text-secondary">$1,600</span></li>
              </ul>
            </div>

            <div className="bg-card/30 p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-serif text-secondary mb-6 border-b border-border/50 pb-2">Enhancements</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm"><span className="text-muted-foreground">COB</span><span className="text-foreground/80">+$50</span></li>
                <li className="flex justify-between text-sm"><span className="text-muted-foreground">BBBJ</span><span className="text-foreground/80">+$100</span></li>
                <li className="flex justify-between text-sm"><span className="text-muted-foreground">PSE</span><span className="text-foreground/80">+$200</span></li>
                <li className="flex justify-between text-sm"><span className="text-muted-foreground">Anal</span><span className="text-foreground/80">+$400</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Menu */}
      <section className="py-24 px-6 bg-card/20 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-secondary mb-4 text-glow">Curated Desires</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">A menu of offerings</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20"
          >
            {services.map((service, i) => (
              <motion.span 
                key={i}
                variants={fadeUp}
                className="px-4 py-2 border border-border/50 rounded-full text-sm font-light text-foreground/70 hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-all duration-300 cursor-default"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto bg-gradient-to-b from-card to-background border border-primary/20 p-8 md:p-12 rounded-xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <h3 className="text-2xl font-serif text-primary mb-6">The PSE Experience Includes</h3>
            <p className="text-foreground/80 leading-relaxed font-light">
              {pseIncludes.join(" • ")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        {/* Background image with heavy dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${bookingBg})` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-8">Ready for trouble?</h2>
          
          <div className="bg-black/60 backdrop-blur-sm border border-border p-8 rounded-lg mb-12 text-left">
            <p className="text-secondary font-serif text-xl mb-4 text-center border-b border-border/50 pb-4">Booking Protocol</p>
            <p className="text-muted-foreground text-sm mb-4 text-center">When booking please text me the following:</p>
            <ul className="space-y-3 text-foreground/90 font-light mb-6 list-disc list-inside">
              <li>Your exact location in Perth</li>
              <li>Desired length of booking</li>
              <li>Any specific extras you would like</li>
            </ul>
          </div>

          <a 
            href="sms:?body=Hi%20Alexa%2C%20I%20would%20like%20to%20book%20a%20session."
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg font-medium rounded-md pulse-glow hover:bg-primary/90 transition-colors group"
          >
            Text to Book 
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2 text-sm">
              <Smartphone size={16} /> @alexagray2003
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> Perth, WA
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-background text-center text-muted-foreground text-xs md:text-sm">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-secondary/70">
            <ShieldCheck size={16} />
            <span>Photos are recent and verified. Independent.</span>
          </div>
          <p>© {new Date().getFullYear()} Alexa Gray. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
