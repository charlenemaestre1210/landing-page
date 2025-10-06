import React from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  background?: string;
  overlay?: boolean;
  cta?: {
    text?: string;
    href?: string;
  };
};

const Hero = ({
  title,
  subtitle,
  background,
  overlay = true,
  cta,
}: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {background && (
          <img
            src={background}
            alt="Background"
            className="object-cover object-center w-full h-full"
          />
        )}
        {overlay && (
          <div className="absolute inset-0 bg-black opacity-50"></div>
        )}
      </div>

      {/* Content */}
      <div className="w-[90%] md:w-[55%] mx-auto relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-[#F24A20] font-bold">
            {subtitle}
          </p>
        )}
        {cta?.text && cta?.href && (
          <a
            href={cta.href}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold transition"
          >
            {cta.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
