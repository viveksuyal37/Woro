import DriveCard from "./DriveCard";

const DriveContainer = () => {
  return (
    <div className="flex gap-[15px] items-center justify-center rounded-[20px] border-2 border-[#263238] border-dashed  p-[14px_15px]">

        {["","",""].map((card,indx)=>{
            return <DriveCard key={indx}/>
        })}
    </div>
  );
};

export default DriveContainer;
