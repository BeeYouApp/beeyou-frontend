import Navbar from "../../components/Navbar";
import CardProfile from "../../components/CardProfile";
import BussinesForm from "../../components/BussinesForm";

export default function BussinesPage() {
  return (
    <>
      <Navbar />
      <main className=" w-screen h-screen p-10 ">
        <section className="inline-block w-full h-1/4 m-auto font-poppins max-lg:h-[250px]">
          <article className="text-center text-3xl font-bold mb-4">
            <h1 className="mt-20 text-blue-gray-900 font-poppins ">Configuremos tu negocio</h1>
            <h1 className=" text-blue-gray-900 font-poppins ">en <span className="lgbtiq-grad-color leading-tight">bee you!</span></h1>
          </article>
          <article className="text-center text-[18px] font-normal ">
            <h3>Antes de publicar tu negocio es importante que</h3>
            <h3>configuremos tu perfil de negocio</h3>
          </article>
        </section>
        <article className="inline-flex w-5/12 max-lg:w-full h-3/4 max-lg:h-[450px] justify-end pt-[32px] max-lg:flex max-lg:justify-center">
          <CardProfile></CardProfile>
        </article>
        <article className="inline-flex w-7/12 max-lg:w-full h-3/4 3 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px] ">
          <BussinesForm></BussinesForm>

        </article>
      </main>
    </>


  )
}