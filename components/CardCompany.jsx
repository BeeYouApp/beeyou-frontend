import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardCompany({ title, image, stars, description, TagSection }) {
	return (
		<section className={clsx("flex justify-center")}>
			<section className={clsx("w-[95%] h-[400px] md:h-[259px] rounded-[16px] border-4 border-blue-sky-50 shadow-xl flex flex-col md:flex-row")}>
				<article className={clsx("w-[100%] md:w-[200px] h-full rounded-[16px]")}>
					<div className={clsx("flex justify-end")}>
						<button className={clsx("w-[32px] h-[32px] bg-[#000000]/20 hover:bg-[#000000]/60 rounded-full absolute m-1")}>
							<Image className={clsx("m-auto")} src={images.iconFavorite} alt="icon-favorite" />
						</button>
					</div>
					<div className={clsx("w-[100%] h-[100%] static")}>
						<img src={image} className={clsx("w-[100%] h-[100%]")} />
						{/* {image} */}
						<button className={clsx("w-[100%] h-[26px] bg-blue-gray-900 text-[12px] text-[#FFFF] rounded-b-[10px]  font-montserrat hover:font-bold max-md:hidden")}>
							VER MÁS
						</button>
					</div>
				</article>
				<section className={clsx("px-4 py-5 font-montserrat w-[360px]")}>
					<article className={clsx("flex")}>
						<h1 className={clsx("text-[18px] w-[65%] text-blue-gray-900 font-bold")}>
							{title}
						</h1>
						<div className={clsx("w-[35%]")}>
							<h2 className={clsx("text-[10px] text-blue-gray-500 mt-1.5 inline-block")}>
								100% FIENDLY
							</h2>
							<Image
								className={clsx("inline-block ml-2")}
								src={images.verifiedIcon}
								alt="Place Image"
							/>
						</div>
					</article>
					<article className={clsx("mt-1")}>
						{stars}
					</article>
					<article className={clsx("block mt-2 text-blue-gray-700 text-[14px]")}>
						{description}
					</article>
					{TagSection}
				</section>
				<button className={clsx("w-[100%] h-[26px] bg-blue-gray-900 text-[12px] text-[#FFFF] rounded-b-[10px] font-montserrat hover:font-bold md:hidden")}>
					VER MÁS
				</button>
			</section>
		</section>

	)
}