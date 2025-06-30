
import React from 'react';
import { ExternalLink, Github, Heart, Users, Stethoscope, UserCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Athics",
      description: "Trainer/member app with authentication, slot and assessment booking, diet/workout plans, and fitness vitals tracking. Built using Flutter and Dart with GetX for state management and modular architecture.",
      icon: <UserCheck className="w-8 h-8" />,
      tags: ["Flutter", "Dart", "GetX", "REST API", "Figma"],
      features: [
        "Assessment booking with trainers",
        "Gym branch switching via slot booking", 
        "Day-wise diet and workout plans",
        "Auto-completion status updates",
        "Attendance management",
        "Workout level monitoring"
      ],
      highlights: [
        "Successfully deployed on Play Store",
        "Custom Dart packages exploration",
        "Reusable UI components implementation",
        "Collaborated with QA and backend teams"
      ],
      color: "from-blue-600 to-cyan-600",
      href:"https://play.google.com/store/search?q=athics&c=apps"
    },
    {
      title: "Medyaan Community Medicine",
      description: "Community healthcare app enabling family adoption programs by medical students to support rural health. Developed for medical students to manage family medical records and treatments as part of social service.",
      icon: <Stethoscope className="w-8 h-8" />,
      tags: ["Flutter", "Dart", "Hive", "REST API"],
      features: [
        "Family medical records management",
        "Treatment tracking per individual",
        "Profile and vitals management",
        "Offline data access with Hive",
        "Data sync for rural connectivity",
        "Healthcare data digitization"
      ],
      highlights: [
        "Hive local storage for offline access",
        "Rural area connectivity optimization",
        "Medical data loss prevention",
        "Social service integration"
      ],
      color: "from-green-600 to-teal-600",
      href:"https://play.google.com/store/apps/details?id=com.medyaan.communityMedicine"
    },
    {
      title: "Africa Healing Foundation",
      description: "A nonprofit health and development app reducing health inequalities in Africa and the UK. Provides free access to blogs on health, education, agriculture, and mental wellness with searchable symptoms feature.",
      icon: <Heart className="w-8 h-8" />,
      tags: ["Flutter", "Dart", "GetX", "REST API"],
      features: [
        "Free health & education blogs",
        "Searchable symptoms with guidance",
        "Treatment and precaution advice",
        "Agriculture procedures",
        "AHF event updates",
        "Blog notifications"
      ],
      highlights: [
        "User account creation/deletion",
        "Email login authentication",
        "High-level, user-friendly UI",
        "GetX for seamless navigation"
      ],
      color: "from-purple-600 to-pink-600",
      href:"https://play.google.com/store/apps/details?id=com.healing.africaHealingFoundation"
    },
    {
      title: "Medyaan Health",
      description: "Dental health app for viewing scan reports, booking appointments, and managing referrals. Implemented mobile number authentication with international country code using Flutter and Bloc.",
      icon: <Stethoscope className="w-8 h-8" />,
      tags: ["Flutter", "Dart", "Bloc", "Firebase Messaging", "PDF", "REST API"],
      features: [
        "Doctor-wise appointment scheduling",
        "Time/date selection & rescheduling",
        "Status-based filtering",
        "Push notifications",
        "Downloadable PDF reports",
        "Referral creation & tracking"
      ],
      highlights: [
        "Mobile number authentication",
        "International country code support",
        "Custom-designed PDF layouts",
        "Efficient UI/UX with reusable widgets"
      ],
      color: "from-red-600 to-orange-600",
      href:"https://play.google.com/store/apps/details?id=com.app.vogo_health"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing 4 successful client projects deployed to Play Store and App Store
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                <div className="grid grid-cols-1 gap-1 mb-3">
                  {project.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                <div className="grid grid-cols-1 gap-1">
                  {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-background rounded-full text-xs font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border">
                <button onClick={()=>window.open(`${project.href}`,'_blank')} className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-xs">
                  <ExternalLink size={14} />
                  View Details
                </button>
                {/* <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-accent transition-all duration-300 text-xs">
                  <Github size={14} />
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            All projects successfully deployed and delivered to clients
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">4 Apps Published</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium">Cross-Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="font-medium">Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="font-medium">Client Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
