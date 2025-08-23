import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Technology - Computer Science Engineering",
      organization: "Your University Name",
      location: "City, State",
      period: "2021 - 2025",
      description: "Pursuing B.Tech in Computer Science with focus on Data Analytics, Machine Learning, and Software Development. Relevant coursework includes Data Structures, Algorithms, Database Systems, and Statistical Analysis.",
      achievements: [
        "CGPA: 8.5/10",
        "Dean's List for 3 consecutive semesters",
        "Active member of Computer Science Society"
      ]
    },
    {
      type: "experience",
      title: "Data Analytics Intern",
      organization: "Tech Company Name",
      location: "City, State",
      period: "Jun 2024 - Aug 2024",
      description: "Worked on customer data analysis and visualization projects, contributing to business intelligence initiatives and helping drive data-driven decision making.",
      achievements: [
        "Developed interactive dashboards using Python and Tableau",
        "Improved data processing efficiency by 30%",
        "Presented findings to senior management"
      ]
    },
    {
      type: "experience",
      title: "Programming Tutor",
      organization: "University Tutoring Center",
      location: "City, State",
      period: "Jan 2023 - Present",
      description: "Mentoring fellow students in programming fundamentals, data structures, and software development best practices.",
      achievements: [
        "Tutored 50+ students in Python and Java",
        "Maintained 95% student satisfaction rating",
        "Created supplementary learning materials"
      ]
    },
    {
      type: "education",
      title: "Higher Secondary Education",
      organization: "Your School Name",
      location: "City, State",
      period: "2019 - 2021",
      description: "Completed 12th grade with Science stream (Physics, Chemistry, Mathematics) with distinction.",
      achievements: [
        "Percentage: 92%",
        "State rank in top 5%",
        "Mathematics Olympiad participant"
      ]
    }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="apple-headline text-foreground mb-6">
            Experience & Education
          </h2>
          <p className="apple-body text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional experiences that have shaped my expertise in technology and data analytics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div 
                key={`${item.title}-${index}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-apple-blue rounded-full border-4 border-background transform md:-translate-x-2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pr-0'
                }`}>
                  <div className="apple-card">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          item.type === 'education' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-green-100 dark:bg-green-900'
                        }`}>
                          <Building className={`w-4 h-4 ${
                            item.type === 'education' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                          }`} />
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.type === 'education' 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        }`}>
                          {item.type === 'education' ? 'Education' : 'Experience'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{item.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-apple-blue rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ExperienceSection;