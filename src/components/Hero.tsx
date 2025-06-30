
import React from 'react';
import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import kathir from "../assets/kathiravan.jpeg";
import pdf from '../assets/Kathiravan_K_Resume.pdf'

const Hero = () => {
  const handleDownload=()=>{
  //   const link = document.createElement('a');
  // link.href = pdf; // `pdf` should be a valid file URL or blob URL
  // link.download = 'filename.pdf'; // Set desired file name
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
    window.open(pdf, '_blank');
  }
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white/20">
            <img 
              src={kathir}
              alt="Kathiravan K - Flutter Developer"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            KATHIRAVAN K
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Software Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            2 Years of Experience in Cross-Platform Flutter App Development
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Successfully delivered 4 client projects to Play Store and App Store. 
            Passionate about creating scalable, user-friendly, and high-performing mobile solutions 
            using Flutter, Dart, and modern state management.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm text-muted-foreground">
            <span>📍 Chennai, Tamil Nadu</span>
            <span>📱 +91-9360491343</span>
            <span>✉️ kathirkannan2002@gmail.com</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* <button onClick={()=>handleDownload()} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button> */}
            <button onClick={()=>handleDownload()}  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              {/* <Download size={20} /> */}
              <Eye size={20}/>
              View Resume
            </button>
            <button onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });}}
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
           View Projects  
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github size={24} className="text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/kathiravan-k-7897a0264" className="p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a href="mailto:kathirkannan2002@gmail.com" className="p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail size={24} className="text-foreground" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="text-muted-foreground mx-auto"  
            onClick={() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }}
  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
