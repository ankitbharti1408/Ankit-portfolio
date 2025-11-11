import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_3mcz78f',
        'template_cagxylc',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'j-mYHQ-r8xeEqVhyj'
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ankitbharti1408@gmail.com",
      href: "mailto:ankitbharti1408@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ankitbharti14",
      href: "https://www.linkedin.com/in/ankitbharti14/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ankitbharti1408",
      href: "https://github.com/ankitbharti1408",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7666318493",
      href: "tel:+917666318493",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark to-dark/95 text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-primary mx-auto mb-4" />
          <p className="text-lg text-dark-foreground/80 max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-dark-foreground/5 backdrop-blur-sm border-2 border-dark-foreground/10 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-gold">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-dark-foreground/5 hover:bg-dark-foreground/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-foreground/60 mb-1">{info.label}</p>
                        <p className="font-medium text-dark-foreground group-hover:text-gold transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-gold/10 border-2 border-gold/20 shadow-gold">
              <h3 className="text-xl font-bold mb-3 text-foreground">Open to Opportunities</h3>
              <p className="text-foreground/90 leading-relaxed">
                I'm actively seeking opportunities in finance management, strategic planning, 
                and roles that blend financial acumen with technology. Let's discuss how I can 
                contribute to your organization's success.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 bg-dark-foreground/5 backdrop-blur-sm border-2 border-dark-foreground/10 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-dark-foreground/5 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-dark-foreground/5 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-dark-foreground/5 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-gold-foreground font-semibold shadow-gold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
