import Link from "next/link";
import { assignments } from "../../../../database";

export default async function EditorScreen({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid: courseKey, aid } = await params;
  const assignment = assignments.find((a) => a._id === aid);
  const back = `/courses/${courseKey}/assignments`;
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <h1 className="mb-4 text-2xl font-semibold">
        {assignment?.title ?? "Assignment"}
      </h1>
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <textarea
        id="wd-description"
        rows={8}
        defaultValue={assignment?.description ?? ""}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-points" className="w-32 text-right text-sm">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={assignment?.points ?? 100}
          className="w-40 rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-due-date" className="w-32 text-right text-sm">
          Due
        </label>
        <input
          type="date"
          id="wd-due-date"
          defaultValue={assignment?.due}
          className="rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-6 flex items-center gap-3">
        <label htmlFor="wd-available-from" className="w-32 text-right text-sm">
          Available from
        </label>
        <input
          type="date"
          id="wd-available-from"
          defaultValue={assignment?.available}
          className="rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="flex gap-3">
        <Link
          id="wd-cancel"
          href={back}
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm no-underline"
        >
          Cancel
        </Link>
        <Link
          id="wd-save"
          href={back}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
