import React, { useState, useCallback } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Modal } from './components/Modal';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Products } from './components/Products';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Blogs } from './components/Blogs';
import { ServiceData, ProjectData, BlogPost, Product } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);
  
  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleServiceClick = useCallback((service: ServiceData) => {
    setModalContent({ title: service.title, content: service.details });
  }, []);

  const handleProjectClick = useCallback((project: ProjectData) => {
    setModalContent({ title: project.title, content: project.details });
  }, []);

  const handleProductClick = useCallback((product: Product) => {
    setModalContent({ title: product.name, content: product.details });
  }, []);

  const handleBlogClick = useCallback((blog: BlogPost) => {
    setModalContent({
      title: blog.title,
      content: (
        <div className="space-y-6">
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>By {blog.author}</span>
            <span>{blog.date}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span key={index} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-gray-300 whitespace-pre-line">
            {blog.content}
          </div>
        </div>
      ),
    });
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    window.open('https://wa.me/1234567890?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services', '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      <Hero onGetStarted={() => scrollToSection('contact')} />
      <Services onServiceClick={handleServiceClick} />
      <Products onProductClick={handleProductClick} />
      <Projects onProjectClick={handleProjectClick} />
      <About />
      <Blogs onBlogClick={handleBlogClick} />
      <Testimonials />
      <Contact />
      <Footer />

      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat on WhatsApp
          </span>
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>

      <Modal
        isOpen={!!modalContent}
        onClose={() => setModalContent(null)}
      >
        {modalContent?.content}
      </Modal>
    </div>
  );
}

export default App;