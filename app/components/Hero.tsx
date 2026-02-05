"use client";

import { Search, MapPin, Briefcase, BadgeCheck, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignInPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [activeJobs, setActiveJobs] = useState<{
    id: number;
    x: number;
    y: number;
    title: string;
    company: string;
    color: string;
    hrName: string;
    location?: string;
    hrAvatar: string;
    distance: string;
    jobType: string;
    hrPosition: string;
  }[]>([
      { id: 1, x: 20, y: 55, title: "Web Dev", company: "Company A", color: "bg-blue-500", hrName: "Sarah J.", hrAvatar: "https://i.pravatar.cc/150?u=1", distance: "1.2 km", location: "Makati", jobType: "Full-time", hrPosition: "HR Manager" },
      { id: 2, x: 75, y: 70, title: "Designer", company: "Company B",  color: "bg-rose-500", hrName: "Mike T.", hrAvatar: "https://i.pravatar.cc/150?u=2", distance: "0.8 km", location: "BGC", jobType: "Part-time", hrPosition: "Recruiter" },
  ]);

  useEffect(() => {
    const jobTypes = [
        { title: "Web Dev", company: "Company A", xBase: 25, yBase: 50, hr: "Sarah J.", role: "HR Manager" },
        { title: "Backend", company: "Company A", xBase: 20, yBase: 60, hr: "David L.", role: "Tech Recruiter" },
        { title: "UI/UX", company: "Company A", xBase: 30, yBase: 45, hr: "Emily R.", role: "Talent Acquisition" },
        { title: "Sales", company: "Company B", xBase: 70, yBase: 50, hr: "James K.", role: "Hiring Manager" },
        { title: "Marketing", company: "Company B", xBase: 80, yBase: 60, hr: "Anna M.", role: "HR Specialist" },
        { title: "DevOps", company: "Company B", xBase: 75, yBase: 45, hr: "Robert P.", role: "Tech Lead" }
    ];
    const employmentTypes = ["Full-time", "Part-time", "On-site", "Remote"];
    const colors = ["bg-blue-500", "bg-rose-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500"];
    
    const interval = setInterval(() => {
        const typeInfo = jobTypes[Math.floor(Math.random() * jobTypes.length)];
        
        // Randomize position slightly around the base to simulate cluster
        const randomX = typeInfo.xBase + (Math.random() * 20 - 10);
        const randomY = typeInfo.yBase + (Math.random() * 20 - 10);
        const dist = (Math.random() * 5).toFixed(1);

        const newJob = {
            id: Date.now(),
            x: Math.max(10, Math.min(90, randomX)), 
            y: Math.max(20, Math.min(80, randomY)),
            title: typeInfo.title,
            company: typeInfo.company,
            color: colors[Math.floor(Math.random() * colors.length)],
            hrName: typeInfo.hr,
            hrAvatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
            distance: `${dist} km`,
            location: ["Makati", "BGC", "Ortigas", "Pasig"][Math.floor(Math.random() * 4)],
            jobType: employmentTypes[Math.floor(Math.random() * employmentTypes.length)],
            hrPosition: typeInfo.role
        };
        
        setActiveJobs(prev => {
            const updated = [...prev, newJob];
            if (updated.length > 6) return updated.slice(1);
            return updated;
        });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 py-8 md:py-12 flex flex-col gap-8 md:gap-12 relative overflow-hidden">
      
      {/* Search Bar Section */}
      <div className="w-full max-w-5xl mx-auto z-10">
        <div className="bg-white p-2 rounded-3xl md:rounded-full shadow-lg shadow-blue-100/50 flex flex-col md:flex-row items-center border border-gray-100 transition-all hover:shadow-xl hover:border-blue-100">
          
          <div className="flex items-center flex-1 px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-100">
            <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="job title / company" 
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          <div className="flex items-center flex-1 px-4 py-3 w-full border-b md:border-b-0 border-gray-100">
            <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="manila" 
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          <div className="p-1 w-full md:w-auto">
            <button className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-2xl md:rounded-full font-medium transition-all shadow-md shadow-blue-500/20 active:scale-95 duration-200">
              search jobs
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-7xl mx-auto mt-8 flex-1">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col gap-8 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            The QuickHire <br />
            <span className="text-primary">Most fast Hiring</span> <br />
            ecosystem
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-semibold text-gray-500">popular search</span>
              {["web developer", "web dev"].map((tag, i) => (
                   <button key={i} className="px-3 sm:px-4 py-1.5 border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors bg-white hover:shadow-sm">
                   {tag}
                 </button>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-wrap ml-0 md:ml-28">
               {["sales manager", "designer", "assistant"].map((tag, i) => (
                   <button key={i} className="px-3 sm:px-4 py-1.5 border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors bg-white hover:shadow-sm">
                   {tag}
                 </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
            <button className="h-12 w-full sm:w-auto px-6 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                Use Map View
            </button>
            <button className="h-12 w-full sm:w-auto px-6 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                List View
            </button>
          </div>
        </div>

        {/* Right Column: Realtime Dark Map Visualization */}
        <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
            
            {/* Map Container - Dark Mode Style */}
            <div className="relative w-full h-full bg-[#0f172a] rounded-[2rem] p-6 shadow-2xl overflow-hidden border-4 border-white ring-1 ring-gray-200/50">
                
                {/* SVG Map Grid Pattern (Simulates Streets) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {/* Random "Main Roads" */}
                        <path d="M 0 100 Q 250 150 500 100" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
                         <path d="M 200 0 Q 150 250 200 500" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
                    </svg>
                </div>

                {/* Radar Scan Effect */}

                <div className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite] opacity-10 origin-center pointer-events-none">
                    <div className="w-full h-full bg-linear-to-r from-transparent via-cyan-500/20 to-transparent transform rotate-45"></div>
                </div>

                {/* Company A HQ */}
                <div className="absolute top-8 sm:top-16 left-4 sm:left-16 z-10 group">
                    <div className="relative">
                        
                        {/* Connecting dashed lines to nowhere for visual complexity */}
                    </div>
                </div>

                {/* Company B HQ */}
                <div className="absolute top-8 sm:top-16 right-4 sm:right-16 z-10 group">
                </div>

                {/* Dynamic Job Bubbles */}
                {activeJobs.map((job) => (
                    <div 
                        key={job.id}
                        className="absolute transition-all duration-1000 ease-in-out z-20"
                        style={{ left: `${job.x}%`, top: `${job.y}%` }}
                    >
                         {/* Job Floating Card */}
                        <div className="flex flex-col gap-1.5 animate-in zoom-in-50 duration-500 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white p-2.5 rounded-2xl shadow-xl hover:shadow-cyan-500/20 cursor-pointer transform hover:-translate-y-1 transition-transform min-w-[140px]">
                             
                             {/* HR & Avatar Row */}
                             <div className="flex items-center gap-2 mb-1">
                                <img src={job.hrAvatar} alt={job.hrName} className="w-8 h-8 rounded-full border border-gray-500" />
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[10px] text-slate-200 font-bold truncate">{job.hrName}</span>
                                        <BadgeCheck className="w-3 h-3 text-blue-500" fill="currentColor" />
                                    </div>
                                    <span className="text-[9px] text-slate-400 font-medium leading-none">{job.hrPosition}</span>
                                </div>
                             </div>

                             {/* Job Title & Company */}
                            <div className="flex items-center gap-2 mb-1">
                                
                                <span className="text-xs font-bold leading-none">{job.title}</span>
                            </div>
                             {/* Distance Badge & Job Type */}
                            <div className="flex items-center gap-2 mt-1">
                                <div className="bg-slate-800 text-slate-400 text-[9px] px-1.5 py-0.5 rounded-md flex items-center gap-1 border border-slate-700">
                                    <MapPin className="w-2.5 h-2.5" />
                                    {job.distance}
                                </div>
                                <div className="bg-slate-800 text-cyan-400 text-[9px] px-1.5 py-0.5 rounded-md border border-slate-700 font-medium">
                                    {job.jobType}
                                </div>
                            </div>
                           <div>
                            {job.location}
                           </div>
                        </div>
                    </div>
                ))}

                {/* Live Activity Indicator */}
                <div className="absolute bottom-6 left-6 z-30">
                </div>
            </div>

             {/* Out-of-container Glows for depth */}
            <div className="absolute -z-10 top-10 -right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-[80px]"></div>
        </div>
      </div>

      {/* Sign In Popup */}

      {showSignInPopup && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/10 p-5 max-w-xs border border-white/50 relative ring-1 ring-gray-200/50">

            {/* Close Button */}
            <button 
              onClick={() => setShowSignInPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {/* Content */}
            <div className="pr-4">

              <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                Sign In to Unlock Exclusive Jobs! 
              </h4>

              <p className="text-gray-500 text-sm mb-4">
                Explore unique opportunities and apply instantly!
              </p>

              <button className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                Sign in now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
