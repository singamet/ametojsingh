import Icon from "../components/Icon";
import { skills } from "../config";

export default function Skills() {
  return (
    <div className="mt-8 flex max-h-[calc(100vh-32px)] max-w-[calc(100vw-32px)] flex-col overflow-auto border-t-2 border-t-zinc-400 md:ms-8 dark:border-t-zinc-800">
      <div className="w-full px-8">
        <h4 className="text-lg font-semibold text-zinc-500">{"< ICan />"}</h4>
      </div>
      <div className="mt-4 flex w-full flex-col gap-4">
        {skills.map((skill, idx) => (
          <fieldset
            key={skill.title}
            className="animate-slide-from-bottom border-[1px] border-zinc-700/50 bg-zinc-300/30 p-8 dark:bg-zinc-950/30"
            style={{
              animationDelay: `${idx === 0 ? "0" : idx * 200}ms`,
            }}
          >
            <legend className="text-lg tracking-widest">{skill.title}</legend>
            <div className="flex gap-12">
              {skill.elements.map((el) => (
                <Icon element={el}></Icon>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
