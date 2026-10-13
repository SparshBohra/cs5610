import CourseCard from "./CourseCard";

const COURSES = [
  {
    id: "1234",
    name: "CS1234 React JS",
    description: "Full Stack software development",
    image: "/images/reactjs.jpg",
  },
  {
    id: "1235",
    name: "CS4550 Web Dev",
    description: "Full Stack software development",
    image: "/images/htmlcss.jpg",
  },
  {
    id: "1236",
    name: "CS5610 Web Dev",
    description: "Full Stack software development",
    image: "/images/nextjs.jpg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-2 text-3xl font-normal">
        Dashboard
      </h1>
      <hr className="mb-4" />
      <h2 id="wd-dashboard-published" className="mb-4 text-xl font-semibold">
        Published Courses ({COURSES.length})
      </h2>
      <hr className="mb-6" />
      <div
        id="wd-dashboard-courses"
        className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3"
      >
        {COURSES.map((c) => (
          <CourseCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
