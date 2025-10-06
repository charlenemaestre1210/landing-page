import React from "react";
import { motion, easeOut } from "framer-motion"; // Import easeOut (and motion) for proper typing

interface TextSectionData {
  title: string;
  paragraphs: string[];
  image?: string; // optional image
  imageAlt?: string; // optional alt text
}

interface TextSectionProps {
  data: TextSectionData;
}

function TextSection({ data }: TextSectionProps) {
  const { title, paragraphs, image, imageAlt } = data;

  // Define variants for staggered animation (title first, then paragraphs, then image)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each child (title, paragraphs, image)
        delayChildren: 0.1, // Slight overall delay before starting
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }, // Use imported easeOut function (TS-safe)
    },
  };

  // Special variant for paragraphs (staggered within themselves)
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut }, // Use easeOut for consistency
    },
  };

  // Special variant for image (scale + fade for a more dynamic feel)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut }, // Use easeOut (slightly longer for image)
    },
  };

  return (
    <section className="w-full px-6 py-16 md:py-20 xl:p-[9rem] bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[6rem] gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Trigger on scroll, once only, 100px early
      >
        {/* Left Column */}
        <motion.div className="flex flex-col" variants={containerVariants}>
          {/* Title */}
          <motion.h2
            variants={childVariants}
            className="text-2xl sm:text-3xl lg:text-[50px] font-bold text-gray-900 lg:leading-[100%]"
          >
            {title}
          </motion.h2>

          {/* Optional image */}
          {image && (
            <motion.img
              variants={imageVariants}
              src={image}
              alt={imageAlt || "Section illustration"}
              className="w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[450px] mt-10 rounded-2xl shadow-md object-cover"
              whileHover={{ scale: 1.02 }} // Bonus: Subtle scale on hover for interactivity
            />
          )}
        </motion.div>

        {/* Right Column - Paragraphs with inner staggering */}
        <motion.div
          className="text-gray-700 leading-relaxed space-y-4 text-[15px] sm:text-[17px] lg:text-[21px]"
          variants={containerVariants}
        >
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Each paragraph animates independently if needed
              transition={{ delay: index * 0.1 }} // Additional stagger within paragraphs (0.1s each)
              className="opacity-0" // Initial CSS opacity for fallback (optional)
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TextSection;
