/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';

const GraffitiTag = ({ 
  text, 
  className, 
  colorClass, 
  bgClass,
  rotateClass, 
  inverseRotateClass, 
  delay, 
  blurClass 
}: { 
  text: string, 
  className: string, 
  colorClass: string, 
  bgClass: string,
  rotateClass: string, 
  inverseRotateClass: string, 
  delay: number, 
  blurClass: string 
}) => {
  const letters = text.split("");
  const splatters = [
    { top: "-15%", left: "5%", size: "w-1.5 h-1.5", delayOffset: 0.2 },
    { top: "110%", left: "15%", size: "w-1 h-1", delayOffset: 0.4 },
    { top: "-10%", left: "75%", size: "w-1.5 h-1.5", delayOffset: 0.6 },
    { top: "30%", left: "-10%", size: "w-1 h-1", delayOffset: 0.1 },
    { top: "70%", left: "110%", size: "w-1.5 h-1.5", delayOffset: 0.8 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 0.8, scale: 1 }} 
      transition={{ delay, duration: 0.5 }} 
      className={`absolute ${className} font-graffiti ${colorClass} ${rotateClass} ${blurClass}`}
    >
      <div className="relative flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ 
              delay: delay + 0.2 + (index * 0.15), 
              duration: 0.4, 
              ease: "easeOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
        {/* Drip 1 */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: 40, opacity: 0.6 }} 
          transition={{ delay: delay + 0.2 + (letters.length * 0.15) + 0.2, duration: 2, ease: "easeOut" }} 
          className={`absolute top-[70%] left-[20%] w-[3px] ${bgClass} ${inverseRotateClass} origin-top rounded-b-full`} 
        />
        {/* Drip 2 */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: 70, opacity: 0.4 }} 
          transition={{ delay: delay + 0.2 + (letters.length * 0.15) + 0.5, duration: 2.5, ease: "easeOut" }} 
          className={`absolute top-[65%] left-[50%] w-[2px] ${bgClass} ${inverseRotateClass} origin-top rounded-b-full`} 
        />
        {/* Drip 3 */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: 50, opacity: 0.5 }} 
          transition={{ delay: delay + 0.2 + (letters.length * 0.15) + 0.3, duration: 1.8, ease: "easeOut" }} 
          className={`absolute top-[75%] left-[80%] w-[4px] ${bgClass} ${inverseRotateClass} origin-top rounded-b-full`} 
        />
        {/* Splatters */}
        {splatters.map((splatter, index) => (
          <motion.div
            key={`splatter-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ 
              delay: delay + splatter.delayOffset, 
              duration: 0.3, 
              type: "spring" 
            }}
            className={`absolute rounded-full ${bgClass} ${splatter.size}`}
            style={{ top: splatter.top, left: splatter.left }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f0] text-[#111] font-sans selection:bg-neon-yellow selection:text-black">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <div className="font-display text-3xl tracking-widest uppercase pointer-events-auto">Ohana.</div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wider pointer-events-auto">
          <a href="#work" className="hover:text-neon-pink transition-colors">Work</a>
          <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
          <a href="#contact" className="hover:text-neon-yellow transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 bg-black">
          <iframe 
            src='https://my.spline.design/untitled-8dBjpSCtugOfKypbcN3NLU5w/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full pointer-events-auto brightness-[1.8] contrast-[1.15] saturate-[1.4] sepia-[.2]"
          ></iframe>
          {/* Sunlight glare overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/50 via-orange-200/20 to-transparent mix-blend-screen"></div>
        </div>

        {/* Background Graffiti Tags with Drips */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <GraffitiTag text="ohana" className="top-[15%] left-[10%] text-5xl md:text-7xl" colorClass="text-neon-pink" bgClass="bg-neon-pink" rotateClass="-rotate-12" inverseRotateClass="rotate-12" delay={0.8} blurClass="blur-[1px]" />
          <GraffitiTag text="ohana" className="top-[25%] right-[15%] text-6xl md:text-8xl" colorClass="text-neon-cyan" bgClass="bg-neon-cyan" rotateClass="rotate-12" inverseRotateClass="-rotate-12" delay={1.0} blurClass="blur-[2px]" />
          <GraffitiTag text="ohana" className="bottom-[20%] left-[20%] text-7xl md:text-9xl" colorClass="text-neon-yellow" bgClass="bg-neon-yellow" rotateClass="-rotate-6" inverseRotateClass="rotate-6" delay={1.2} blurClass="blur-[1px]" />
          <GraffitiTag text="ohana" className="bottom-[30%] right-[10%] text-5xl md:text-7xl" colorClass="text-white" bgClass="bg-white" rotateClass="rotate-[-20deg]" inverseRotateClass="rotate-[20deg]" delay={1.4} blurClass="blur-[1.5px]" />
          <GraffitiTag text="ohana" className="top-[50%] left-[5%] text-4xl md:text-6xl" colorClass="text-neon-pink" bgClass="bg-neon-pink" rotateClass="rotate-[-15deg]" inverseRotateClass="rotate-[15deg]" delay={1.6} blurClass="blur-[1px]" />
          <GraffitiTag text="ohana" className="top-[60%] right-[5%] text-5xl md:text-7xl" colorClass="text-neon-yellow" bgClass="bg-neon-yellow" rotateClass="rotate-[15deg]" inverseRotateClass="rotate-[-15deg]" delay={1.8} blurClass="blur-[1px]" />
        </div>
        
        {/* Overlay text - pointer-events-none so we can interact with Spline */}
        <div className="z-20 flex flex-col items-center justify-center pointer-events-none mt-32">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[20vw] leading-[0.8] text-transparent bg-clip-text bg-cover bg-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1517778464735-687d69811dc5?q=80&w=2000&auto=format&fit=crop')",
              WebkitTextStroke: '3px white'
            }}
          >
            OHANA
          </motion.h1>
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: -5 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="bg-neon-yellow text-black font-graffiti text-2xl md:text-5xl px-6 py-2 mt-[-2vw] ml-[20vw] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] pointer-events-auto hover:scale-110 transition-transform cursor-pointer"
          >
            FAMILY
          </motion.div>
        </div>
      </section>

      {/* Intro / Manifesto */}
      <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Ohana elevates <br className="hidden md:block" />
            <span className="graffiti-highlight">everyday characters</span> into <span className="graffiti-highlight-pink">art</span>.
          </h2>
          <p className="mt-10 text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl">
            Ohana transforms inner experiences into visual poetry, capturing emotion, light, and memory.
            <br className="hidden md:block" />
            Blending abstraction and sensitivity, She turns fleeting moments into immersive artistic expressions.
          </p>
        </div>
        
        {/* Stats / Brutalist blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-200 hover:-translate-y-2 hover:shadow-[12px_16px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1nSLQH00yX633I-U_psyBixabx6FN2Xag" 
              alt="Ohana Art" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 min-h-[150px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white hover:-translate-y-2 hover:shadow-[12px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-center">
            <div className="font-display text-3xl md:text-4xl text-black leading-none">New Oriental</div>
            <div className="font-bold uppercase tracking-wider text-sm mt-2">Dededo Series</div>
          </div>
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-200 hover:-translate-y-2 hover:shadow-[12px_16px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1lVTffK6s6wub5wzZG7VlUZU2u0xHYOBr" 
              alt="Ohana Art 2" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 min-h-[150px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white hover:-translate-y-2 hover:shadow-[12px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-center">
            <div className="font-display text-3xl md:text-4xl text-neon-pink">Other Object colloections</div>
            <div className="font-bold uppercase tracking-wider text-sm mt-2">etc...</div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-black text-white py-6 overflow-hidden flex whitespace-nowrap border-y-8 border-neon-pink">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex font-display text-4xl md:text-6xl uppercase tracking-widest"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8">Sameness within difference, difference within sameness</span>
              <span className="mx-8 text-neon-yellow">•</span>
              <span className="mx-8">Ohana</span>
              <span className="mx-8 text-neon-cyan">•</span>
              <span className="mx-8">DEDEDO</span>
              <span className="mx-8 text-neon-pink">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Works Grid */}
      <section id="work" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b-4 border-black pb-4">
          <h2 className="font-display text-6xl md:text-8xl uppercase">RECENT ACTIVITY</h2>
          <button className="hidden md:flex items-center gap-2 font-bold uppercase hover:text-neon-pink transition-colors">
            View All <ArrowRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Work Item 1 (Left Image - Interview) */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[16px_16px_0px_0px_rgba(255,0,127,1)] bg-gray-200">
              {/* NOTE: Once you find the 'public' folder, upload your image there as 'interview.jpg' and change the src below to "/interview.jpg" */}
              <img src="https://lh3.googleusercontent.com/d/1fK1R1K5Phc6U5ruPKLVG47CHepAX8QXC" alt="Interview with Artist Ohana" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-neon-yellow text-black font-bold px-3 py-1 border-2 border-black transform -rotate-3">
                INTERVIEW
              </div>
            </div>
            <h3 className="font-display text-4xl mt-6 uppercase">Exploring Everyday Joy</h3>
            <p className="font-graffiti text-gray-500 text-xl mt-2">Exhibition In Hong Kong</p>
          </div>

          {/* Work Item 2 (Right Image - Faces/People cutouts) */}
          <div className="group md:mt-32">
            <div className="relative aspect-[4/5] overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[16px_16px_0px_0px_rgba(0,255,255,1)] bg-gray-200">
              {/* Google Drive Image */}
              <img 
                src="https://lh3.googleusercontent.com/d/1uDBdbJHqnNSeaViaYPWIB5ccIxAr_BXX" 
                alt="dededo series" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-4 right-4 bg-neon-cyan text-black font-bold px-3 py-1 border-2 border-black transform rotate-6">
                REPRESENTATIVE WORK
              </div>
            </div>
            <h3 className="font-display text-4xl mt-6 uppercase">dededo series</h3>
            <p className="font-graffiti text-gray-500 text-xl mt-2">Sameness Within Difference, Difference Within Sameness</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black text-white pt-32 pb-12 px-6 md:px-20 border-t-8 border-neon-yellow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="font-display text-[15vw] md:text-[10vw] leading-none uppercase mb-4 text-transparent" style={{ WebkitTextStroke: '2px white' }}>
              Hit us up
            </h2>
            <div className="flex flex-col items-start gap-4">
              <a href="mailto:Ohanamuseum@gmail.com" className="font-graffiti text-3xl md:text-6xl text-neon-pink hover:text-neon-cyan transition-colors inline-block transform hover:-rotate-2">
                Ohanamuseum@gmail.com
              </a>
              <a href="https://instagram.com/ohana_museum" target="_blank" rel="noopener noreferrer" className="font-graffiti text-3xl md:text-6xl text-neon-cyan hover:text-neon-pink transition-colors inline-block transform hover:rotate-2">
                INSTAGRAM: @ohana_museum
              </a>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:bg-neon-yellow hover:scale-110 transition-all border-2 border-transparent hover:border-black">
              <Instagram size={32} />
            </a>
            <a href="#" className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:bg-neon-cyan hover:scale-110 transition-all border-2 border-transparent hover:border-black">
              <Twitter size={32} />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 font-bold uppercase text-sm tracking-wider">
          <p>© 2026 Ohana Studio. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Made in the streets <span className="text-neon-pink">✌️</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
