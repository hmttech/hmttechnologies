import React from 'react';
import { Brain, Code2, Cpu, Users, Building2, MessageSquare } from 'lucide-react';
import { ServiceData } from '../types';

interface ServicesProps {
  onServiceClick: (service: ServiceData) => void;
}

export const services: ServiceData[] = [
  {
    icon: <Brain className="h-12 w-12 text-blue-500" />,
    title: 'Artificial Intelligence',
    description: 'Custom AI solutions and intelligent automation for your business needs',
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">AI Solutions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Natural Language Processing</h4>
            <p className="text-gray-400 mb-4">Advanced NLP solutions for text analysis, sentiment detection, and automated response systems.</p>
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="NLP" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Sentiment Analysis for Social Media Monitoring</li>
              <li>Automated Customer Support Systems</li>
              <li>Document Classification and Processing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Computer Vision</h4>
            <p className="text-gray-400 mb-4">State-of-the-art computer vision solutions for object detection, recognition, and tracking.</p>
            <img src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Computer Vision" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Real-time Object Detection Systems</li>
              <li>Facial Recognition Solutions</li>
              <li>Quality Control Automation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Code2 className="h-12 w-12 text-blue-500" />,
    title: 'MLOps',
    description: 'End-to-end machine learning lifecycle management and deployment',
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">MLOps Solutions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Automated ML Pipeline</h4>
            <p className="text-gray-400 mb-4">Streamlined ML model development, testing, and deployment pipelines.</p>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="ML Pipeline" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Continuous Integration for ML Models</li>
              <li>Automated Model Training and Validation</li>
              <li>Version Control for ML Artifacts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Model Monitoring</h4>
            <p className="text-gray-400 mb-4">Real-time monitoring and performance tracking of deployed ML models.</p>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Model Monitoring" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Performance Metrics Dashboard</li>
              <li>Drift Detection and Alerts</li>
              <li>Automated Model Retraining</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Cpu className="h-12 w-12 text-blue-500" />,
    title: 'AIOps',
    description: 'AI-powered IT operations for enhanced performance and reliability',
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">AIOps Solutions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Monitoring</h4>
            <p className="text-gray-400 mb-4">AI-driven system monitoring and anomaly detection.</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="AIOps Monitoring" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Real-time Performance Analytics</li>
              <li>Predictive Maintenance</li>
              <li>Automated Incident Response</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: 'DevOps',
    description: 'Streamlined development and operations with modern practices',
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">DevOps Solutions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">CI/CD Pipeline Automation</h4>
            <p className="text-gray-400 mb-4">Automated build, test, and deployment pipelines.</p>
            <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="DevOps Pipeline" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Continuous Integration Setup</li>
              <li>Automated Testing Framework</li>
              <li>Deployment Automation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Building2 className="h-12 w-12 text-blue-500" />,
    title: 'SRE',
    description: 'Site Reliability Engineering for maximum system availability',
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">SRE Solutions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Reliability Engineering</h4>
            <p className="text-gray-400 mb-4">Ensuring system reliability and performance.</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="SRE" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>SLO/SLA Management</li>
              <li>Error Budgeting</li>
              <li>Capacity Planning</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-blue-500" />,
    title: 'Consulting',
    description: 'Expert guidance on AI strategy and implementation',
    details: (
      <div>
        <h3 className="text-2xl font-bold mb-6">Consulting Services</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Technology Strategy</h4>
            <p className="text-gray-400 mb-4">Strategic consulting for digital transformation.</p>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Consulting" className="rounded-lg mb-4" />
            <ul className="list-disc list-inside text-gray-400">
              <li>Digital Transformation Strategy</li>
              <li>Technology Assessment</li>
              <li>Implementation Roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];

export function Services({ onServiceClick }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 md:p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all cursor-pointer"
              onClick={() => onServiceClick(service)}
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}