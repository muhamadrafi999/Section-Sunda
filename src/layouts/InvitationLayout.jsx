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

        <div className="flex-1 relative overflow-hidden">
          <InvitationCover />
        </div>

        <div
          className="
            shrink-0
            w-97.5
            xl:w-107.5
            h-full
            overflow-y-auto
            overflow-x-hidden
            scrollbar-hide
            bg-[#F7F0DE]
            shadow-2xl
            border-l
            border-[#E8DDC9]
          "
        >
          <div className="w-97.5 min-h-full mx-auto bg-[#F7F0DE]">
            {children}
          </div>
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