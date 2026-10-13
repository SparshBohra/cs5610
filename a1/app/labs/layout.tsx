import Rail from "../(kambaz)/Rail";
import TOC from "./TOC";
import "../(kambaz)/kambaz.css";

export default function LabsFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-kambaz" className="font-sans">
      <Rail />
      <div className="wd-main-content-offset p-3" id="wd-main">
        <div className="flex gap-6">
          <div className="w-40 shrink-0">
            <TOC />
          </div>
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
