import Rail from "../(kambaz)/Rail";
import TOC from "./TOC";

export default function LabsFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-kambaz">
      <Rail />
      <div id="wd-main">
        <table id="labs-shell">
          <tbody>
            <tr>
              <td valign="top" width="160">
                <TOC />
              </td>
              <td valign="top">{children}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
