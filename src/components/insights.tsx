import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CardData {
  id: number;
  title: string;
  text: string;
  image: string;
}

interface InsightsSectionProps {
  cards: CardData[];
}

const InsightsSection = ({ cards }: InsightsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(cards.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const cardColors = ["#FE8963", "#3160B2", "#FE8963"];
  const cardWidth = 900;
  const gap = 40;

  // Tripled array for smooth looping
  const loopedCards = [...cards, ...cards, ...cards];
  const totalCards = loopedCards.length;

  const prevCard = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextCard = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // ✅ Auto-slide continuously to the right
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextCard();
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // ✅ Reset position seamlessly when reaching the end or start
  useEffect(() => {
    const total = cards.length;
    if (currentIndex >= total * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total);
      }, 700);
    }
    if (currentIndex < total) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total + (currentIndex % total));
      }, 700);
    }
  }, [currentIndex, cards.length]);

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-0 h-[850px] content-center">
      {/* Title + Navigation */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12 gap-6 md:gap-24 ">
        <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
          Latest insights, news and interviews
        </h2>
        <div className="flex gap-3">
          <button
            onClick={prevCard}
            className="p-2 md:p-3 rounded-full bg-transparent border border-black hover:bg-[#F15A29] hover:text-white flex items-center justify-center"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextCard}
            className="p-2 md:p-3 rounded-full bg-transparent border border-black hover:bg-[#F15A29] hover:text-white flex items-center justify-center"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="relative overflow-hidden w-full">
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(calc(50% - ${cardWidth / 2}px - ${
              currentIndex * (cardWidth + gap)
            }px))`,
          }}
        >
          {loopedCards.map((card, index) => {
            const cardColor = cardColors[index % cardColors.length];
            return (
              <div
                key={`${card.id}-${index}`}
                className="flex-shrink-0 shadow-lg overflow-hidden relative group md:h-[416px]"
                style={{
                  width: `${cardWidth}px`,
                  backgroundColor: cardColor,
                  marginRight: `${gap}px`,
                }}
              >
                {/* ✅ MOBILE VERSION */}
                <div className="flex flex-col md:hidden w-full h-auto">
                  <div className="relative w-full h-[17rem]">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="p-6 flex flex-col justify-center text-center text-white"
                    style={{ backgroundColor: cardColor }}
                  >
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed break-words md:px-0 px-[17rem]">
                      {card.text}
                    </p>
                    <button className="bg-white text-black rounded-full py-2 px-5 font-semibold mx-auto hover:scale-105 transition-transform">
                      Read More
                    </button>
                  </div>
                </div>

                {/* ✅ DESKTOP VERSION */}
                <div className="hidden md:flex h-full group">
                  {/* LEFT SIDE */}
                  <div className="w-1/2 p-14 flex flex-col justify-center relative overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3
                        className="text-[28px] font-bold text-white mb-4 transition-colors duration-300"
                        id={`card-title-${index}`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-white text-[18px] leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                    <style>
                      {`
                        .group:hover #card-title-${index} {
                          color: ${cardColor};
                        }
                      `}
                    </style>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <button
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      bg-white text-black rounded-full opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 py-[5px] px-[20px] font-bold hover:scale-105"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
