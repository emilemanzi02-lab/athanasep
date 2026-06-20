import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin, Calendar, Building, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { projects, projectCategories } from '../data/content';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-[#0A3D62]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-[#F39C12]">Projects</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects that showcase our expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Project Portfolio"
            subtitle="Filter by category to explore our diverse range of construction projects."
          />

          {/* Filter Tabs — horizontal scroll on mobile */}
          <div className="flex gap-2 sm:gap-3 mb-10 sm:mb-12 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center scrollbar-none">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold whitespace-nowrap text-sm sm:text-base transition-all duration-300 flex-shrink-0 ${
                  activeCategory === category
                    ? 'bg-[#F39C12] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[#0A3D62] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    onClick={() => { setSelectedProject(project); setShowBefore(false); }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-52 sm:h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <span className="px-2.5 py-1 bg-[#F39C12] text-white text-xs sm:text-sm font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                        <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-gray-300 text-xs sm:text-sm">
                          <MapPin size={12} />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#F39C12] font-semibold">
                          <DollarSign size={14} />
                          <span>{project.value}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal — slides up from bottom on mobile */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="bg-white rounded-t-2xl sm:rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={showBefore ? selectedProject.beforeImage : selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <span className="px-3 py-1 bg-[#F39C12] text-white text-xs sm:text-sm font-semibold rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D62] mb-3 sm:mb-4">{selectedProject.title}</h2>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  {[
                    { Icon: MapPin, label: 'Location', value: selectedProject.location },
                    { Icon: Calendar, label: 'Year', value: selectedProject.year },
                    { Icon: Building, label: 'Client', value: selectedProject.client },
                    { Icon: DollarSign, label: 'Value', value: selectedProject.value },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="bg-[#F8F9FA] p-3 sm:p-4 rounded-lg text-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F39C12] mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="font-semibold text-[#0A3D62] text-xs sm:text-sm">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Before/After Toggle */}
                <div className="mb-5 sm:mb-6 flex items-center gap-3">
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${!showBefore ? 'bg-[#0A3D62] text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    After
                  </button>
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${showBefore ? 'bg-[#0A3D62] text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Before
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button to="/quote" variant="primary" size="lg" className="flex-1" icon={<ArrowRight size={20} />}>
                    Start Similar Project
                  </Button>
                  <Button onClick={() => setSelectedProject(null)} variant="outline" size="lg" className="flex-1">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#F39C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Let's create something extraordinary together. Contact us to discuss your project.
            </p>
            <Button to="/quote" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
