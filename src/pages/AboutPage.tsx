import { motion } from 'framer-motion';
import { Target, Eye, Award, TrendingUp, ArrowRight, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Card } from '../components/ui/Card';
import { team, values, stats } from '../data/content';

export function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-[#0A3D62]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              About <span className="text-[#F39C12]">Quality Home Builders</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Building Rwanda's future since 2010. A legacy of excellence, innovation, and commitment to quality construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                title="Our Story"
                subtitle="From humble beginnings to Rwanda's leading construction company."
                centered={false}
              />
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>Quality Home Builders was founded in 2010 with a clear vision: to transform Rwanda's construction landscape through innovation, quality, and integrity.</p>
                <p>Starting as a small firm with just 5 employees, we have grown into one of Rwanda's most respected construction companies, employing over 250 professionals and completing more than 250 projects across the country.</p>
                <p>Our journey has been marked by significant milestones: from our first residential project in Kigali to major commercial complexes, infrastructure developments, and industrial facilities that have helped shape modern Rwanda.</p>
                <p>Today, we continue to push boundaries, embracing new technologies and sustainable building practices while maintaining our core values of quality, safety, and client satisfaction.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction in progress"
                  className="rounded-xl shadow-2xl w-full h-56 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                />
                {/* Badge — repositioned to avoid clip on small screens */}
                <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-[#F39C12] text-white px-5 py-4 sm:p-8 rounded-xl shadow-xl">
                  <div className="text-3xl sm:text-4xl font-bold">2010</div>
                  <div className="text-xs sm:text-sm">Established</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A3D62] text-white p-8 sm:p-10 rounded-xl"
            >
              <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-[#F39C12] mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
                To be the leading construction and engineering firm in East Africa, recognized for transforming communities through innovative, sustainable, and world-class infrastructure that stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F39C12] text-white p-8 sm:p-10 rounded-xl"
            >
              <Target className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-lg">
                To deliver exceptional construction services that exceed client expectations, contribute to Rwanda's development, and create lasting value for our communities through professional excellence, innovation, and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader title="Our Core Values" subtitle="The principles that drive everything we do." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F39C12]/10 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#F39C12]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-20 bg-[#0A3D62]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader title="By the Numbers" light subtitle="Our achievements reflect our commitment to excellence." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F39C12] mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 text-sm sm:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Leadership Team"
            subtitle="Experienced professionals dedicated to delivering exceptional results."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden">
                  <div className="relative h-56 sm:h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62] via-transparent to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62]">{member.name}</h3>
                    <p className="text-[#F39C12] font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{member.description}</p>
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#0A3D62]">
                      <Linkedin size={16} />
                      <span className="text-xs sm:text-sm">LinkedIn Profile</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Certifications & Achievements"
            subtitle="Recognized excellence in construction and engineering."
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'ISO 9001:2015', desc: 'Quality Management System' },
              { title: 'ISO 45001:2018', desc: 'Occupational Health & Safety' },
              { title: 'RDB Certified', desc: 'Rwanda Development Board' },
              { title: 'RERA Licensed', desc: 'Rwanda Engineers Regulation' },
              { title: 'Green Building Certified', desc: 'Sustainable Construction' },
              { title: 'RCS Member', desc: 'Rwanda Construction Society' },
              { title: 'Best Contractor 2023', desc: 'Rwanda Business Awards' },
              { title: 'Zero Incidents 2023', desc: 'Safety Achievement Award' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center"
              >
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-[#F39C12] mx-auto mb-2 sm:mb-3" />
                <h4 className="font-bold text-[#0A3D62] text-xs sm:text-sm">{cert.title}</h4>
                <p className="text-gray-500 text-xs mt-1">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#F39C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Partner with Quality Home Builders
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Join the list of satisfied clients who have trusted Quality Home Builders.
            </p>
            <Button to="/quote" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
              Start Your Project Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
