<<<<<<< HEAD
import clsx from "clsx"

export default function Button({ label, style, onClick, image, isSubmit=false }) {
=======
import clsx from "clsx";
>>>>>>> develop

export default function Button({ label, style, onClick, isSubmit = false }) {
  return (
    <>
<<<<<<< HEAD
      {
        !isSubmit &&
        <a className={clsx(
          'py-2 px-4',
          'text-white text-center font-bold',
          'w-40',
          'hover:bg-sky-900',
          'focus:outline-none focus:shadow-outline',
          
          style
        )}
=======
      {!isSubmit && (
        <a
          className={clsx(
            // 'bg-sky-600', // Pending to transform to 'props'
            "py-2 px-4",
            "text-white text-center font-bold font-montserrat",
            "w-40",
            "hover:bg-sky-900",
            "focus:outline-none focus:shadow-outline",
            style
          )}
>>>>>>> develop
          onClick={onClick}
        >
          {image}
          {label}
        </a>
      )}
      {isSubmit && (
        <input
          className={clsx(
            // 'bg-lgtb bg-cover', // pendiente tranformarlo a props
            "py-2 px-4",
            "text-white text-center font-bold font-montserrat",
            "w-[300px] h-[50px]",
            "hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80",
            "focus:outline-none focus:shadow-outline",
            style
          )}
          type="submit"
          value={label}
        />
      )}
    </>
  );
}
