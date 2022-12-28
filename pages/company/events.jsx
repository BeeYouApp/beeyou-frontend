import clsx from "clsx";
import SidebarBiz from "../../components/SideBarBiz";
import EventsList from "../../components/EventsList";


export default function EventsPageList() {
  return (
    <>
      <main className={clsx("w-screen h-screen p-5")}>
        <section>
          <div className={clsx("flex")}>
            <SidebarBiz />
            <article className={clsx("bg-green-100 px-4 md:px-8 mt-24 md:mt-24 lg:mt-14 xl:mt-10")}>
              <h3 className={clsx("bg-pink-100 font-montserrat font-bold lg:mt-10 xl:mt-0 text-blue-gray-900 text-[24px] leading-[30px]")}>
                Todos tus eventos
              </h3> 
              <section>
                <div className={clsx("")}>
                  <EventsList />
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
