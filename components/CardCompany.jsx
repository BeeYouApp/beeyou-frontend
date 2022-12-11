import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardCompany(){
  return(
		<>
			<section className={clsx(
				"w-[560px] h-[259px]",
				"rounded-[16px] border-2 border-blue-sky-50",
				"shadow-xl flex")}>

					<article className="w-[200px] h-full bg-green-400 rounded-[16px]">
						<Image
						className={clsx("rounded-lg w-full h-full object-cover")}
						src={images.placeImage}
						alt="Place Image"/>
					</article>
					<section className="px-4 py-5 font-montserrat w-[360px]">
							<article className="flex">
								<h1 className="text-[18px] w-[70%] text-blue-gray-900 font-bold">Cielito Querido</h1>
								<div className="w-[30%]">
									<h2 className="text-[10px] text-blue-gray-500 mt-1.5 inline-block">100% friendly</h2>
									<Image
										className="inline-block"
										src={images.verifiedIcon}
										alt="Place Image"/>
								</div>
							</article>
 					<article className="block">
						<p className="block">CIELITO ® es un refugio único que inspirado en nuestra historia y calidez latina, reinventa la experiencia de “tomar café"...</p>
	
					</article> 
			

			</section>



			</section>
		
		
		</>


    )
}