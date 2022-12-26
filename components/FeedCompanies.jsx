import { getCompanies } from "../services/company.js"
import React, { useEffect, useState, useContext } from "react";
import CardCompany from "./CardCompany"
import clsx from "clsx";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function Feed() {
    const [companies, setCompanies] = useState([]);


    const getAllCompanies = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await getCompanies(token)
            const dataJson = await response.json()
            setCompanies(dataJson.data.company)
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    useEffect(() => {
        getAllCompanies()
    },
        [])
    return (
        // <Swiper
        //     modules={[Navigation, A11y]}
        //     spaceBetween={10}
        //     slidesPerView={1}
        //     pagination={{ clickable: true }}
        //     onSwiper={(swiper) => console.log(swiper)}
        //     onSlideChange={() => console.log("slide change")}
        //     breakpoints={{
        //         360: {
        //             slidesPerView: 1,
        //         },
        //         768: {
        //             slidesPerView: 2,
        //         },
        //         1024: {
        //             slidesPerView: 3,
        //         },
        //         1024: {
        //             slidesPerView: 4,
        //         }
        //     }}
        //     className="w-[100%]"
        // >
        <ul className="w-[100%]">
            {companies.map((company) => {
                return (
                    <li className={clsx("mb-20")}>
                        <CardCompany
                            title={company.brandName}
                            image={company.image}
                            stars="5"
                            description={company.description}
                            TagSection={company.type}
                            discounts="ejemplo de descuento"
                        />
                    </li>
                );
            })}
        </ul>
        // </Swiper>
    );
};