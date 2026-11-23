"use client";

import Link from "next/link";
import { useCoursesStore, type Course } from "../store/coursesStore";

export default function CourseCard({
  course,
  onEdit,
}: {
  course: Course;
  onEdit: () => void;
}) {
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  return (
    <div className="wd-dashboard-course h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link flex h-full flex-col text-neutral-900 no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          width={400}
          height={180}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="flex flex-1 flex-col p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-4 min-h-[3rem] flex-1 text-sm text-neutral-600">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
              Go
            </span>
            <button
              type="button"
              id="wd-edit-course-click"
              className="inline-flex items-center justify-center rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              onClick={(event) => {
                event.preventDefault();
                onEdit();
              }}
            >
              Edit
            </button>
            <button
              type="button"
              id="wd-delete-course-click"
              className="inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
