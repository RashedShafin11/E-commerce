import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting NextStore! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-grey-50 min-h-screen">
      {/* Header */}
      <section className="bg-navy-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-grey-200 max-w-2xl mx-auto">
            Have a question or need assistance? Our team is here to help you 24/7.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-grey-100 flex items-start gap-6">
              <div className="bg-orange-50 text-orange-500 p-4 rounded-2xl">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Our Location</h3>
                <p className="text-grey-200 text-sm">123 E-Commerce Way, Gulshan, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-grey-100 flex items-start gap-6">
              <div className="bg-navy-50 text-navy-900 p-4 rounded-2xl">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Phone Number</h3>
                <p className="text-grey-200 text-sm">+880 123 456 789</p>
                <p className="text-grey-200 text-sm">+880 987 654 321</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-grey-100 flex items-start gap-6">
              <div className="bg-orange-50 text-orange-500 p-4 rounded-2xl">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Email Address</h3>
                <p className="text-grey-200 text-sm">support@nextstore.com</p>
                <p className="text-grey-200 text-sm">info@nextstore.com</p>
              </div>
            </div>

            <div className="bg-navy-900 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-orange-500" />
                Working Hours
              </h3>
              <ul className="space-y-3 text-sm text-grey-200">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-white">9:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold text-white">10:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold text-orange-500 underline">24/7 Support Only</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-grey-100">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-navy-900 mb-4">Send us a Message</h2>
                <p className="text-grey-200">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 ml-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-grey-50 border border-grey-100 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-grey-50 border border-grey-100 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full bg-grey-50 border border-grey-100 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-grey-50 border border-grey-100 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
