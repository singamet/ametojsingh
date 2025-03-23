import { elements } from "../config";

export default function Icon({ element }: { element: string }) {
  const icon = elements.find((el) => el.title === element)?.icon;
  if (!icon) {
    return null;
  }
  return (
    <div className="group relative cursor-pointer">
      {icon}
      <div className="invisible absolute bottom-12 left-1/4 -translate-x-1/2 transform bg-zinc-400 px-2 py-1 text-center text-black opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        {element}
        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-zinc-400"></div>
      </div>
    </div>
  );
}
