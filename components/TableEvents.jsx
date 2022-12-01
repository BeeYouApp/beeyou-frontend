import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function PlacesPage() {
  return (
    <>
      <div className={clsx("overflow-y-auto")}>
        <table className={clsx("min-w-full text-center")}>
          <thead className={clsx("border-b bg-gray-50")}>
            <tr>
              <th
                scope="col"
                className={clsx(
                  "text-[14px] font-medium text-blue-gray-600 pl-6 pr-32 py-4"
                )}
              >
                ORGANIZADOR
              </th>
              <th
                scope="col"
                className={clsx(
                  "text-[14px] font-medium text-blue-gray-600 px-6 py-4"
                )}
              >
                EVENTO
              </th>
              <th
                scope="col"
                className={clsx(
                  "text-[14px] font-medium text-blue-gray-600 px-6 py-4"
                )}
              >
                FECHA
              </th>
              <th
                scope="col"
                className={clsx(
                  "hidden lg:block text-[14px] font-medium text-blue-gray-600 px-6 py-4"
                )}
              >
                HORA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={clsx("bg-white border-b")}>
              <td
                className={clsx(
                  "flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                <Image
                  className={clsx("w-16 h-12 mr-3")}
                  src={images.beeYouEvent}
                  alt="Near Event Icon"
                />
                BEE YOU APP
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                Orgullo 2023
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                16/12/2022
              </td>
              <td
                className={clsx(
                  "hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                07:00 pm
              </td>
            </tr>
            <tr className={clsx("bg-white border-b")}>
              <td
                className={clsx(
                  "flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                <Image
                  className={clsx("w-16 h-12 mr-3")}
                  src={images.beeYouEvent}
                  alt="Near Event Icon"
                />
                BEE YOU APP
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                Orgullo 2023
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                16/12/2022
              </td>
              <td
                className={clsx(
                  "hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                07:00 pm
              </td>
            </tr>
            <tr className={clsx("bg-white border-b")}>
              <td
                className={clsx(
                  "flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                <Image
                  className={clsx("w-16 h-12 mr-3")}
                  src={images.beeYouEvent}
                  alt="Near Event Icon"
                />
                BEE YOU APP
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                Orgullo 2023
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                16/12/2022
              </td>
              <td
                className={clsx(
                  "hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                07:00 pm
              </td>
            </tr>
            <tr className={clsx("bg-white border-b")}>
              <td className="flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                <Image
                  className={clsx("w-16 h-12 mr-3")}
                  src={images.beeYouEvent}
                  alt="Near Event Icon"
                />
                BEE YOU APP
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                Orgullo 2023
              </td>
              <td
                className={clsx(
                  "text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                16/12/2022
              </td>
              <td
                className={clsx(
                  "hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap"
                )}
              >
                07:00 pm
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
