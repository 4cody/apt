import "@/styles/globals.css";
import Context from "../context/appContext";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <main className="flex justify-center bg-gray-100 min-h-screen">
        <Component {...pageProps} />
      </main>
    </Context>
  );
}
