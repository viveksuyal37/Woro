/**BuiltIn Imports */
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div
      style={{ background: "0px_4px_20px_0px_rgba(190,_148,_243,_0.20)" }}
      className="bg-white rounded-[10px] w-full h-full overflow-auto p-[68px]"
    >
      {/* top */}
      <div className="flex gap-[35px]">
        <div className="w-[131px] h-[131px] rounded-full">
          <Image
            src="/assets/images/profile.png"
            width="131"
            height="131"
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-[25px] ">
          <div>
            <h1 className="text-[24px] font-bold">Vivek Suyal</h1>
            <p className="text-[18px] text-woro-blue">Admin</p>
          </div>
          <button className="flex bg-woro-blue items-center gap-1 text-white p-[12px_25px] rounded-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
                fill="white"
              />
            </svg>
            Edit profile
          </button>
        </div>
      </div>

      {/* mid */}
      <div className="grid grid-cols-3 gap-[46px] justify-between w-full my-[46px]">
        <div className="min-w-[328px]">
          <label className="block mb-[20px] text-[1rem] font-bold">Name</label>
          <input
            placeholder="vivek"
            type="text"
            className="w-full p-[13px_14px] h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>

        <div className="min-w-[328px]">
          <label className="block mb-[20px] text-[1rem] font-bold">
            Last name
          </label>
          <input
            placeholder="suyal"
            type="text"
            className="w-full p-[13px_14px] h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>

        <div className="min-w-[328px]">
          <label className="block mb-[20px] text-[1rem] font-bold">Email</label>
          <input
            placeholder="example@gmail.com"
            type="text"
            className="w-full p-[13px_14px] h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>

        <div className="min-w-[328px]">
          <label className="block mb-[20px] text-[1rem] font-bold">
            Mobile no
          </label>
          <input
            placeholder="123456789"
            type="text"
            className="w-full p-[13px_14px] h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>
      </div>

      {/* portfolio */}
      <h2 className="text-2xl font-bold">Your Portfolio</h2>
      {/* if empty */}
      <div className="flex flex-col items-center justify-center gap-[22px]">
        <div className="flex items-center  text-[#C1C1C1] font-bold flex-col gap-[6px]">
          <Image
            src="/assets/images/portfolio/empty-folder.png"
            width="138"
            height="138"
            alt="empty"
          />
          <p>This place looks empty ...</p>
        </div>
        <Link
          href="/account/create-portfolio"
          className="flex bg-woro-blue items-center gap-1 text-white p-[12px_25px] rounded-[3px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
              fill="white"
            />
          </svg>
          Create Portfolio
        </Link>
      </div>
    </div>
  );
};

export default page;
