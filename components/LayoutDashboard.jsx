import clsx from "clsx";
import Sidebar from "./SideBar";

export default function LayautDashboard({children, style}){
  return(
    <>
      <aside className=" inline-flex h-screen w-1/6 max-xl:w-[0px] border-r-4 ">
        <Sidebar/>
      </aside>
      <main className={clsx(
        "mt-[60px]",
        "inline-block min-lg-inline-flex min-lg-m-auto", 
        "h-screen",
        "w-5/6 min-xl:w-6/6",
        "absolute",

        {style}
        )}>
        {children}
      </main>
    </>
   )
}