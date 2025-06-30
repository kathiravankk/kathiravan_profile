
import React from 'react';
import { Code, Users, Zap, Award, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "4 Published Apps",
      description: "Successfully delivered client projects to Play Store and App Store"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Experience mentoring junior developers and managing daily stand-ups"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Expert in optimizing app performance and user experience"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cross-Platform Expert",
      description: "Specialized in building apps for both Android and iOS platforms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Flutter developer with 2 years of hands-on experience in building 
            cross-platform mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With 2 years of dedicated experience in Flutter development, I've successfully 
              built and deployed cross-platform mobile applications for both Android and iOS platforms. 
              My journey has been marked by continuous learning and delivering high-quality solutions 
              that meet client requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialize in designing reusable components that optimize development time, 
              integrating APIs seamlessly, and ensuring optimal performance across different devices. 
              My experience extends beyond coding to include mentoring junior developers and 
              collaborating effectively with cross-functional teams.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about staying up-to-date with the latest Flutter developments and 
              implementing best practices to deliver scalable, user-friendly, and high-performing 
              mobile solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h4 className="text-xl font-bold">Education</h4>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Bachelor of Engineering in Computer Science and Engineering</p>
                <p className="text-muted-foreground">Einstein College Of Engineering, Tirunelveli</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>2019 - 2023</span>
                  <span>•</span>
                  <span>CGPA: 7.8</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold">Certifications</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Flutter Development</p>
                  <p className="text-sm text-muted-foreground">Udemy • 2023</p>
                </div>
                <div>
                  <p className="font-semibold">Figma Essentials Course</p>
                  <p className="text-sm text-muted-foreground">Udemy • 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
