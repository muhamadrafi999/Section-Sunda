import HeroMobileComp from "../components/HeroMobileComp";
import VerseComp from "../components/VerseComp";
import ReceptionComp from "../components/ReceptionComp";
import DressCodeComp from "../components/DressCodeComp";
import AttendanceCard from "../components/AttendanceCard";
import PortraitComp from "../components/PortraitComp";
import LiveFootageComp from "../components/LiveFootageComp";
import InstagramFilterComp from "../components/InstagramFilterComp";
import ThanksComp from "../components/ThanksComp";

function Home() {
  return (
    <div className="bg-[#F7F0DE]">
      <HeroMobileComp />
      <VerseComp />
      <ReceptionComp />
      <DressCodeComp />
      <AttendanceCard />
      <PortraitComp />
      <LiveFootageComp />
      <InstagramFilterComp />
      <ThanksComp />
    </div>
  );
}

export default Home;