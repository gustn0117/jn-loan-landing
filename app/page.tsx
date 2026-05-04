import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Process from "@/components/Process";
import LoanInfo from "@/components/LoanInfo";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Process />
      <LoanInfo />
      <ApplyForm />
      <Footer />
    </main>
  );
}
