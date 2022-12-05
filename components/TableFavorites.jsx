import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import TableFavoritesRow from "../components/TableFavoritesRow";

export default function TableEvents() {
  return (
    <div className={clsx("flex justify-center overflow-x-auto sm:-mx-6 lg:-mx-8")}>
      <div className={clsx("py-4 md:mb-[75px] inline-block justify-center min-w-[1050px] sm:px-6 lg:px-8")}>
        <div className={clsx("overflow-y-auto")}>
          <table className={clsx("min-w-full text-center")}>
            <thead className={clsx("border-b bg-gray-50")}>
              <tr>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 pl-6 pr-32 py-4")}>
                  PROMOCIÓN
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  DESCRIPCIÓN
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  INICIA
                </th>
                <th scope="col" className={clsx("hidden lg:block text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  FINALIZA
                </th>
              </tr>
            </thead>
            <tbody>
              <TableFavoritesRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  10% de descuento en todas las bebidas
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  16/12/2022
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  07:00 pm
                </td>
              </TableFavoritesRow>
              <TableFavoritesRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  10% de descuento en todas las bebidas
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  16/12/2022
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  07:00 pm
                </td>
              </TableFavoritesRow>
              <TableFavoritesRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  10% de descuento en todas las bebidas
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  16/12/2022
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  07:00 pm
                </td>
              </TableFavoritesRow>
              <TableFavoritesRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  10% de descuento en todas las bebidas
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  16/12/2022
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  07:00 pm
                </td>
              </TableFavoritesRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}