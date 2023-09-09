/*Custom components */
import LeftFooter from "./LeftFooter";
import MidFooter from "./MidFooter";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-[22px] gap-[20px]">
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
