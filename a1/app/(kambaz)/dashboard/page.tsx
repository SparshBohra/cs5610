import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <p id="wd-dashboard-published">Published Courses (3)</p>
      <table id="wd-dashboard-courses">
        <tbody>
          <tr>
            <td>
              <Link href="/courses/1234/home">CS1234 React JS</Link>
              <p>Full Stack software development</p>
            </td>
            <td>
              <Link href="/courses/1235/home">CS4550 Web Dev</Link>
              <p>Full Stack software development</p>
            </td>
            <td>
              <Link href="/courses/1236/home">CS5610 Web Dev</Link>
              <p>Full Stack software development</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
