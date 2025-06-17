
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { motion } from "framer-motion";

export default function Hero() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x13b6b0,
        backgroundColor: 0x000000,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 15.0,
        showDots: true
      });
    }
    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="h-screen w-full text-white flex items-center justify-center flex-col text-center px-6"
    >
      <motion.img
        src="/logo.jpg"
        alt="Web3Across Logo"
        className="w-20 h-20 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Web3Across
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl font-light max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Strategic PR & Growth for the Web3 Projects
      </motion.p>
      <motion.a
        href="#contact"
        className="inline-block px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Get Started
      </motion.a>
    </section>
  );
}
