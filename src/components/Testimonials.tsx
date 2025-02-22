import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "HMT Technologies transformed our AI operations, delivering exceptional results that exceeded our expectations."
  },
  {
    name: "Michael Chen",
    role: "Director of Engineering, DataFlow",
    content: "Their MLOps expertise helped us streamline our ML pipeline and significantly reduce deployment time."
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Operations, CloudScale",
    content: "The DevOps transformation led by HMT Technologies has revolutionized our development process."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl">
              <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-blue-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}