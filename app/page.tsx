import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import Process from "@/components/Process";
import LoanInfo from "@/components/LoanInfo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <StatsBand />
      <Features />
      <Process />
      <LoanInfo />
      <Testimonials />
      <FAQ />
      <CtaBand />
      <ApplyForm />
      <Footer />
    </main>
  );
}
