import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion"; // Import Motion + AnimatePresence + easeOut for TS safety
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import brandImgSmall from "../assets/brand-small.svg";
import digitalImgSmall from "../assets/digital-small.svg";
import printImgSmall from "../assets/print-small.svg";
import brandImg from "../assets/brand.svg";
import digitalImg from "../assets/digital.svg";
import printImg from "../assets/print.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null); // Track hovered service for background change
  const [hoveredSubItem, setHoveredSubItem] = useState<{
    service: string;
    index: number;
  } | null>(null); // New state to track hovered sub-item for "More Info"
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref for delaying background reset on mouse leave

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const menuItems = ["approach", "values", "work", "latest", "contact"];

  const services = [
    {
      name: "Brand",
      image: brandImgSmall,
      fullImage: brandImg,
      color: "#F90099",
      gradient: "linear-gradient(to bottom, #411C33, #D61A8E)", // Added gradient for Brand
      description: [
        "Logo / identity",
        "Brand guidelines",
        "Marketing",
        "Copywriting",
      ], // Added descriptions for Brand
    },
    {
      name: "Digital",
      image: digitalImgSmall,
      fullImage: digitalImg,
      color: "#FF6200",
      gradient: "linear-gradient(to bottom, #5A2310, #C04922)", // Added gradient for Digital
      description: [
        "Website Design",
        "Website SEO",
        "Video and Animation",
        "Digital Marketing",
      ], // Added descriptions for Digital
    },
    {
      name: "Print",
      image: printImgSmall,
      fullImage: printImg,
      color: "#8DC63F",
      gradient: "linear-gradient(to bottom, #3C4A29, #539100)", // Added gradient for Print
      description: [
        "Printed Items",
        "Signage and Display",
        "Promotional Items",
      ], // Added descriptions for Print
    },
  ];

  // Default gradient when no service is hovered
  const defaultGradient = "linear-gradient(to bottom, #3C94B4, #1A404E)";

  // Get current background based on hovered service
  const getCurrentBackground = () => {
    if (!hoveredService) return defaultGradient;
    const service = services.find((s) => s.name === hoveredService);
    return service ? service.gradient : defaultGradient;
  };

  // Check if a specific sub-item is hovered
  const isSubItemHovered = (serviceName: string, index: number) => {
    return (
      hoveredSubItem?.service === serviceName && hoveredSubItem?.index === index
    );
  };

  // Handle service mouse enter: Clear any pending reset and set new service
  const handleServiceEnter = (serviceName: string) => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
    setHoveredService(serviceName);
  };

  // Handle service mouse leave: Delay reset to allow smooth transition to next service
  const handleServiceLeave = () => {
    resetTimeoutRef.current = setTimeout(() => {
      setHoveredService(null);
      resetTimeoutRef.current = null;
    }, 100); // Reduced delay from 150ms to 100ms for faster response
  };

  // Close modal function (for desktop hover leave)
  const closeModal = () => {
    setServicesOpen(false);
    setHoveredService(null);
    setHoveredSubItem(null);
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  };

  // Modal variants for entrance/exit
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95, // Subtle scale down from center
      transition: { duration: 0.2, ease: easeOut },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, ease: easeOut },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15, ease: easeOut }, // Faster exit for snappiness
    },
  };

  // Service row variants for staggering (each service appears with delay)
  const serviceRowVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent">
        <div className="flex flex-col items-center w-full">
          <nav
            className={`relative flex items-center justify-center gap-8 mt-6 px-8 py-3 transition-all duration-300 w-full sm:max-w-5xl ${
              scrolled
                ? "bg-black/20 shadow-lg rounded-full backdrop-blur-md"
                : ""
            }`}
            style={{
              minWidth: scrolled ? "340px" : undefined,
              maxWidth: scrolled ? "50vw" : undefined,
            }}
          >
            <div className="flex items-center gap-2">
              {/* Logo */}
              <span className="text-2xl font-bold text-white select-none md:mr-[80px]">
                Sample Brand
              </span>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2 relative">
                {/* Services Button */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <button
                    type="button"
                    className={`font-semibold transition px-[8px] py-[2px] rounded-[35px] ${
                      servicesOpen
                        ? "bg-pink-500 text-white"
                        : "text-white hover:bg-pink-500 hover:text-white"
                    }`}
                  >
                    Services
                  </button>
                </div>

                {/* Other Menu Items */}
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`text-white font-semibold transition px-[8px] py-[2px] rounded-[35px] hover:bg-pink-500 hover:text-white ${
                      item === "contact"
                        ? "ml-2 bg-orange-500 shadow hover:bg-orange-600"
                        : ""
                    }`}
                    onMouseEnter={() => setServicesOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Burger */}
            <button
              className="md:hidden text-white absolute right-6"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Services Modal - Desktop Only */}
      <AnimatePresence mode="wait">
        {" "}
        {/* AnimatePresence for smooth enter/exit */}
        {servicesOpen && (
          <motion.div
            className="fixed inset-0 hidden md:flex flex-col justify-center items-center" // Hidden on mobile, flex on desktop only
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              background: getCurrentBackground(), // Dynamic background (Motion will animate changes)
              zIndex: 30, // Moved zIndex into style for compatibility
            }}
            transition={{
              background: { duration: 0.25, ease: easeOut }, // Smooth gradient transitions
              type: "spring", // Optional: Spring physics for bouncy feel (remove if too playful)
              stiffness: 300,
            }}
          >
            <motion.div
              className="flex flex-col w-[38%]"
              initial={{ opacity: 0 }} // Subtle fade for content
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }} // Delay after modal entrance
              onMouseLeave={() => {
                closeModal(); // Close modal when leaving the content area (desktop only)
              }}
            >
              {services.map((service, index) => (
                <motion.div // Each service row as motion.div for staggering
                  key={service.name}
                  className="flex flex-row items-center justify-between border-b border-gray-400 py-6 px-8 last:border-b-0 relative gap-8" // Changed items-start to items-center for vertical centering of columns
                  variants={serviceRowVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 + index * 0.15 }} // Stagger: 0.2s base + 0.15s per service (Brand first, then Digital, then Print)
                  onMouseEnter={() => handleServiceEnter(service.name)} // Use handler for smooth enter (desktop only)
                  onMouseLeave={handleServiceLeave} // Use handler for delayed leave (desktop only)
                >
                  {/* Left Column: Text Content (Name + Descriptions) - Takes most space */}
                  <div className="flex-1 flex flex-col justify-start min-w-0">
                    {" "}
                    {/* Changed justify-between to justify-start to align content to top within column; flex-1 to take available space; min-w-0 to prevent overflow */}
                    {/* Service Name */}
                    <span
                      className={`text-[35px] font-bold transition-colors cursor-pointer mb-4 ${
                        hoveredService === null
                          ? "text-white hover:text-[${service.color}]"
                          : hoveredService === service.name
                          ? `text-[${service.color}]`
                          : "text-[#FFFFFF59] hover:text-[${service.color}]"
                      }`} // Added mb-4 for spacing below name
                    >
                      {service.name}
                    </span>
                    {/* Description List: Animated in/out based on hover */}
                    <div
                      className={`w-full overflow-hidden transition-all duration-600 ease-in-out origin-top ${
                        hoveredService === service.name
                          ? "scale-y-100 opacity-100 max-h-[200px]"
                          : "scale-y-0 opacity-0 max-h-0"
                      }`}
                    >
                      <div className="space-y-1 pt-2">
                        {service.description.map((item, descIndex) => {
                          const isHovered = isSubItemHovered(
                            service.name,
                            descIndex
                          );
                          return (
                            <div
                              key={descIndex}
                              className={`relative flex items-center cursor-pointer transition-all duration-400 ease-in-out w-full ${
                                hoveredService === service.name
                                  ? "opacity-100 delay-150"
                                  : "opacity-0"
                              }`}
                              style={{
                                transitionDelay:
                                  hoveredService === service.name
                                    ? `${descIndex * 100}ms`
                                    : "0ms",
                              }}
                              onMouseEnter={() =>
                                setHoveredSubItem({
                                  service: service.name,
                                  index: descIndex,
                                })
                              }
                              onMouseLeave={() => setHoveredSubItem(null)}
                            >
                              {/* "More Info" Sliding Part: Slides from left to right on hover */}
                              <span
                                className={`absolute left-0 whitespace-nowrap transition-all duration-400 ease-in-out mr-3 ${
                                  isHovered
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-full opacity-0"
                                }`}
                                style={{
                                  color: service.color,
                                  fontWeight: "medium",
                                }}
                              >
                                More Info
                              </span>
                              {/* Original Item Text: Stays in place, with more flexible padding-left on hover to avoid overlap */}
                              <span
                                className={`text-white text-[18px] font-light transition-all duration-400 ease-in-out block ${
                                  isHovered ? "pl-20" : "pl-0" // Increased to pl-20 (80px) for more space; block for full width
                                }`}
                              >
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Image (Fixed width, centered vertically) */}
                  <div className="flex-shrink-0 w-32 self-center">
                    {" "}
                    {/* Added self-center to the right column div for vertical centering relative to the row; removed inner flex since image is direct child */}
                    <motion.img // Optional: Make image a motion.img for extra hover polish
                      src={
                        hoveredService === service.name
                          ? service.fullImage
                          : service.image
                      }
                      alt={service.name}
                      className={`object-cover rounded-md transition-all duration-300 ease-in-out ${
                        hoveredService === service.name && "w-[200px]" // Full size when hovered
                      } mx-auto`} // Removed self-center from img; added mx-auto for horizontal centering within the fixed-width column
                      initial={{ scale: 0.9 }} // Subtle initial scale for entrance
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }} // Enhanced: Slight extra scale on row hover
                      transition={{ duration: 0.3, ease: easeOut }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-20 left-0 w-full bg-white/20 backdrop-blur-lg border border-white/10 rounded-[35px] shadow-lg z-40 flex flex-col items-center gap-6 py-8 md:hidden">
          <a
            href="#services" // Bookmark/anchor to jump/scroll to Services section
            className="text-white text-lg font-semibold transition rounded-[35px] px-6 py-2" // Added padding for button-like feel
            onClick={(e) => {
              setMobileOpen(false); // Close mobile menu
              // Let the href handle the smooth scroll/jump to #services (no preventDefault)
            }}
          >
            Services
          </a>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-white text-lg font-semibold transition rounded-[35px] ${
                item === "contact"
                  ? "px-6 py-2 bg-orange-500 shadow hover:bg-orange-600"
                  : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}

      {/* Safelist for dynamic Tailwind arbitrary values (hidden, doesn't affect UI) */}
      <div className="hidden text-[#F90099] text-[#FF6200] text-[#8DC63F] text-[#FFFFFF59] hover:text-[#F90099] hover:text-[#FF6200] hover:text-[#8DC63F] hover:text-[#FFFFFF59] w-[100px] h-[100px] self-center w-32 flex-shrink-0 mx-auto" />
    </div>
  );
};

export default Header;
