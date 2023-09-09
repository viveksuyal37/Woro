/*Custom components */
import AddSocials from "./AddSocials";
import SocialMediaCard from "./SocialMediaCard";

const AccountsContainer = () => {
  return (
    <div className="flex gap-[21px] ">
      {["", "", "", "", ""].map((i, indx) => {
        return <SocialMediaCard key={indx} />;
      })}

      <AddSocials />
    </div>
  );
};

export default AccountsContainer;
