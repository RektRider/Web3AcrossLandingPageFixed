import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import { motion } from "framer-motion";

export default function Hero() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x13b6b0,
        backgroundColor: 0x000000,
      });
    }
    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      {/* VANTA GLOBE */}
      <div ref={vantaRef} className="absolute inset-0 z-10" />

      {/* Content */}
      <section className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Logo + Title */}
        <motion.div
          className="flex items-center gap-4 mb-6"
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
          className="text-lg md:text-2xl font-light max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Strategic PR & Growth for the Web3 Projects
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="px-8 py-3 border-2 border-teal-400 rounded-full text-white font-semibold hover:bg-teal-400 hover:text-black transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
}
