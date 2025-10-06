import React from "react";
import sampleGif from "../assets/sample.gif";
import sampleImg from "../assets/testimonials.svg";

const TestimonialSection = () => {
  return (
    <section className="relative bg-black text-white pt-[13rem] pb-20">
      {/* Diagonal Orange Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1600 1020"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 200 L1600 0 L1600 1020 L0 1020 Z" fill="#FF4B1E" />
      </svg>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end gap-2 md:gap-4 -mt-32 md:-mt-40">
        {/* Left Side - Smaller GIF with Play overlay */}
        <div className="flex-[0.4] relative flex justify-center top-[50px] md:top-[30px] -right-[10px] md:-right-[20px]">
          <img
            src={sampleGif}
            alt="Animation"
            className="w-[10rem] md:w-[13rem] rounded-xl h-auto"
          />
          {/* Play Text Overlay */}
          <span className="absolute inset-0 flex items-center justify-center text-black text-base md:text-[35px] font-bold rotate-[-30deg] pointer-events-none">
            Play
          </span>
        </div>

        {/* Right Side - Larger Image */}
        <div className="flex-[0.6] flex justify-center md:justify-end mt-2 md:mt-0">
          <img
            src={sampleImg}
            alt="Showcase"
            className="w-full md:w-[115%] max-w-[1024px] sm:max-w-[1500px] md:max-w-[1800px] lg:max-w-[2000px] rounded-xl shadow-lg -mt-4 md:-mt-32"
          />
        </div>
      </div>

      {/* Quotation Section */}
      <div className="relative z-20 mt-8 md:mt-16 max-w-5xl mx-auto px-6 text-center md:text-right">
        <p className="text-base sm:text-lg leading-relaxed w-full sm:w-[90%] md:w-[45%] md:ml-[28rem] text-center md:text-center md:text-[24px] mx-auto md:mx-0">
          “...metus ac laoreet pharetra, massa enim accumsan urna, vel ornare
          leo tortor vitae...”
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-black w-full sm:w-[90%] md:w-4/5 mx-auto md:mx-0">
          Client Name - Position / Company
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
