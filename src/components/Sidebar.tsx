import { Link } from "react-router-dom";
import { sidebarTabs } from "../config";
import Contact from "./Contact";

export default function Sidebar({
  isSmallScreen,
  setIsSidebarOpen,
}: {
  isSmallScreen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="z-50 flex h-full flex-col justify-between bg-zinc-100 px-1 py-12 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mt-12 border-t-2 border-t-zinc-200 dark:border-t-zinc-900">
        {sidebarTabs.map((tab) => (
          <Link
            to={tab.link}
            onClick={() => isSmallScreen && setIsSidebarOpen(false)}
            key={tab.title}
            className="flex cursor-pointer flex-col items-center justify-between border-b-2 border-b-zinc-200 py-8 font-semibold tracking-widest transition-all duration-300 hover:bg-zinc-200 hover:text-lg dark:border-b-zinc-900 dark:hover:bg-zinc-900"
          >
            <h2>{tab.title}</h2>
          </Link>
        ))}
      </div>
      <Contact
        isSmallScreen={isSmallScreen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}
