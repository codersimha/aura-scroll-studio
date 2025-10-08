import { CustomCursor } from "@/components/CustomCursor";
import { Portfolio3D } from "@/components/Portfolio3D";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Building2, Calendar, ExternalLink, Award, CheckCircle, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// About Section Data
const skills = [
  {
    icon: Code,
    title: "Development",
    description: "Full-stack development with modern frameworks and best practices",
    techs: ["React", "TypeScript", "Node.js", "Python"],
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, intuitive user experiences",
    techs: ["Figma", "Adobe XD", "UI/UX", "3D Design"],
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
    techs: ["Web Vitals", "SEO", "Analytics", "Testing"],
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working seamlessly with teams and clients",
    techs: ["Agile", "Git", "Communication", "Leadership"],
  },
];

// Work Section Data
const experiences = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    description: "Leading development of cutting-edge web applications using React, TypeScript, and Node.js. Architecting scalable solutions and mentoring junior developers.",
    achievements: [
      "Increased application performance by 60%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    company: "Creative Digital Studio",
    role: "Frontend Developer & Designer",
    period: "2020 - 2022",
    description: "Specialized in creating visually stunning and highly interactive web experiences. Collaborated closely with design teams to bring creative visions to life.",
    achievements: [
      "Delivered 20+ client projects",
      "Won 3 design awards",
      "Reduced load times by 45%",
    ],
  },
  {
    company: "StartUp Labs",
    role: "Web Developer",
    period: "2018 - 2020",
    description: "Developed responsive websites and web applications for various startups. Worked in fast-paced environment with rapid iteration cycles.",
    achievements: [
      "Built 15+ MVPs from scratch",
      "Implemented A/B testing frameworks",
      "Increased conversion rates by 35%",
    ],
  },
];

// Projects Section Data
const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    description: "A modern e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI Content Generator",
    category: "Machine Learning",
    description: "Intelligent content creation tool leveraging GPT models to generate high-quality marketing copy and creative content.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "3D Portfolio Showcase",
    category: "Creative Development",
    description: "Interactive 3D portfolio website with smooth animations and immersive user experience using Three.js.",
    tech: ["React", "Three.js", "Framer Motion", "TypeScript"],
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Real-Time Analytics Dashboard",
    category: "Data Visualization",
    description: "Comprehensive dashboard for tracking KPIs with real-time data updates and interactive charts.",
    tech: ["React", "D3.js", "WebSocket", "Redis"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

// Certifications Section Data
const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    description: "Validates ability to build scalable and highly available applications using Google Cloud Platform.",
    skills: ["GCP", "Kubernetes", "CI/CD", "Microservices"],
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Facebook)",
    date: "2022",
    description: "Comprehensive certification covering modern front-end development practices and React ecosystem.",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
  },
  {
    title: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    description: "Complete full-stack development certification with 1,800+ hours of coursework.",
    skills: ["Node.js", "MongoDB", "Express", "APIs"],
  },
];

// Contact Section Data
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@portfolio.com",
    link: "mailto:hello@portfolio.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    link: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      <Navigation />
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(291_83%_71%/0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,hsl(282_100%_65%/0.1),transparent_50%)]" />
      </div>

      {/* Home Section */}
      <section id="home" className="relative">
        <Portfolio3D />
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
              ABOUT ME
            </h2>
            <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
              I'm a passionate creative developer who bridges the gap between design and technology. 
              With a keen eye for aesthetics and a deep understanding of modern web development, 
              I create digital experiences that not only look stunning but perform flawlessly.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-primary" size={32} />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3">{skill.title}</h3>
                    <p className="text-foreground/70 mb-6">{skill.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
              WORK EXPERIENCE
            </h2>
            <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
              A journey through innovation, creativity, and continuous growth in the tech industry.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.01, translateX: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="text-primary" size={24} />
                        <h3 className="text-3xl font-bold">{exp.company}</h3>
                      </div>
                      <h4 className="text-xl text-primary/80 font-semibold mb-2">{exp.role}</h4>
                    </div>
                    
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-3">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/70">
                          <ExternalLink size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
              PROJECTS
            </h2>
            <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
              A collection of carefully crafted projects showcasing innovation, creativity, and technical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-xs font-semibold text-primary mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/50 rounded-lg text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">View Live</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-lg transition-colors duration-300">
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
              CERTIFICATIONS
            </h2>
            <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
              Continuous learning and professional development through industry-recognized certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="text-primary" size={28} />
                    </div>
                    
                    <div className="flex items-center gap-2 text-foreground/60 text-sm">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-primary/80 font-semibold mb-4">{cert.issuer}</p>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-3">
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                          <CheckCircle size={12} className="text-primary" />
                          <span className="text-xs font-medium text-foreground/80">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
              GET IN TOUCH
            </h2>
            <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 animate-glow"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    >
                      {info.link ? (
                        <a href={info.link} className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="text-primary" size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                            <p className="font-semibold text-lg">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                            <Icon className="text-primary" size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                            <p className="font-semibold text-lg">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-primary/20 hover:bg-primary hover:text-primary-foreground border border-primary/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border border-primary/30 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-3 glow-text">Available for Freelance</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm currently available for freelance projects. Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
