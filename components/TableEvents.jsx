import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import TableEventsRow from "../components/TableEventsRow";

export default function TableEvents() {
  return (
    <div className={clsx("overflow-x-auto sm:-mx-6 lg:-mx-8")}>
      <div className={clsx("py-4 md:mb-[75px] inline-block min-w-full sm:px-6 lg:px-8")}>
        <div className={clsx("overflow-y-auto")}>
          <table className={clsx("min-w-full text-center")}>
            <thead className={clsx("border-b bg-gray-50")}>
              <tr>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 pl-6 pr-32 py-4")}>
                  ORGANIZADOR
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  EVENTO
                </th>
                <th scope="col" className={clsx("text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  FECHA
                </th>
                <th scope="col" className={clsx("hidden lg:block text-[14px] font-medium text-blue-gray-600 px-6 py-4")}>
                  HORA
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
                  BEE YOU APP
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
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  BEE YOU APP
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
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  BEE YOU APP
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
              </TableEventsRow>
              <TableEventsRow>
                <td className={clsx("flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap")}>
                  <Image
                    className={clsx("w-16 h-12 mr-3")}
                    src={images.beeYouEvent}
                    alt="Near Event Icon"
                  />
                  BEE YOU APP
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
              </TableEventsRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}