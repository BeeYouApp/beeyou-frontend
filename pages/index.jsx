import Navbar from "../components/Navbar";
import LandingHero from "../components/LandingHero";
import LandingBenefits from "../components/LandingBenefits";
import LandingPlan from "../components/LandingPlan";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <LandingBenefits id="benefits"/>
      <LandingPlan />
      <Footer />
    </>
  );
}
