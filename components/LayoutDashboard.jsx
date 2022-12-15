import clsx from "clsx";
import Sidebar from "./Sidebar";

export default function LayautDashboard({ children, style }) {
  return (
    <>
      <aside className={clsx("inline-flex h-screen w-1/6 max-xl:w-[0px] border-r-4")}>
        <Sidebar />
      </aside>
      <main
        className={clsx(
          "mt-[60px]",
          "inline-block min-lg-inline-flex min-lg-m-auto",
          "h-screen",
          "w-5/6 min-xl:w-6/6",
          { style }
        )}>
        {children}
      </main>
    </>
  );
}
