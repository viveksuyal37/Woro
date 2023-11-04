import Image from "next/image";

const page = () => {
  return (
    <section className="w-full h-full bg-white rounded-[10px] p-[46px]">
      <h3 className="text-woro-blue text-[24px] font-bold">Account ID</h3>

      <div className="flex text-center  mx-auto max-w-[773px] h-full flex-col gap-[22px] items-center justify-center">
        <Image
          src="/assets/images/dashboard/accountId.png"
          width="218"
          height="184"
          alt="accountID"
        />
        <h3 className="text-[24px] font-bold">This is your account ID</h3>

        <div className="bg-[#F2F2F2] p-4 rounded-[50px] flex gap-[5px] text-[18px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
              fill="#242128"
            />
          </svg>
          <p>WayneTech123#1233</p>
        </div>

        <p className="text-[14px]  text-[#7F7789]">
          We will utilize the provided account ID as the designated means of
          communication via e-mail. This unique account identifier shall serve
          as the primary point of contact for all correspondence and
          documentation exchanges. It is imperative to maintain the integrity
          and confidentiality of this account ID to ensure secure and efficient
          communication between parties.
        </p>
      </div>
    </section>
  );
};

export default page;
