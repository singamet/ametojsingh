import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function Contact({
  isSmallScreen,
  setIsSidebarOpen,
}: {
  isSmallScreen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col items-center gap-4 tracking-widest">
      <h1 className="pe-12 font-bold text-zinc-500">CONTACT</h1>
      <div className="flex flex-col gap-2">
        <Link
          to="mailto:singamet@outlook.com"
          onClick={() => isSmallScreen && setIsSidebarOpen(false)}
          className="transition-all duration-200 hover:font-bold"
        >
          Email
        </Link>
        <Link
          to="https://github.com/singamet"
          target="_blank"
          onClick={() => isSmallScreen && setIsSidebarOpen(false)}
          className="flex items-center gap-1 transition-all duration-200 hover:font-bold"
        >
          GitHub
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/ametojsingh/"
          target="_blank"
          onClick={() => isSmallScreen && setIsSidebarOpen(false)}
          className="flex items-center gap-1 transition-all duration-200 hover:font-bold"
        >
          LinkedIn
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </Link>
        <Link
          to="/cv"
          onClick={() => isSmallScreen && setIsSidebarOpen(false)}
          className="animate-pulse transition-all duration-200 hover:font-bold"
        >
          Read.cv
        </Link>
      </div>
    </div>
  );
}
