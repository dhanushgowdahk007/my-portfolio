import React from 'react';
import { BookOpen, Award, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideRight">
            <p className="text-gray-600 leading-relaxed">
              Hello! I'm John, a passionate Full Stack Web Developer with a fresh perspective and 
              eagerness to learn. I recently completed my degree in Computer Science and I'm excited 
              to bring my skills to real-world projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I love creating responsive and user-friendly web applications using modern technologies. 
              My goal is to contribute to meaningful projects while continuously expanding my knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slideLeft">
            <div className="p-6 bg-blue-50 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-gray-600">B.S. in Computer Science</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Award className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Full Stack Development</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg sm:col-span-2">
              <Coffee className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Interests</h3>
              <p className="text-gray-600">Web Development, UI/UX Design, Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}