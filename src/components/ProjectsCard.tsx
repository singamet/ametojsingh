import { Link } from "react-router-dom";
import { projects } from "../config";
import Carousel from "./Carousel";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import Icon from "./Icon";

export default function ProjectsCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <div className="animate-fade-in-scale flex w-full flex-col gap-4 bg-zinc-300 p-8 lg:flex-row dark:bg-zinc-800">
      <Carousel images={project.images} />
      <div className="flex w-full flex-col gap-4 p-8 lg:w-1/2">
        <h4 className="text-2xl tracking-wider">{project.title}</h4>
        <p className="overflow-hidden text-justify break-words break-all text-ellipsis">
          {project.description}
        </p>
        {project.link && (
          <Link
            to={project.link}
            target="_blank"
            className="flex h-12 w-36 items-center justify-center gap-2 bg-zinc-800 text-lg font-bold tracking-widest text-zinc-200 shadow-lg shadow-zinc-500 transition-all duration-200 hover:bg-zinc-950 dark:bg-zinc-200 dark:text-zinc-950 dark:shadow-zinc-950 dark:hover:bg-zinc-300"
          >
            Live
            <ArrowTopRightOnSquareIcon className="h-4 w-4 font-medium" />
          </Link>
        )}
        <div className="mt-4 flex gap-4">
          {project.tech.map((x) => {
            return <Icon element={x} key={x} />;
          })}
        </div>
      </div>
    </div>
  );
}
