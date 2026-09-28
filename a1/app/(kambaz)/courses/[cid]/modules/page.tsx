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

export default function Modules() {
  return (
    <div id="wd-modules">
      <h1>Modules</h1>
      <div id="wd-modules-controls">
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
          "SLIDES",
          "Introduction to Web Development",
        ]}
      />
      <Block
        title="Week 1, Lecture 2 - Formatting User Interfaces with HTML"
        rows={["LEARNING OBJECTIVES", "READING"]}
      />
    </div>
  );
}
