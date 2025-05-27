'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      subject: formData.get('subject')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        // Reset form
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-coral-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-coral-50 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                    <p className="mt-1 text-gray-600">
                      4346 Blaisdell Ave<br />
                      Minneapolis, MN 55409<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:littlegardensara@gmail.com" className="text-blue-500 hover:text-blue-700">
                        littlegardensara@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+6519551227" className="text-blue-500 hover:text-blue-700">
                        (651) 955-1227
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Your message..."
                  />
                </div>

                <div>
                  {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                      {errorMessage}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
