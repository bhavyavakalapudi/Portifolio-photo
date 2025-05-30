import React from 'react';

// Sample portfolio data (replace with your actual images and details)
const portfolioItems = [
  { id: 1, src: '/image7.jpg', alt: 'Wedding Photography 1', category: 'Weddings' },
  { id: 2, src: 'image3.jpeg', alt: 'Portrait Photography 1', category: 'Portraits' },
  { id: 3, src: 'images8.jpg', alt: 'Landscape Photography 1', category: 'Landscapes' },
  { id: 4, src: 'image10.jpg', alt: 'Event Photography 1', category: 'Events' },
  { id: 5, src: 'image9.webp', alt: 'Wedding Photography 2', category: 'Weddings' },
  { id: 6, src: 'image4.jpg', alt: 'Portrait Photography 2', category: 'Portraits' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white text-center py-12 px-4 sm:px-6 md:py-16 md:px-8 pt-16 md:pt-20"> {/* Navbar padding & responsive padding */}
      <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto"> {/* Responsive max-width */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-10">My Work</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"> {/* Responsive gap */}
          {portfolioItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover block transition-transform duration-300 ease-in-out group-hover:scale-105" // Responsive height and object-cover
              />
              <div className="absolute inset-0 bg-black/60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4"> {/* Added padding to overlay */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.category}</h3> {/* Responsive text size */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
