import clsx from "clsx";
import CardUpgrade from "../../components/CardUpgrade";
import ContentEvents from "../../components/ContentEvents";
import ContentOff from "../../components/ContentOff";

export default function Dashboard(){
    return(
        <>
        <CardUpgrade></CardUpgrade>
        <section className={clsx("inline-flex")}>
        <ContentEvents></ContentEvents>
        <ContentOff></ContentOff>
        </section>
        </>
    )
}