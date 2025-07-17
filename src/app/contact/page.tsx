"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    console.log("Contact form data:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br bg-gradient-brand-light">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Contact <span className="text-brand-pink">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to book an appointment? We&apos;d love to
              hear from you. Get in touch and we&apos;ll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="services">Services Question</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-pink text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-brand-pink-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Card */}
              <div className="bg-gradient-to-br bg-gradient-brand-light rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-pink-light p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brand-pink" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">
                        Call or text for appointments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-pink-light p-3 rounded-full">
                      <Mail className="h-6 w-6 text-brand-pink" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@prettytips.com</p>
                      <p className="text-sm text-gray-500">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-pink-light p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-brand-pink" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        123 Beauty Lane
                        <br />
                        City, State 12345
                      </p>
                      <p className="text-sm text-gray-500">
                        Free parking available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-pink-light p-3 rounded-full">
                      <Clock className="h-6 w-6 text-brand-pink" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Business Hours
                      </h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected for the latest nail art inspiration,
                  promotions, and updates!
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-brand-pink-light p-3 rounded-full hover:bg-brand-pink transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-brand-pink" />
                  </a>
                  <a
                    href="#"
                    className="bg-brand-pink-light p-3 rounded-full hover:bg-brand-pink transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-brand-pink" />
                  </a>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Quick Tips
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-pink rounded-full mt-2"></div>
                    <p>
                      Book appointments 24-48 hours in advance for best
                      availability
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-pink rounded-full mt-2"></div>
                    <p>Follow us on social media for daily nail inspiration</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-pink rounded-full mt-2"></div>
                    <p>Ask about our loyalty program for regular clients</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-pink rounded-full mt-2"></div>
                    <p>Bring inspiration photos for custom nail art designs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the city with easy parking
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-20 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Interactive Map
            </h3>
            <p className="text-gray-600">
              Map integration would go here
              <br />
              123 Beauty Lane, City, State 12345
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
