import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex-1 rounded-lg overflow-hidden relative group h-[400px]">
      {/* Mock Carousel Image */}
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200"
        alt="Main Banner"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent flex flex-col justify-center px-12 text-white">
        <h2 className="text-4xl font-extrabold mb-4 leading-tight">
          Big Summer Sale <br />
          <span className="text-orange-500">Up to 60% Off!</span>
        </h2>
        <p className="text-lg mb-8 text-grey-100 max-w-md">
          Upgrade your gadgets and lifestyle with our exclusive deals on top brands.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all w-fit shadow-lg hover:shadow-xl">
          Shop Now
        </button>
      </div>

      {/* Carousel Controls (Mock) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-8 h-1 bg-white rounded-full"></div>
        <div className="w-8 h-1 bg-white/40 rounded-full"></div>
        <div className="w-8 h-1 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
