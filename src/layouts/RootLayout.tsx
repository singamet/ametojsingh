import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  function trackWidth() {
    if (mainRef.current && mainRef.current.offsetWidth <= 768) {
      setIsSidebarOpen(false);
      setIsSmallScreen(true);
    } else {
      setIsSidebarOpen(true);
      setIsSmallScreen(false);
    }
  }
  useEffect(() => {
    trackWidth();
    window.addEventListener("resize", trackWidth);
    return () => window.removeEventListener("resize", trackWidth);
  }, [mainRef]);

  return (
    <div
      className="relative flex h-screen w-screen bg-zinc-200 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50"
      ref={mainRef}
    >
      <aside
        className="animate-fade-in-slide fixed z-20 h-full justify-between transition-all duration-500 md:relative"
        style={{
          width: `${isSidebarOpen ? "224px" : "0"}`,
          transform: `${isSidebarOpen ? "translateX(0)" : "translateX(-224px)"}`,
          opacity: `${isSidebarOpen ? "1" : "0"}`,
        }}
      >
        <Sidebar
          isSmallScreen={isSmallScreen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </aside>
      {isSmallScreen && (
        <div
          className="absolute top-1 z-50 h-8 w-8 cursor-pointer transition-all duration-500"
          style={{ left: `${isSidebarOpen ? "12rem" : "4px"}` }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <XMarkIcon className="z-50 h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </div>
      )}
      <div
        className="h-full transition-all duration-500 md:flex-1"
        style={{ marginLeft: `${isSidebarOpen ? "0" : "32px"}` }}
      >
        <Outlet />
      </div>
    </div>
  );
}
