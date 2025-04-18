import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../config";

export default function Projects() {
  return (
    <div className="mt-8 flex max-h-[calc(100vh-32px)] max-w-[calc(100vw-32px)] flex-col overflow-auto border-t-2 border-t-zinc-400 md:ms-8 dark:border-t-zinc-800">
      <div className="w-full px-8">
        <h4 className="text-lg font-semibold text-zinc-500">{"< MyWork />"}</h4>
      </div>
      <div className="mt-8 flex w-full flex-col gap-4 xl:px-16">
        {projects.map((project) => (
          <ProjectsCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
