import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardCompany({title, image, stars, description, TagSection}){
  return(
		<>
			<section className={clsx(
				"w-[560px] h-[259px]",
				"rounded-[16px] border-4 border-blue-sky-50",
				"shadow-xl flex")}>
					<article className="w-[200px] h-full rounded-[16px]">
						<div className="flex justify-end">
							<button className="w-[32px] h-[32px] bg-[#000000]/20 hover:bg-[#000000]/60 rounded-full absolute m-1">
									<Image className={clsx("m-auto")} src={images.iconFavorite} alt="icon-favorite"/>
						</button>
					</div>
						{image}
						<button className="w-[197px] h-[26px] bg-blue-gray-900 -mt-6 absolute text-[12px] text-[#FFFF] rounded-b-[10px] font-montserrat hover:font-bold">VER MAS</button>
					</article>
					<section className="px-4 py-5 font-montserrat w-[360px]">
							<article className="flex">
								<h1 className="text-[18px] w-[65%] text-blue-gray-900 font-bold">{title}</h1>
								<div className="w-[35%]">
									<h2 className="text-[10px] text-blue-gray-500 mt-1.5 inline-block ">100% FIENDLY</h2>
									<Image
										className="inline-block ml-2"
										src={images.verifiedIcon}
										alt="Place Image"/>
								</div>
							</article>
							<article className="mt-1">
								{stars}
							</article>
 							<article className="block mt-2 text-blue-gray-700 text-[14px]">
								{description}
							</article>
								{TagSection}
						</section>
				</section>
	</>


    )
}