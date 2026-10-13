import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
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
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li>Introduction to the course</li>
            <li>Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li>Full Stack Developer - Chapter 1 - Introduction</li>
          </Lesson>
          <Lesson title="SLIDES">
            <li>Introduction to Web Development</li>
          </Lesson>
        </Module>
        <Module title="Week 1, Lecture 2 - Formatting User Interfaces with HTML">
          <Lesson title="LEARNING OBJECTIVES" />
          <Lesson title="READING" />
        </Module>
      </ul>
    </div>
  );
}
