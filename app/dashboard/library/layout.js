"use client";

/**Internal imports */

/**Custom components */
import LibraryAside from "./LibraryAside";
import Header from "./Header";

const layout = ({ children }) => {
  return (
    <main className="flex items-center justify-center ">
      <div
        style={{
          background:
            "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
        }}
        className="flex mt-[22px] w-full min-h-[68vh] 2xl:min-h-[70vh] overflow-hidden rounded-[20px]"
      >
        <LibraryAside />

        <section className="m-[0_32px_32px_32px] 2xl:m-[0_46px_46px_46px]  w-full ">
          <Header />
          {children}
        </section>
      </div>
    </main>
  );
};

export default layout;
