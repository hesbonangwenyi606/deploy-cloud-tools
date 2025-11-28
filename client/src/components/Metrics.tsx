import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Metrics = () => {
  const metrics = [
    {
      title: "Faster Deployments",
      value: 75,
      suffix: "%",
      description: "Improvement in deployment speed",
      color: "text-cyan-400",
    },
    {
      title: "Uptime Achieved",
      value: 99.9,
      suffix: "%",
      description: "Service availability maintained",
      color: "text-green-400",
    },
    {
      title: "Pipelines Automated",
      value: 500,
      suffix: "+",
      description: "Automated CI/CD pipelines",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Measurable <span className="text-cyan-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quantified improvements in deployment efficiency, reliability, and
            automation scalability
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`text-4xl font-bold mb-2 ${metric.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={2.5}
                  decimals={metric.value % 1 !== 0 ? 1 : 0}
                  suffix={metric.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {metric.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
