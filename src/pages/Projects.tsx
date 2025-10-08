import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { ExternalLink, Github } from "lucide-react";

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
  {
    title: "Social Media Manager",
    category: "SaaS Application",
    description: "All-in-one platform for managing multiple social media accounts with scheduling and analytics features.",
    tech: ["Next.js", "MongoDB", "AWS", "OAuth"],
    gradient: "from-green-500/20 to-cyan-500/20",
  },
  {
    title: "Mobile Fitness App",
    category: "Mobile Development",
    description: "Cross-platform fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    gradient: "from-orange-500/20 to-pink-500/20",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      <Navigation />

      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(291_83%_71%/0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,hsl(282_100%_65%/0.1),transparent_50%)]" />
      </div>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
            PROJECTS
          </h1>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-xs font-semibold text-primary mb-4">
                  {project.category}
                </span>

                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>

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
      </main>
    </div>
  );
};

export default Projects;
