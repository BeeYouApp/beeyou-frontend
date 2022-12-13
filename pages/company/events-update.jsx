import clsx from "clsx";
import UpdateEvents from "../../components/UpdateEvents";


export default function UpdateEvent() {
  return (
    <>
      <main className={clsx("bw-screen h-screen p-5")}>
        <section>
          <div className={clsx("flex")}>
            <article className={clsx("px-4 md:px-8 mt-24 md:mt-24 lg:mt-14 xl:mt-10")}>
              <UpdateEvents />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}