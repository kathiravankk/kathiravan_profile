
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Dart", level: 90 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "HTML & CSS", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Android Development", level: 85 },
        { name: "iOS Development", level: 85 },
        { name: "Cross-Platform Apps", level: 90 }
      ]
    },
    {
      title: "State Management",
      skills: [
        { name: "Bloc Pattern", level: 85 },
        { name: "GetX", level: 80 },
        { name: "Provider", level: 75 },
        { name: "Riverpod", level: 70 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Android Studio", level: 85 },
        { name: "Xcode", level: 80 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      title: "Design & Office",
      skills: [
        { name: "Figma", level: 75 },
        { name: "MS Office Suite", level: 80 },
        { name: "UI/UX Design", level: 70 },
        { name: "Mobile App Design", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Self-learning",
    "Innovation",
    "Adaptability",
    "Team Collaboration",
    "Communication",
    "Leadership",
    "Time Management"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern Flutter development stack and cross-platform mobile technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-background rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Areas of Interest</h3>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-lg font-semibold shadow-xl">
            Mobile App Design and Development
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
