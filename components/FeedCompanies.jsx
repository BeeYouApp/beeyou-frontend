import { getCompanies } from "../services/company.js"
import React, { useEffect, useState, useContext } from "react";
import CardCompany from "./CardCompany"
import clsx from "clsx";

export default function Feed() {
    const [companies, setCompanies] = useState([]);


    const getAllCompanies = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMwMDExMWJiZDFmMDc1NjlmYTRkMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjcxNjc2NzM5LCJleHAiOjE2NzE3NjMxMzl9.FSb4fybAVM18T-ZQIuKdPIMIW1-AFF-rAD_SpnyMMRU"
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
        <ul className={clsx("md:flex")}>
            {companies.map((company) => {
                return (
                    <li>
                        <CardCompany
                            title="titulo"
                            image="image"
                            stars="5"
                            description="5"
                            TagSection={company.email}
                        />
                    </li>
                );
            })}
        </ul>
    );
};