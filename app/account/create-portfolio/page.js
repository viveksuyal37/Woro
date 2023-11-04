import UgcCard from "@/app/dashboard/UGC/UgcCard";
import products from "@/constants/productsToAdvertise";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-white relative flex flex-col gap-[46px] rounded-xl p-[44px_122px_40px_92px] w-full h-full overflow-auto">
      <h2 className="text-2xl font-bold ">Create your portfolio</h2>
      {/* back btn */}
      <Link
        title="Back"
        className="absolute top-[44px] left-[46px]"
        href="/account"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.48012 13.0832L13.2911 18.8942L11.7591 20.4263L3.33268 11.9999L11.7591 3.57359L13.2911 5.10564L7.48012 10.9165L20.666 10.9165L20.666 13.0832L7.48012 13.0832Z"
            fill="#242128"
          />
        </svg>
      </Link>

      {/* linked socials */}
      <div className="font-bold space-y-[22px]">
        <h5>Linked Socials</h5>
        <div className="flex flex-wrap child:text-[14px] font-bold gap-[22px] child:p-[17px_20px] child:rounded-[20px] child:shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] child:min-w-[175px] child:min-h-[94px]">
          {/* linked accounts to be mapped from an state */}
          <div className=" flex items-center gap-[10px]   ">
            <Image
              src="/assets/images/dashboard/linkedIn.png"
              width="36"
              height="36"
              alt="linkedIn"
            />
            <p>Linked</p>
          </div>
          {/* add socials */}
          <div className="flex border-dashed border-black border text-[#7F7789] flex-col items-center gap-2 text-[14px]">
            <div className="bg-woro-blue rounded-full flex items-center justify-center w-[40px] h-[40px]">
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
            </div>
            <p>Add socials</p>
          </div>
        </div>
      </div>

      {/* your posts */}
      <div className="space-y-[46px] font-bold">
        <h5>Your Posts</h5>
        {/* if has posts */}
        <div className="flex flex-wrap gap-[22px]">
          {["", "", ""].map(() => {
            return <UgcCard />;
          })}
        </div>
        {/* if empty */}
        <Link
          href="/account/create-portfolio/add-posts"
          className="w-full h-[78px] flex  border border-dashed border-black items-center justify-center rounded-lg text-[#7F7789] gap-2"
        >
          <div className="bg-woro-blue  rounded-full flex items-center justify-center w-[40px] h-[40px] ">
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
          </div>
          <p>Add posts</p>
        </Link>
      </div>

      {/* preferred budget range */}
      <div className="space-y-[24px] font-bold">
        <h5> Set preferred budget range</h5>
        <div className="flex gap-[46px] child:space-x-[22px]">
          <div>
            <input type="checkbox"></input>
            <label>₹15k -₹30k</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>₹40k - ₹60k</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>₹70k - ₹90k</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>₹100k - ₹120k</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>+₹130k</label>
          </div>
        </div>
        {/* custom */}
        <h5 className="font-normal">Custom</h5>
        <div className="grid grid-cols-2 gap-4 child:outline-none child:px-3 child:h-[46px] child:w-min-[680px] child:bg-[rgba(190,_148,_243,_0.20)]">
          <input placeholder="From" type="text"></input>
          <input placeholder="To" type="text"></input>
        </div>
      </div>

      {/* products to advertise */}
      <div className="space-y-[24px] font-bold">
        <h5>Preferred product type to advertise</h5>
        <div className="grid grid-cols-4 gap-[22px]">
          {products?.map((product) => {
            return (
              <div className="flex gap-[22px]">
                <input type="checkbox"></input>
                <p className="font-normal">{product}</p>
              </div>
            );
          })}
        </div>
        {/* custom */}
        <h5 className="font-normal">Custom</h5>
        <div className=" child:outline-none child:px-3 child:w-full child:h-[46px]  child:bg-[rgba(190,_148,_243,_0.20)]">
          <input placeholder="Type product" type="text"></input>
        </div>
      </div>

      {/* confirm */}
      <button className="flex bg-woro-blue items-center justify-center gap-1 text-white p-[12px_25px] rounded-[3px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
            fill="white"
          />
        </svg>
        Confirm & create portfolio
      </button>
    </section>
  );
};

export default page;
