import CourseMenu from "./CourseMenu";

export default async function CourseFrame({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid: courseKey } = await params;
  return (
    <table width="100%" cellPadding={8}>
      <tbody>
        <tr>
          <td valign="top" width="180">
            <CourseMenu courseKey={courseKey} />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
