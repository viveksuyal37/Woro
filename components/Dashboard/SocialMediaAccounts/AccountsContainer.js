/*Custom components */
import classNames from "classnames";
import AddSocials from "./AddSocials";
import SocialMediaCard from "./SocialMediaCard";

const AccountsContainer = ({ expandedCard }) => {
  return (
    <div
      className={classNames(
        "flex gap-[21px] max-h-[61px] 2xl:max-h-[87.5px]  transition-all opacity-1 duration-300 ease-in-out overflow-hidden",
        {
          " w-0 h-0 opacity-0 hidden": expandedCard,
          "w-full h-full": !expandedCard,
        }
      )}
    >
      <div className="gap-[14.7px] 2xl:gap-[21px] overflow-hidden flex max-w-[820px] 2xl:max-w-[1150px] shrink-0">
        {!expandedCard &&
          ["", "", "", "", ""].map((i, indx) => {
            return <SocialMediaCard key={indx} />;
          })}
      </div>
      <AddSocials />
    </div>
  );
};

export default AccountsContainer;
