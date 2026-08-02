import React from "react";

const SectionFive = () => {
  const stats = [
    { value: "100+", label: "Meetups attended" },
    { value: "150+", label: "Media partnerships" },
    { value: "125+", label: "Interviews published" },
    { value: "45+",  label: "Cities covered" }
  ];

  return (
    <div id="stats" className="bg-black py-20 px-6 lg:px-20 border-y border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* Left Section */}
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Unparalleled Media Intelligence in the Web3 Landscape.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We are deeply embedded in the ecosystem, connecting builders, investors, and communities across the nation.
          </p>
        </div>

        {/* Right Section - Stats Grid */}
        <div className="w-full lg:w-7/12 grid grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SectionFive;
