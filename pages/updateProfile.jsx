import Navbar from "../components/Navbar";
import CardProfile from "../components/CardProfile";
import UpdateProfile from "../components/UpdateProfile";
import clsx from "clsx";

export default function UpdateProf(){
  return(
    <>
    <Navbar/>
        <main className={clsx("w-screen h-screen p-10")}>
          <section className={clsx("bg-green-200 inline-block w-full h-1/4 m-auto font-poppins max-lg:h-[100px]")}>
            <article className={clsx("text-center text-3xl font-bold mb-4")}>
              <h1 className={clsx("mt-10 text-blue-gray-900 font-poppins")}>Actualicemos tu perfil</h1>
            </article>  
          </section>
          <article className={clsx("bg-orange-200 inline-flex w-5/12 max-lg:w-full h-2/4 max-lg:h-[450px] justify-end pt-[32px] max-lg:flex max-lg:justify-center")}>
            <CardProfile></CardProfile>
          </article>
          <article className={clsx("bg-blue-100 w-7/12 inline-flex max-lg:w-full h-2/4 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px]")}>
            <UpdateProfile></UpdateProfile>
          </article>
          <article className={clsx("flex justify-end w-7/12 max-lg:w-full max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px]")}>
            <UpdateProfile></UpdateProfile>
          </article>
        </main>
    </>
  )

}