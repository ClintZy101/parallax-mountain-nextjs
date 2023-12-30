import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { TextGenerateEffect } from "./text-generate-effect";

export default function MyFace() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-[600px]  overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl  relative z-10 -ml-10"
      >
        Web Developer

      </motion.h1>
      <TextGenerateEffect words=" I make websites come  Alive!" className="font-bold text-white text-4xl md:text-6xl relative z-10" />

      <motion.h2
        style={{ y: textY }}
        className="font-bold text-white text-4xl md:text-6xl relative z-10 -ml-40 -mt-20"
      >
        I make websites come  <span className="text-fifth">Alive!</span>
      </motion.h2>
   
      <motion.div
        className="absolute bg-hero-light inset-0 z-0 "
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      {/* profile div */}
      <div className="">
        <div className="absolute inset-0 overflow-hidden ">
        {/* rounded-tl-xl bg-first bg-opacity-55 */}
          <Image
            className="absolute  right-0 bottom-0  z-20 "
            src="/profile-pic.png"
            width={500}
            height={500}
            alt="Picture of the author"

          />
        </div>

      </div>
    </div >

  );
}