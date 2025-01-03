import React from 'react';
import { Shield, Clock, Heart, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Transactions',
      description: 'All our properties are verified and transactions are fully secured'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Our team is available round the clock to assist you'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Handpicked Properties',
      description: 'Carefully selected properties meeting high standards'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Best Deals',
      description: 'Get the best prices and exclusive deals on premium properties'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the best service in the real estate industry with a focus on quality and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}