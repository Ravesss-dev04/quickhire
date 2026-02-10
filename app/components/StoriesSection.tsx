"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  BadgeCheck, 
  Zap, 
  Building2, 
  Briefcase, 
  TrendingUp,
  User,
  Star
} from 'lucide-react';

const STORIES = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    role: "Logistics Coordinator",
    location: "Quezon City",
    age: 28,
    type: "Career Grower",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80", 
    quote: "Simula ako sa food delivery, ngayon logistics coordinator na ako sa isang kilalang kumpanya!",
    bullets: [
      "Started as OddJobs delivery rider",
      "Built 4.8/5 performance rating",
      "Hired full-time after 6 months",
      "Now earns ₱25,000/month + benefits"
    ],
    platform: ["oddjobs", "quickhire"],
    stats: "₱180,000+ total earnings"
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Virtual Assistant",
    location: "Cavite",
    age: 32,
    type: "Gig Expert",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    quote: "Nababayaran ko na ang tuition ng anak ko habang nag-aaral pa rin ako!",
    bullets: [
      "Virtual Assistant on OddJobs",
      "97% client satisfaction rate",
      "Flexible hours around family schedule",
      "Multiple regular clients"
    ],
    platform: ["oddjobs"],
    stats: "₱15-20k/month part-time"
  },
  {
    id: 3,
    name: "Sarah's Café",
    role: "Business Owner",
    location: "Makati",
    age: 34,
    type: "Verified Employer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    quote: "Nakahanap ako ng 3 maaasahang staff sa loob ng 2 linggo lang!",
    bullets: [
      "Hired 2 baristas + 1 manager",
      "All with verified backgrounds",
      "90% employee retention",
      "Reduced hiring time by 70%"
    ],
    platform: ["quickhire"],
    stats: "3 quality hires in 2 weeks"
  },
  {
    id: 4,
    name: "Miguel Tan",
    role: "IT Specialist",
    location: "Cebu City",
    age: 26,
    type: "Career Changer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    quote: "From BPO agent to IT specialist, salamat sa verified skills training!",
    bullets: [
      "Took QuickHire skills tests",
      "Got certified in web development",
      "Landed first IT job at ₱35k/mo",
      "Still does OddJobs for extra income"
    ],
    platform: ["quickhire", "oddjobs"],
    stats: "₱40,000/month total income"
  },
  {
    id: 5,
    name: "Roberto Garcia",
    role: "Business Owner",
    location: "Pampanga",
    age: 42,
    type: "Balikbayan Success",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    quote: "Nakapagpatayo na ng sariling negosyo gamit ang naipon sa OddJobs!",
    bullets: [
      "Returned from Middle East work",
      "Used OddJobs while starting business",
      "Now hires 4 others on QuickHire",
      "Owns construction supply store"
    ],
    platform: ["oddjobs", "quickhire", "employer"],
    stats: "Employs 4 fellow Filipinos"
  }
];

const StoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, itemsPerView]);

  const maxIndex = Math.max(0, STORIES.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getBadgeIcon = (type: string) => {
    switch(type) {
      case 'Career Grower': return <TrendingUp className="w-3 h-3 text-gray-400" />;
      case 'Gig Expert': return <Zap className="w-3 h-3 text-gray-400" />;
      case 'Verified Employer': return <Building2 className="w-3 h-3 text-gray-400" />;
      case 'Career Changer': return <Briefcase className="w-3 h-3 text-gray-400" />;
      case 'Balikbayan Success': return <Star className="w-3 h-3 text-gray-400" />;
      default: return <User className="w-3 h-3 text-gray-400" />;
    }
  };


  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;

  };



  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -75) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
             QuickHire Success Stories of Most Filipinos success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from Filipinos building careers and growing businesses
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:text-primary hover:border-primary transition-all duration-300 group hidden md:block"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:text-primary hover:border-primary transition-all duration-300 group hidden md:block"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Slides Viewport */}
          <div 
            className="overflow-hidden py-4 px-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                // Note: Gap handling in calc needs careful CSS, usually solved by padding/margin inside items or specific width calcs
                // Simplified here: we'll use a wrapper with width
              }}
            >
              {STORIES.map((story) => (
                <div 
                  key={story.id} 
                  className="flex-shrink-0 transition-all duration-300"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="mx-2 h-full bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col relative group">

                    {/* Header: Photo + Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                          <BadgeCheck className="w-5 h-5 text-green-500 fill-green-50" />
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-gray-50 text-gray-700 border-gray-100`}>
                        {getBadgeIcon(story.type)}
                        {story.type}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mb-6 relative">
                      <Quote className="w-8 h-8 text-blue-100 absolute -top-2 -left-2 -z-10" />
                      <p className="text-gray-700 font-medium italic relative z-10 leading-relaxed">
                        &quot;{story.quote}&quot;
                      </p>
                    </div>
                    {/* Content Divider */}
                    <hr className="border-gray-100 mb-4 mt-auto" />
                    {/* User Info */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900">{story.name}, {story.age}</h4>
                      <p className="text-sm text-gray-500 mb-1">{story.location}</p>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{story.role}</p>
                    </div>

                    {/* Key Achievements */}
                    <ul className="space-y-2 mb-5">
                      {story.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer: Platform & Stats */}
                    <div className="mt-auto bg-gray-50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center -space-x-1">
                        {story.platform.includes('quickhire') && (
                          <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white" title="QuickHire">
                            <Building2 className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                        )}
                        {story.platform.includes('oddjobs') && (
                          <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center border-2 border-white" title="OddJobs">
                            <Zap className="w-3.5 h-3.5 text-orange-600" />
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-500 uppercase font-semibold">Earnings / Value</p>
                        <p className="text-sm font-bold text-gray-900">{story.stats}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? "w-8 h-2 bg-primary" 
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to write your success story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Join thousands of Filipinos finding financial freedom and career growth on the platform.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold text-base hover:bg-blue-700 transition-colors shadow-sm">
            Sign Up Free
          </button>
         
        </div>

      </div>
    </section>
  );
};

export default StoriesSection;
