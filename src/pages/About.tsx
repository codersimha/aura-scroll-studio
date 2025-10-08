import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { Code, Palette, Zap, Users } from "lucide-react";

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

const About = () => {
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
            ABOUT ME
          </h1>
          <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
            I'm a passionate creative developer who bridges the gap between design and technology. 
            With a keen eye for aesthetics and a deep understanding of modern web development, 
            I create digital experiences that not only look stunning but perform flawlessly.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

        <motion.div
          className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 glow-text">Philosophy</h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            I believe that great digital products are born at the intersection of beautiful design 
            and clean code. Every project is an opportunity to push boundaries, learn something new, 
            and create something that truly makes a difference. My approach combines creativity with 
            technical excellence, ensuring that every pixel serves a purpose and every line of code 
            contributes to an exceptional user experience.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
