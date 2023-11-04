"use client";

/*fonts*/
import fonts from "@/font/fonts";

/*redux*/
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

/*styles*/
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${fonts.urbanist.className}`}>{children}</body>
      </Provider>
    </html>
  );
}
