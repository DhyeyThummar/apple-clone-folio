import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      description: "Connect with me professionally"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      description: "Check out my code repositories"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@gmail.com",
      description: "Send me a direct email"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="apple-headline text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="apple-body text-muted-foreground max-w-3xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="apple-subheadline text-foreground">Get in Touch</h3>
              <p className="apple-body text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and data analytics.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">your.email@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">City, State, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Available</div>
                  <div className="text-muted-foreground">Mon - Fri, 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-apple-blue group-hover:scale-110 transition-all duration-300">
                      <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="apple-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your project or ideas..."
                  required
                  rows={6}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full apple-button-primary h-12"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;