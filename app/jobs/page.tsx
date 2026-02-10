"use client";

import { useState } from "react";
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  BadgeCheck, 
  Star, 
  List, 
  Map as MapIcon,
  Briefcase,
  Mail
} from "lucide-react";
import Link from "next/link";

// Mock job data
const MOCK_JOBS = [
  {
    id: 1,
    company: "SM Investments Corp.",
    logo: "https://ui-avatars.com/api/?name=SM+Investments&background=3b82f6&color=fff&size=128",
    location: "Pasig",
    distance: "1.2km",
    title: "Frontend Engineer (REACT)",
    salary: "P50-70k/Month",
    type: "full-time",
    verified: true,
    rating: 4.5,
    urgent: false
  },
  {
    id: 2,
    company: "SM Investments Corp.",
    logo: "https://ui-avatars.com/api/?name=SM+Investments&background=3b82f6&color=fff&size=128",
    location: "Pasig",
    distance: "1.2km",
    title: "Frontend Engineer (REACT)",
    salary: "P50-70k/Month",
    type: "full-time",
    verified: true,
    rating: 4.5,
    urgent: false
  },
  {
    id: 3,
    company: "SM Investments Corp.",
    logo: "https://ui-avatars.com/api/?name=SM+Investments&background=3b82f6&color=fff&size=128",
    location: "Pasig",
    distance: "1.2km",
    title: "Frontend Engineer (REACT)",
    salary: "P50-70k/Month",
    type: "full-time",
    verified: true,
    rating: 4.5,
    urgent: false
  },

  
  {
    id: 4,
    company: "SM Investments Corp.",
    logo: "https://ui-avatars.com/api/?name=SM+Investments&background=3b82f6&color=fff&size=128",
    location: "Pasig",
    distance: "1.2km",
    title: "Frontend Engineer (REACT)",
    salary: "P50-70k/Month",
    type: "full-time",
    verified: true,
    rating: 4.5,
    urgent: false
  },
  {
    id: 5,
    company: "SM Investments Corp.",
    logo: "https://ui-avatars.com/api/?name=SM+Investments&background=3b82f6&color=fff&size=128",
    location: "Pasig",
    distance: "1.2km",
    title: "Frontend Engineer (REACT)",
    salary: "P50-70k/Month",
    type: "full-time",
    verified: true,
    rating: 4.5,
    urgent: false
  },
  {
    id: 6,
    company: "SM Investments Corp.",
    logo: "https://ui-avatars.com/api/?name=SM+Investments&background=3b82f6&color=fff&size=128",
    location: "Pasig",
    distance: "1.2km",
    title: "Frontend Engineer (REACT)",
    salary: "P50-70k/Month",
    type: "full-time",
    verified: true,
    rating: 4.5,
    urgent: false
  }
];

