import LandingPlan from "../components/LandingPlan";
import Navbar from "../components/Navbar";
import LandingNav from "../components/LandingNabvar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingNav />
      <LandingPlan />
      <Footer />
    </>
  );
}
