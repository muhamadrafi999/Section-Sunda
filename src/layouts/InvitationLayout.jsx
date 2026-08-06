import { useState } from "react";
import InvitationCover from "../components/InvitationCover";

function InvitationLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(true);
    }, 700);
  };

  return (
    <>
      <div className="hidden lg:flex fixed inset-0 overflow-hidden bg-[#F7F0DE]">
        <div className="flex-1 min-w-0 relative overflow-hidden">
          <InvitationCover />
        </div>
        <div
          className="
            shrink-0
            w-[390px]
            xl:w-[430px]
            h-full
            overflow-y-auto
            overflow-x-hidden
            scrollbar-hide
            bg-[#F7F0DE]
            border-l
            border-[#E8DDC9]
          "
        >
          {children}
        </div>
      </div>
      <div className="lg:hidden h-screen overflow-hidden">
        {!isOpen ? (
          <div
            className={`h-full transition-all duration-700 ${
              isClosing
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <InvitationCover onOpen={handleOpen} />
          </div>
        ) : (
          <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide animate-mobile-open">
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export default InvitationLayout;