import Link from "next/link";

export default function CourseCard({
  id,
  name,
  description,
  image,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="wd-dashboard-course h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link flex h-full flex-col text-neutral-900 no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          width={400}
          height={180}
          alt={name}
          className="h-40 w-full object-cover"
        />
        <div className="flex flex-1 flex-col p-4">
          <h5
            id="wd-course-name"
            className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap"
          >
            {name}
          </h5>
          <p
            id="wd-course-description"
            className="wd-dashboard-course-description m-0 mb-4 min-h-[3rem] flex-1 text-sm text-neutral-600"
          >
            {description}
          </p>
          <span className="inline-flex w-fit items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
            Go
          </span>
        </div>
      </Link>
    </div>
  );
}
