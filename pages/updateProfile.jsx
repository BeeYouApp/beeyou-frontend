import Navbar from "../components/Navbar";
import CardProfile from "../components/CardProfile";
import Sidebar from "../components/Sidebar";
import UpdateProfile from "../components/UpdateProfile";

export default function UpdateProf(){
  return(
    <>
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      <article className="w-1/4 px-4 md:px-8 mt-24 lg:mt-14">
        <div className="flex lg:mt-10 xl:mt-0">
          <h1 className="font-montserrat font-bold text-blue-gray-900 text-[24px] leading-[30px] mr-[79px]">Actualicemos tu perfil</h1>
        </div>
        <section>
          <article className="inline-flex w-1/4 max-lg:w-full h-2/4 max-lg:h-[450px] justify-end pt-[32px] max-lg:flex max-lg:justify-center">
            <CardProfile></CardProfile>
          </article>
          <article className="inline-flex w-2/4 max-lg:w-full h-2/4 3 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px] ">
            <UpdateProfile></UpdateProfile>
          </article>        
        </section>
        <section>
          <article className="k w-2/4 max-lg:w-full h-4/4 3 max-lg:h-[620px] pl-[40px] pt-[32px] max-lg:flex max-lg:justify-center max-lg:pl-[0px] ">
            <UpdateProfile></UpdateProfile>
          </article>
        </section>
      </article>
      </div>
    </>
  )

}