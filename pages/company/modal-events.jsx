import clsx from "clsx";
import ModalEvents from "../";

export default function ModalEventsBiz(){
  return(
    <>
        <main className={clsx("w-screen h-screen p-10")}>
          <section className={clsx("inline-block w-full h-1/4 m-auto font-poppins max-lg:h-[250px]")}>
            <article className={clsx("text-center text-3xl font-bold mb-4")}>
            </article>
            <article className={clsx("text-center text-[18px] font-normal")}>
            </article>
          </section>
          <article className={clsx("inline-flex w-5/12 max-lg:w-full h-3/4 max-lg:h-[450px] justify-end pt-[32px] max-lg:flex max-lg:justify-center")}>
          </article>
          <article className={clsx("inline-flex w-7/12 max-lg:w-full h-3/4 3 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px]")}>
            <ModalEvents></ModalEvents>
          </article>
        </main>
        </>
    )

}