/*fonts*/
import { Inter } from "next/font/google";

/*styles*/
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Woro",
  description: "Manages your accounts at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
