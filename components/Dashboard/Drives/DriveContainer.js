import DriveCard from "./DriveCard";

const DriveContainer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="flex gap-[15px] items-center justify-center rounded-[20px] p-[14px_15px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]"
    >
      {["", "", ""].map((card, indx) => {
        return <DriveCard key={indx} />;
      })}
    </div>
  );
};

export default DriveContainer;
