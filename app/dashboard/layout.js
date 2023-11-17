/*custom components*/
import CircularMenu from "@/components/CircularMenu/CircularMenu";
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
      className=" overflow-hidden  w-screen h-screen py-[2.58vh] 2xl:py-[2.58427vh] 4xl:py-[4vh] px-[7.1vw]"
    >
      <CircularMenu />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
