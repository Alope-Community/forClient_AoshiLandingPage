import classNames from "classnames";
import { useState } from "react";
import faqs from "./data/faqs.json";
import Badge from "../../components/Badge";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // bagi 3 slide (misalnya per 6 faq)
  const itemsPerSlide = Math.ceil(faqs.length / 3);
  const slides = Array.from({ length: 3 }, (_, i) =>
    faqs.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setOpenIndex(null); // tutup accordion ketika ganti slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setOpenIndex(null);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-tl from-black to-[#61b241]/30 xl:px-0 lg:px-8 px-5 shadow-lg py-20 relative"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-3">
        <div className="lg:mb-0 mb-10 text-center lg:text-left pt-14">
          <Badge text="FAQs" />
          <h2 className="text-3xl sm:text-4xl text-white font-bold mt-5">
            Apa yang Sering Ditanyakan{" "}
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-5xl mt-2 sm:block">
              Calon Mitra
            </span>
          </h2>
        </div>

        {/* SLIDES */}
        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col gap-6 border-2 border-white/10 relative overflow-hidden">
          {slides[currentSlide].map((faq, index) => {
            const globalIndex = currentSlide * itemsPerSlide + index;
            return (
              <div
                key={globalIndex}
                className={classNames({
                  "border-b border-gray-300/20":
                    index + 1 !== slides[currentSlide].length,
                })}
              >
                <button
                  className="w-full flex justify-between items-center py-4 text-left font-semibold"
                  onClick={() => toggleAccordion(globalIndex)}
                >
                  {faq.question}
                  <span className="ml-2 text-[#61b241] font-bold">
                    {openIndex === globalIndex ? "−" : "+"}
                  </span>
                </button>
                {openIndex === globalIndex && (
                  <div className="pb-4 text-gray-300">{faq.answer}</div>
                )}
              </div>
            );
          })}

          {/* Navigation */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-[#61b241]/20 rounded-lg text-white"
            >
              Prev
            </button>
            <div className="flex space-x-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentSlide(i);
                    setOpenIndex(null);
                  }}
                  className={classNames(
                    "w-3 h-3 rounded-full",
                    currentSlide === i ? "bg-[#61b241]" : "bg-white/30"
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-[#61b241]/20 rounded-lg text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
