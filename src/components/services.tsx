import React from "react";
import brandImg from "../assets/brand.svg";
import digitalImg from "../assets/digital.svg";
import printImg from "../assets/print.svg";

const ServicesSection = () => {
  const services = [
    {
      title: "Brand",
      image: brandImg,
      details: [
        "Logo / Identity",
        "Brand Guidelines",
        "Marketing",
        "Copywriting",
      ],
    },
    {
      title: "Digital",
      image: digitalImg,
      details: [
        "Website Design",
        "Website SEO",
        "Video and Animation",
        "Digital Marketing",
      ],
    },
    {
      title: "Print",
      image: printImg,
      details: ["Printed Items", "Signage and Display", "Promotional Items"],
    },
  ];

  // Tailwind colors with lower opacity for hover
  const hoverBgColors = [
    "md:hover:bg-pink-500/30",
    "md:hover:bg-orange-500/30",
    "md:hover:bg-green-500/30",
  ];

  // Darker text colors for title on hover
  const hoverTextColors = [
    "md:group-hover:text-pink-700",
    "md:group-hover:text-orange-700",
    "md:group-hover:text-green-700",
  ];

  return (
    <section
      id="services"
      className="bg-black text-white pt-28 px-4 sm:px-6 md:px-16 md:pb-[13rem] pb-[2rem]"
    >
      {/* Title + Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
          Services
        </h2>
        <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[17px] md:text-[18px] w-[90%] sm:w-[80%] mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-[60rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              relative rounded-xl overflow-hidden transition-all duration-500 group
              w-[95%] sm:w-[90%] md:w-[85%] mx-auto
              h-auto md:h-[250px] py-6 md:py-0
              bg-[#1A1A1A] ${hoverBgColors[index]}
            `}
          >
            {/* Default Content (Visible on Desktop) */}
            <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                {service.title}
              </h3>
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Hover Details (Desktop) / Always Open (Mobile) */}
            <div className="flex flex-col items-center justify-center md:absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-500 ${hoverTextColors[index]}`}
              >
                {service.title}
              </h3>
              <ul className="space-y-1 text-[13px] sm:text-sm md:text-base text-white">
                {service.details.map((item, i) => (
                  <li
                    key={i}
                    className="opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-200 ease-out cursor-pointer hover:scale-110"
                    style={{ transitionDelay: `${i * 100 + 150}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mobile Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-14 h-14 object-contain mt-4 md:hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
