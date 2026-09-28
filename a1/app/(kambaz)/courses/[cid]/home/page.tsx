function Block({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {rows.map((row) => (
          <li key={row}>{row}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div id="wd-home">
      <h1>Home</h1>
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <div id="wd-modules">
                <div id="wd-modules-controls">
                  <button type="button">Collapse All</button>
                  <button type="button">View Progress</button>
                  <button id="wd-add-module-btn" type="button">
                    + Module
                  </button>
                </div>
                <Block
                  title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda"
                  rows={[
                    "LEARNING OBJECTIVES",
                    "Introduction to the course",
                    "Learn what is Web Development",
                    "READING",
                    "Full Stack Developer - Chapter 1 - Introduction",
                  ]}
                />
                <Block
                  title="Week 1, Lecture 2 - Formatting User Interfaces with HTML"
                  rows={["LEARNING OBJECTIVES", "READING"]}
                />
              </div>
            </td>
            <td valign="top" width="220">
              <div id="wd-course-status">
                <h2>Course Status</h2>
                <button type="button">Unpublish</button>
                <button type="button">Publish</button>
                <button type="button">Import Existing Content</button>
                <button type="button">Import from Commons</button>
                <button type="button">Choose Home Page</button>
                <button type="button">View Course Stream</button>
                <button type="button">New Announcement</button>
                <button type="button">View Course Notifications</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
