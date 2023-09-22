/*Custom components */
import LeftFooter from "./LeftFooter";
import MidFooter from "./MidFooter";

const Footer = () => {
  return (
    <footer className="fixed w-full max-w-[1670px] bottom-[46px] flex items-center justify-between mt-[22px] gap-[20px]">
      {/* left */}
      <LeftFooter />

      {/* mid */}
      <MidFooter />

      {/* right */}
      <div className="min-w-[340px]"></div>
    </footer>
  );
};

export default Footer;
