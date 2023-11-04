import Image from "next/image";
import Link from "next/link";

const SignUp = ({ setOnBoardingStep }) => {
  return (
    <section className=" text-center max-w-[842px] 2xl:max-w-[1042px] mt-10 2xl:mt-20 mx-auto flex flex-col gap-[28px] 2xl:gap-[46px] items-center">
      {/* logo */}
      <Image
        src="/assets/images/logo.png"
        width="217"
        height="52"
        className="2xl:w-[217px] w-[160px]"
        alt="woro"
      />
      {/* desc */}
      <div className="space-y-3 2xl:space-y-[22px]">
        <h1 className="text-3xl font-bold 2xl:text-5xl">
          Try free for <span className="text-woro-blue">14days</span> and choose
          the best fit plan.
        </h1>
        <p className="text-lg 2xl:text-2xl text-[#7F7789]">
          For starters, tell us a bit about yourself
        </p>
      </div>

      <form method="post" className="w-full ">
        <div className="grid w-full grid-cols-2 gap-y-4 2xl:gap-y-[22px] gap-x-8">
          <label className="w-full col-span-2 text-xl font-bold text-left 2xl:text-2xl">
            Enter name
          </label>
          <input
            className="bg-[rgba(190,_148,_243,_0.20)] px-[18px] rounded h-[46px] 2xl:h-[68px]"
            type="text"
            placeholder="Enter First name"
          ></input>
          <input
            className="bg-[rgba(190,_148,_243,_0.20)] px-[18px]  rounded h-[46px 2xl:h-[68px]"
            type="text"
            placeholder="Enter Last name"
          ></input>
        </div>

        <div className="flex flex-col my-8 2xl:my-11 gap-4 2xl:gap-[22px]">
          <label className="text-xl font-bold text-left 2xl:text-2xl ">
            Enter email
          </label>
          <input
            className="bg-[rgba(190,_148,_243,_0.20)] px-[18px] h-[46px] 2xl:h-[68px]"
            type="email"
            placeholder="Enter e-mail"
          ></input>
          <input
            className="bg-[rgba(190,_148,_243,_0.20)] px-[18px]  rounded h-[46px] 2xl:h-[68px]"
            type="password"
            autoComplete="off"
            placeholder="Enter password"
          ></input>
        </div>

        <div className="flex items-center justify-between ">
          <div className="space-x-3">
            <input type="checkbox"></input>
            <label className="text-[14px] 2xl:text-[18px]">
              I accept the{" "}
              <span className="underline cursor-pointer text-woro-blue">
                terms and condition
              </span>
            </label>
          </div>
          <button
            onClick={() => {
              setOnBoardingStep(2);
            }}
            type="button"
            className="p-[10px_30px] 2xl:p-[19px_50px] rounded-[4px] text-white font-bold bg-woro-blue"
          >
            Next
          </button>
        </div>
      </form>

      <p className="text-[14px] 2xl:text-[18px] relative -top-4">
        Already have an account?{" "}
        <Link href="/login" className="underline text-woro-blue ">
          Log in
        </Link>
      </p>
    </section>
  );
};

export default SignUp;
