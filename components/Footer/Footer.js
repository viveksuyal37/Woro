/*Custom components */
import ChatWithUs from "./ChatWithUs";
import LeftFooter from "./LeftFooter";
import MidFooter from "./MidFooter";

const Footer = () => {
  return (
    <footer className="w-[85.8vw] h-[80px] 2xl:h-[114.5px] z-0 absolute bottom-[2.58427vh] flex items-center justify-between mt-[22px] gap-[20px]">
      {/* left */}
      <LeftFooter />

      {/* mid */}
      <MidFooter />

      {/* right */}
      <ChatWithUs />
    </footer>
  );
};

export default Footer;
