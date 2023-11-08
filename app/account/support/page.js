import Accordion from "@/components/Common/Accordion";

const page = () => {
  const faqs = [
    {
      title: "Problem name",
      content:
        "Lorem ipsum dolor sit amet consectetur. Rutrum amet ac dui est vulputate a lorem nunc erat. Hac ligula vel ut purus nec enim quis. Non adipiscing in amet purus sodales et suspendisse purus. Tristique venenatis eros consequat tempor ornare tincidunt. Faucibus suspendisse ut risus sodales. Velit quis aliquet aenean morbi integer. Hac tincidunt orci lectus placerat ornare massa integer.",
    },
    {
      title: "Problem name",
      content:
        "Lorem ipsum dolor sit amet consectetur. Rutrum amet ac dui est vulputate a lorem nunc erat. Hac ligula vel ut purus nec enim quis. Non adipiscing in amet purus sodales et suspendisse purus. Tristique venenatis eros consequat tempor ornare tincidunt. Faucibus suspendisse ut risus sodales. Velit quis aliquet aenean morbi integer. Hac tincidunt orci lectus placerat ornare massa integer.",
    },
    {
      title: "Problem name",
      content:
        "Lorem ipsum dolor sit amet consectetur. Rutrum amet ac dui est vulputate a lorem nunc erat. Hac ligula vel ut purus nec enim quis. Non adipiscing in amet purus sodales et suspendisse purus. Tristique venenatis eros consequat tempor ornare tincidunt. Faucibus suspendisse ut risus sodales. Velit quis aliquet aenean morbi integer. Hac tincidunt orci lectus placerat ornare massa integer.",
    },
  ];

  return (
    <section className="w-full h-full bg-white rounded-[10px] p-8 2xl:p-[46px]">
      {/* searchbar */}
      <div className="flex text-[#7F7789] text-sm 2xl:text-[1rem] p-[1rem_24px] 2xl:p-[1rem_40px] items-center justify-between bg-[rgba(190,_148,_243,_0.20)] rounded-[80px] w-full h-10 2xl:h-[50px]">
        <input
          className="w-1/2 bg-transparent outline-none"
          type="text"
          placeholder="Type something"
        ></input>
        <div className="border-l border-l-[#7F7789] pl-[38px]">?</div>
      </div>
      {/* faqs */}
      <div className="mt-6 2xl:mt-[62px] mx-6 2xl:mx-[40px]">
        <Accordion items={faqs} />
      </div>
    </section>
  );
};

export default page;
