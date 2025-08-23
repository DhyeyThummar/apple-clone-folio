import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Analytics Dashboard",
      description: "A comprehensive dashboard built with Python and Streamlit for analyzing e-commerce sales data, featuring interactive visualizations and predictive modeling.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      featured: true
    },
    {
      title: "Customer Segmentation ML Model",
      description: "Machine learning project using K-means clustering to segment customers based on purchasing behavior, helping businesses target their marketing efforts.",
      tech: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and Apple-inspired design language.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      featured: false
    },
    {
      title: "Task Management App",
      description: "A Flutter-based mobile application for task management with real-time synchronization and beautiful UI/UX design.",
      tech: ["Flutter", "Dart", "Firebase", "Provider"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="apple-headline text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="apple-body text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning data analytics, machine learning, and full-stack development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-32">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-large group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="apple-subheadline text-foreground">
                    {project.title}
                  </h3>
                  <p className="apple-body text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button className="apple-button-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="apple-button-secondary">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-32">
          <h3 className="apple-subheadline text-foreground mb-12 text-center">
            More Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.title} className="apple-card group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="apple-button-primary text-sm">
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="apple-button-secondary text-sm">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
