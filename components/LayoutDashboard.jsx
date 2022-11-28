import clsx from "clsx";

export default function LayautDashboard({children, style}){
  return(
    <>
      <aside className=" inline-flex h-screen w-1/6 bg-red-400"></aside>
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