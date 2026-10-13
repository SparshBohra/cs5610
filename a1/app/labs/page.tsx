import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1 className="mb-4 text-3xl font-semibold">Labs</h1>
      <ul className="space-y-2 text-lg">
        <li>
          <Link href="/labs/lab1" className="text-red-600 no-underline">
            Lab 1
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" className="text-red-600 no-underline">
            Lab 2
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-red-600 no-underline">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}
