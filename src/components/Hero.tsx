import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center px-4 animate-fadeIn">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg animate-float"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-slideUp">
          John Doe
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-slideUp animation-delay-200">
          Full Stack Web Developer
        </p>
        <div className="flex justify-center space-x-4 mb-8 animate-slideUp animation-delay-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="mailto:john@example.com"
             className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <a href="#contact" 
           className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors animate-slideUp animation-delay-600">
          Get in Touch
        </a>
      </div>
    </div>
  );
}