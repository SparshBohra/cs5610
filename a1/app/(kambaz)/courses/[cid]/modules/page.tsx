"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((state) => state.modules);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);
  const editModule = useModulesStore((state) => state.editModule);
  const courseMods = modules.filter((m) => m.course === cid);

  return (
    <div className="wd-modules">
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseMods.map((mod) => (
          <Module
            key={mod._id}
            title={
              mod.editing ? (
                <input
                  className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                  value={mod.name}
                  onChange={(e) =>
                    updateModule({ ...mod, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModule({ ...mod, editing: false });
                    }
                  }}
                />
              ) : (
                mod.name
              )
            }
            extra={
              <ModuleControlButtons
                moduleId={mod._id}
                deleteModule={deleteModule}
                editModule={editModule}
              />
            }
          >
            <Lesson title={mod.description}>
              {(mod.lessons ?? []).map((lesson) => (
                <li key={lesson._id}>{lesson.name}</li>
              ))}
            </Lesson>
          </Module>
        ))}
      </ul>
    </div>
  );
}
