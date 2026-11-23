"use client";

import { usePathname } from "next/navigation";
import { useCoursesStore } from "../../store/coursesStore";

const SECTION_LABEL: Record<string, string> = {
  home: "Home",
  modules: "Modules",
  piazza: "Piazza",
  zoom: "Zoom",
  assignments: "Assignments",
  quizzes: "Quizzes",
  grades: "Grades",
  people: "People",
};

export default function CourseTitle({ courseName }: { courseName: string }) {
  const pathname = usePathname() ?? "";
  const parts = pathname.split("/").filter(Boolean);
  // people/table should still say People, not Table
  const sectionKey = parts[2] ?? "home";
  const section = SECTION_LABEL[sectionKey] ?? sectionKey;
  const stored = useCoursesStore((state) =>
    state.courses.find((course) => course._id === parts[1]),
  );
  const name = stored?.name ?? courseName;
  return (
    <h2 className="mb-3 text-2xl font-semibold text-red-600">
      {name} &gt; {section}
    </h2>
  );
}
