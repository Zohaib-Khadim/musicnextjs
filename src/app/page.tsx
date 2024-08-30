
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructors"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <MusicSchoolTestimonialCards/>
      <UpComingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
