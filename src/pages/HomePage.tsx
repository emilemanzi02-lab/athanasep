import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Award, Shield, Clock, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Card } from '../components/ui/Card';
import { services, stats, testimonials, projects, companyInfo, values } from '../data/content';

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Modern Commercial Buildings in Kigali',
  },
  {
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Premium Residential Projects',
  },
  {
    image: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Infrastructure Development',
  },
  {
    image: 'https://images.pexels.com/photos/1422974/pexels-photo-1422974.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Professional Construction Services',
  },
];

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100svh] min-h-screen flex items-center justify-center">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/90 via-[#0A3D62]/70 to-transparent" />
          </motion.div>
        ))}

        {/* Slide dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 sm:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#F39C12] w-6 sm:w-8' : 'w-2.5 sm:w-3 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-white py-20 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F39C12] rounded-full text-xs sm:text-sm font-semibold">
                Built on Integrity, Quality Driven
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Building Rwanda's Future with{' '}
              <span className="text-[#F39C12]">Excellence</span> and{' '}
              <span className="text-[#F39C12]">Innovation</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
              Professional Engineering, Construction, Renovation, and Project Management Services.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <Button to="/quote" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                Request a Quote
              </Button>
              <Button to="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0A3D62]">
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent"
        />
      </section>

      {/* Company Overview */}
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
                title="About Quality Home Builders"
                subtitle="Leading the construction industry in Rwanda with innovative solutions and uncompromising quality."
                centered={false}
              />
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Founded in 2010, Quality Home Builders has grown to become one of Rwanda's most trusted construction companies. We specialize in delivering comprehensive construction solutions that transform visions into reality.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                From residential homes to commercial complexes, infrastructure projects to industrial facilities, we bring expertise, innovation, and dedication to every project.
              </p>
              <Button to="/about" variant="secondary" icon={<ArrowRight size={20} />}>
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Construction site', mt: false },
                  { src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Modern building', mt: true },
                  { src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Engineering work', mt: false },
                  { src: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Landscaping', mt: true },
                ].map((img) => (
                  <img
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    className={`rounded-lg shadow-lg w-full h-36 sm:h-48 object-cover${img.mt ? ' mt-6 sm:mt-8' : ''}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Why Choose Us"
            subtitle="We deliver excellence in every project, building lasting relationships through quality, integrity, and innovation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {[
              { icon: Award, title: 'Quality Excellence', desc: 'Premium materials and skilled craftsmen ensure superior construction quality.' },
              { icon: Shield, title: 'Safety First', desc: 'Rigorous safety protocols protect our workers, clients, and communities.' },
              { icon: Clock, title: 'Timely Delivery', desc: 'We respect deadlines and complete projects on schedule, every time.' },
              { icon: Users, title: 'Expert Team', desc: '45+ professional engineers and skilled workers dedicated to your success.' },
              { icon: CheckCircle, title: 'Transparent Pricing', desc: 'No hidden costs. Clear, competitive pricing you can trust.' },
              { icon: Award, title: 'Warranty Support', desc: 'Comprehensive warranty on all our construction projects.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 sm:p-8 rounded-xl bg-[#F8F9FA] hover:bg-[#0A3D62] group transition-all duration-300"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#F39C12]" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0A3D62] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive construction and engineering solutions for all your building needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer h-full">
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#F39C12] rounded-lg flex items-center justify-center mb-3 sm:mb-4 -mt-10 sm:-mt-12 relative z-10">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-2 sm:mb-3 group-hover:text-[#F39C12] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <Link to="/services" className="inline-flex items-center text-[#F39C12] font-semibold gap-2 hover:gap-3 transition-all text-sm sm:text-base">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button to="/services" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter — no bg-fixed (iOS Safari fix) */}
      <section
        className="py-14 sm:py-20 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
      >
        <div className="absolute inset-0 bg-[#0A3D62]/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setStatsVisible(true)}
          >
            <SectionHeader
              title="Our Track Record"
              subtitle="Numbers that demonstrate our commitment to excellence and client satisfaction."
              light
            />

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
                    {statsVisible && <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="text-gray-300 text-sm sm:text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="Explore our portfolio of successful construction projects across Rwanda."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62] via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <span className="text-[#F39C12] text-xs sm:text-sm font-semibold">{project.category}</span>
                      <h3 className="text-lg sm:text-xl font-bold mt-1">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">{project.location}</span>
                      <span className="text-[#F39C12] font-semibold">{project.year}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button to="/projects" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from the businesses and individuals who trusted us with their projects."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
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
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#0A3D62] text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button to="/testimonials" variant="outline" size="lg">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 bg-[#0A3D62]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every project we undertake."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 sm:p-6 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#F39C12] mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#F39C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Get a free consultation and quote today. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button to="/quote" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
                Request Free Quote
              </Button>
              <Button href={`tel:${companyInfo.phone}`} variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/10">
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
