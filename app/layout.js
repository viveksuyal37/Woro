"use client";

/*fonts*/
import { Inter } from "next/font/google";

/*redux*/
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

/*styles*/
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${inter.className}`}>{children}</body>
      </Provider>
    </html>
  );
}
