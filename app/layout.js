/*Custom components */
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
      <body
        style={{
          background:
            "linear-gradient(136deg, #FFF 0.17%, rgba(164, 209, 223, 0.67) 33.05%, rgba(188, 95, 232, 0.34) 66.28%, rgba(255, 255, 255, 0.00) 100%), #FFF" ,
            backgroundRepeat:'no-repeat'
            
        }}
        className={`${inter.className} w-screen h-screen pt-[40px] 2xl:pt-[51px] pb-[35px] 2xl:pb-[40px] px-[6.25vw]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
