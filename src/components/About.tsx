import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About HMT Technologies</h2>
          <p className="text-gray-400 mb-6">
            Founded in 2020, HMT Technologies has been at the forefront of AI innovation,
            helping businesses transform their operations through cutting-edge technology solutions.
            Our team of experts brings together decades of experience in AI, ML, and enterprise IT.
          </p>
          <p className="text-gray-400">
            We believe in the power of technology to solve complex business challenges and
            create sustainable competitive advantages for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}