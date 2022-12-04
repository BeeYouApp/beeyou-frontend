import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function Dropdown(props) {
  return (
    <>
      <div className={clsx("block")}>
        <div>
          <div className={clsx("dropdown relative mb-3")}>
            <button
              className={clsx(
                "w-full dropdown-toggle pl-2 pr-6 py-2.5 font-normal text-blue-gray-600 text-[12px] leading-[15px] bg-blue-gray-50 rounded shadow-md hover:bg-blue-gray-200 hover:shadow-lg focus:bg-blue-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-gray-200 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
              )}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {props.children}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className={clsx("w-2 ml-2.5 lg:ml-12")}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              className={clsx(
                "dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
              )}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  className={clsx(
                    "dropdown-item text-[12px] leading-[15px] py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-gray-600 hover:bg-blue-gray-50"
                  )}
                  href="#"
                >
                  {/* Juárez, 06600 Ciudad de Mé... */}
                </a>
              </li>
              <li>
                <a
                  className={clsx(
                    "dropdown-item text-[12px] leading-[15px] py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-gray-600 hover:bg-blue-gray-50"
                  )}
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className={clsx(
                    "dropdown-item text-[12px] leading-[15px] py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-gray-600 hover:bg-blue-gray-50"
                  )}
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
