import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { BeakerIcon, CommandLineIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const ContactPage = () => {

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value
    });
  };
  /// this method send email to my email 
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
          .send(
            "service_xxxxx",
            "template_xxxxx",
            {
              name: formData.name,
              email: formData.email,
              message: formData.message
            },
            "public_key"
          )
          .then(
            () => {
              alert("Message sent successfully!");
            },
            (error) => {
              console.log(error);
              alert("Failed to send message");
            }
          );

          setFormData( {
              name:'',
              email: '',
              message:''
            });
      };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-50 dark:from-slate-900 to-slate-800 transition-colors duration-300">
      <div  className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        
         {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-teal-700 transition-colors duration-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-teal-500 dark:from-yellow-400 dark:to-teal-500">Let's contact</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 transition-colors duration-300 ">
            Whether you have a project in mind, a question about my work, 
            or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 ">

           {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 bg-white dark:bg-slate-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                  <EnvelopeIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className=' break-all'>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:alimohsini734@gmail.com" 
                     className="text-lg font-medium transition-colors text-gray-900 hover:text-teal-600 dark:text-white dark:hover:text-teal-400 ">
                    alimohsini734@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/50">
                  <PhoneIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="#" 
                     className="text-lg font-medium transition-colors text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">
                    +93 778546148
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <MapPinIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Barchy, Kabul, Afghanistan
                  </p>
                </div>
              </div>
            </div>

            {/* Skills/Expertise Section */}
            <div className="rounded-2xl shadow-lg p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                My Expertise
              </h3>
              <div className="space-y-3">
                {[
                  { icon: BeakerIcon, text: 'React & ASP.NET', color: 'blue' },
                  { icon: CommandLineIcon, text: 'Tailwind CSS', color: 'cyan' },
                  { icon: AcademicCapIcon, text: 'UI/UX Design', color: 'purple' }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <skill.icon className={`w-5 h-5 text-${skill.color}-500`} />
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>


          </div>


          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2 rounded-2xl shadow-lg p-8 transition-all duration-300 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none bg-white border-gray-300 text-gray-900 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Tell me about your project, idea, or just say hello..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white dark:from-teal-600 dark:to-green-600 dark:hover:from-blue-700 dark:hover:to-purple-700"
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </form>

            {/* Quick Response Guarantee */}
            <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                ⚡ I typically respond within 24-48 hours
              </p>
            </div>
          </div>


        </div>


         {/* Social Links */}
        <div className="mt-12 rounded-2xl shadow-lg p-8 bg-white dark:bg-gray-800">
          <h3 className="text-center text-lg font-semibold mb-6 text-gray-900 dark:text-white">
            Find me on
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'GitHub', color: 'gray' },
              { name: 'LinkedIn', color: 'blue' },
              { name: 'Twitter', color: 'sky' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 bg-${social.color}-100 text-${social.color}-600 hover:bg-${social.color}-200 dark:bg-${social.color}-900/30 dark:text-${social.color}-400 dark:hover:bg-${social.color}-900/50`}
                aria-label={social.name}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ContactPage;