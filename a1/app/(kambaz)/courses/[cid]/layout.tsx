import CourseMenu from "./CourseMenu";

export default async function CourseFrame({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid: courseKey } = await params;
  return (
    <div id="wd-courses">
      <h2 className="mb-3 text-2xl font-semibold text-red-600">
        Course {courseKey}
      </h2>
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
