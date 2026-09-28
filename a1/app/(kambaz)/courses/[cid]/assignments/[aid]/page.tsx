import Link from "next/link";

export default async function EditorScreen({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid: courseKey } = await params;
  const back = `/courses/${courseKey}/assignments`;
  return (
    <div id="wd-assignments-editor">
      <h1>Assignment</h1>
      <table width="100%">
        <tbody>
          <tr>
            <td align="right" valign="top">
              Assignment Name
            </td>
            <td>
              <input id="wd-name" defaultValue="A1" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <textarea id="wd-description" rows={8} cols={50} defaultValue="The assignment is available online Submit a link to the landing page." />
            </td>
          </tr>
          <tr>
            <td align="right">Points</td>
            <td>
              <input id="wd-points" defaultValue="100" />
            </td>
          </tr>
          <tr>
            <td align="right">Due</td>
            <td>
              <input type="date" id="wd-due-date" />
            </td>
          </tr>
          <tr>
            <td align="right">Available from</td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link id="wd-cancel" href={back}>
                Cancel
              </Link>{" "}
              <Link id="wd-save" href={back}>
                Save
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
