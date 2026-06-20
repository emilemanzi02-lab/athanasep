import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Input, Textarea, Select } from '../components/ui/Input';
import { budgetRanges, projectTypes, companyInfo } from '../data/content';

export function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', phone: '',
    projectType: '', budgetRange: '', projectLocation: '', description: '',
  });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-[#0A3D62]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Request a <span className="text-[#F39C12]">Quote</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Get a free, no-obligation quote for your construction project. Our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form — sidebar stacks below form on mobile */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form — full width on mobile, 2/3 on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 order-1"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 sm:p-12 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D62] mb-3 sm:mb-4">Thank You!</h2>
                  <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8">
                    Your quote request has been received. Our team will review your project details and contact you within 24 hours.
                  </p>
                  <Button to="/" variant="primary" size="lg">Return to Homepage</Button>
                </motion.div>
              ) : (
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
                  <SectionHeader
                    title="Get Your Free Quote"
                    subtitle="Fill out the form below and we'll provide a detailed estimate."
                    centered={false}
                  />
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <Input label="Full Name *" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                      <Input label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Optional" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <Input label="Email Address *" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                      <Input label="Phone Number *" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+250 7XX XXX XXX" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <Select label="Project Type *" name="projectType" value={formData.projectType} onChange={handleChange} options={projectTypes.map((t) => ({ value: t, label: t }))} required />
                      <Select label="Budget Range" name="budgetRange" value={formData.budgetRange} onChange={handleChange} options={budgetRanges.map((r) => ({ value: r, label: r }))} />
                    </div>
                    <Input label="Project Location *" name="projectLocation" value={formData.projectLocation} onChange={handleChange} placeholder="Address or area in Rwanda" required />
                    <Textarea label="Project Description *" name="description" value={formData.description} onChange={handleChange} placeholder="Describe your project: type, size, timeline, special requirements..." rows={5} required />

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center hover:border-[#F39C12] transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                      <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Upload project documents (optional)</p>
                      <p className="text-xs text-gray-400">PDF, Images, CAD files up to 10MB</p>
                      <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf" />
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#F39C12] border-gray-300 rounded focus:ring-[#F39C12]" required />
                      <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600">
                        I agree to be contacted by Quality Home Builders regarding my quote request.
                      </label>
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full" icon={<Send size={20} />}>
                      Submit Quote Request
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Sidebar — appears after form on mobile, sticky on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 order-2"
            >
              <div className="bg-[#0A3D62] text-white p-6 sm:p-8 rounded-xl lg:sticky lg:top-28">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  Have questions? Reach out directly or fill out the form.
                </p>

                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F39C12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Phone</h4>
                      <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-[#F39C12] transition-colors text-sm">{companyInfo.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F39C12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Email</h4>
                      <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-[#F39C12] transition-colors text-sm break-all">{companyInfo.email}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold text-sm sm:text-base mb-2">Working Hours</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{companyInfo.workingHours}</p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Button href={`https://wa.me/${companyInfo.whatsapp}`} variant="primary" size="md" className="w-full">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader title="Why Get a Quote from Us?" subtitle="Transparent pricing and professional service you can trust." />
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-8">
            {[
              { title: 'No Hidden Costs', desc: 'Comprehensive quotes with transparent pricing. No surprises or hidden fees.' },
              { title: 'Fast Response', desc: 'Receive your detailed quote within 24 hours of submission.' },
              { title: 'Expert Consultation', desc: 'Our engineers review every project to provide accurate estimates.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 sm:p-8 bg-[#F8F9FA] rounded-xl"
              >
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#F39C12] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
