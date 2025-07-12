// src/components/BlogSection.jsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const posts = [
  {
    id: 1,
    title: "Post One",
    excerpt: "Short description of post one.",
    img: "/assets/blog1.jpg",
  },
  {
    id: 2,
    title: "Post Two",
    excerpt: "Short description of post two.",
    img: "/assets/blog2.jpg",
  },
  {
    id: 3,
    title: "Post Three",
    excerpt: "Short description of post three.",
    img: "/assets/blog3.jpg",
  },
  // ...additional posts
];

export default function BlogSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
          Latest Blog Posts
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                data-aos="fade-up"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
