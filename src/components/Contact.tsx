
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Instagram, Download } from 'lucide-react';
import kathir from "../assets/kathiravan.jpeg";
import pdf from "../assets/Kathiravan_K_Resume.pdf"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  const handleDownload=()=>{
      const link = document.createElement('a');
    link.href = pdf; // `pdf` should be a valid file URL or blob URL
    link.download = 'Kathiravan_Resume.pdf'; // Set desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kathirkannan2002@gmail.com",
      link: "mailto:kathirkannan2002@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91-9360491343",
      link: "tel:+919360491343"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/dashboard",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kathiravan-k-7897a0264",
      color: "hover:text-blue-600"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "WhatsApp",
      url: "https://wa.me/qr/JRSK45G7AZPDN1",
      color: "hover:text-green-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/kathir_surya_kpr?igsh=MWdmZ3FwaTZ2d241MQ==",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next Flutter project? Let's collaborate and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            {/* <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800 dark:text-green-300">Available for Projects</h4>
              </div>
              <p className="text-green-700 dark:text-green-400 text-sm">
                Currently accepting new Flutter development projects and collaborations.
              </p>
            </div> */}
          </div>
              {/* <div style={{position:"relative"}}>
              <div className="w-72 h-72 mt-10 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white/20">
            <img 
              src={kathir}
              alt="Kathiravan K - Flutter Developer"
              className="w-50 h-50 object-cover"
            />
          </div>
          <button style={{position:"absolute", top:"55%", right:"0"}} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button> 

              </div> */}
              <div>
              <div style={{borderRadius:"25px"}} className="w-32 h-32 mt-10 mx-auto mb-8 ">
            <img 
              src={kathir}
              alt="Kathiravan K - Flutter Developer"
              className="w-full h-full object-cover"
              style={{borderRadius:"25px"}}
            />
          </div>
          <h3 className="text-2xl font-bold mb-8">More About Me</h3>
            <button onClick={()=>handleDownload()} style={{marginLeft:"100px"}}  className="bg-gradient-to-r mt-10 mx-10 from-blue-600 to-cyan-600 text-white px-10 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-5">
              <Download size={20} />
              Download My Resume
            </button> 
              </div>
          {/* Contact Form */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-300"
                  placeholder="Flutter App Development"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background resize-none transition-all duration-300"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
