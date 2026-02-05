"use client";

import { MapPin, Clock, ArrowRight, Building, DollarSign, Briefcase, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Rotating ad cards data
const AD_SLIDES = [
  [
    { title: "GIGS", subtitle: "Short-term & freelance tasks", cta: "Explore more", ctaStyle: "link" },
    { title: "Part Time", subtitle: "Flexible work schedules", cta: "Explore more", ctaStyle: "button" }
  ],
  [
    { title: "Full-time", subtitle: "Stable career opportunities", cta: "Browse jobs", ctaStyle: "link" },
    { title: "Remote", subtitle: "Work from anywhere", cta: "Find remote", ctaStyle: "button" }
  ],
  [
    { title: "On-site", subtitle: "Office-based positions", cta: "View all", ctaStyle: "link" },
    { title: "Contract", subtitle: "Project-based work", cta: "See contracts", ctaStyle: "button" }
  ]
];

const JOBS = [
  {
    id: 1,
    company: "Cyberbacker Careers",
    title: "Remote Assistant (Full-time or Part-time) – Work from Home Role",
    salary: "Negotiable",
    badges: ["Remote", "No Exp Required", "Edu not required", "Full-time"],
    logo: "https://ui-avatars.com/api/?name=Cyberbacker+Careers&background=3b82f6&color=fff&size=128",
    posted: "1 day ago"
   
  },
  {
    id: 2,
    company: "TalaTask",
    title: "Data Entry Specialist",
    salary: "$ 5-10 [Hourly]",
    badges: ["Remote", "No Exp Required", "Part-time"],
    logo: "https://ui-avatars.com/api/?name=TalaTask&background=0f172a&color=fff&size=128",
    posted: "Just now"
  },
  {
    id: 3,
    company: "Tech Innovations",
    title: "Junior Web Developer (React.js)",
    salary: "₱ 25k - 40k",
    badges: ["Remote", "Training Provided", "Full-time"],
    logo: "https://ui-avatars.com/api/?name=Tech+Innovations&background=10b981&color=fff&size=128",
    posted: "3 hours ago"
  },
   {
    id: 4,
    company: "Global Support",
    title: "Customer Service Representative",
    salary: "₱ 20k - 30k + Incentives",
    badges: ["On-site", "HMO Day 1", "Full-time"],
    logo: "https://ui-avatars.com/api/?name=Global+Support&background=f59e0b&color=fff&size=128",
    posted: "5 hours ago"
  }
];

export default function PopularJobs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % AD_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentAds = AD_SLIDES[currentSlide];

  return (
    <section className="w-full max-w-full mx-auto px-6 md:px-12 py-16">
      
      {/* Section Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Popular Jobs</h2>
          <p className="text-gray-500 mt-2 text-lg">Trending opportunities in your area</p>
        </div>
        <button className="text-primary font-semibold hover:text-primary-hover flex items-center gap-2 group transition-colors">
           View all jobs 
           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Job List Column */}
        <div className="flex-1 flex flex-col gap-4">
          {JOBS.map((job, index) => (
            <div 
              key={job.id} 
              className="group relative bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards cursor-pointer hover:border-blue-200"
              style={{ animationDelay: `${index * 150}ms` }}
            >
                <div className="flex flex-col gap-3">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-[1.3] max-w-2xl">
                        {job.title}
                    </h3>

                    {/* Salary */}
                    <div className="text-primary font-bold text-lg mb-1">
                        {job.salary}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {job.badges.map((badge, i) => (
                            <span key={i} className="px-3 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-500 border border-gray-100">
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Footer: Logo & Company Name */}
                    <div className="flex items-center gap-3 pt-2">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={job.logo} 
                            alt={job.company} 
                            className="w-8 h-8 rounded-full object-cover shadow-xs"
                        />
                        <span className="text-gray-700 font-medium text-sm">{job.company}</span>
                        
                        {/* Mobile: View Details Button fallback or hover only on large screens */}
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                            <button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-sm">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* Sidebar Column */}
        <div className="lg:w-80 flex flex-col gap-6">
          
          {/* Animated Ad Card 1 */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
             <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                   <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 
                  key={`ad1-title-${currentSlide}`}
                  className="text-xl font-bold mb-1 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  {currentAds[0].title}
                </h3>
                <p 
                  key={`ad1-sub-${currentSlide}`}
                  className="text-gray-400 text-sm mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100"
                >
                  {currentAds[0].subtitle}
                </p>
                <div className="flex items-center text-sm font-medium text-yellow-400 group-hover:translate-x-1 transition-transform">
                   {currentAds[0].cta} <ArrowRight className="w-4 h-4 ml-1" />
                </div>
             </div>
             {/* Abstract Bg */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          </div>

          {/* Animated Ad Card 2 */}
          <div className="bg-slate-800 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
             <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                   <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 
                  key={`ad2-title-${currentSlide}`}
                  className="text-xl font-bold mb-1 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  {currentAds[1].title}
                </h3>
                <p 
                  key={`ad2-sub-${currentSlide}`}
                  className="text-gray-400 text-sm mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100"
                >
                  {currentAds[1].subtitle}
                </p>
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors border border-white/10">
                   {currentAds[1].cta}
                </button>
             </div> 
             <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-tl-full group-hover:bg-emerald-500/20 transition-colors duration-300"></div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2">
            {AD_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

          {/* Employers Card (Static) */}
          <div className="bg-blue-900 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
             <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                   <Building className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-1">Employers</h3>
                <p className="text-blue-200 text-sm mb-4">Find top talent & hire fast</p>
                <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
                   Post a Job
                </button>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
