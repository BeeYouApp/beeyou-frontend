import Navbar from "../components/Navbar";
import CardProfile from "../components/CardProfile";
import Sidebar from "../components/Sidebar";
import UpdateProfile from "../components/UpdateProfile";

export default function UpdateProf(){
  return(
    <>
      <Navbar/>
        <main className=" w-screen h-screen p-10 ">
          <div className="flex">
            <Sidebar></Sidebar>
            <section className="inline-block w-full h-1/4 m-auto font-poppins max-lg:h-[250px]">
              <article className="text-center text-3xl font-bold mb-4">
                <h1 className="mt-20 text-blue-gray-900 font-poppins ">Actualicemos tu perfil</h1>
              </article>
            </section>
            <article className="inline-flex w-3/12 max-lg:w-full h-1/4 max-lg:h-[450px] justify-end pt-[32px] max-lg:flex max-lg:justify-center">
              <CardProfile></CardProfile>
            </article>
            <article className="inline-flex w-4/12 max-lg:w-full h-1/4 3 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px] ">
              <UpdateProfile></UpdateProfile>
              </article>
            <article className="inline-flex w-4/12 max-lg:w-full h-2/4 3 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px] ">
              <UpdateProfile></UpdateProfile>
            </article>
          </div>
        </main>
        </>
    )

}