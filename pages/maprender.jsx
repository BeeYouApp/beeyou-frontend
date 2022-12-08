import React from "react"
import Map from "../components/Map"
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() =>
  import('../components/SearchMap'), {
    ssr: false,
  }
)

export default function mapRender () {
    return(
        <>
        <section className="p-10">
            <Map></Map>
        </section>
        <section className="inline-block mt-10 p-10">
            <DynamicComponent/>
        </section>

        
        </>
    )
}