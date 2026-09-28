import Rail from "./Rail";

export default function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-kambaz">
      <Rail />
      <div id="wd-main">{children}</div>
    </div>
  );
}
