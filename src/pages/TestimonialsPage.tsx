import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { testimonials } from '../data/content';

export function TestimonialsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-[#0A3D62]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Client <span className="text-[#F39C12]">Testimonials</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from the clients who trusted us with their projects and experienced our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-14 sm:py-20 bg-[#F39C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-white">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 opacity-50" />
            <p className="text-lg sm:text-2xl md:text-3xl font-medium italic mb-6 sm:mb-8 leading-relaxed">
              "Working with Quality Home Builders was an exceptional experience. Their team's dedication, professionalism, and commitment to quality made our project a complete success."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Featured client"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-white"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-base sm:text-lg">Jean-Pierre Mutoni</h4>
                <p className="text-white/80 text-sm sm:text-base">CEO, Rwanda Development Corporation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader title="Success Stories" subtitle="Real feedback from real clients across Rwanda." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F39C12] text-[#F39C12]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4 sm:pt-6 mt-auto">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-[#0A3D62] text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="bg-[#F8F9FA] p-2.5 sm:p-3 rounded-lg text-xs sm:text-sm text-gray-600">
                      <strong className="text-[#F39C12]">Project:</strong> {testimonial.project}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — 2 cols on mobile */}
      <section className="py-14 sm:py-20 bg-[#0A3D62]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '180+', label: 'Happy Clients' },
              { value: '100%', label: 'Would Recommend' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F39C12] mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4 sm:mb-6">
              Join Our Satisfied Clients
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Experience the same dedication and quality that has earned us these testimonials.
            </p>
            <Button to="/quote" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Start Your Project Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
