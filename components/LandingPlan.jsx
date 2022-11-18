import clsx from "clsx"; // Organize CSS code into the archives

export default function LandingPlan() {
  return (
    <>
      <div className={clsx("bg-green-900 w-94 h-94 font-medium text-center")}>
        My component
      </div>
      <h1 className={clsx("text-blue-gray-900", "font-medium", "text-center")}>
        My component
      </h1>
      <h1 className={clsx("text-gradient", "font-medium", "text-center")}>
        My component
      </h1>
      <h1 className={clsx("text-blue-gray-100", "font-medium", "text-center")}>
        My component
      </h1>
      <h1 className={clsx("blue-gray-25", "font-medium", "text-center")}>
        My component
      </h1>
      <h2></h2>
    </>
  );
}
