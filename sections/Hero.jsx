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
        showDots: true,
      });
    }
    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="h-screen w-full text-white font-sans relative flex flex-col items-center justify-center px-4"
    >
      {/* Background gradient layer under Vanta */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01131e] to-[#043f48] opacity-90 z-0" />

      {/* Logo + Title */}
      <motion.div
        className="flex items-center gap-4 mb-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/logo.png"
          alt="Web3Across Logo"
          className="w-12 h-12 object-contain"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          transition={{ delay: 0.2, duration: 1 }}
        >
          Web3Across
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-2xl font-light max-w-2xl mb-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Strategic PR & Growth for the Web3 Projects
      </motion.p>

      {/* CTA Button (we'll style this in next step) */}
      <motion.a
        href="#"
        className="px-6 py-3 border-2 border-teal-400 rounded-full text-white font-semibold z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        www.web3across.com
      </motion.a>
    </section>
  );
}
