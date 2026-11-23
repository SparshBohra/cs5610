import { courses } from "../../database";
import CourseMenu from "./CourseMenu";
import CourseTitle from "./CourseTitle";

export default async function CourseFrame({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid: courseKey } = await params;
  const course = courses.find((c) => c._id === courseKey);
  const courseName = course?.name ?? courseKey;
  return (
    <div id="wd-courses">
      <CourseTitle courseName={courseName} />
      <hr className="my-3" />
      <div className="flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block">
          <CourseMenu courseKey={courseKey} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
