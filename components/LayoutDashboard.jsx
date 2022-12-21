import clsx from "clsx";
import Sidebar from "./Sidebar";

export default function LayoutDashboard({ children, style }) {
  return (
    <div className={clsx("flex")}>
      <aside className={clsx("inline-flex lg:w-2/6 border-r-4")}>
        <Sidebar />
      </aside>
      <main
        className={clsx(
          "mt-[60px]",
          "inline-block min-lg-inline-flex min-lg-m-auto",
          "w-6/6 min-xl:w-4/6",
          { style }
        )}>
        {children}
      </main>
    </div>
  );
}
