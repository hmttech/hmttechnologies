import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductsProps {
  onProductClick: (product: Product) => void;
}

const products: Product[] = [
  {
    id: '1',
    name: 'AI Vision Pro',
    description: 'Enterprise-grade computer vision solution for quality control and automation',
    features: [
      'Real-time object detection',
      'Quality inspection automation',
      'Defect classification',
      'Performance analytics dashboard',
      'Integration with existing systems'
    ],
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'Starting at $999/month',
    category: 'Computer Vision',
    details: (
      <div className="space-y-6">
        <img 
          src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="AI Vision Pro" 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-2xl font-bold mb-4">AI Vision Pro</h3>
          <p className="text-gray-400 mb-6">
            Transform your quality control process with our advanced computer vision solution.
            AI Vision Pro combines state-of-the-art deep learning models with intuitive interfaces
            to deliver unmatched accuracy in defect detection and classification.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>99.9% accuracy in defect detection</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Real-time processing capabilities</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Custom model training</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Enterprise-grade security</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: '2',
    name: 'MLOps Platform',
    description: 'Complete MLOps platform for model deployment and monitoring',
    features: [
      'Automated model deployment',
      'Version control for ML models',
      'Performance monitoring',
      'A/B testing framework',
      'Model registry'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'Starting at $1499/month',
    category: 'MLOps',
    details: (
      <div className="space-y-6">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="MLOps Platform" 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-2xl font-bold mb-4">MLOps Platform</h3>
          <p className="text-gray-400 mb-6">
            Streamline your machine learning operations with our comprehensive MLOps platform.
            From model deployment to monitoring, we provide all the tools you need to manage
            your ML lifecycle effectively.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Platform Features</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>One-click model deployment</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Automated testing and validation</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Real-time monitoring dashboard</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Integrated CI/CD pipelines</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: '3',
    name: 'DevOps Automation Suite',
    description: 'Comprehensive DevOps automation tools for modern development teams',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as Code',
      'Container orchestration',
      'Security scanning',
      'Monitoring and alerts'
    ],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'Starting at $799/month',
    category: 'DevOps',
    details: (
      <div className="space-y-6">
        <img 
          src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="DevOps Automation Suite" 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-2xl font-bold mb-4">DevOps Automation Suite</h3>
          <p className="text-gray-400 mb-6">
            Accelerate your development lifecycle with our comprehensive DevOps automation suite.
            Built for modern development teams, our tools streamline every aspect of your
            DevOps workflow.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Suite Components</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Automated deployment pipelines</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Infrastructure management</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Security compliance tools</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Performance monitoring</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
];

export function Products({ onProductClick }: ProductsProps) {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => onProductClick(product)}
            >
              <div className="relative h-48 sm:h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">{product.name}</h3>
                  <span className="text-blue-400 text-sm">{product.category}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-blue-500 font-semibold text-sm sm:text-base">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}