import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'HTML5', level: 90, color: 'bg-orange-500' },
    { name: 'CSS3', level: 85, color: 'bg-blue-500' },
    { name: 'Bootstrap', level: 80, color: 'bg-purple-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'React.js', level: 80, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}