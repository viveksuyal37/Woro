import Image from "next/image";

const page = () => {
  return (
    <section className="w-full text-sm 2xl:text-[1rem] h-full bg-white rounded-[10px] p-8 2xl:p-[46px]">
      <h3 className="text-woro-blue text-xl 2xl:text-[24px] font-bold">Verification</h3>

      <div className="flex text-center  mx-auto max-w-[773px] h-full flex-col gap-3 2xl:gap-[22px] items-center justify-center">
        <Image
          src="/assets/images/dashboard/verification.png"
          width="218"
          height="184"
          className="2xl:w-[218px] w-[150px]"
          alt="verification"
        />
        <h3 className="text-xl 2xl:text-[24px] font-bold">
          Verify your e-mail ID{" "}
          <span className="text-woro-blue">WayneTech@gmail.com</span>
        </h3>

        <div className="bg-woro-blue p-[8px_20px] 2xl:p-[14.5px_34px] rounded-[3px] text-white cursor-pointer">
          send verification mail
        </div>

        <p className="text-[11px] leading-tight 2xl:text-[14px]  text-[#7F7789]">
          Lorem ipsum dolor sit amet consectetur. Vestibulum nisl eu mattis
          vestibulum ut ante nulla at vel. Viverra eget commodo mauris justo
          rhoncus quam eu mi. Libero vitae pharetra convallis consequat cursus
          massa dictum feugiat at. In tempor sodales urna viverra suscipit
          ultricies. Mi vulputate ac porttitor consequat tellus amet quisque in.{" "}
        </p>
      </div>
    </section>
  );
};

export default page;
