import clsx from "clsx";
import Sidebar from "./Sidebar";
import SearchMap from "./SearchMap";

export default function LayautDashboard({children, style}){
  return(
    <>
      <aside className=" inline-flex h-screen w-1/6 bg-red-400">
        <Sidebar></Sidebar>
      </aside>
      <main className={clsx(
        "inline-block", 
        "h-screen", 
        "w-5/6",
        "absolute",
        {style}
        )}>
        {children}
      </main>
    </>
   )
}