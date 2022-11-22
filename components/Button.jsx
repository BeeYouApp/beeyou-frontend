import clsx from "clsx"

export default function Button({ label, style, onClick, isSubmit=false }) {

  return (
    <>
      {
        !isSubmit &&
        <a className={clsx(
          'bg-sky-600', // pendiente tranformarlo a props
          'py-2 px-4',
          'rounded',
          'text-white text-center font-bold',
          'w-40',
          'hover:bg-sky-900',
          'focus:outline-none focus:shadow-outline',
          style
        )}
          onClick={onClick}
        >
          {label}
        </a>}
      {
        isSubmit && <input className={clsx(
          'bg-sky-600', // pendiente tranformarlo a props
          'py-2 px-4',
          'rounded',
          'text-white text-center font-bold',
          'w-40',
          'hover:bg-sky-900',
          'focus:outline-none focus:shadow-outline',
          style
        )}
        type="submit"
        value={label}
        />
      }
    </>

  )
}