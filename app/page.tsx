import Hero from "./components/Hero";
import PopularJobs from "./components/PopularJobs";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50">
     <Hero />
     <PopularJobs />
     <Footer />
   </main>
  );
}
