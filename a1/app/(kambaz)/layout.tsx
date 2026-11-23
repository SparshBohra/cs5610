import Rail from "./Rail";
import { AccountProvider } from "./account/AccountContext";
import "./kambaz.css";

export default function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="font-sans">
        <Rail />
        <div className="wd-main-content-offset p-3" id="wd-main">
          {children}
        </div>
      </div>
    </AccountProvider>
  );
}
