import React from 'react';
import { ProjectData } from '../types';

interface ProjectsProps {
  onProjectClick: (project: ProjectData) => void;
}

export const projects: ProjectData[] = [
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-scale analytics platform using advanced AI algorithms",
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">AI Analytics Platform</h3>
        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Analytics Platform" className="rounded-lg mb-6" />
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-400">Developed a comprehensive analytics platform that processes and analyzes large-scale data using advanced AI algorithms.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Key Features</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Real-time data processing</li>
              <li>Predictive analytics</li>
              <li>Custom dashboards</li>
              <li>Automated reporting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>TensorFlow</li>
              <li>Python</li>
              <li>Apache Kafka</li>
              <li>Elasticsearch</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>50% reduction in data processing time</li>
              <li>90% accuracy in predictive models</li>
              <li>30% increase in operational efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "MLOps Pipeline Automation",
    description: "Automated ML model deployment and monitoring system",
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">MLOps Pipeline</h3>
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="MLOps Pipeline" className="rounded-lg mb-6" />
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-400">Implemented an end-to-end MLOps pipeline for automated model training, deployment, and monitoring.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Key Features</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Automated model training</li>
              <li>Version control for ML models</li>
              <li>A/B testing framework</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Kubernetes</li>
              <li>Docker</li>
              <li>MLflow</li>
              <li>Jenkins</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "DevOps Transformation",
    description: "Complete DevOps transformation for Fortune 500 company",
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">DevOps Transformation</h3>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="DevOps" className="rounded-lg mb-6" />
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-400">Led a complete DevOps transformation for a Fortune 500 company, implementing modern practices and tools.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Achievements</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Reduced deployment time by 80%</li>
              <li>Increased deployment frequency by 300%</li>
              <li>Reduced failure rate by 60%</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "SRE Implementation",
    description: "SRE practices implementation for high-availability systems",
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">SRE Implementation</h3>
        <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="SRE" className="rounded-lg mb-6" />
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-400">Implemented SRE practices for a high-availability system serving millions of users.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Key Metrics</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>99.99% system availability</li>
              <li>50% reduction in incident response time</li>
              <li>90% automation of routine tasks</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];

export function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}