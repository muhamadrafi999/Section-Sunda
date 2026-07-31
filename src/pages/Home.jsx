import HeroMobileComp from "../components/HeroMobileComp";
import VerseComp from "../components/VerseComp";
import BrideGroomComp from "../components/BrideGroomComp";
import CountdownComp from "../components/CountdownComp";
import WeddingDayComp from "../components/WeddingDayComp";
import OurStoryComp from "../components/OurStoryComp";
import ReceptionComp from "../components/ReceptionComp";
import DressCodeComp from "../components/DressCodeComp";
import AttendanceCard from "../components/AttendanceCard";
import PortraitComp from "../components/PortraitComp";
import LiveFootageComp from "../components/LiveFootageComp";
import InstagramFilterComp from "../components/InstagramFilterComp";
import WeddingGiftComp from "../components/WeddingGiftComp";
import WishComp from "../components/WishComp";
import ThanksComp from "../components/ThanksComp";
import ClosingComp from "../components/ClosingComp";

function Home() {
  return (
    <div className="min-h-screen bg-[#F7F0DE] flex justify-center py-10">
      <div className="w-[390px] bg-[#F7F0DE] overflow-hidden shadow-xl">
        <HeroMobileComp />
        <VerseComp />
        <BrideGroomComp />
        <OurStoryComp />
        <CountdownComp />
        <WeddingDayComp />
        <ReceptionComp />
        <DressCodeComp />
        <AttendanceCard />
        <PortraitComp />
        <LiveFootageComp />
        <InstagramFilterComp />
        <WeddingGiftComp />
        <WishComp />
        <ThanksComp />
        <ClosingComp />
      </div>
    </div>
  );
}

export default Home;