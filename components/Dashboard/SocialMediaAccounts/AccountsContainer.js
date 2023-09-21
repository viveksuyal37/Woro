/*Custom components */
import classNames from "classnames";
import AddSocials from "./AddSocials";
import SocialMediaCard from "./SocialMediaCard";

const AccountsContainer = ({ expandedCard }) => {
  return (
    <div
      className={classNames(
        "flex gap-[21px] max-h-[98.5px]  transition-all opacity-1 duration-300 ease-in-out overflow-hidden",
        {
          " w-0 h-0 opacity-0 hidden": expandedCard,
          "w-full h-full": !expandedCard,
        }
      )}
    >
      {!expandedCard &&
        ["", "", "", "", ""].map((i, indx) => {
          return <SocialMediaCard key={indx} />;
        })}

      <AddSocials />
    </div>
  );
};

export default AccountsContainer;
