/*custom components */
import UGC from "../BottomRow/UGC";
import Analytics from "./Analytics";
import PopularHashtags from "./PopularHashtags";

const RowTwoLeft = ({ expandedCard }) => {
  return (
    <div className="flex  w-full gap-[21px] 2xl:gap-[30px]">
      <Analytics expandedCard={expandedCard} cardId="analytics" />

      {expandedCard !== "analytics" && (
        <div className="flex  w-full flex-col h-full gap-[15.4px] 2xl:gap-[22.1px]">
          <PopularHashtags
            expandedCard={expandedCard}
            cardId="popularHashtags"
          />
          <UGC expandedCard={expandedCard} />
        </div>
      )}
    </div>
  );
};

export default RowTwoLeft;
