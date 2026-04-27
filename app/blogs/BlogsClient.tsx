"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Reasons to Add a 360 Photo Booth to Your Pakistani Wedding",
    excerpt: "Discover why the 360 photo booth has become the most popular wedding addition in Pakistan. From baraat entries to mehndi night dances.",
    category: "Weddings",
    image: "/booth-setup-3.jpg",
    date: "April 24, 2026"
  },
  {
    id: 2,
    title: "How to Choose the Right Photo Booth for Your Event in Pakistan",
    excerpt: "Open Air vs 360 vs Vogue Magazine vs Digital ΓÇö which photo booth is right for your event? This guide breaks down everything you need to consider.",
    category: "Guides",
    image: "/booth-setup-12.jpg",
    date: "April 20, 2026"
  },
  {
    id: 3,
    title: "10 Creative Photo Booth Backdrop Ideas for Pakistani Weddings",
    excerpt: "From floral walls and LED balloon arches to vintage fabric drapes ΓÇö explore 10 stunning backdrop ideas that will make your booth pop.",
    category: "Inspiration",
    image: "/booth-setup-6.jpg",
    date: "April 15, 2026"
  },
  {
    id: 4,
    title: "Why Corporate Events in Pakistan Need a Branded Photo Booth",
    excerpt: "Branded photo booths are more than just entertainment ΓÇö they&apos;re powerful marketing tools. Discover how companies use them for engagement.",
    category: "Corporate",
    image: "/booth-setup-5.jpg",
    date: "April 10, 2026"
  },
  {
    id: 5,
    title: "The Ultimate Birthday Party Photo Booth Guide for Pakistan",
    excerpt: "Everything you need to know about adding a photo booth to your birthday party ΓÇö from themes to props and making the most of your rental.",
    category: "Birthdays",
    image: "/booth-setup-4.jpg",
    date: "April 05, 2026"
  }
];

const categories = [
  "Wedding Photo Booth Ideas",
  "Birthday Party Entertainment",
  "Corporate Event Photography",
  "Photo Booth Trends in Pakistan",
  "How to Choose the Right Booth",
  "Event Planning Guides"
];

export default function BlogsClient() {
  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ΓöÇΓöÇ HERO ΓöÇΓöÇ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-neon/5 via-black/50 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold tracking-[0.4em] uppercase px-5 py-2 rounded-full mb-6">
            <Sparkles className="w-3 h-3" /> Event Insights & Tips
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 uppercase">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Peek-A-Booth Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Your go-to resource for photo booth tips, event planning inspiration, and the latest trends in Pakistani events and celebrations.
          </motion.p>
        </div>
      </section>

      {/* ΓöÇΓöÇ BLOG CONTENT ΓöÇΓöÇ */}
      <section className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content: Posts */}
            <div className="lg:col-span-8 space-y-12">
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-10 border-l-4 border-brand-neon pl-6">Featured Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, i) => (
                  <motion.div 
                    key={post.id} 
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-brand-neon/30 transition-all flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-neon text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-white/30 text-xs mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> Team PK</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-brand-neon transition-colors leading-tight">{post.title}</h3>
                      <p className="text-white/50 text-sm mb-8 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="mt-auto">
                        <button className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                          Read Article <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-brand-neon" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Categories */}
              <div className="bg-[#050505] border border-white/10 rounded-[2.5rem] p-10">
                <h3 className="text-xl font-bold mb-8 uppercase tracking-tight flex items-center gap-2">
                  <Tag className="w-5 h-5 text-brand-neon" /> Categories
                </h3>
                <div className="space-y-4">
                  {categories.map((cat, i) => (
                    <button key={i} className="w-full text-left py-3 px-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-neon/40 hover:bg-brand-neon/5 transition-all text-sm text-white/70 hover:text-white font-medium">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Widget */}
              <div className="bg-gradient-to-br from-brand-neon/20 to-[#050505] border border-brand-neon/30 rounded-[2.5rem] p-10 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Ready to Party?</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">Book Pakistan&apos;s best photo booth experience today!</p>
                  <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-8 py-4 rounded-full font-bold text-xs transition-all shadow-[0_0_20px_rgba(247,54,168,0.4)] uppercase tracking-widest">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ FOOTER CTA ΓöÇΓöÇ */}
      <section className="py-24 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8">Inspired by <span className="text-brand-neon">what you&apos;ve read?</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/get-a-quote" className="bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] flex items-center gap-2 group">
              Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/events" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-sm border border-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
