import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  Brain, 
  Shield, 
  Code, 
  Database, 
  Lock, 
  Cpu,
  GraduationCap,
  Lightbulb,
  Globe,
  BarChart3,
  CheckCircle2,
  PlayCircle,
  BookMarked,
  Video,
  Headphones,
  Zap,
  Star,
  Mail,
  ExternalLink
} from 'lucide-react';

function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${darkMode ? 'text-white' : 'text-white'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Shaping Tomorrow
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Empowering the next generation of innovators through comprehensive ICT education. 
                We're not just teaching technology—we're shaping tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Explore Curriculum
                  <ExternalLink size={20} />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Sign up for a Demo
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Students learning technology" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About KODEIT & Philosophy */}
      <section 
        id="about" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About KODEIT
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Inspiring and empowering thinkers and leaders to become ethical digital citizens
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
                alt="Educational philosophy" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className={`text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Educational Philosophy
              </h3>
              <p className={`text-lg mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                At KODEIT, we embrace a <strong>constructivist approach</strong> where students 
                actively engage with real-world scenarios. This methodology fosters curiosity, 
                critical thinking, and a deep understanding of technology that goes beyond 
                memorization.
              </p>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Our students don't just learn to code—they learn to think, create, and innovate 
                in an ethical and responsible manner.
              </p>
            </div>
          </div>

          {/* Founder's Vision */}
          <div className={`rounded-2xl p-8 md:p-12 ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-xl`}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Chetan Sehgal, CEO" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Chetan Sehgal, CEO
                </h3>
                <p className={`text-lg italic leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "Our goal is to democratize access to quality ICT education for every child. 
                  We believe that every student, regardless of their background, deserves the 
                  opportunity to become a digital innovator and ethical leader in tomorrow's world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features and Benefits */}
      <section 
        id="features" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose KODEIT?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive, standards-aligned, and engaging ICT education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                K1–K12 Curriculum
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                From basic literacy to advanced AI and cybersecurity
              </p>
            </div>

            <div className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Global Standards
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Aligned with ISTE, CSTA, and California K-12 CS standards
              </p>
            </div>

            <div className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Project-Based Learning
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Real-world challenges to enhance understanding
              </p>
            </div>

            <div className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Digital Citizenship
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Teaching online safety and ethics for responsible digital citizens
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" 
              alt="Collaborative learning" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Interactive Learning Universe */}
      <section 
        id="learning" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Interactive Learning Universe
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Diverse resources catering to visual, auditory, and kinesthetic learners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`p-8 rounded-xl shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <Headphones className={`w-12 h-12 mb-4 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                167+ Audio Books
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Engaging audio content for auditory learners
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <Video className={`w-12 h-12 mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Explainer Videos
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Visual explanations with recap videos and animations
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <Zap className={`w-12 h-12 mb-4 ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`} />
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Interactive Exercises
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                MCQ exercises with immediate feedback
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                alt="Interactive learning tools" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Diverse Learning Resources
              </h3>
              <ul className="space-y-3">
                {['Emulators & Simulations', 'Animations', 'Recap Videos', 'Interactive Assessments'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-6 h-6 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section 
        id="curriculum" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Curriculum Overview
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Spiral and progressive learning from simple to complex concepts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'
            }`}>
              <GraduationCap className={`w-16 h-16 mb-6 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Foundation Stage
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Building fundamental ICT literacy skills, computational thinking, and 
                digital citizenship from an early age.
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 to-pink-50'
            }`}>
              <Brain className={`w-16 h-16 mb-6 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Conceptual Stage
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Deepening understanding through advanced programming, system design, 
                and complex problem-solving.
              </p>
            </div>
          </div>

          <div>
            <h3 className={`text-3xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Advanced Electives
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: Brain, label: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
                { icon: Database, label: 'Blockchain', color: 'from-blue-500 to-cyan-500' },
                { icon: BarChart3, label: 'Data Science', color: 'from-green-500 to-teal-500' },
                { icon: Lock, label: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
                { icon: Cpu, label: 'Robotics', color: 'from-yellow-500 to-orange-500' }
              ].map(({ icon: Icon, label, color }, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className={`text-center font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section 
        id="ecosystem" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              The Technology Ecosystem
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A unified platform connecting students, teachers, and parents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                For Students
              </h3>
              <ul className={`space-y-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Access to digital books</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Practice exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Community engagement</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                For Teachers
              </h3>
              <ul className={`space-y-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Detailed lesson plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Differentiation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Professional development</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                For Parents
              </h3>
              <ul className={`space-y-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Engagement tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Progress monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Actionable insights</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`p-8 rounded-xl shadow-xl ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className={`w-12 h-12 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Powerful Analytics Engine
              </h3>
            </div>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our analytics engine provides actionable insights into student performance, 
              helping educators and parents make data-driven decisions to support learning.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof and Impact */}
      <section 
        id="impact" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              KODEIT in Numbers
            </h2>
              <p className={`text-xl max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Impact that speaks for itself
              </p>
              <p className={`text-lg max-w-2xl mx-auto mt-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Over 2 million lessons delivered to students worldwide
              </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className={`p-8 rounded-xl shadow-lg text-center ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'
            }`}>
              <Headphones className={`w-12 h-12 mx-auto mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <div className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                167+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Audio Books
              </div>
            </div>

            <div className={`p-8 rounded-xl shadow-lg text-center ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 to-pink-50'
            }`}>
              <Lightbulb className={`w-12 h-12 mx-auto mb-4 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <div className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                828+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Projects
              </div>
            </div>

            <div className={`p-8 rounded-xl shadow-lg text-center ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-teal-50'
            }`}>
              <BookMarked className={`w-12 h-12 mx-auto mb-4 ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`} />
              <div className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                1580+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Assessments
              </div>
            </div>

            <div className={`p-8 rounded-xl shadow-lg text-center ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-orange-50 to-red-50'
            }`}>
              <GraduationCap className={`w-12 h-12 mx-auto mb-4 ${
                darkMode ? 'text-orange-400' : 'text-orange-600'
              }`} />
              <div className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                2M+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Lessons
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className={`rounded-2xl p-8 md:p-12 ${
            darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 to-blue-50'
          } shadow-xl`}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Star className="text-white" size={40} />
                </div>
              </div>
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className={`text-xl italic mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  "KODEIT stands as a beacon of excellence in ICT education, setting new 
                  standards for comprehensive and engaging learning experiences."
                </p>
                <p className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  — Ian Philips, ICT Visionary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        id="contact" 
        className={`py-12 px-6 border-t ${
          darkMode 
            ? 'bg-gray-900 border-gray-800' 
            : 'bg-gray-50 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                KODEIT
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Shaping tomorrow through comprehensive ICT education
              </p>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Us
              </h3>
              <div className="space-y-2">
                <a 
                  href="mailto:info@kodeit.com" 
                  className={`flex items-center gap-2 hover:text-purple-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Mail size={18} />
                  info@kodeit.com
                </a>
                <a 
                  href="https://www.kodeit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 hover:text-purple-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Globe size={18} />
                  www.kodeit.com
                </a>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Us
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://twitter.com/kodeitglobal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 hover:text-purple-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Globe size={18} />
                  <span>@kodeitglobal</span>
                  <ExternalLink size={14} className="opacity-60" />
                </a>
                <a 
                  href="https://linkedin.com/company/kodeitglobal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 hover:text-purple-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Globe size={18} />
                  <span>LinkedIn</span>
                  <ExternalLink size={14} className="opacity-60" />
                </a>
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t text-center ${
            darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
          }`}>
            <p>&copy; {new Date().getFullYear()} KODEIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

