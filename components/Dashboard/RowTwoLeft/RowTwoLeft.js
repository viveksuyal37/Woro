/*custom components */
import UGC from "../BottomRow/UGC";
import Analytics from "./Analytics";
import PopularHashtags from "./PopularHashtags";

const RowTwoLeft = ({ expandedCard }) => {
  return (
    <div className="flex  gap-[21px] 2xl:gap-[30px]">
      <Analytics expandedCard={expandedCard} cardId="analytics" />

      <div className="flex flex-col w-full h-full gap-[15.4px] 2xl:gap-[22.1px]">
        <PopularHashtags expandedCard={expandedCard} cardId="popularHashtags" />
        <UGC expandedCard={expandedCard} />
      </div>
    </div>
  );
};

export default RowTwoLeft;
