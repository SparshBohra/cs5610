import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <b>Sparsh Bohra</b>
      </li>
      <li>
        <Link href="/labs" id="wd-labs">
          Labs
        </Link>
      </li>
      <li>
        <Link href="/labs/lab1" id="wd-lab1-link">
          Lab 1
        </Link>
      </li>
      <li>
        <Link href="/labs/lab2" id="wd-lab2-link">
          Lab 2
        </Link>
      </li>
      <li>
        <Link href="/labs/lab3" id="wd-lab3-link">
          Lab 3
        </Link>
      </li>
      <li>
        <Link href="/labs/lab4" id="wd-lab4-link">
          Lab 4
        </Link>
      </li>
      <li>
        <Link href="/labs/lab5" id="wd-lab5-link">
          Lab 5
        </Link>
      </li>
      <li>
        <Link href="/dashboard" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li>
        <a href="https://github.com/SparshBohra" id="wd-github">
          GitHub
        </a>
      </li>
      <li>
        <a href="/book/chapter1" id="wd-toc-book-link">
          Chapter 1
        </a>
      </li>
    </ul>
  );
}
