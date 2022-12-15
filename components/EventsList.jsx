import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import TableEventsRow from "../components/TableEventsRow";
import ButtonPurple from "./ButtonPurple";

export default function TableEvents() {
  return (
    <div className={clsx("flex justify-center sm:-mx-8 lg:-mx-8")}>
      <div className={clsx("bg-yellow-100 py-10 md:mb-[75px] inline-block justify-center max-h-[600px] max-w-[328px] md:min-w-[680px] lg:min-w-[1050px] 2xl:min-w-[2166px] 2xl:max-h-[700px] sm:px-6 lg:px-8")}>
        <div className={clsx("bg-red-100")}>
          <ButtonPurple
          label="+ Nuevo evento"
          style="rounded-none md:w-28 justify-items-end m-10"
          ></ButtonPurple>
          <table className={clsx("min-w-full text-center")}>
            <thead className={clsx("border-b bg-gray-50")}>
              <tr>
                <th scope="col" className={clsx("min-w-full text-start text-[14px] font-medium text-blue-gray-600 pl-6 pr-32 py-4")}>
                  EVENTO
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  TIPO/TEMÁTICA
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  FECHA
                </th>
                <th scope="col" className={clsx("hidden lg:block text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  HORARIO
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  COSTO
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  AFORO
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  MÁS
                </th>
              </tr>
            </thead>
            <tbody>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Un evento para unir a la comunidad
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  17/01/2023
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  13:00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  U$125.00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  200
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  ...
                </td>
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Un evento para unir a la comunidad
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  17/01/2023
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  13:00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  U$125.00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  200
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  ...
                </td>
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Un evento para unir a la comunidad
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  17/01/2023
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  13:00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  U$125.00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  200
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  ...
                </td>
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Un evento para unir a la comunidad
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  17/01/2023
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  13:00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  U$125.00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  200
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  ...
                </td>
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  Orgullo 2023
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  Un evento para unir a la comunidad
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  17/01/2023
                </td>
                <td className={clsx("hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  13:00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  U$125.00
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  200
                </td>
                <td className={clsx("text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  ...
                </td>
              </TableEventsRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}