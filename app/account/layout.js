"use client";

/**Custom components */
import Header from "@/components/Header/Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const path = usePathname();

  const pathsWithoutAside = [
    "/account/create-portfolio",
    "/account/create-portfolio/add-posts",
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(136deg, #FFF 0.17%, rgba(164, 209, 223, 0.67) 33.05%, rgba(188, 95, 232, 0.34) 66.28%, rgba(255, 255, 255, 0.00) 100%), #FFF",
        backgroundRepeat: "no-repeat",
      }}
      className=" w-screen h-screen pt-[40px] 2xl:pt-[51px] pb-[35px] 2xl:pb-[40px] px-[6.25vw]"
    >
      <Header />
      <main className="flex items-center justify-center ">
        <div
          style={{
            background:
              "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
          }}
          className="flex mt-[22px] w-full h-[75vh] rounded-[20px]"
        >
          {pathsWithoutAside.includes(path) ? null : <Aside />}

          <section className="m-[46px] w-full ">{children}</section>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default layout;
