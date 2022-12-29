import React, { useEffect, useState, useContext } from "react";
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

  return (
    <div className="w-[100%]">
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
    </div>
  );
};