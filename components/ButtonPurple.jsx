import clsx from "clsx";

export default function ButtonPurple(props) {
  return (
    <>
      <button
        className={clsx(
          "purple-button border-2 bg-purple-900 border-purple-900 text-[#FFFFFF] w-[272px] md:w-[194px]"
        )}
      >
        {props.children}
      </button>
    </>
  );
}
