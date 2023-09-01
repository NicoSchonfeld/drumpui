import "./globals.css";
import { Inter } from "next/font/google";
import ProviderTheme from "@/components/ProviderTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DRUMP UI",
  description: "Build your website with Free Tailwind CSS components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ProviderTheme>{children}</ProviderTheme>
      </body>
    </html>
  );
}
