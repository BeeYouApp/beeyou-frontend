import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardCompany(){
  return(
		<>
			<section className={clsx(
				"w-[560px] h-[259px]",
				"rounded-[16px] border-4 border-blue-sky-50",
				"shadow-xl flex")}>
					<article className="w-[200px] h-full bg-green-400 rounded-[16px]">
						<Image
						className={clsx("rounded-lg w-full h-full object-cover")}
						src={images.placeImage}
						alt="Place Image"/>
					</article>
					<section className="px-4 py-5 font-montserrat w-[360px]">
							<article className="flex">
								<h1 className="text-[18px] w-[65%] text-blue-gray-900 font-bold">Cielito Querido</h1>
								<div className="w-[35%]">
									<h2 className="text-[10px] text-blue-gray-500 mt-1.5 inline-block ">100% FIENDLY</h2>
									<Image
										className="inline-block ml-2"
										src={images.verifiedIcon}
										alt="Place Image"/>
								</div>
							</article>
							<article className="mt-1">
								<p>⭐⭐⭐⭐⭐</p>
							</article>
 							<article className="block mt-2 text-blue-gray-700 text-[14px]">
								<p className="block">CIELITO ® es un refugio único que inspirado en nuestra historia y calidez latina, reinventa la experiencia de “tomar café"...</p>
							</article>
							<section className="flex justify-between mt-[20px] ">
								<article className="text-[12px] text-blue-gray-700">
									<ul>
										<li>
											<Image className={clsx("inline-block mr-2")} src={images.tagIcon} alt="Tag Icon"/>
											LGBT</li>
										<li>
											<Image className={clsx("inline-block mr-2")} src={images.tagIcon} alt="Tag Icon"/>
											Cafe</li>
										<li>
											<Image className={clsx("inline-block mr-2")} src={images.tagIcon}alt="Tag Icon"/>
											Descuentos</li>
									</ul>
								</article>
								<article className="w-[200px] h-[60px] bg-blue-gray-50 rounded-lg text-[14px] flex justify-between items-center">
									<div>
									<Image className={clsx("mr-3 ml-3 -mt-4")} src={images.offerIcon} alt="Offer Icon"/>
									</div>
									<div>
										<p className="px-3">10% de descuento en todas la bebidas</p>
									</div>


								</article>

							</section>
						</section>
				</section>
		
		
	</>


    )
}