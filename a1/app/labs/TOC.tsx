import Link from "next/link";

export default function TOC() {
  return (
    <ul className="m-0 list-none space-y-2 p-0 text-base">
      <li>
        <b>Sparsh Bohra</b>
      </li>
      <li>
        <Link href="/labs" id="wd-labs" className="text-red-600 no-underline">
          Labs
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab1"
          id="wd-lab1-link"
          className="text-red-600 no-underline"
        >
          Lab 1
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab2"
          id="wd-lab2-link"
          className="text-red-600 no-underline"
        >
          Lab 2
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab3"
          id="wd-lab3-link"
          className="text-red-600 no-underline"
        >
          Lab 3
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab4"
          id="wd-lab4-link"
          className="text-red-600 no-underline"
        >
          Lab 4
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab5"
          id="wd-lab5-link"
          className="text-red-600 no-underline"
        >
          Lab 5
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard"
          id="wd-kambaz-link"
          className="text-red-600 no-underline"
        >
          Kambaz
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/SparshBohra/cs5610"
          id="wd-github"
          className="text-red-600 no-underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
