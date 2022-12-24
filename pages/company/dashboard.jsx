import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import CardUpgrade from "../../components/CardUpgrade";
import ContentEvents from "../../components/ContentEvents";
import ContentOff from "../../components/ContentOff";
import SidebarBiz from "../../components/SideBarBiz";


export default function Dashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => { setHasMounted(true) }, []);
  if (!hasMounted) {
    return null;
  }
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      return (
        <>
          <main className="w-screen inline-flex ">
            <section className="w-1/4">
              <SidebarBiz></SidebarBiz>
            </section>
            <section className="mt-6">
              <article>
                <CardUpgrade></CardUpgrade>
              </article>
              <article className="inline-flex">
                <ContentEvents></ContentEvents>
                <ContentOff></ContentOff>
              </article>
            </section>
          </main>
        </>
      );
    } else {
      router.push(`/login`);
    }
  }
}