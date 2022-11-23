import clsx from "clsx";
import Button from "./Button";

export default function LandingBenefits(){
    return(
        <>
      <section className={clsx(
        'mt-16 p-10'
      )}>
        <section className="flex">
          <article>
            <h1 className="text-5xl font-montserrat text-blue-gray-900 font-bold mt-6">Disfruta de los</h1>
            <h1 className="text-5xl font-montserrat text-purple-800 font-bold mt-6">Beneficios friendly</h1>
            </article>
            <article className="pl-10">
            <img src="./figure-benefits.svg" alt="" />
          </article>
        </section>
        <article className="mt-5 font-montserrat text-blue-gray-700">
          <p>¡Únete a los negocios en Bee You! Forma parte de los negocios y</p>
          <p>organizaciones que apoyan abierta, libre y activamente a la</p>
          <p>comunidad LGBTIQ</p>
          <Button
            label='UNETE A BEE YOU+!'
            isSubmit
            style="mt-8">
         </Button>
        </article>
      </section>
    </>
    )
}