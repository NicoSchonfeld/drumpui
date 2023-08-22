import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DRUMP UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const getModeThemePage = localStorage.getItem("theme");

  return (
    <html lang="es" className={getModeThemePage}>
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
