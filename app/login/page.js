import Image from "next/image";

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
            alt="logo"
          />
          <h1 className="text-[56px] mb-[43px] font-bold">
            Welcome to <span className="text-woro-blue">Woro.</span>
          </h1>

          <label className="self-start text-[24px] font-bold" htmlFor="name">
            Enter name
          </label>
          <div className="flex gap-[22px]">
            <input
              type="text"
              className="bg-[rgba(190,_148,_243,_0.20)] rounded-[3px] p-[20px_18px]"
              placeholder="Enter First name"
            ></input>
            <input
              type="text"
              className="bg-[rgba(190,_148,_243,_0.20)] rounded-[3px] p-[20px_18px]"
              placeholder="Enter Last name"
            ></input>
          </div>

          <label className="self-start text-[24px] font-bold" htmlFor="name">
            Enter email
          </label>
          <input
            type="email"
            className="bg-[rgba(190,_148,_243,_0.20)] w-full rounded-[3px] p-[20px_18px]"
            placeholder="Enter email"
          ></input>
          <input
            type="text"
            autoComplete="off"
            className="bg-[rgba(190,_148,_243,_0.20)] w-full rounded-[3px] p-[20px_18px]"
            placeholder="Enter password"
          ></input>

          <button className="text-white font-bold text-[24px] mt-[24px] py-[19.5px] w-full text-center bg-woro-blue">
            Login
          </button>
          <p>
            Not having an account?{" "}
            <span className="text-woro-blue">Sign in</span>
          </p>
        </div>
      </aside>

      <div className="w-1/2 h-full bg-[url('/assets/images/login/login.png')] bg-cover"></div>
    </main>
  );
};

export default page;
