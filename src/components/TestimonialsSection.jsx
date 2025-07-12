// src/components/TestimonialsSection.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    img: "testimonials-1.jpg",
    name: "Saul Goodman",
    title: "Ceo & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
  },
  {
    img: "testimonials-2.jpg",
    name: "Sara Wilsson",
    title: "Designer",
    text: "Export tempor illum tamen malis malis eram quae irure esse labore.",
  },
  {
    img: "testimonials-3.jpg",
    name: "Jena Karlis",
    title: "Store Owner",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla.",
  },
  {
    img: "testimonials-4.jpg",
    name: "Matt Brandon",
    title: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim.",
  },
  {
    img: "testimonials-5.jpg",
    name: "John Larson",
    title: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster.",
  },
];

export function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={testimonials.length > 3}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div
                className="p-6 border rounded-lg bg-white"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <p className="mb-4 text-gray-600 text-sm italic">
                  <FaQuoteLeft className="inline mr-2 text-blue-600" />
                  {t.text}
                  <FaQuoteRight className="inline ml-2 text-blue-600" />
                </p>
                <img
                  src={`/assets/img/testimonials/${t.img}`}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h4 className="text-xl font-semibold text-center">{t.name}</h4>
                <p className="text-center text-gray-500 text-sm">{t.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
