import ReceptionComp from "../components/ReceptionComp";
import DressCodeComp from "../components/DressCodeComp";
import AttendanceCard from "../components/AttendanceCard";
import PortraitComp from "../components/PortraitComp";
import LiveFootageComp from "../components/LiveFootageComp";
import InstagramFilterComp from "../components/InstagramFilterComp";

function Home() {
  return (
    <div className="bg-[#F7F0DE]">
      <ReceptionComp />
      <DressCodeComp />
      <AttendanceCard />
      <PortraitComp />
      <LiveFootageComp />
      <InstagramFilterComp />
    </div>
  );
}

export default Home;