import clsx from "clsx";

export default function ButtonModal({children,handlerClick}) {
  return (
    <>
      <button onClick={handlerClick}
        type='button'
        className={clsx(
          "purple-button border-2 bg-purple-900 border-purple-900 text-[#FFFFFF] w-[272px] md:w-[194px]"
        )}
      >
        {children}
      </button>
    </>
  );
}