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
        size: 3.0, // increased for larger globe
        spacing: 16.0,
      });
    }

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="h-screen w-full text-white flex"
    >
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-start px-12 z-10">
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

        <motion.p
          className="text-lg md:text-2xl font-light max-w-md mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Strategic PR & Growth for the Web3 Projects
        </motion.p>

        <motion.a
          href="#contact"
          className="border-2 border-teal-400 px-6 py-2 rounded-full text-white hover:bg-teal-500 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Contact Us
        </motion.a>
      </div>

      {/* RIGHT SIDE — Globe Background */}
      <div className="w-1/2 h-full relative z-0" />
    </section>
  );
}
