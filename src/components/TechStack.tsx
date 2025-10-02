import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    {
      category: "Containerization",
      tools: [
        { name: "Docker", description: "Container platform for application packaging", level: 95 },
        { name: "Podman", description: "Daemonless container engine", level: 85 },
        { name: "Buildah", description: "Container image building tool", level: 80 }
      ]
    },
    {
      category: "Orchestration",
      tools: [
        { name: "Kubernetes", description: "Container orchestration platform", level: 92 },
        { name: "Docker Swarm", description: "Native Docker clustering", level: 78 },
        { name: "OpenShift", description: "Enterprise Kubernetes platform", level: 88 }
      ]
    },
    {
      category: "Infrastructure as Code",
      tools: [
        { name: "Terraform", description: "Multi-cloud infrastructure provisioning", level: 90 },
        { name: "Ansible", description: "Configuration management and automation", level: 87 },
        { name: "Pulumi", description: "Modern infrastructure as code", level: 75 }
      ]
    },
    {
      category: "CI/CD Platforms",
      tools: [
        { name: "Jenkins", description: "Extensible automation server", level: 93 },
        { name: "GitLab CI", description: "Integrated DevOps platform", level: 89 },
        { name: "GitHub Actions", description: "Native GitHub automation", level: 85 }
      ]
    },
    {
      category: "Cloud Platforms",
      tools: [
        { name: "AWS", description: "Amazon Web Services ecosystem", level: 94 },
        { name: "Azure", description: "Microsoft cloud platform", level: 82 },
        { name: "GCP", description: "Google Cloud Platform", level: 79 }
      ]
    },
    {
      category: "Monitoring & Observability",
      tools: [
        { name: "Prometheus", description: "Metrics collection and alerting", level: 88 },
        { name: "Grafana", description: "Visualization and dashboards", level: 91 },
        { name: "ELK Stack", description: "Elasticsearch, Logstash, Kibana", level: 86 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
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
            Technology <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive mastery of industry-leading DevOps tools and platforms
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: toolIndex * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h4>
                      <span className="text-sm text-gray-400 font-mono">
                        {tool.level}%
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mb-3">
                      {tool.description}
                    </p>

                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Showcase */}
        <motion.div
          className="mt-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Integrated DevOps Workflow
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-4 text-center">
            {["Git", "Jenkins", "Docker", "Kubernetes", "Terraform", "AWS", "Monitoring"].map((step, index) => (
              <React.Fragment key={step}>
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {step}
                </motion.div>
                {index < 6 && (
                  <motion.div
                    className="text-cyan-400 text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.25 }}
                    viewport={{ once: true }}
                  >
                    →
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
