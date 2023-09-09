import UGC from "../BottomRow/UGC";
import Analytics from "./Analytics";
import PopularHashtags from "./PopularHashtags";

const RowTwoLeft = () => {
  return (
    <div className="flex gap-[22px]">
      <Analytics />

      <div className="flex flex-col h-full gap-[22px]">
        <PopularHashtags />
        <UGC/>
      </div>
    </div>
  );
};

export default RowTwoLeft;
