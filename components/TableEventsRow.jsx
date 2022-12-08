import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";

export default function TableEventsRow (props) {
    return (
        <tr className={clsx("bg-white border-b")}>
        {props.children}
        </tr>
    )
}