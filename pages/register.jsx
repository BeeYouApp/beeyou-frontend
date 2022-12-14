import clsx from "clsx";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import React, { useState } from "react";

export default function RegisterPage(props) {
    
    const [token, setToken] = useState(null);

    return (
        <>
            <Navbar />
            <main className={clsx("flex flex-col justify-center items-center w-screen mt-28")}>
                <h1 className={clsx("text-center font-poppins font-bold leading-[48px] lgbtiq-grad-color text-[32px]")}>
                    <strong className={clsx("font-montserrat leading-[40px] text-blue-gray-900")}>
                        ¡Bienvenid@ a{" "}
                    </strong>
                    bee you!
                </h1>
                <p className={clsx("font-poppins font-normal leading-[21px] text-blue-gray-900 text-[14px] mt-3")}>
                    Encuentra tu espacio en Ciudad de México
                </p>
                <Register token={token} setToken={setToken} />
            </main>
        </>
    );
}
