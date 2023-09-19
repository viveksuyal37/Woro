/*custom components */
import UGC from "../BottomRow/UGC";
import Analytics from "./Analytics";
import PopularHashtags from "./PopularHashtags";

const RowTwoLeft = ({ expandedCard }) => {
  return (
    <div className="flex  gap-[22px]">
      <Analytics expandedCard={expandedCard} cardId="analytics" />

      <div className="flex flex-col h-full gap-[22px]">
        <PopularHashtags expandedCard={expandedCard} cardId="popularHashtags" />
        <UGC expandedCard={expandedCard} />
      </div>
    </div>
  );
};

export default RowTwoLeft;
