"use client";

/*BuiltIn Imports */
import { useState } from "react";

/*External Imports */
import { nanoid } from "nanoid";
import classNames from "classnames";

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => (
  <div
    onClick={toggleAccordion}
    className={classNames(
      " text-[#242128] transition-all duration-500 ease-in cursor-pointer"
    )}
  >
    <div className="flex items-center justify-between py-6 2xl:py-[35px] border-b border-b-[#7F7789]">
      <h3 className="text-sm 2xl:text-[1rem]  font-semibold">{title}</h3>
      <svg
        style={{ transform: isOpen ? "rotate(180deg)" : "" }}
        className="w-4 h-4 2xl:w-6 2xl:h-6 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    {isOpen && (
      <div className="pt-[22px] rounded-md">
        <p className="leading-tight text-[#7F7789] text-[12px] 2xl:text-[14px]">
          {content}
        </p>
      </div>
    )}
  </div>
);

const Accordion = ({ items, defaultFirstOpen }) => {
  const initialState = items?.map((item, i) => ({
    ...item,
    isOpen: i === 0 && defaultFirstOpen ? defaultFirstOpen : false,
  }));

  // console.log({ initialState });
  const [accordionItems, setAccordionItems] = useState(initialState);

  const toggleAccordion = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  return (
    <>
      {accordionItems?.map((item, index) => (
        <AccordionItem
          key={nanoid(4)}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </>
  );
};

export default Accordion;
