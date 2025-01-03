import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 animate-slideRight">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 animate-slideLeft">
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">john@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}