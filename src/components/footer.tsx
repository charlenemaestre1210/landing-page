import React, { useEffect } from "react";
import bgImage from "../assets/footer.jpg";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { footerData as dataType } from "../data/footerData";

interface FooterProps {
  data: typeof dataType;
}

function Footer({ data }: FooterProps) {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }, []);

  return (
    <footer className="relative text-white overflow-hidden flex flex-col">
      {/* Background */}
      <div
        className="relative w-full min-h-[600px] content-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 sm:pt-20 lg:px-8 z-10 w-full sm:pb-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="w-full max-w-[250px] mx-auto md:mx-0">
              <div className="grid grid-cols-2 gap-6 text-center md:text-justify">
                <ul className="space-y-3 text-white font-semibold text-[18px]">
                  {data.navLinks1.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-[#ec4899] transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-white font-semibold text-[18px]">
                  {data.navLinks2.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-[#ec4899] transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 text-center md:text-left">
                <a
                  href="#"
                  className="inline-block bg-[#F15A29] text-white font-semibold text-[17px] px-10 py-3 rounded-[31px] shadow-md hover:opacity-90 transition"
                >
                  Start your project
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="text-white text-center md:text-justify">
              <div className="mb-8 text-[17px]">
                <h3 className="text-[30px] font-semibold text-[#F15A29] mb-3">
                  Visit Us
                </h3>
                <p className="text-[16px] leading-relaxed whitespace-pre-line">
                  {data.contactInfo.address}
                </p>

                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <PhoneIcon className="w-5 h-5 text-[#F15A29] fill-current" />
                  <span className="text-[16px]">{data.contactInfo.phone}</span>
                </div>
              </div>

              <div>
                <h3 className="text-[30px] font-semibold text-[#F15A29] mb-3">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-6 text-[16px] items-center justify-center md:justify-start">
                  {data.socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-2 hover:text-[#F15A29] transition"
                      >
                        <Icon className="w-5 h-5 text-[#F15A29]" />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-[30px] font-semibold text-[#F15A29] mb-4 justify-self-center">
                Stay Updated
              </h3>

              <form className="space-y-4">
                <div className="text-center">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Name*"
                    className="w-[85%] border px-4 py-3 rounded-[26px] bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                  />
                </div>

                <div className="text-center">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email*"
                    className="w-[85%] border px-4 py-3 rounded-[26px] bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                  />
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <label htmlFor="agree" className="text-center">
                      <input
                        type="checkbox"
                        id="agree"
                        required
                        className="accent-[#F15A29] mr-2"
                      />
                      By submitting this form, you agree to Platinum Creative’s{" "}
                      <a
                        href="#"
                        className="text-[#F15A29] hover:underline font-medium"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>

                <div className="w-1/2 justify-self-center">
                  <button
                    type="submit"
                    className="w-full bg-transparent border text-white font-semibold py-3 rounded-[30px] hover:bg-[#ec4899] hover:border-[#ec4899] hover:text-white transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full bg-[#141414] py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 text-[#707070] text-[14px] relative">
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2 md:gap-16 text-center md:text-left">
            <span>
              © Sample Brand <span id="year">2025</span>
            </span>
            {data.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#ec4899] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0 md:mr-[50px]">
            <button className="bg-transparent border border-[#FFFFFF] text-[#FFFFFF] px-2 rounded-[13px] hover:bg-[#ec4899] hover:border-[#ec4899] hover:text-white transition font-semibold">
              File Upload
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
