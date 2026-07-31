import Reveal from "../components/Reveal";
import InvitationLayout from "../layouts/InvitationLayout";
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
    <InvitationLayout>

      <Reveal direction="up">
        <HeroMobileComp />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <VerseComp />
      </Reveal>

      <Reveal direction="left" delay={100}>
        <BrideGroomComp />
      </Reveal>

      <Reveal direction="right" delay={100}>
        <OurStoryComp />
      </Reveal>

      <Reveal direction="up">
        <CountdownComp />
      </Reveal>

      <Reveal direction="left">
        <WeddingDayComp />
      </Reveal>

      <Reveal direction="right">
        <ReceptionComp />
      </Reveal>

      <Reveal direction="up">
        <DressCodeComp />
      </Reveal>

      <Reveal direction="left">
        <AttendanceCard />
      </Reveal>

      <Reveal direction="right">
        <PortraitComp />
      </Reveal>

      <Reveal direction="up">
        <LiveFootageComp />
      </Reveal>

      <Reveal direction="left">
        <InstagramFilterComp />
      </Reveal>

      <Reveal direction="right">
        <WeddingGiftComp />
      </Reveal>

      <Reveal direction="up">
        <WishComp />
      </Reveal>

      <Reveal direction="left">
        <ThanksComp />
      </Reveal>

      <Reveal direction="up">
        <ClosingComp />
      </Reveal>

    </InvitationLayout>
  );
}

export default Home;