import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-6 mt-8 flex max-h-[calc(100vh-32px)] flex-col overflow-y-auto border-t-2 border-t-zinc-400 lg:mx-8 dark:border-t-zinc-800">
      <div className="w-full px-8">
        <h4 className="text-lg font-semibold text-zinc-500">
          {"< 404NotFound />"}
        </h4>
      </div>
      <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-4">
        <div className="text-center text-2xl">
          <span className="font-bold tracking-widest">Oops!</span>
          <p>You were not supposed to see this.</p>
        </div>
        <Link
          to="/"
          className="border-2 border-zinc-500 px-4 py-2 transition-all duration-300 hover:font-bold"
        >
          START OVER
        </Link>
      </div>
    </div>
  );
}
