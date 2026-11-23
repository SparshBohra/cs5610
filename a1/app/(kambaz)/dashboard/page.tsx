import { courses } from "../database";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  // one card per course in courses.json
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-2 text-3xl font-normal">
        Dashboard
      </h1>
      <hr className="mb-4" />
      <h2 id="wd-dashboard-published" className="mb-4 text-xl font-semibold">
        Published Courses ({courses.length})
      </h2>
      <hr className="mb-6" />
      <div
        id="wd-dashboard-courses"
        className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            id={c._id}
            name={c.name}
            description={c.description}
            image={c.image}
          />
        ))}
      </div>
    </div>
  );
}
