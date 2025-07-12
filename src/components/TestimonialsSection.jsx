// src/components/TestimonialsSection.jsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiSolidQuoteAltLeft,
  BiSolidQuoteLeft,
  BiSolidQuoteRight,
} from "react-icons/bi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Star Rating Component with numeric value
function StarRating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }

  // Half star
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }

  // Empty stars
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
  }

  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="flex gap-1">{stars}</div>
      <span className="text-yellow-500 font-bold text-lg">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Director, TechNova",
      content:
        "Working with this team transformed our product strategy. Their insights and technical expertise helped us increase user engagement by 42% in just three months.",
      rating: 5,
      image: "/assets/img/testimonials/testimonials-1.jpg",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CEO, InnovateX",
      content:
        "The attention to detail and creative approach delivered beyond our expectations. Our website redesign resulted in a 78% increase in conversion rates.",
      rating: 4.5,
      image: "/assets/img/testimonials/testimonials-2.jpg",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Marketing Director, GrowthLab",
      content:
        "Their strategic thinking combined with technical excellence created a solution that perfectly addresses our complex business requirements.",
      rating: 5,
      image: "/assets/img/testimonials/testimonials-3.jpg",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, FutureTech",
      content:
        "The team's ability to understand our vision and translate it into a seamless user experience was remarkable. The project was delivered on time and under budget.",
      rating: 5,
      image: "/assets/img/testimonials/testimonials-4.jpg",
    },
    {
      id: 5,
      name: "Jennifer Park",
      role: "Founder, StartupHub",
      content:
        "Working with these professionals has been a game-changer for our business. Their technical expertise and creative problem-solving delivered exceptional results.",
      rating: 4.5,
      image: "/assets/img/testimonials/testimonials-5.jpg",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-[#f8fbff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 right-5 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-blue-600 font-mono text-sm tracking-wider mb-3">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative pb-3">
            What Our Clients Say
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from professionals who've
            experienced our services firsthand.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative py-10" data-aos="fade-up" data-aos-delay="100">
          {/* Quote decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 text-blue-500 opacity-10">
            <BiSolidQuoteAltLeft className="text-9xl" />
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} bg-gray-300 w-3 h-3 opacity-100 mx-1 rounded-full"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg h-full p-8 relative overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                  {/* Quote icons */}
                  <BiSolidQuoteLeft className="absolute top-6 left-6 text-blue-100 dark:text-blue-900 text-4xl" />
                  <BiSolidQuoteRight className="absolute bottom-6 right-6 text-blue-100 dark:text-blue-900 text-4xl" />

                  {/* Testimonial content */}
                  <div className="relative z-10">
                    <StarRating rating={testimonial.rating} />

                    <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-center">
                      {testimonial.content}
                    </p>

                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg mb-4"
                      />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="swiper-pagination mt-10 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
