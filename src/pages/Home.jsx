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
    <div className="min-h-screen bg-[#F7F0DE] flex justify-center py-10">
      <div className="w-[390px] bg-[#F7F0DE] overflow-hidden shadow-xl">

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
    </div>
  );
}

export default Home;