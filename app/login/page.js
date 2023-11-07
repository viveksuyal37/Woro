import Image from "next/image";
import LoginImg from "@/public/assets/images/login/login.png";

const page = () => {
  return (
    <main className="flex w-screen h-screen">
      {/* left */}
      <aside className="flex items-center justify-center w-1/2">
        <div className="max-w-[635px] flex flex-col items-center gap-[22px]">
          <Image
            src="/assets/images/logo.png"
            width="175"
            height="42"
            className="w-[150px] 2xl:w-[175px]"
            alt="logo"
          />
          <h1 className="text-5xl 2xl:text-[56px] mb-[43px] font-bold">
            Welcome to <span className="text-woro-blue">Woro.</span>
          </h1>

          <input
            type="email"
            className="bg-[rgba(190,_148,_243,_0.20)] w-full rounded-[3px] p-[12px_11px] 2xl:p-[20px_18px]"
            placeholder="Enter email"
          ></input>
          <input
            type="text"
            autoComplete="off"
            className="bg-[rgba(190,_148,_243,_0.20)] w-full rounded-[3px] p-[12px_11px] 2xl:p-[20px_18px]"
            placeholder="Enter password"
          ></input>

          <button className="text-white font-bold text-xl 2xl:text-2xl mt-6 py-3 2xl:py-[19.5px] w-full text-center bg-woro-blue">
            Login
          </button>
          <p>
            Didn't remember?
            <span className="ml-1 underline text-woro-blue">
              {" "}
              forgot password
            </span>
          </p>
        </div>
      </aside>

      {/* right */}
      <div className="w-1/2 h-full ">
        <Image
          src={LoginImg}
          width="960"
          height="919"
          quality={100}
          className="w-full h-full"
          alt="login"
          placeholder="blur"
        ></Image>
      </div>
    </main>
  );
};

export default page;
