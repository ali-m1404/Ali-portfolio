import React from 'react';
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  HeartIcon,
  StarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { FaGithub } from "react-icons/fa";

const AboutPage = () => {
  const skills = [
    { name: 'HTML & CSS', level: 70, color: 'teal' },
    { name: 'JavaScript', level: 60, color: 'yellow' },
    { name: 'React Basics', level: 65, color: 'indigo' },
    { name: 'Tailwind CSS', level: 75, color: 'green' },
    { name: 'Git & GitHub', level: 60, color: 'purple' },
    { name: 'Responsive Design', level: 80, color: 'orange' },
    { name: 'C#', level: 50, color: 'lime' },
    { name: 'Asp.Net Core', level: 50, color: 'emerald' }
  ];

  const learningNow = [
    'Advanced React Patterns',
    'Next.js Framework',
    'UI/UX Design Principles',
    'Asp.Net Core',
    'Testing with Jest'
  ];

  const achievements = [
    { label: 'Courses Completed', value: '10+', icon: AcademicCapIcon },
    { label: 'GitHub Commits', value: '300+', icon: StarIcon },
    { label: 'Tech Meetups', value: '8+', icon: UserIcon },
    { label: 'Open Source PRs', value: '5', icon: CodeBracketIcon }
  ];

  const strengths = [
    'Full-Stack Web Development',
    'Committed to Consistency and Discipline',
    'React Component Architecturer',
    'Database Integration',
    'Clean & Scalable Code',
    'Passionate about Coding'
  ];

  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University of Technology',
      period: '2022 - Present',
      description: 'Focusing on Web Development and Software Engineering'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-blue-400 dark:from-gray-700 dark:to-cyan-700 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Ali 👋</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              Aspiring Web Developer | Computer Science Student
            </p>
            <p className="text-lg max-w-2xl mx-auto mt-4 opacity-80">
              Passionate about learning and building awesome web experiences
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50 dark:text-gray-900" fill="currentColor" viewBox="0 0 1440 100">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="relative inline-block">
                <img
                  src="imges/ali2.jpeg"
                  alt="Profile"
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto border-4 border-blue-500 dark:border-blue-400"
                />
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Ali Jan Mohseni</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Computer Science Student</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expected Graduation: 2021</p>
              
              <div className="flex justify-center space-x-3 mt-4">
                {['github', 'linkedin', 'twitter'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me 🚀
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate computer science student with a strong desire to start my career 
                in web development. What I lack in professional experience, I make up for with 
                enthusiasm, dedication, and a hunger to learn from every opportunity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I discovered my passion for coding during university and have since dedicated my 
                free time to learning modern web technologies. I'm now looking for an internship 
                where I can contribute, learn from experienced developers, and grow as a professional.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {achievements.map((item, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Current Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <CodeBracketIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              My Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-${skill.color}-500 h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AcademicCapIcon className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              Currently Learning
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {learningNow.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Learning Quote */}
            <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <p className="text-sm text-purple-700 dark:text-purple-300 italic">
                "Every expert was once a beginner. I'm excited to learn and grow every day."
              </p>
            </div>
          </div>
        </div>

        {/* Strengths & What I'm Looking For */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Personal Strengths */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
              My Strengths
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <HeartIcon className="w-5 h-5 mr-2 text-pink-500" />
              Looking for Internship
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Opportunity to learn from experienced developers</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Real-world project experience</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Mentorship and guidance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Collaborative team environment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section - Simplified */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">CS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution} • {edu.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Internship Focused */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Open for Internship Opportunities!</h2>
          <p className="text-lg opacity-90 mb-4">
            I'm eager to learn, contribute, and start my career in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Let's Connect
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              View My Projects
            </a>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Available for Summer 2024 Internship
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;