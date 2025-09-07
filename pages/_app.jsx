import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // Cursor spotlight követés
  useEffect(() => {
    function onMove(e) {
      const r = document.documentElement;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      r.style.setProperty("--mx", x + "%");
      r.style.setProperty("--my", y + "%");
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="page-spotlight" />
      <Component {...pageProps} />
    </>
  );
}
