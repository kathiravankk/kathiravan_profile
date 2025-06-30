
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              KATHIRAVAN K
            </h3>
            <p className="text-slate-300 mt-2">
             Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/dashboard" 
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kathiravan-k-7897a0264" 
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kathirkannan2002@gmail.com" 
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200">
              Experience
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <p className="mb-4 md:mb-0">
                © {currentYear} Kathiravan K. All rights reserved.
              </p>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>using React</span>
              </div>
            </div>
          </div>

          {/* Professional Note */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <p className="text-slate-300 text-sm">
              Available for Flutter development projects and collaborations.
              <br />
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
