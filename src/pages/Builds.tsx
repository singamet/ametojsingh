import ProjectsCard from "../components/ProjectsCard";
import { builds } from "../config";

export default function Builds() {
  return (
    <div className="mx-8 mt-8 flex max-h-[calc(100vh-32px)] flex-col overflow-y-auto border-t-2 border-t-zinc-400 dark:border-t-zinc-800">
      <div className="w-full px-8">
        <h4 className="text-lg font-semibold text-zinc-500">
          {"< InProgress />"}
        </h4>
      </div>
      <div className="mt-8 flex w-full flex-col gap-4">
        {builds.map((project) => (
          <ProjectsCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
