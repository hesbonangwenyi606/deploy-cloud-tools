import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const lines = ["DevOps Automation", "Suite"]; // two lines

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          {/* Animated Title */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial="hidden"
            animate="visible"
          >
            {lines.map((line, lIndex) => (
              <motion.div
                key={lIndex}
                className="block"
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: 0.08,
                  delayChildren: lIndex * 0.6,
                }}
              >
                {line.split(" ").map((word, wIndex) => (
                  <span key={wIndex} className="mr-2 inline-block">
                    {word.split("").map((char, cIndex) => (
                      <motion.span
                        key={cIndex}
                        variants={letterVariant}
                        transition={{ duration: 0.3 }}
                        className={
                          word === "Automation"
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
                            : "inline-block"
                        }
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            ))}
          </motion.h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Comprehensive CI/CD pipeline automation with Docker, Kubernetes, and
            Terraform.{" "}
            <span className="text-green-400 font-semibold">
              Reduced deployment time by 75%.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Automation
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("dashboard")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Dashboard
            </button>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                <CountUp end={75} duration={2} suffix="%" />
              </div>
              <div className="text-gray-300">Faster Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                <CountUp end={99.9} decimals={1} duration={2.5} suffix="%" />
              </div>
              <div className="text-gray-300">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp end={500} duration={2.5} suffix="+" />
              </div>
              <div className="text-gray-300">Pipelines Automated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
