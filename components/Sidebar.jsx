import clsx from "clsx";
import Link from "next/link";

export default function Sidebar(){
    return(
        <aside className="w-full">
            <ul>
                <Link href=""><li className="h-10 bg-yellow-200">Home</li></Link>
                <Link href=""></Link><li>General</li>
                <Link href=""><li>Inicio</li></Link>
                <Link href="">Eventos</Link>
                <Link href=""><li>Establecimientos</li></Link>
                <Link href=""><li>Descuetos</li></Link>
                <Link href=""><li>Mis Favoritos</li></Link>
            </ul>
        </aside>
    )
}