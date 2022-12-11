import CardUpgrade from "../components/CardUpgrade"
import ContentEvents from "../components/ContentEvents"
import ContentOff from "../components/ContentOff"

export default function BussinesDashboard(){
    return(
        <>
        <CardUpgrade></CardUpgrade>
        <section className="inline-flex">
        <ContentEvents></ContentEvents>
        <ContentOff></ContentOff>

        </section>
        </>
    )
}