import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Download,
  MessageSquare,
  Clock,
  Globe,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andriancodings@gmail.com",
      link: "mailto:andriancodings@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 822-8473-6764",
      link: "tel:+6282284736764"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bandung, Indonesia",
      link: "https://maps.google.com/?q=Bandung,Indonesia"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/riantra",
      link: "https://linkedin.com/in/riantra"
    }
  ];

  const availability = [
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I typically respond to messages within 24 hours during business days"
    },
    {
      icon: Globe,
      title: "Time Zone",
      value: "GMT+7 (WIB)",
      description: "Western Indonesia Time - Available for international collaboration"
    },
    {
      icon: MessageSquare,
      title: "Preferred Contact",
      value: "Email or LinkedIn",
      description: "For professional inquiries, email works best for detailed discussions"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleDownloadCV = () => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = '/AndrianSyahputra_CV.pdf';
      link.download = 'AndrianSyahputra_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Show success message
      toast.success('CV download started!');
    } catch (error) {
      console.error('Error downloading CV:', error);
      toast.error('Failed to download CV. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      
      // EmailJS configuration
      const serviceId = 'AndrianPortopolioWeb';
      const templateId = 'template_son11pl';
      const publicKey = 'h1VrIzvlwec9m90Vw';
      
      // Initialize EmailJS with your public key
      emailjs.init(publicKey);
      
      console.log('Sending email with data:', {
        from_name: formData.name,
        from_email: formData.email,
        from_company: formData.company,  // Changed from 'company' to 'from_company'
        subject: formData.subject,
        message: formData.message,
        to_email: 'andriancodings@gmail.com'
      });
      
      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            subject: formData.subject,
            message: formData.message,
            to_email: 'andriancodings@gmail.com'
          },
          publicKey
        );

        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        
        toast.success('Message sent successfully!');
      } catch (error) {
        setError('Failed to send message. Please try again.');
        toast.error('Failed to send message');
      } finally {
        setIsSubmitting(false);
      }
      
      toast.success('Message sent successfully!');
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (err: any) {
      console.error('Error sending email:', {
        error: err,
        status: err.status,
        text: err.text,
        response: err.response
      });
      
      const errorMessage = err.text || err.message || 'Failed to send message. Please try again later.';
      setError(errorMessage);
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your QA needs or explore collaboration opportunities? 
            I'm always excited to work on challenging projects and deliver exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Availability</h4>
              <div className="space-y-4">
                {availability.map((info, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <info.icon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">{info.title}</span>
                    </div>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <Card className="card-elegant p-6">
              <div className="text-center space-y-4">
                <h4 className="font-bold">Download My Resume</h4>
                <p className="text-sm text-muted-foreground">
                  Get a detailed overview of my experience and qualifications
                </p>
                <Button 
                  className="btn-primary w-full"
                  onClick={handleDownloadCV}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (PDF)
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="lg:col-span-2">
            <Card className="card-elegant p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-destructive/10 text-destructive p-4 rounded-lg flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
                
                {isSuccess && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Your message has been sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email Address *</label>
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Company</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Subject *</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion, Job opportunity, etc."
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, requirements, or how I can help you..."
                    className="min-h-[120px] resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground">
                    * Required fields. I'll get back to you within 24 hours.
                  </p>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-primary w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>

            {/* Quick Contact Options */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Card className="p-6 text-center card-elegant hover:scale-105 transition-transform">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email Me Directly</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  For detailed project discussions
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  andriancodings@gmail.com
                </Button>
              </Card>

              <Card className="p-6 text-center card-elegant hover:scale-105 transition-transform">
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Connect on LinkedIn</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  For professional networking
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  linkedin.com/in/riantra
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="card-elegant p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a senior QA engineer for your team, want to discuss a project, 
              or explore collaboration opportunities, I'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;