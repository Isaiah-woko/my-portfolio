import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/Isaiah.jpg",
    rating: 5,
    text: "Working with Isaiah was an absolute pleasure. His attention to detail and design skills are top-notch!",
  },
  {
    name: "Jane Smith",
    role: "Founder, StartupX",
    image: "/reviews/jane.jpg",
    rating: 4,
    text: "Isaiah brought our vision to life with a stunning UI. Highly recommended!",
  },
  {
    name: "Michael Johnson",
    role: "CTO, DevHub",
    image: "/reviews/michael.jpg",
    rating: 5,
    text: "A talented developer with a deep understanding of UI/UX and backend logic. Great work!",
  },
];

const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center max-w-sm"
  >
    <img 
      src={review.image} 
      alt={review.name} 
      className="w-16 h-16 mx-auto rounded-full mb-4" 
      loading="lazy"
      onError={(e) => { e.target.src = "/placeholder.jpg"; }}
    />
    <h3 className="text-lg font-semibold text-white">{review.name}</h3>
    <p className="text-sm text-gray-300">{review.role}</p>
    <div className="flex justify-center mt-2">
      {[...Array(review.rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-300 mt-3">{review.text}</p>
  </motion.div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="min-h-screen flex flex-col items-center text-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white"
      >
        What People Say
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mt-4"
      >
        See what others have to say about my work.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
