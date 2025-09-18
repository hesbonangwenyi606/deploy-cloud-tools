import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  const stats = [
    { value: 75, suffix: "%", color: "text-cyan-400", label: "Faster Deployments", decimals: 0 },
    { value: 99.9, suffix: "%", color: "text-green-400", label: "Uptime Achieved", decimals: 1 },
    { value: 500, suffix: "+", color: "text-blue-400", label: "Pipelines Automated", decimals: 0 }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127880901_69ed6bf8.webp"
          alt="DevOps Pipeline"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            DevOps
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Automation</span>
            <br />Suite
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Comprehensive CI/CD pipeline automation with Docker, Kubernetes, and Terraform.
            <span className="text-green-400 font-semibold"> Reduced deployment time by 75%.</span>
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Automation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Dashboard
            </button>
          </div>
          
          {/* Stats with Stagger + Pulse */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.4 }
              }
            }}
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.div
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 1 }}
                  whileInView={{ 
                    scale: [1, 1.15, 1], 
                    transition: { delay: 2.5, duration: 0.6 } 
                  }}
                  viewport={{ once: true }}
                >
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
