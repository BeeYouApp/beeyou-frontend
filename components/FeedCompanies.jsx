import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import dynamic from "next/dynamic";
import { getCompanies } from "../services/company.js"

const CardCompany = dynamic(() => import('./CardCompany'), {
  ssr: false,
});

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex w-[100%]">
      <Slider {...settings}>
        {companies?.map((company, index) => (
          <div key={index}>
            <CardCompany
              title={company.brandName}
              image={company.image}
              stars="5"
              description={company.description}
              TagSection={company.type}
              discounts="ejemplo de descuento"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};