import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { Award, CheckCircle, Calendar } from "lucide-react";

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
  {
    title: "Advanced React Patterns",
    issuer: "Udemy",
    date: "2021",
    description: "Advanced certification focusing on complex React patterns and performance optimization.",
    skills: ["React Hooks", "Performance", "Patterns", "State Management"],
  },
  {
    title: "TypeScript Professional",
    issuer: "Microsoft",
    date: "2021",
    description: "Certification demonstrating advanced TypeScript skills and best practices.",
    skills: ["TypeScript", "Type Systems", "Generics", "Advanced Types"],
  },
];

const Certifications = () => {
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
            CERTIFICATIONS
          </h1>
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
              animate={{ opacity: 1, scale: 1 }}
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

                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h2>

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

        <motion.div
          className="mt-16 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Award className="text-primary mx-auto mb-6" size={64} />
          <h3 className="text-3xl font-bold mb-4 glow-text">Committed to Excellence</h3>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            These certifications represent my dedication to staying at the forefront of technology 
            and delivering world-class solutions to every project.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Certifications;
