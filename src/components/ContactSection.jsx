// src/components/ContactSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { BiEnvelope, BiPhone, BiMap, BiPaperPlane } from "react-icons/bi";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const formRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, error: false, success: false });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormState({ loading: false, error: false, success: true });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error("Email sending error:", error);
      setFormState({ loading: false, error: true, success: false });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#f8fbff] to-[#e6f0ff] dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative pb-3">
            Get In Touch
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-blue-600 "></div>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out
            and let's create something amazing together.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BiMap className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      smileLink Inc., 19 Ellicot Avenue
                      <br />
                      Kubwa, Abuja 901101
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BiPhone className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Call Us
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      +234 (816) 017-5628
                      <br />
                      Mon-Fri, 9am-5pm GMT
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BiEnvelope className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email Us
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      smile@c2harvard.com
                      <br />
                      smilelinkus@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Find Us On Map
                </h4>
                <div className="rounded-xl overflow-hidden shadow-md h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.9873504609814!2d7.359311474866125!3d9.155613086994515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf289a34682b%3A0x6ac93342231cbe26!2sSURESTART%20HIGH%20SCHOOLS%20ABUJA!5e0!3m2!1sen!2sng!4v1752804225639!5m2!1sen!2snghttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.87330121896!2d7.299806017353463!3d9.155900787100327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf0c2a3c1a17%3A0x544853655f0d2798!2sNo%209%20Sure%20start%20Avenue%20Kubwa!5e0!3m2!1sen!2sng!4v1752804750461!5m2!1sen!2sng"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Updated with flex layout */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col flex-grow space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Mike Dangote"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="dangote@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="How can we help?"
                  required
                />
              </div>

              {/* Expanded textarea container */}
              <div className="flex-grow flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <div className="flex-grow">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-full min-h-[150px] px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="relative">
                {formState.loading && (
                  <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex items-center justify-center rounded-lg">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState.loading}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                >
                  <span>Send Message</span>
                  <BiPaperPlane className="w-5 h-5" />
                </button>

                {formState.error && (
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-center">
                    Error sending message. Please try again.
                  </div>
                )}

                {formState.success && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-center">
                    Your message has been sent successfully! We'll contact you
                    soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
