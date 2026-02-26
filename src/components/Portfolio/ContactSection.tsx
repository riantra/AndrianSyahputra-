import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send, Clock, Globe, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "andriancodings@gmail.com", link: "mailto:andriancodings@gmail.com" },
    { icon: Phone, label: "Phone", value: "+62 822-8473-6764", link: "tel:+6282284736764" },
    { icon: MapPin, label: "Location", value: "Bandung, Indonesia", link: "https://maps.google.com/?q=Bandung,Indonesia" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/riantra", link: "https://linkedin.com/in/riantra" }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    try {
      setIsSubmitting(true);
      emailjs.init('h1VrIzvlwec9m90Vw');
      await emailjs.send('AndrianPortopolioWeb', 'template_son11pl', {
        from_name: formData.name, from_email: formData.email,
        company: formData.company, subject: formData.subject,
        message: formData.message, to_email: 'andriancodings@gmail.com'
      }, 'h1VrIzvlwec9m90Vw');
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      toast.success('Message sent successfully!');
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.text || 'Failed to send message. Please try again.');
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-muted/30 tech-grid relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((contact, i) => (
                <a key={i} href={contact.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-background/80 transition-all group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: 'var(--gradient-primary)' }}>
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{contact.label}</p>
                    <p className="text-muted-foreground text-xs font-mono">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { icon: Clock, title: "Response Time", value: "Within 24 hours" },
                { icon: Globe, title: "Time Zone", value: "GMT+7 (WIB)" },
                { icon: MessageSquare, title: "Preferred", value: "Email or LinkedIn" },
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-3">
                  <info.icon className="w-4 h-4 text-accent" />
                  <div>
                    <span className="text-xs text-muted-foreground">{info.title}: </span>
                    <span className="text-xs font-medium font-mono">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="contact-form" className="lg:col-span-2">
            <Card className="card-elegant p-8">
              <h3 className="text-xl font-bold mb-6 font-heading">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-destructive/10 text-destructive p-3 rounded-xl flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" /><span>{error}</span>
                  </div>
                )}
                {isSuccess && (
                  <div className="bg-accent/10 text-accent p-3 rounded-xl flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" /><span>Message sent! I'll get back to you soon.</span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold font-heading">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="h-11 rounded-xl text-sm" disabled={isSubmitting} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold font-heading">Email *</label>
                    <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@example.com" className="h-11 rounded-xl text-sm" disabled={isSubmitting} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold font-heading">Company</label>
                    <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className="h-11 rounded-xl text-sm" disabled={isSubmitting} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold font-heading">Subject *</label>
                    <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project discussion..." className="h-11 rounded-xl text-sm" disabled={isSubmitting} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold font-heading">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="min-h-[100px] resize-none rounded-xl text-sm" disabled={isSubmitting} />
                </div>
                <Button type="submit" size="lg" className="btn-primary w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : <><Send className="w-4 h-4 mr-2" />Send Message</>}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
