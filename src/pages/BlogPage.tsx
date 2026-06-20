import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { blogPosts } from '../data/content';

export function BlogPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-[#0A3D62]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/256500/pexels-photo-256500.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Blog &amp; <span className="text-[#F39C12]">News</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with construction insights, tips, and industry news from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-14 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/2 h-56 sm:h-72 md:h-auto min-h-0">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#F39C12] text-white text-xs sm:text-sm font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                    <Tag size={14} />
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A3D62] mb-3 sm:mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
                  <span className="flex items-center gap-2"><User size={14} />{blogPosts[0].author}</span>
                  <span className="flex items-center gap-2"><Calendar size={14} />{blogPosts[0].date}</span>
                </div>
                <Button variant="outline" icon={<ArrowRight size={18} />}>Read Full Article</Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader title="Latest Articles" subtitle="Expert insights and practical tips for your construction projects." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden cursor-pointer">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-2.5 py-1 bg-[#0A3D62] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A3D62] mb-2 sm:mb-3 group-hover:text-[#F39C12] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center gap-2"><User size={13} />{post.author.split(' ')[0]}</span>
                      <span className="flex items-center gap-2"><Calendar size={13} />{post.date}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader title="Browse by Topic" subtitle="Find articles relevant to your interests." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {['Construction Tips', 'Regulations', 'Innovation', 'Safety', 'Home Improvement', 'Project Management', 'Sustainability', 'Industry News'].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-3 sm:p-4 bg-white rounded-lg text-center font-medium text-[#0A3D62] hover:bg-[#F39C12] hover:text-white transition-colors shadow-sm text-sm sm:text-base"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 sm:py-20 bg-[#0A3D62]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
              Get the latest construction tips, industry news, and project updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#F39C12] text-sm sm:text-base"
              />
              <Button variant="primary" size="md">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-[#F39C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-5 sm:mb-6">
            Contact us today for a free consultation and expert advice.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#F39C12] font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Get Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
