import React, { useState } from 'react';
import { Plus, Tag, Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';

const initialBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise',
    content: `Artificial Intelligence is revolutionizing how enterprises operate. From automated customer service to predictive analytics, AI is becoming an integral part of business operations. This blog explores the latest trends in enterprise AI and how companies can prepare for the AI-driven future.

    Key areas we'll explore:
    - Machine Learning Operations (MLOps)
    - Natural Language Processing
    - Computer Vision Applications
    - Predictive Analytics
    
    Companies need to start preparing now for the AI transformation that's already underway. This means investing in the right infrastructure, building the right teams, and developing the right strategies.`,
    author: 'Dr. Sarah Chen',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Enterprise', 'Digital Transformation']
  },
  {
    id: '2',
    title: 'DevOps Best Practices for 2024',
    content: `As we move further into 2024, DevOps practices continue to evolve. This comprehensive guide covers the latest tools, techniques, and methodologies that are shaping the future of software delivery.

    Topics covered:
    - Infrastructure as Code (IaC)
    - Continuous Integration/Continuous Deployment (CI/CD)
    - Container Orchestration
    - Microservices Architecture
    
    We'll also explore real-world case studies of successful DevOps implementations and their impact on business outcomes.`,
    author: 'Mike Johnson',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'DevOps',
    tags: ['DevOps', 'CI/CD', 'Cloud Native']
  },
  {
    id: '3',
    title: 'MLOps: Bridging the Gap Between ML and Operations',
    content: `Machine Learning Operations (MLOps) is becoming increasingly crucial as organizations scale their ML initiatives. This post discusses the challenges and solutions in implementing effective MLOps practices.

    Key aspects:
    - Model Version Control
    - Automated Testing
    - Deployment Strategies
    - Monitoring and Observability
    
    Learn how leading organizations are implementing MLOps to streamline their machine learning workflows and improve model performance in production.`,
    author: 'Dr. Emily Rodriguez',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'MLOps',
    tags: ['MLOps', 'Machine Learning', 'AI']
  }
];

interface BlogsProps {
  onBlogClick: (blog: BlogPost) => void;
}

export function Blogs({ onBlogClick }: BlogsProps) {
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    author: '',
    category: '',
    tags: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blog: BlogPost = {
      id: Date.now().toString(),
      title: newBlog.title || '',
      content: newBlog.content || '',
      author: newBlog.author || '',
      date: new Date().toISOString().split('T')[0],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: newBlog.category || '',
      tags: newBlog.tags || []
    };
    setBlogs([blog, ...blogs]);
    setShowNewBlogForm(false);
    setNewBlog({});
  };

  return (
    <section id="blogs" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 md:mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
          <button
            onClick={() => setShowNewBlogForm(true)}
            className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors w-full sm:w-auto justify-center"
          >
            <Plus className="h-5 w-5" />
            <span>New Blog</span>
          </button>
        </div>

        {showNewBlogForm && (
          <div className="mb-12 md:mb-16 bg-gray-800/50 p-4 sm:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Create New Blog Post</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={newBlog.title || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  value={newBlog.content || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Author</label>
                  <input
                    type="text"
                    value={newBlog.author || ''}
                    onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <input
                    type="text"
                    value={newBlog.category || ''}
                    onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={newBlog.tags?.join(', ') || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="AI, Machine Learning, Technology"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors w-full sm:w-auto"
                >
                  Publish
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewBlogForm(false)}
                  className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg transition-colors w-full sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all"
              onClick={() => onBlogClick(blog)}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-2 text-sm text-blue-400 mb-3">
                  <Tag className="h-4 w-4" />
                  <span>{blog.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm sm:text-base">{blog.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}