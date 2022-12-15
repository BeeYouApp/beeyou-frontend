import Navbar from "../components/Navbar";
import clsx from "clsx";
import Notice from "../components/Notice";

export default function ConfigProfile(){
  return(
  <>
    <Navbar/>
      <main className={clsx("w-screen h-screen p-10")}>
        <section className={clsx("inline-block w-full h-1/4 m-auto font-poppins max-lg:h-[250px]")}>
          <article className={clsx("text-center text-3xl font-bold mb-4")}>
            <h1 className={clsx("mt-20 text-blue-gray-900 font-poppins")}>Verifica tu negocio como</h1>
            <h1 className={clsx("lgbtiq-grad-color leading-tight")}>bee you friendly!</h1>
          </article>
          <article className={clsx("text-center text-[18px] font-normal")}>
            <h3>Marca las casillas que cumplen para continuar</h3>
          </article>
        </section>
        <section className={clsx("flex justify-center")}>
          <Notice></Notice>
        </section>
      </main>
  </>
  )
}

