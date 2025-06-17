import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import react-globe.gl to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Hero() {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2 }, 0);
    }
  }, []);

  return (
    <section className="h-screen w-full flex text-white bg-black overflow-hidden">
      {/* Left side - text content */}
      <div className="w-1/2 flex flex-col justify-center items-start px-12 z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.img
            src="/logo.png"
            alt="Web3Across Logo"
            className="w-12 h-12 object-contain"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold"
            transition={{ delay: 0.2, duration: 1 }}
          >
            Web3Across
          </motion.h1>
        </div>

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
          className="border-2 border-teal-400 px-6 py-3 rounded-full text-lg hover:bg-teal-400 hover:text-black transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Contact Us
        </motion.a>
      </div>

      {/* Right side - Globe */}
      <div className="w-1/2 h-full">
        <Globe
          ref={globeRef}
          width={undefined}
          height={undefined}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0,0,0,0)"
          animateIn={true}
          showGraticules={true}
          atmosphereColor="#00ffff"
          atmosphereAltitude={0.2}
        />
      </div>
    </section>
  );
}
