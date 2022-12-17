import CardUpgrade from "../../components/CardUpgrade";
import ContentEvents from "../../components/ContentEvents";
import ContentOff from "../../components/ContentOff";
import Sidebar from "../../components/Sidebar";

export default function Dashboard(){
  return(
    <>
      <main className="w-screen inline-flex ">
        <section className="w-1/4">
          <Sidebar></Sidebar>
        </section>
        <section className="mt-6">
          <article>
            <CardUpgrade></CardUpgrade>
          </article>
          <article className="inline-flex">
            <ContentEvents></ContentEvents>
            <ContentOff></ContentOff>
          </article>
        </section>
      </main>
    </>
    )
}