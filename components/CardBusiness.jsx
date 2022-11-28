import clsx from "clsx";

export default function CardBusiness (){
    return(
        <section className="inline-flex h-auto w-full drop-shadow-md border-solid border-slate-800 border-2 rounded-md">
            <article className="w-5/12">
                <img className="bg-cover bg-no-repeat w-auto h-auto" src="https://media.timeout.com/images/105774664/750/422/image.jpg" alt="Foto cafeteria" />
                <button className="bg-gray-500 w-full h-[30px] text-zinc-50">VER MAS </button>
            </article>
            <article className="mt-5 ml-5 w-7/12">
                <div className="h-1/3">
                    <h1 className="text-2xl font-bold font-montserrat flex justify-between">Cielito Querido
                        <span className="text-[14px] mr-5">100% Friendly <img src="" alt="" /></span>
                    </h1>
                    <h2>Aqui van las estrellas</h2>
                </div>
                <div className="h-1/3">
                    <p className="text-[14px] mt-2">CIELITO es un refugio unico que inspirado en 
                        nuestra historia y calidez latina, reinventa la experiencia
                        de tomar cafe ....
                    </p>
                </div>
                <div className="inline-flex h-1/3 ">
                    <ul className="text-[12px] mt-2">
                        <li> <img src="" alt="" /> LGBT</li>
                        <li> <img src="" alt="" /> Cafe</li>
                        <li> <img src="" alt="" /> Descuentos</li>
                    </ul>
                    <p>
                        10% de descuento en todas las bebidas
                    </p>
                </div>
            </article>
        </section>
    )
}