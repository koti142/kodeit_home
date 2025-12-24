import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import chetanSehgal from '../assets/chetan-sehgal.jpg';
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
  ExternalLink,
  Building2,
  Network,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Languages,
  Layers,
  Monitor,
  Radio
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
        className="relative pt-24 pb-20 px-6 overflow-hidden min-h-screen flex items-center"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at top left, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 25%, rgba(34, 139, 34, 0.25) 50%, rgba(30, 144, 255, 0.2) 75%, rgba(255, 215, 0, 0.1) 100%), linear-gradient(135deg, #1C1917 0%, #2D1B0E 100%)'
            : 'radial-gradient(ellipse at top left, rgba(255, 215, 0, 0.25) 0%, rgba(255, 140, 0, 0.3) 25%, rgba(34, 139, 34, 0.35) 50%, rgba(30, 144, 255, 0.3) 75%, rgba(255, 215, 0, 0.2) 100%), linear-gradient(135deg, #FEF3C7 0%, #FED7AA 50%, #D1FAE5 100%)' // Light background with all logo colors
        }}
      >
        {/* Geometric decorative elements with logo colors */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 flex">
          <div className="w-full bg-gradient-to-br from-blue-400/30 via-green-400/30 to-orange-400/30 backdrop-blur-sm"></div>
          <div className="w-2 bg-yellow-500/20 ml-2"></div>
          <div className="w-2 bg-orange-500/20 ml-2"></div>
          <div className="w-2 bg-green-500/20 ml-2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className={`relative z-20 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {/* Logo/Brand */}
              <div className="mb-8">
                <span className={`text-2xl font-bold tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>KODEIT</span>
              </div>

              {/* Main Heading */}
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Shaping Tomorrow
              </h1>

              {/* Subheading */}
              <p className={`text-xl md:text-2xl mb-8 italic leading-relaxed ${darkMode ? 'text-white/95' : 'text-gray-700'}`}>
                Build vital capabilities to deliver digital outcomes through comprehensive ICT education
              </p>

              {/* CTA Button */}
              <button className={`px-8 py-4 border-2 font-semibold transition-all duration-300 mb-12 ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-orange-600' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}>
                EXPLORE
              </button>

              {/* Success Stories Section */}
              <div className="mt-12">
                <p className={`text-sm uppercase tracking-wider mb-6 ${darkMode ? 'text-white/80' : 'text-gray-700'}`}>SUCCESS STORIES</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className={`mb-2 leading-relaxed ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      A school district's journey towards digital literacy, powered by KODEIT.
                    </p>
                    <a href="#" className={`underline transition-colors ${darkMode ? 'text-white hover:text-orange-200' : 'text-gray-900 hover:text-orange-600'}`}>
                      VIEW
                    </a>
                  </div>
                  <div>
                    <p className={`mb-2 leading-relaxed ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      Empowering students to become ethical digital citizens and innovators.
                    </p>
                    <a href="#" className={`underline transition-colors ${darkMode ? 'text-white hover:text-orange-200' : 'text-gray-900 hover:text-orange-600'}`}>
                      VIEW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Content */}
            <div className="relative h-full min-h-[600px] flex items-center justify-center">
              {/* Decorative vertical bar with logo colors */}
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-b from-yellow-200/40 via-orange-200/40 to-green-200/40 backdrop-blur-sm"></div>
              
              {/* Main image with overlay */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                    alt="Students learning technology" 
                    className="rounded-lg shadow-2xl w-full max-w-lg object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Decorative elements with logo colors - radial gradients */}
                  <div 
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl animate-pulse"
                    style={{
                      background: 'radial-gradient(circle, rgba(30, 144, 255, 0.4) 0%, rgba(34, 139, 34, 0.3) 50%, transparent 100%)'
                    }}
                  ></div>
                  <div 
                    className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 140, 0, 0.5) 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%)'
                    }}
                  ></div>
                  
                  {/* Additional decorative circles with logo colors */}
                  <div 
                    className="absolute top-1/4 -left-4 w-20 h-20 rounded-full blur-lg"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 140, 0, 0.3) 50%, transparent 100%)'
                    }}
                  ></div>
                  <div 
                    className="absolute bottom-1/4 -right-4 w-16 h-16 rounded-full blur-md"
                    style={{
                      background: 'radial-gradient(circle, rgba(34, 139, 34, 0.4) 0%, rgba(30, 144, 255, 0.3) 50%, transparent 100%)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Vertical bars with logo colors */}
              <div className="absolute right-0 top-0 bottom-0 flex gap-3 items-center">
                <div className="w-2 h-full bg-gradient-to-b from-yellow-500/30 to-orange-500/30"></div>
                <div className="w-2 h-full bg-gradient-to-b from-orange-500/25 to-green-500/25"></div>
                <div className="w-2 h-full bg-gradient-to-b from-green-500/20 to-blue-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In the News Section */}
      <section 
        id="news" 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.15) 0%, rgba(255, 215, 0, 0.2) 30%, rgba(59, 130, 246, 0.15) 60%, rgba(34, 197, 94, 0.1) 100%), #0F172A'
            : 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.3) 0%, rgba(255, 215, 0, 0.35) 40%, rgba(59, 130, 246, 0.3) 80%, rgba(34, 197, 94, 0.25) 100%), linear-gradient(135deg, #ECFDF5 0%, #FEF9C3 40%, #EFF6FF 100%)' // Enhanced soft gradient: green, yellow, blue
        }}
      >
        {/* Multiple blurred background layers for depth */}
        <div 
          className="absolute inset-0 backdrop-blur-[100px] opacity-70"
          style={{
            background: darkMode 
              ? 'radial-gradient(ellipse at left, rgba(34, 197, 94, 0.4) 0%, rgba(255, 215, 0, 0.5) 50%, rgba(59, 130, 246, 0.4) 100%)'
              : 'radial-gradient(ellipse at left, rgba(34, 197, 94, 0.5) 0%, rgba(255, 215, 0, 0.6) 50%, rgba(59, 130, 246, 0.5) 100%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 backdrop-blur-[60px] opacity-40"
          style={{
            background: 'radial-gradient(ellipse at right, rgba(59, 130, 246, 0.3) 0%, rgba(255, 215, 0, 0.4) 50%, rgba(34, 197, 94, 0.3) 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Section - In the News */}
            <div 
              className="p-8 md:p-12 rounded-2xl relative overflow-hidden"
              style={{
                background: darkMode 
                  ? 'rgba(15, 23, 42, 0.6)' 
                  : 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(40px)',
                boxShadow: darkMode 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Enhanced gradient overlay with logo colors */}
              <div 
                className="absolute inset-0 opacity-40 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(34, 197, 94, 0.25) 0%, rgba(255, 215, 0, 0.3) 40%, rgba(59, 130, 246, 0.25) 80%, rgba(34, 197, 94, 0.2) 100%)'
                }}
              ></div>
              {/* Additional subtle overlay */}
              <div 
                className="absolute inset-0 opacity-20 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(255, 215, 0, 0.15) 50%, rgba(59, 130, 246, 0.1) 100%)'
                }}
              ></div>

              <div className="relative z-10">
                {/* Logo/Brand */}
                <div className="mb-6">
                  <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>KODEIT</span>
                </div>

                {/* Section Title */}
                <h2 className={`text-4xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  In the news
                </h2>

                {/* News Items */}
                <div className="space-y-7 mb-10">
                  {[
                    {
                      title: "KODEIT Partners with Leading Educational Institutions to Expand ICT Education Access Across Africa",
                      link: "Read more"
                    },
                    {
                      title: "KODEIT Curriculum Recognized by ISTE and CSTA for Excellence in Computer Science Education Standards",
                      link: "Read more"
                    },
                    {
                      title: "KODEIT Launches Bilingual Arabic-English Platform to Support Digital Literacy in Middle Eastern Schools",
                      link: "Read more"
                    }
                  ].map((news, idx) => (
                    <a key={idx} href="#" className="group block cursor-pointer py-2">
                      <div className="flex items-start justify-between gap-4">
                        <p className={`leading-relaxed transition-all duration-300 flex-1 text-base ${
                          darkMode 
                            ? 'text-white/95 group-hover:text-white' 
                            : 'text-gray-900 group-hover:text-gray-950'
                        }`}>
                          {news.title}
                        </p>
                        <ChevronRight 
                          className={`flex-shrink-0 mt-1.5 group-hover:translate-x-3 transition-all duration-300 ${
                            darkMode ? 'text-white/80 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                          }`} 
                          size={22} 
                        />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Highlighted Announcement Box - Dark Orange-Brown */}
                <div 
                  className="p-7 rounded-xl relative overflow-hidden shadow-xl"
                  style={{
                    background: darkMode 
                      ? '#78350F' // Dark orange-brown
                      : '#9A3412' // Dark orange-brown
                  }}
                >
                  {/* Enhanced gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-25"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(255, 215, 0, 0.4) 0%, rgba(255, 140, 0, 0.3) 50%, rgba(34, 139, 34, 0.2) 100%)'
                    }}
                  ></div>
                  {/* Subtle shine effect */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1/3 opacity-30"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                    }}
                  ></div>
                  <p className="text-white font-semibold leading-relaxed text-lg relative z-10">
                    Launched today: KODEIT AI Learning Assistant - An AI-powered tool to personalize learning paths and accelerate student achievement in ICT education.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Promotional Tiles (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Tile */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="KODEIT Platform" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-800/85 to-purple-800/50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold mb-1 text-sm leading-tight">KODEIT Annual Report 2024</h3>
                  <p className="text-white/85 text-xs">December 15, 2024</p>
                </div>
              </div>

              {/* Top Right Tile */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                  alt="Future of Education" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-gray-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm leading-tight">The Future of ICT Education 2024 Report</h3>
                </div>
              </div>

              {/* Bottom Left Tile */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
                  alt="ESG and Education" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-800/85 to-purple-800/50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm leading-tight">Digital Citizenship: A Necessity for Modern Education and Long-term Student Success</h3>
                </div>
              </div>

              {/* Bottom Right Tile */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="Cloud-based Learning" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-gray-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm leading-tight">Why Schools are Moving to Cloud-Based Learning Platforms – A KODEIT Research Study</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Case Studies Section */}
      <section 
        id="case-studies" 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at bottom right, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 30%, rgba(34, 139, 34, 0.25) 60%, rgba(30, 144, 255, 0.2) 100%), #9A3412'
            : 'radial-gradient(ellipse at bottom right, rgba(255, 215, 0, 0.3) 0%, rgba(255, 140, 0, 0.35) 30%, rgba(34, 139, 34, 0.4) 60%, rgba(30, 144, 255, 0.35) 100%), linear-gradient(135deg, #FEF3C7 0%, #FED7AA 50%, #D1FAE5 75%, #DBEAFE 100%)' // Light with all logo colors
        }}
      >
        {/* Decorative geometric elements with logo colors */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-b from-yellow-400/20 via-green-400/20 to-blue-400/20"></div>
        <div className="absolute right-0 top-0 bottom-0 flex gap-2">
          <div className="w-3 bg-gradient-to-b from-yellow-500/20 to-orange-500/20"></div>
          <div className="w-3 bg-gradient-to-b from-orange-500/20 to-green-500/20"></div>
          <div className="w-3 bg-gradient-to-b from-green-500/20 to-blue-500/20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Success Stories
            </h2>
            <p className="text-xl text-white/90 italic">
              Real outcomes from schools and districts using KODEIT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Journey",
                description: "A school district's comprehensive adoption of KODEIT curriculum, resulting in 85% student engagement and improved ICT literacy scores.",
                link: "VIEW"
              },
              {
                title: "Empowering Future Innovators",
                description: "How KODEIT helped students develop critical thinking skills and ethical digital citizenship, preparing them for global opportunities.",
                link: "VIEW"
              },
              {
                title: "Teacher Professional Development",
                description: "Supporting educators with comprehensive resources and training, leading to enhanced teaching methods and student outcomes.",
                link: "VIEW"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {story.title}
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  {story.description}
                </p>
                <a href="#" className="text-white underline hover:text-orange-200 transition-colors">
                  {story.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About KODEIT & Philosophy */}
      <section 
        id="about" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #1F2937'
            : 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 30%, rgba(34, 139, 34, 0.25) 60%, rgba(30, 144, 255, 0.2) 100%), linear-gradient(135deg, #FEF9E7 0%, #FFF7ED 50%, #F0FDF4 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About KODEIT
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Inspiring and empowering thinkers and leaders to become ethical digital citizens
            </p>
          </div>

          {/* Educational Philosophy Card */}
          <div className={`rounded-2xl p-8 md:p-10 mb-8 ${
            darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl backdrop-blur-sm`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Image */}
              <div className="relative overflow-hidden rounded-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
                  alt="Educational philosophy" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
              </div>
              
              {/* Right: Text Content */}
              <div>
                <h3 className={`text-3xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Our Educational Philosophy
                </h3>
                <p className={`text-lg mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  At KODEIT, we embrace a <strong className={darkMode ? 'text-yellow-400' : 'text-orange-600'}>constructivist approach</strong> where students 
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
          </div>

          {/* Founder's Vision Card */}
          <div className={`rounded-2xl p-8 md:p-10 ${
            darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl backdrop-blur-sm`}>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Left: CEO Photo */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <img 
                    src={chetanSehgal} 
                    alt="Chetan Sehgal, CEO" 
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-purple-400 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-purple-200/50 animate-pulse"></div>
                </div>
              </div>
              
              {/* Right: Quote */}
              <div className="flex-1 text-center md:text-left">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Chetan Sehgal, CEO
                </h3>
                <p className={`text-lg md:text-xl italic leading-relaxed ${
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

      {/* Why KODEIT - Value Proposition */}
      <section 
        id="features" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at bottom left, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #111827'
            : 'radial-gradient(ellipse at bottom left, rgba(255, 215, 0, 0.12) 0%, rgba(255, 140, 0, 0.18) 30%, rgba(34, 139, 34, 0.22) 60%, rgba(30, 144, 255, 0.18) 100%), linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 50%, #F0FDF4 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why KODEIT?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A commitment to three transformative outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Engage Students */}
            <div 
              className="group p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border"
              style={{
                background: darkMode 
                  ? 'radial-gradient(ellipse at top left, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 50%, transparent 100%), rgba(30, 58, 138, 0.3)' 
                  : 'radial-gradient(ellipse at top left, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 50%, transparent 100%), rgba(219, 234, 254, 0.5)',
                borderColor: darkMode ? 'rgba(30, 144, 255, 0.3)' : 'rgba(59, 130, 246, 0.2)'
              }}
            >
              <div 
                className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(30, 144, 255, 0.8) 0%, rgba(255, 215, 0, 0.6) 100%)'
                }}
              >
                <Sparkles className="text-white" size={40} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Engage Students
              </h3>
              <p className={`text-lg mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Motivation through interactive lessons and collaborative learning experiences that make technology exciting and accessible.
              </p>
              <ul className="space-y-2">
                {['Interactive multimedia content', 'Collaborative projects', 'Gamified learning experiences'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empower Educators */}
            <div 
              className="group p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border"
              style={{
                background: darkMode 
                  ? 'radial-gradient(ellipse at top right, rgba(34, 139, 34, 0.2) 0%, rgba(30, 144, 255, 0.15) 50%, transparent 100%), rgba(20, 83, 45, 0.3)' 
                  : 'radial-gradient(ellipse at top right, rgba(34, 139, 34, 0.15) 0%, rgba(30, 144, 255, 0.1) 50%, transparent 100%), rgba(220, 252, 231, 0.5)',
                borderColor: darkMode ? 'rgba(34, 139, 34, 0.3)' : 'rgba(34, 197, 94, 0.2)'
              }}
            >
              <div 
                className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(34, 139, 34, 0.8) 0%, rgba(30, 144, 255, 0.6) 100%)'
                }}
              >
                <TrendingUp className="text-white" size={40} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Empower Educators
              </h3>
              <p className={`text-lg mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Providing comprehensive tools and training to elevate teaching methods and support professional development.
              </p>
              <ul className="space-y-2">
                {['Detailed lesson plans', 'Differentiation strategies', 'Professional development resources'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elevate Schools */}
            <div 
              className="group p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border"
              style={{
                background: darkMode 
                  ? 'radial-gradient(ellipse at bottom left, rgba(255, 140, 0, 0.2) 0%, rgba(255, 215, 0, 0.15) 50%, transparent 100%), rgba(154, 52, 18, 0.3)' 
                  : 'radial-gradient(ellipse at bottom left, rgba(255, 140, 0, 0.15) 0%, rgba(255, 215, 0, 0.1) 50%, transparent 100%), rgba(255, 237, 213, 0.5)',
                borderColor: darkMode ? 'rgba(255, 140, 0, 0.3)' : 'rgba(251, 146, 60, 0.2)'
              }}
            >
              <div 
                className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 140, 0, 0.8) 0%, rgba(255, 215, 0, 0.6) 100%)'
                }}
              >
                <Award className="text-white" size={40} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Elevate Schools
              </h3>
              <p className={`text-lg mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Making ICT a cornerstone of modern learning to meet global standards and prepare students for future careers.
              </p>
              <ul className="space-y-2">
                {['Global standards alignment', 'Comprehensive analytics', 'School-wide progress tracking'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${
                      darkMode ? 'text-orange-400' : 'text-orange-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" 
              alt="Collaborative learning" 
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${
              darkMode ? 'from-gray-900/80' : 'from-white/80'
            } to-transparent rounded-2xl`}></div>
          </div>
        </div>
      </section>

      {/* Access Your Dashboard */}
      <section 
        id="dashboard" 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #1F2937'
            : 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 30%, rgba(34, 139, 34, 0.25) 60%, rgba(30, 144, 255, 0.2) 100%), linear-gradient(135deg, #FEF9E7 0%, #FFF7ED 50%, #F0FDF4 75%, #EFF6FF 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Access Your Dashboard
            </h2>
            <p className={`text-xl ${
              darkMode ? 'text-white/90' : 'text-gray-700'
            }`}>
              Select your role to continue.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Super Admin */}
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: darkMode 
                  ? 'rgba(17, 24, 39, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border"
                style={{
                  background: darkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                  borderColor: darkMode ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)'
                }}
              >
                <Shield className={darkMode ? 'text-red-400' : 'text-red-600'} size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Super Admin
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Complete system administration and comprehensive analytics dashboard.
              </p>
              <div className="mb-4 space-y-2">
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>System Management</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Advanced Analytics</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>User Administration</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                Access Dashboard
                <ChevronRight size={18} />
              </button>
            </div>

            {/* School Admin */}
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: darkMode 
                  ? 'rgba(17, 24, 39, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border"
                style={{
                  background: darkMode ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.1)',
                  borderColor: darkMode ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'
                }}
              >
                <Building2 className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                School Admin
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Monitor school-wide progress and manage teacher development programs.
              </p>
              <div className="mb-4 space-y-2">
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>School Analytics</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Teacher Reports</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Progress Monitoring</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                Access Dashboard
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Teacher Dashboard */}
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: darkMode 
                  ? 'rgba(17, 24, 39, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border"
                style={{
                  background: darkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)',
                  borderColor: darkMode ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)'
                }}
              >
                <Users className={darkMode ? 'text-green-400' : 'text-green-600'} size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Teacher Dashboard
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Manage classes, track student progress, and deliver engaging lessons.
              </p>
              <div className="mb-4 space-y-2">
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Class Management</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Student Progress</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Lesson Planning</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                Access Dashboard
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Parent Dashboard */}
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: darkMode 
                  ? 'rgba(17, 24, 39, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border"
                style={{
                  background: darkMode ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.1)',
                  borderColor: darkMode ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.2)'
                }}
              >
                <Users className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Parent Dashboard
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Monitor your child's progress, view reports, and stay engaged with their learning journey.
              </p>
              <div className="mb-4 space-y-2">
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Progress Reports</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Activity Tracking</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Communication</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                Access Dashboard
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Student Dashboard */}
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: darkMode 
                  ? 'rgba(17, 24, 39, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border"
                style={{
                  background: darkMode ? 'rgba(249, 115, 22, 0.2)' : 'rgba(249, 115, 22, 0.1)',
                  borderColor: darkMode ? 'rgba(249, 115, 22, 0.3)' : 'rgba(249, 115, 22, 0.2)'
                }}
              >
                <GraduationCap className={darkMode ? 'text-orange-400' : 'text-orange-600'} size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Student Dashboard
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Access your courses, track your progress, and complete interactive learning activities.
              </p>
              <div className="mb-4 space-y-2">
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>My Courses</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Learning Progress</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Assignments</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                Access Dashboard
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spiral Learning Methodology */}
      <section 
        id="methodology" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #1F2937'
            : 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 30%, rgba(34, 139, 34, 0.25) 60%, rgba(30, 144, 255, 0.2) 100%), linear-gradient(135deg, #FEF9E7 0%, #FFF7ED 50%, #F0FDF4 75%, #EFF6FF 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Spiral Learning Methodology
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Gradual mastery from simple to complex concepts across 12 grades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Foundation Stage */}
            <div className={`group relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
              darkMode ? 'bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200'
            }`}>
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Layers className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Foundation Stage
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Grades 1-5:</strong> Building the digital foundation
              </p>
              <ul className="space-y-3">
                {[
                  'Digital Foundations: Basic computer literacy and file navigation',
                  'Coding Foundations: Introduction to programming using Scratch',
                  'Multimedia Creation: Digital storytelling and creative expression',
                  'Cybersecurity Ethics: Online safety and responsible digital behavior'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conceptual Stage */}
            <div className={`group relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
              darkMode ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-700/30' : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
            }`}>
              <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`} size={32} />
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Conceptual Stage
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong className={darkMode ? 'text-purple-400' : 'text-purple-600'}>Grades 6-12:</strong> Advanced programming and systems thinking
              </p>
              <ul className="space-y-3">
                {[
                  'High-Level Programming: Python, JavaScript, and advanced languages',
                  'Artificial Intelligence: Machine learning and AI applications',
                  'Web Development: Full-stack development and modern frameworks',
                  'Data Analytics: Data science, visualization, and interpretation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop" 
              alt="Spiral learning progression" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${
              darkMode ? 'from-gray-900/70' : 'from-white/70'
            } to-transparent flex items-center p-8`}>
              <div>
                <h4 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Progressive Knowledge Building
                </h4>
                <p className={`text-lg ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Each concept is revisited and deepened at every grade level, ensuring mastery through repetition and complexity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Learning Universe */}
      <section 
        id="learning" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at top left, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #111827'
            : 'radial-gradient(ellipse at top left, rgba(255, 215, 0, 0.12) 0%, rgba(255, 140, 0, 0.18) 30%, rgba(34, 139, 34, 0.22) 60%, rgba(30, 144, 255, 0.18) 100%), linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 50%, #F0FDF4 100%)' // Light with all logo colors
        }}
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
              Diverse resources specifically designed for visual, auditory, and kinesthetic learners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Emulators */}
            <div className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" 
                  alt="Emulators"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20">
                  <Monitor className="text-white" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Emulators
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Experiment with different operating systems and programming languages in a risk-free environment. Perfect for hands-on learning.
                </p>
              </div>
            </div>

            {/* Audiobooks */}
            <div className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" 
                  alt="Audio Books"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20">
                  <Headphones className="text-white" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  167+ Audio Books
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Specifically designed to support auditory learners and teach basic ICT skills like navigating digital files and understanding computer concepts.
                </p>
              </div>
            </div>

            {/* Explainers & Animations */}
            <div className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop" 
                  alt="Explainers & Animations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20">
                  <Video className="text-white" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Explainers & Animations
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Simplify intricate technology topics using storytelling and visuals. Essential for visual learners to grasp complex concepts through engaging narratives.
                </p>
              </div>
            </div>

            {/* Simulations */}
            <div className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                  alt="Simulations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20">
                  <Zap className="text-white" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Simulations
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Provide kinesthetic learners with hands-on practice for physical computer operations like drag-and-drop, mouse functions, and keyboard navigation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl group shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop" 
                alt="Multi-Modal Learning" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Multi-Modal Learning
                  </h4>
                  <p className="text-white/90 text-lg">
                    Every learning style is supported through our comprehensive resource library
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Interactive Assessments
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                MCQ exercises with immediate feedback for focused learning and real-time progress tracking.
              </p>
              <ul className="space-y-4">
                {['Immediate feedback on answers', 'Progress tracking and analytics', 'Adaptive difficulty levels', 'Performance insights'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      darkMode ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <CheckCircle2 className={`w-5 h-5 ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`} />
                    </div>
                    <span className={`text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
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
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at bottom right, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #111827'
            : 'radial-gradient(ellipse at bottom right, rgba(255, 215, 0, 0.12) 0%, rgba(255, 140, 0, 0.18) 30%, rgba(34, 139, 34, 0.22) 60%, rgba(30, 144, 255, 0.18) 100%), linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 50%, #F0FDF4 100%)' // Light with all logo colors
        }}
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
            <h3 className={`text-3xl font-bold mb-4 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Advanced "Future-Ready" Electives
            </h3>
            <p className={`text-center mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Cutting-edge subjects available to older students, preparing them for modern careers
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { 
                  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
                  label: 'Artificial Intelligence', 
                  color: 'from-purple-500 to-pink-500',
                  description: 'Machine learning algorithms and their societal impact'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
                  label: 'Internet of Things (IoT)', 
                  color: 'from-cyan-500 to-blue-500',
                  description: 'How connected devices transform smart cities and daily living'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
                  label: 'Blockchain', 
                  color: 'from-blue-500 to-indigo-500',
                  description: 'Practical applications beyond cryptocurrency: secure transactions and decentralized systems'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
                  label: 'Cybersecurity & Ethical Hacking', 
                  color: 'from-red-500 to-orange-500',
                  description: 'Protecting digital assets and understanding system vulnerabilities'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                  label: 'Data Science', 
                  color: 'from-green-500 to-teal-500',
                  description: 'Data analysis, visualization, and interpretation for informed decision-making'
                }
              ].map(({ image, label, color, description }, idx) => (
                <div 
                  key={idx}
                  className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={image} 
                      alt={label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    {/* Icon Badge */}
                    <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20`}>
                      {label === 'Artificial Intelligence' && <Brain className="text-white" size={24} />}
                      {label === 'Internet of Things (IoT)' && <Radio className="text-white" size={24} />}
                      {label === 'Blockchain' && <Database className="text-white" size={24} />}
                      {label === 'Cybersecurity & Ethical Hacking' && <Lock className="text-white" size={24} />}
                      {label === 'Data Science' && <BarChart3 className="text-white" size={24} />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h4 className={`text-center font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {label}
                    </h4>
                    <p className={`text-xs text-center leading-relaxed ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section 
        id="ecosystem" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #1F2937'
            : 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.2) 30%, rgba(34, 139, 34, 0.25) 60%, rgba(30, 144, 255, 0.2) 100%), linear-gradient(135deg, #FEF9E7 0%, #FFF7ED 50%, #F0FDF4 75%, #EFF6FF 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              The Unified Platform Ecosystem
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive platform connecting all stakeholders with powerful analytics and actionable insights
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
                  <span>Detailed lesson plans with step-by-step guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Differentiation strategies for advanced or struggling learners</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Professional development resources and training</span>
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
                  <span>Tools for engagement and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>View grades and track progress in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span>Actionable insights to support learning at home</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`p-8 rounded-xl shadow-xl ${
            darkMode ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-700/30' : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Unified Analytics Engine
              </h3>
            </div>
            <p className={`text-lg mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our powerful analytics engine provides actionable insights to create customized learning paths based on student performance.
            </p>
            <ul className="space-y-2">
              {[
                'Real-time performance tracking and visualization',
                'Customized learning path recommendations',
                'Predictive analytics for early intervention',
                'Comprehensive reports for all stakeholders'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-5 h-5 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Global Reach and Accessibility */}
      <section 
        id="global" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #111827'
            : 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.12) 0%, rgba(255, 140, 0, 0.18) 30%, rgba(34, 139, 34, 0.22) 60%, rgba(30, 144, 255, 0.18) 100%), linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 50%, #F0FDF4 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Global Reach & Accessibility
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Preparing students for a globalized world with bilingual support and international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Bilingual Literacy */}
            <div className={`group relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
              darkMode ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-700/30' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200'
            }`}>
              <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Languages className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} size={32} />
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Bilingual Literacy
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>KODEIT (Arabic)</strong> provides a bilingual foundation in both Arabic and English, preparing students for a globalized world.
              </p>
              <ul className="space-y-3">
                {[
                  'Dual-language curriculum support',
                  'Cultural context integration',
                  'Global communication skills',
                  'International collaboration readiness'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                      darkMode ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Standards */}
            <div className={`group relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
              darkMode ? 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-700/30' : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200'
            }`}>
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} size={32} />
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Global Standards Alignment
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Explicitly aligned with <strong className={darkMode ? 'text-green-400' : 'text-green-600'}>ISTE, CSTA, and California K-12 CS standards</strong> to guarantee international competitiveness.
              </p>
              <ul className="space-y-3">
                {[
                  'ISTE Standards for Students',
                  'CSTA K-12 Computer Science Standards',
                  'California K-12 CS Framework',
                  'International benchmarking and recognition'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop" 
              alt="Global education" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${
              darkMode ? 'from-gray-900/80' : 'from-white/80'
            } to-transparent flex items-center p-12`}>
              <div className="max-w-2xl">
                <h4 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Preparing Global Digital Citizens
                </h4>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  KODEIT ensures that every student, regardless of location or language, has access to world-class ICT education that meets international standards and prepares them for global opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof and Impact */}
      <section 
        id="impact" 
        className="py-20 px-6"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.2) 60%, rgba(30, 144, 255, 0.15) 100%), #111827'
            : 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.12) 0%, rgba(255, 140, 0, 0.18) 30%, rgba(34, 139, 34, 0.22) 60%, rgba(30, 144, 255, 0.18) 100%), linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 50%, #F0FDF4 100%)' // Light with all logo colors
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Social Proof and Impact
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              KODEIT in Numbers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* Audio Books Card */}
            <div className={`p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
            }`}>
              <div className="flex justify-center mb-4">
                <Headphones className={`w-14 h-14 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <div className={`text-5xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                167+
              </div>
              <div className={`text-base font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Audio Books
              </div>
            </div>

            {/* Projects Card */}
            <div className={`p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
            }`}
            style={!darkMode ? { background: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)' } : {}}
            >
              <div className="flex justify-center mb-4">
                <Lightbulb className={`w-14 h-14 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
              </div>
              <div className={`text-5xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                828+
              </div>
              <div className={`text-base font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Projects
              </div>
            </div>

            {/* Assessments Card */}
            <div className={`p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
            }`}
            style={!darkMode ? { background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)' } : {}}
            >
              <div className="flex justify-center mb-4">
                <BookMarked className={`w-14 h-14 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`} />
              </div>
              <div className={`text-5xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                1580+
              </div>
              <div className={`text-base font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Assessments
              </div>
            </div>

            {/* Lessons Card */}
            <div className={`p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
            }`}
            style={!darkMode ? { background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)' } : {}}
            >
              <div className="flex justify-center mb-4">
                <GraduationCap className={`w-14 h-14 ${
                  darkMode ? 'text-orange-400' : 'text-orange-600'
                }`} />
              </div>
              <div className={`text-5xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                2M+
              </div>
              <div className={`text-base font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Lessons
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className={`rounded-2xl p-8 md:p-12 shadow-xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Left: Star Icon Badge */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="text-white" size={40} strokeWidth={2} fill="none" />
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Star Rating */}
                <div className="flex gap-1 justify-center md:justify-start mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" strokeWidth={0} />
                  ))}
                </div>
                
                {/* Quote */}
                <p className={`text-xl md:text-2xl italic mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  "KODEIT stands as a beacon of excellence in ICT education, setting new 
                  standards for comprehensive and engaging learning experiences."
                </p>
                
                {/* Attribution */}
                <p className={`text-lg font-semibold ${
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
        className="py-12 px-6 border-t"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.08) 0%, rgba(255, 140, 0, 0.12) 30%, rgba(34, 139, 34, 0.15) 60%, rgba(30, 144, 255, 0.12) 100%), #111827'
            : 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.15) 30%, rgba(34, 139, 34, 0.18) 60%, rgba(30, 144, 255, 0.15) 100%), linear-gradient(135deg, #F9FAFB 0%, #FFFBEB 50%, #F0FDF4 100%)', // Light with all logo colors
          borderTopColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)'
        }}
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

