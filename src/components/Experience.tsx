import React from 'react';
import { Calendar, MapPin, Users, Code2, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Datayaan Solutions Pvt. Ltd.",
      period: "July 2023 - Present",
      location: "Chennai (On-site)",
      description: "Leading Flutter development projects and mentoring team members. Successfully delivered multiple high-performance mobile applications to production.",
      achievements: [
        "Successfully delivered 4 high-performance Flutter apps on Play Store and App Store for client projects",
        "Designed reusable components, reducing development time by 25% across multiple projects",
        "Trained and mentored a junior developer with knowledge transfer sessions on delivered projects",
        "Managed daily scrum stand-ups to track progress and share updates within the team",
        "Collaborated closely with backend teams for API integration and requirement clarification",
        "Worked with UI/UX designers to enhance app usability and design implementation",
        "Supported QA team by resolving defects and improving app stability",
        "Performed code optimization and explored new technologies to enhance Flutter app performance"
      ],
      technologies: ["Flutter", "Dart", "Bloc", "GetX", "Firebase", "REST APIs", "CI/CD"]
    },
    {
      title: "Web Development Internship",
      company: "Brazy Academy, Tirunelveli",
      period: "2022 - 2023",
      location: "Remote",
      description: "Gained foundational knowledge in web development technologies and implemented responsive user interfaces.",
      achievements: [
        "Learned fundamentals of web development using HTML, CSS, and JavaScript",
        "Implemented responsive UI designs and basic web functionalities",
        "Developed problem-solving skills through hands-on coding projects",
        "Built foundation knowledge that supported transition to mobile development"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ];

  const responsibilities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Development",
      description: "Building cross-platform mobile apps using Flutter and Dart"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Mentoring junior developers and managing daily stand-ups"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Client Collaboration",
      description: "Working directly with clients to deliver tailored solutions"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            1.5+ years of hands-on experience in Flutter development and team collaboration
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-600 to-cyan-600"></div>
              )}
              
              <div className="flex gap-6 mb-12">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-background rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Responsibilities */}
        <div className="grid md:grid-cols-3 gap-8">
          {responsibilities.map((resp, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full mb-4">
                {resp.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{resp.title}</h3>
              <p className="text-muted-foreground text-sm">{resp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
