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
              <h2 className="text-xl font-bold text-gray-900 mb-6">job filters</h2>

              {/* Search by Keyword */}
              <div className="mb-6">
                <label className="text-sm text-gray-500 mb-2 block">search by keyword</label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <input 
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="web developer"
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span>{location}</span>
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Job Type */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">job type</label>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={jobTypeFilters.quickhire}
                      onChange={(e) => setJobTypeFilters(prev => ({...prev, quickhire: e.target.checked}))}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-600">quickhire</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={jobTypeFilters.oddjobs}
                      onChange={(e) => setJobTypeFilters(prev => ({...prev, oddjobs: e.target.checked}))}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-600">Oddjobs</span>
                  </label>
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Salary Range */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">Salary Range</label>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Min/Max Labels */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>₱{(salaryRange.min / 1000).toFixed(0)}k</span>
                  <span>₱{(salaryRange.max / 1000).toFixed(0)}k</span>
                </div>

                {/* Dual Range Slider */}
                <div className="relative h-2 mb-3">
                  {/* Track Background */}
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  
                  {/* Active Range */}
                  <div 
                    className="absolute h-full bg-primary rounded-full"
                    style={{ 
                      left: `${((salaryRange.min - 10000) / 190000) * 100}%`, 
                      right: `${100 - ((salaryRange.max - 10000) / 190000) * 100}%` 
                    }}
                  ></div>

                  {/* Min Slider */}
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
                    className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer"
                    style={{ zIndex: salaryRange.min > salaryRange.max - 20000 ? 5 : 3 }}
                  />

                  {/* Max Slider */}
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
                    className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer"
                    style={{ zIndex: 4 }}
                  />
                </div>

                {/* Current Range Display */}
                <p className="text-xs text-gray-500">
                  Current range: ₱{salaryRange.min.toLocaleString()} - ₱{salaryRange.max.toLocaleString()}
                </p>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Date Posted */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-3 block">date posted</label>
                <div className="space-y-2">
                  {["last 24 hours", "3days", "week", "latest"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="datePosted"
                        checked={datePosted === option}
                        onChange={() => setDatePosted(option)}
                        className="w-4 h-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Experience Level */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-3 block">Experience level</label>
                <div className="space-y-2">
                  {["entry", "mid"].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="experience"
                        checked={experienceLevel === level}
                        onChange={() => setExperienceLevel(level)}
                        className="w-4 h-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Job Options */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-3 block">Job Options</label>
                <div className="space-y-2">
                  {[
                    { key: "onsite", label: "On-Sites" },
                    { key: "parttime", label: "Part-time" },
                    { key: "fulltime", label: "Full-time" },
                    { key: "contract", label: "Contract" }
                  ].map((opt) => (
                    <label key={opt.key} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={jobOptions[opt.key as keyof typeof jobOptions]}
                        onChange={(e) => setJobOptions(prev => ({...prev, [opt.key]: e.target.checked}))}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Verified Companies Toggle */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">verified companies</label>
                  <button
                    onClick={() => setVerifiedOnly(!verifiedOnly)}
                    className={`w-10 h-6 rounded-full transition-colors ${verifiedOnly ? 'bg-primary' : 'bg-gray-200'} relative`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${verifiedOnly ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Quick Stats */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-3 block">Quick Stats</label>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-bold text-gray-900">{jobsFound}</span> jobs Found</p>
                  <p><span className="font-bold text-gray-900">{avgSalary}</span> avg Salary</p>
                </div>
              </div>

              {/* Sign Up CTA */}
              <div className="bg-blue-50/50 backdrop-blur-sm border border-blue-100 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Sign up to see all jobs</h4>
                <p className="text-xs text-gray-500 mb-4">
                  Sign up to see all jobs, create an account to view and apply for all the jobs nearest to your locations
                </p>
                <button className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  apply to view all jobs
                </button>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            
            {/* Top Bar: Sort & View Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">sort by</span>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
                  Relevance
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    viewMode === "list" 
                      ? "bg-gray-900 text-white border-gray-900" 
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <List className="w-4 h-4" />
                  List
                </button>
                
                <button 
                  onClick={() => setViewMode("map")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    viewMode === "map" 
                      ? "bg-gray-900 text-white border-gray-900" 
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <MapIcon className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>
            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {MOCK_JOBS.map((job, index) => (
                <div 
                  key={job.id + '-' + index}
                  className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
                >
                  {/* Header: Company Info */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={job.logo} 
                        alt={job.company}
                        className="w-12 h-12 rounded-full border border-gray-100"

                      />

                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{job.company}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                          <span>{job.distance}</span>
                        </div>
                      </div>
                    </div>
                    {job.verified && (
                      <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-medium rounded-md border border-green-100">
                        verified
                      </span>
                    )}
                  </div>

                  {/* Job Title */}
                  <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {job.title}
                  </h4>

                  {/* Salary & Type */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20">
                      {job.salary}
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">{job.type}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      Quick Apply
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
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-10 text-center shadow-lg shadow-blue-500/5">
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
