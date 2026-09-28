import Link from "next/link";

export default function CourseMenu({ courseKey }: { courseKey: string }) {
  const root = `/courses/${courseKey}`;
  return (
    <div id="wd-courses">
      <div id="wd-courses-navigation">
        <Link href={`${root}/home`} id="wd-course-home-link">
          Home
        </Link>
        <br />
        <Link href={`${root}/modules`} id="wd-course-modules-link">
          Modules
        </Link>
        <br />
        <Link href={`${root}/piazza`} id="wd-course-piazza-link">
          Piazza
        </Link>
        <br />
        <Link href={`${root}/zoom`} id="wd-course-zoom-link">
          Zoom
        </Link>
        <br />
        <Link href={`${root}/assignments`} id="wd-course-assignments-link">
          Assignments
        </Link>
        <br />
        <Link href={`${root}/quizzes`} id="wd-course-quizzes-link">
          Quizzes
        </Link>
        <br />
        <Link href={`${root}/grades`} id="wd-course-grades-link">
          Grades
        </Link>
        <br />
        <Link href={`${root}/people`} id="wd-course-people-link">
          People
        </Link>
      </div>
    </div>
  );
}
