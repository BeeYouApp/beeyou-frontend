import LandingPlan from "../components/LandingPlan";
import Navbar from "../components/Navbar";
import LandingNav from "../components/LandingNabvar";
import Footer from "../components/Footer";
import LandingBenefits from "../components/LandingBenefits";
import SideBar from "../components/SideBar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingNav />
      <LandingBenefits/>
      <LandingPlan />
      <Footer />
      <SideBar />
    </>
  );
}