export default function JobsPage() {
  const [searchKeyword, setSearchKeyword] = useState("web developer");
  const [location, setLocation] = useState("Metro Manila");
  const [salaryRange, setSalaryRange] = useState({ min: 20000, max: 80000 });
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  
  // Filter states
  const [jobTypeFilters, setJobTypeFilters] = useState({
    quickhire: true,
    oddjobs: true
  });
  const [datePosted, setDatePosted] = useState("latest");
  const [experienceLevel, setExperienceLevel] = useState("entry");
  const [jobOptions, setJobOptions] = useState({
    onsite: false,
    parttime: false,
    fulltime: false,
    contract: false
  });

  // Quick stats based on search
  const jobsFound = 123;
  const avgSalary = "P32k";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Job Filters</h2>

              {/* Search by Keyword */}
              <div className="mb-6">
                <label className="text-xs font-medium text-gray-500 mb-2 block">Search by Keyword</label>
                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <input 
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Web Developer"
                    className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">{location}</span>
                  </div>
                  <button className="text-xs font-semibold text-blue-500 hover:text-blue-600">
                    Change
                  </button>
                </div>
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Job Type */}
              <div className="mb-5">
                <button className="flex items-center justify-between w-full mb-3 group">
                  <label className="text-sm font-semibold text-gray-900 cursor-pointer">Job Type</label>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        checked={jobTypeFilters.quickhire}
                        onChange={(e) => setJobTypeFilters(prev => ({...prev, quickhire: e.target.checked}))}
                        className="peer w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">QuickHire (Full-time)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">

                      <input 
                        type="checkbox" 
                        checked={jobTypeFilters.oddjobs}
                        onChange={(e) => setJobTypeFilters(prev => ({...prev, oddjobs: e.target.checked}))}
                        className="peer w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 transition-all"
                      />

                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">OddJobs (Gig work)</span>
                  </label>
                </div>
              </div>

              <hr className="border-gray-100 mb-5" />
              {/* Salary Range */}
              <div className="mb-5">
                <button className="flex items-center justify-between w-full mb-3 group">
                  <label className="text-sm font-semibold text-gray-900 cursor-pointer">Salary Range</label>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
                
                {/* Min/Max Labels */}
                <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-3">
                  <span>₱{(salaryRange.min / 1000).toFixed(0)}k</span>
                  <span>₱{(salaryRange.max / 1000).toFixed(0)}k</span>
                </div>
                {/* Dual Range Slider */}
                <div className="relative h-1.5 mb-3 px-1">
                  {/* Track Background */}
                  <div className="absolute inset-x-0 h-full bg-gray-200 rounded-full"></div>
                  
                  {/* Active Range */}
                  <div 
                    className="absolute h-full bg-blue-500 rounded-full"
                    style={{ 
                      left: `${((salaryRange.min - 10000) / 190000) * 100}%`, 
                      right: `${100 - ((salaryRange.max - 10000) / 190000) * 100}%` 
                    }}
                  ></div>

                  {/* Handles - Visual Only (Inputs handle interaction) */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm pointer-events-none z-10"
                    style={{ left: `${((salaryRange.min - 10000) / 190000) * 100}%`, marginLeft: '-6px' }} 
                  ></div>
                   
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm pointer-events-none z-10"
                    style={{ left: `calc(${100 - (100 - ((salaryRange.max - 10000) / 190000) * 100)}%)`, marginLeft: '-10px' }}
                  ></div>

                  {/* Min Slider Input */}
                  <input 
                    type="range"
                    min={10000}
                    max={200000}
                    step={5000}
                    value={salaryRange.min}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val < salaryRange.max) {
                        setSalaryRange(prev => ({ ...prev, min: val }));
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />

                  {/* Max Slider Input */}
                  <input 
                    type="range"
                    min={10000}
                    max={200000}
                    step={5000}
                    value={salaryRange.max}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val > salaryRange.min) {
                        setSalaryRange(prev => ({ ...prev, max: val }));
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                </div>

                {/* Current Range Display */}
                <p className="text-xs text-gray-500">
                  Current range: <span className="text-gray-700 font-medium">₱{salaryRange.min.toLocaleString()} - ₱{salaryRange.max.toLocaleString()}</span>
                </p>
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Date Posted */}
              <div className="mb-5">
                <button className="flex items-center justify-between w-full mb-3 group">
                  <label className="text-sm font-semibold text-gray-900 cursor-pointer">Date Posted</label>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
                <div className="space-y-2.5">
                  {["Last 24 hours", "3 days", "Week", "Any"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="radio" 
                          name="datePosted"
                          checked={datePosted === option || (option === "Any" && datePosted === "latest")}
                          onChange={() => setDatePosted(option === "Any" ? "latest" : option)}
                          className="peer w-4 h-4 border-gray-300 text-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Experience Level */}
              <div className="mb-5">
                <button className="flex items-center justify-between w-full mb-3 group">
                  <label className="text-sm font-semibold text-gray-900 cursor-pointer">Experience Level</label>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
                <div className="space-y-2.5">
                  {["Entry", "Mid", "Senior"].map((level) => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={experienceLevel === level.toLowerCase()}
                        onChange={() => setExperienceLevel(level.toLowerCase())}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 transition-all"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Remote Options */}
              <div className="mb-6">
                <button className="flex items-center justify-between w-full mb-3 group">
                  <label className="text-sm font-semibold text-gray-900 cursor-pointer">Remote Options</label>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
                <div className="space-y-2.5">
                  {[
                    { key: "onsite", label: "On-site" },
                    { key: "remote", label: "Remote" },
                    { key: "hybrid", label: "Hybrid" }
                  ].map((opt) => (
                    <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={jobOptions[opt.key as keyof typeof jobOptions]}
                        onChange={(e) => setJobOptions(prev => ({...prev, [opt.key]: e.target.checked}))}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 transition-all"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Verified Companies Toggle */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Verified Companies Only</label>
                  <button
                    onClick={() => setVerifiedOnly(!verifiedOnly)}
                    className={`w-11 h-6 rounded-full transition-colors ${verifiedOnly ? 'bg-blue-500' : 'bg-gray-300'} relative`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${verifiedOnly ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mb-6">
                <h3 className="text-base font-bold text-gray-900 mb-3">Quick Stats</h3>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <p><span className="font-bold text-blue-500">{jobsFound}</span> jobs found</p>
                  <p><span className="font-bold text-blue-500">{avgSalary}</span> avg salary</p>
                  <p><span className="font-bold text-blue-500">89</span> verified companies</p>
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Sign Up CTA */}
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Sign up to see all jobs</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Create an account to view and apply for all {jobsFound} jobs.
                </p>
                <button className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm shadow-blue-200 transition-all">
                  Sign Up to View All
                </button>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">142 Web Developer Jobs in Metro Manila</h1>
              
              {/* Sort & View Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Sort Options */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                  <span className="text-sm text-gray-500 whitespace-nowrap mr-1">Sort by:</span>
                  {["Relevance", "Date", "Salary", "Distance"].map((sort) => (
                    <button 
                      key={sort}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium border whitespace-nowrap transition-colors ${
                        sort === "Relevance" 
                          ? "bg-gray-100 border-gray-200 text-gray-900" 
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {sort}
                    </button>
                  ))}
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                      viewMode === "list" 
                        ? "bg-gray-100 text-gray-900 border-gray-200" 
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    List
                  </button>
                  <button 
                    onClick={() => setViewMode("map")}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                      viewMode === "map" 
                        ? "bg-gray-100 text-gray-900 border-gray-200" 
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <MapIcon className="w-4 h-4" />
                    Map
                  </button>
                </div>
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {MOCK_JOBS.map((job, index) => (
                <div 
                  key={job.id + '-' + index}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Header: Company & Location */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={job.logo} 
                        alt={job.company}
                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm leading-tight">{job.company}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span>{job.location}</span>
                          <span className="text-gray-300">•</span>
                          <span>{job.distance}</span>
                        </div>
                      </div>
                    </div>
                    {job.verified && (
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded-full border border-gray-200">
                        <BadgeCheck className="w-3 h-3 text-gray-400" />
                        <span className="text-[10px] font-medium text-gray-500">Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Job Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h2>

                  {/* Tags: Salary & Type */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                      {job.salary.replace('P', '₱').replace('Month', 'month')}
                    </span>
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100 capitalize">
                      {job.type}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-100">
                      Sign up to apply
                    </button>
                  </div>
                </div>
              ))}
            </div>  
            {/* See More Jobs Button */}
            <div className="flex justify-center mb-12">
              <button className="px-8 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                see more jobs
              </button>
            </div>

            {/* Unlock Career Potential CTA */}
            <div className="bg-blue/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-10 text-center shadow-lg shadow-blue-500/5">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                unlock your career <span className="font-semibold">Potential</span>
              </h2>
              <button className="px-10 py-4 border-2 border-gray-900 rounded-xl text-lg font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                sign-up
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}



