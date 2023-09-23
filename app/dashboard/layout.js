"use client";

/*redux*/
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

/*custom components*/
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const layout = ({ children }) => {
  return (
    <main
      style={{
        background:
          "linear-gradient(136deg, #FFF 0.17%, rgba(164, 209, 223, 0.67) 33.05%, rgba(188, 95, 232, 0.34) 66.28%, rgba(255, 255, 255, 0.00) 100%), #FFF",
        backgroundRepeat: "no-repeat",
      }}
      className={` overflow-hidden  w-screen h-screen pt-[40px] 2xl:pt-[51px] pb-[35px] 2xl:pb-[40px] px-[6.25vw]`}
    >
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </main>
  );
};

export default layout;
