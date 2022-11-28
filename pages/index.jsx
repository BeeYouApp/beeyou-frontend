import clsx from "clsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardBusiness from "../components/CardBusiness";

export default function Home() {
  return (
    <>
      <Navbar />
      <CardBusiness/>
      <main
        className={clsx(
          "bg-gradient-to-r from-indigo-500",
          "bg-[url('https://img.freepik.com/fotos-premium/bandera-lgbt-arcoiris-tela-gay-bandera-lesbiana-como-fondo-o-textura_117930-628.jpg?w=2000')]",
          "flex content-center justify-center",
          "h-screen",
          "py-24",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "bg-white/20",
            "border border-white/30 rounded-2xl",
            "backdrop-blur-sm",
            "flex flex-col justify-center items-center",
            "py-8 px-5",
            "shadow-xl shadow-black/10",
            "w-1/4",
            "h-1/4",
            "items-center",
            "hover:border-white shadow-2xl hover:shadow-white/60"
          )}
        >
          <h1
            className={clsx(
              "text-3xl text-center",
              "font-bold",
              "text-indigo-900"
            )}
          >
            Pagina en construccion
          </h1>
          <p className="mt-5 text-center">Bienvenidos LGTBIQ+APP</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
