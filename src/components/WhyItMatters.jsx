import React from 'react';
import { motion } from 'framer-motion';

// Mock imports for the images from the visual example
// In a real app, you would import the specific images used in the cards.
// For this example, I'll use placeholders that resemble the aspect ratio.
import thumbnail1 from '../assets/Rectangle 3.png'; // Using the placeholder images you provided
import thumbnail2 from '../assets/Rectangle 5.png'; // for a quick example.
import thumbnail3 from '../assets/Rectangle 4.png'; // Replace with actual thumbnails later.

// Data structure mirroring the content in the "WHY IT MATTERS" image
const cardData = [
  {
    id: 1,
    image: thumbnail1,
    title: 'The #1 Visual Mistake That’s Costing You Clients (And How to Fix It)',
    description: 'Discover why average designs cost businesses real clients, and how powerful visuals can grab attention, build trust, and boost sales.',
    delay: 0.1,
    videoLink: '#', // Placeholder for a video link
  },
  {
    id: 2,
    image: thumbnail2,
    title: 'The Secret Weapon Behind Successful Businesses | 3D Product Modeling & Animation | Pair to Pixel',
    description: 'Bring your products to life with stunning 3D animation that grabs attention and builds trust. From startups to established brands, it’s the secret to standing out and driving sales.',
    delay: 0.3,
    videoLink: '#',
  },
  {
    id: 3,
    image: thumbnail3,
    title: 'From Brief to Final Animation | Full 3D Product Workflow (Client Work Process)',
    description: 'From a simple client brief to a polished motion video, we handle every stage with care. See how 3D modeling, textures, and lighting come together to make your product look real and ready to shine.',
    delay: 0.5,
    videoLink: '#',
  },
];

// ---

const VideoCard = ({ image, title, description, delay, videoLink }) => {
  return (
    <motion.a
      href={videoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl bg-[#1A1A1A] border border-[#3A3A3A] group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={`Thumbnail for ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Play Icon Overlay (optional, for video cards) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

// ---

const WhyItMatters = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24 bg-black bg-opacity-50">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold mb-12 text-left"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-red-500">WHY</span> IT MATTERS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <VideoCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            delay={card.delay}
            videoLink={card.videoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyItMatters;