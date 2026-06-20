import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { services } from '../data/content';

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              Our <span className="text-[#F39C12]">Services</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction and engineering solutions tailored to meet your unique needs. From concept to completion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="What We Offer"
            subtitle="15 specialized services covering every aspect of construction and engineering."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                layout
              >
                <Card className="group h-full cursor-pointer" onClick={() => setSelectedService(service)}>
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-11 h-11 sm:w-12 sm:h-12 bg-[#F39C12] rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-2 sm:mb-3 group-hover:text-[#F39C12] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">{service.description}</p>
                    <span className="inline-flex items-center text-[#F39C12] font-semibold gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="bg-white rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-44 sm:h-64 overflow-hidden rounded-t-2xl">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-3 left-4 sm:bottom-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F39C12] rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                    <selectedService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold text-white">{selectedService.title}</h2>
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">{selectedService.description}</p>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-3 sm:mb-4">Key Benefits</h3>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F39C12] flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button to="/quote" variant="primary" size="lg" className="flex-1" icon={<ArrowRight size={20} />}>
                    Request This Service
                  </Button>
                  <Button onClick={() => setSelectedService(null)} variant="outline" size="lg" className="flex-1">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Process"
            subtitle="A transparent, proven approach to delivering successful construction projects."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free initial consultation to understand your needs, budget, and timeline.' },
              { step: '02', title: 'Planning & Design', desc: 'Detailed project planning, architectural design, and cost estimation.' },
              { step: '03', title: 'Construction', desc: 'Professional construction with regular progress updates and quality checks.' },
              { step: '04', title: 'Handover', desc: 'Final inspection, documentation, and project handover with warranty.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[58%] w-[84%] h-0.5 bg-[#F39C12]/30" />
                )}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white font-bold text-lg sm:text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#0A3D62]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Every project is unique. Contact us to discuss your specific requirements and get a free consultation.
            </p>
            <Button to="/quote" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
