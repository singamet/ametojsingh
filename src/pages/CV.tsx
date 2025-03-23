export default function CV() {
  return (
    <div className="mt-8 flex max-h-[calc(100vh-32px)] flex-col overflow-y-auto border-t-2 border-t-zinc-400 md:mx-8 dark:border-t-zinc-800">
      <div className="w-full px-8">
        <h4 className="h-12 text-lg font-semibold text-zinc-500">
          {"< MyResume />"}
        </h4>
        <div className="h-full w-full">
          <iframe
            src="./docs/AmetojSinghResume.pdf"
            className="h-[calc(100vh-96px)] w-sm md:w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
