export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const person = {
    name: "Ada",
    skills: ["js", "html"],
    address: { city: "Boston" },
  };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <hr />
    </div>
  );
}
