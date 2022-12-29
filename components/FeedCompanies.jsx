import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import dynamic from "next/dynamic";
import { getCompanies } from "../services/company.js"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./style.css";

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
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    autoplay: true,
    swipeToSlide: true,
    adaptiveHeight: true
  };

  return (
    // <div className="flex w-[100%]">
    <Slider {...settings}>
      {companies.map((company, index) => (
        <CardCompany
          title={company.brandName}
          image={company.image}
          stars="5"
          description={company.description}
          TagSection={company.type}
          discounts="ejemplo de descuento"
          key={index}
        />
      ))}
    </Slider>
    // </div>
  );
};


