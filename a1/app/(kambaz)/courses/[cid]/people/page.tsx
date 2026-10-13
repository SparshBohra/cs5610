import { FaUserCircle } from "react-icons/fa";

const PEOPLE = [
  {
    firstName: "Sparsh",
    lastName: "Bohra",
    loginId: "bohra.s",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-10",
    totalActivity: "10:22:30",
  },
  {
    firstName: "Alice",
    lastName: "Wonderland",
    loginId: "001234561S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-01-01",
    totalActivity: "10:21:32",
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    loginId: "1234FHDJFW",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-02-01",
    totalActivity: "12:22:32",
  },
];

export default function People() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <h1 className="mb-4 text-2xl font-semibold">People</h1>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {PEOPLE.map((user) => (
            <tr key={user.loginId} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
