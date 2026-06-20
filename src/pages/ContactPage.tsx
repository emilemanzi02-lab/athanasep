import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Input, Textarea } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { companyInfo } from '../data/content';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-[#0A3D62]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3803197/pexels-photo-3803197.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contact <span className="text-[#F39C12]">Us</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or ready to start your project? Reach out to our team and we'll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 sm:p-12 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D62] mb-3 sm:mb-4">Message Sent!</h2>
                  <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" size="lg">Send Another Message</Button>
                </motion.div>
              ) : (
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                  <SectionHeader
                    title="Send Us a Message"
                    subtitle="Fill out the form and we'll get back to you promptly."
                    centered={false}
                  />
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <Input label="Your Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <Input label="Email Address *" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                      <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+250 7XX XXX XXX" />
                    </div>
                    <Input label="Subject *" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" required />
                    <Textarea label="Message *" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your inquiry in detail..." rows={5} required />
                    <Button type="submit" variant="primary" size="lg" className="w-full" icon={<Send size={20} />}>
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Map */}
              <Card className="overflow-hidden" style={{ height: 'clamp(220px, 30vw, 280px)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.514389263938!2d30.0586!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76a5f7f7f7f%3A0x1234567890abcdef!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Athanase Engineering & Construction Location"
                />
              </Card>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { Icon: MapPin, title: 'Address', content: companyInfo.address, href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}` },
                  { Icon: Phone, title: 'Phone', content: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { Icon: Mail, title: 'Email', content: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { Icon: Clock, title: 'Working Hours', content: 'Mon-Sat: 8AM-6PM' },
                ].map(({ Icon, title, content, href }) => (
                  <Card key={title} className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F39C12]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F39C12]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-[#0A3D62] text-sm sm:text-base">{title}</h4>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#F39C12] text-xs sm:text-sm break-all">{content}</a>
                        ) : (
                          <p className="text-gray-600 text-xs sm:text-sm">{content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* WhatsApp */}
              <Card className="p-5 sm:p-6 bg-[#25D366] text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <MessageCircle className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg">Chat on WhatsApp</h4>
                    <p className="text-white/80 text-sm">Get instant responses</p>
                  </div>
                  <Button href={`https://wa.me/${companyInfo.whatsapp}`} variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white w-full sm:w-auto">
                    Start Chat
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers to common questions about our services." />
          <div className="space-y-3 sm:space-y-4">
            {[
              { q: 'What areas do you serve?', a: 'We operate throughout Rwanda, with headquarters in Kigali. We also serve neighboring East African countries.' },
              { q: 'Do you offer free consultations?', a: 'Yes, we offer free initial consultations and project assessments. Contact us to schedule yours.' },
              { q: 'What payment terms do you offer?', a: 'We offer flexible payment terms based on project milestones. Financing options are available for qualifying clients.' },
              { q: 'Are you licensed and insured?', a: 'Yes, we are fully licensed by RERA and carry comprehensive liability insurance for all projects.' },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8F9FA] rounded-lg p-5 sm:p-6 cursor-pointer group"
              >
                <summary className="font-semibold text-[#0A3D62] list-none flex justify-between items-center gap-4 text-sm sm:text-base">
                  {faq.q}
                  <span className="text-[#F39C12] text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
