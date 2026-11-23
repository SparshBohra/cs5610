import { modules } from "../../../database";
import Module from "./Module";
import Lesson from "./Lesson";

export default async function Modules({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  // only modules for this course id
  const courseMods = modules.filter((m) => m.course === cid);

  return (
    <div className="wd-modules">
      <div id="wd-modules-controls" className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <button
          id="wd-add-module-btn"
          type="button"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseMods.map((mod) => (
          <Module key={mod._id} title={mod.name}>
            <Lesson title={mod.description}>
              {mod.lessons.map((lesson) => (
                <li key={lesson._id}>{lesson.name}</li>
              ))}
            </Lesson>
          </Module>
        ))}
      </ul>
    </div>
  );
}
