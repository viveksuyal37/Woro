import Image from "next/image";

const page = () => {
  return (
    <main className="w-screen h-screen pt-[40px] 2xl:pt-[51px] pb-[35px] 2xl:pb-[40px] px-[6.25vw]">
      <section className="w-full h-full flex items-center justify-center gap-[46px] flex-col">
        <Image src="/assets/images/logo.png" width="217" height="52"></Image>

        <div className="flex flex-col gap-[22px] items-center">
          <h1 className="text-[48px] font-bold">
            How do you plan to use woro?
          </h1>
          <h5 className="text-[#7F7789] text-[24px]">
            For starters, tell us a bit about yourself
          </h5>
        </div>
        {/* cards */}
        <div className="flex w-full gap-[46px] justify-center">
          <div className="border flex flex-col gap-[15px] rounded-[10px] max-w-[267px] border-[#7F7789] p-[58px_36px_49px_37px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M7.91699 32.8545C7.91699 26.7333 12.8792 21.7712 19.0003 21.7712C25.1215 21.7712 30.0837 26.7333 30.0837 32.8545H27.3128C27.3128 28.2636 23.5912 24.542 19.0003 24.542C14.4095 24.542 10.6878 28.2636 10.6878 32.8545H7.91699ZM19.0003 20.3857C14.4077 20.3857 10.6878 16.6659 10.6878 12.0732C10.6878 7.48059 14.4077 3.76074 19.0003 3.76074C23.593 3.76074 27.3128 7.48059 27.3128 12.0732C27.3128 16.6659 23.593 20.3857 19.0003 20.3857ZM19.0003 17.6149C22.0621 17.6149 24.542 15.135 24.542 12.0732C24.542 9.01147 22.0621 6.53158 19.0003 6.53158C15.9386 6.53158 13.4587 9.01147 13.4587 12.0732C13.4587 15.135 15.9386 17.6149 19.0003 17.6149Z"
                fill="#242128"
              />
            </svg>
            <h5 className="text-[24px] font-bold">As an individual</h5>
            <p className="text-[#7F7789]">
              Lorem ipsum dolor sit amet consectetur. nec integer quam
            </p>
          </div>

          <div className="border flex flex-col gap-[15px] rounded-[10px] max-w-[267px] border-[#7F7789] p-[58px_36px_49px_37px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M33.2493 4.75C34.1238 4.75 34.8327 5.45889 34.8327 6.33333V28.5C34.8327 29.3745 34.1238 30.0833 33.2493 30.0833H10.2198L3.16602 35.625V6.33333C3.16602 5.45889 3.87491 4.75 4.74935 4.75H33.2493ZM31.666 7.91667H6.33268V29.1096L9.12462 26.9167H31.666V7.91667ZM20.5827 11.0833V23.75H17.416V11.0833H20.5827ZM26.916 14.25V23.75H23.7493V14.25H26.916ZM14.2493 17.4167V23.75H11.0827V17.4167H14.2493Z"
                fill="#242128"
              />
            </svg>
            <h5 className="text-[24px] font-bold">As a company</h5>
            <p className="text-[#7F7789]">
              Lorem ipsum dolor sit amet consectetur. nec integer quam
            </p>
          </div>

          <div className="border flex flex-col gap-[15px] rounded-[10px] max-w-[267px] border-[#7F7789] p-[58px_36px_49px_37px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.8049 4.75C5.10503 4.75 4.43382 5.00022 3.93893 5.44562C3.44404 5.89102 3.16602 6.49511 3.16602 7.125V30.875C3.16602 31.5049 3.44404 32.109 3.93893 32.5544C4.43382 32.9998 5.10503 33.25 5.8049 33.25H10.2031V30.875C10.2031 30.665 10.2957 30.4637 10.4607 30.3152C10.6257 30.1667 10.8494 30.0833 11.0827 30.0833H14.6012C14.8345 30.0833 15.0582 30.1667 15.2232 30.3152C15.3882 30.4637 15.4808 30.665 15.4808 30.875V33.25H21.6382V30.875C21.6382 30.665 21.7309 30.4637 21.8959 30.3152C22.0608 30.1667 22.2846 30.0833 22.5179 30.0833H26.0364C26.2697 30.0833 26.4934 30.1667 26.6584 30.3152C26.8233 30.4637 26.916 30.665 26.916 30.875V33.25H32.1938C32.8937 33.25 33.5649 32.9998 34.0598 32.5544C34.5547 32.109 34.8327 31.5049 34.8327 30.875V7.125C34.8327 6.49511 34.5547 5.89102 34.0598 5.44562C33.5649 5.00022 32.8937 4.75 32.1938 4.75H5.8049ZM27.7868 27.4194C28.268 26.98 28.7544 26.5367 29.2031 25.8756C29.3156 25.7094 29.43 25.5502 29.5408 25.3951C29.9419 24.837 30.2973 24.3422 30.3624 23.8355C30.4468 23.1887 30.4996 19.3095 30.2674 18.7221C30.0343 18.1355 28.6929 17.8062 28.2293 19.1203C28.0006 19.7687 27.9285 20.6023 27.8634 21.3592C27.7956 22.135 27.7358 22.8301 27.5203 23.1578C27.0955 23.8054 25.7276 25.4165 25.7276 25.4165L26.9081 23.4001C26.9081 23.4001 27.0875 23.1214 26.9934 22.5918C26.8984 22.0614 26.1868 21.3204 25.8525 21.9094C25.5183 22.4976 24.9333 23.0288 24.9333 23.0288L22.868 25.2684C22.868 25.2684 22.195 26.0537 22.1766 26.4844C22.1704 26.6285 22.071 26.9483 21.9567 27.3101C21.8291 27.7186 21.684 28.181 21.6382 28.5055V29.2917H26.7163V28.5055C27.0576 28.0836 27.4209 27.7535 27.7868 27.4194ZM10.3587 28.5055C10.0166 28.0836 9.6524 27.7535 9.2856 27.4194C8.8018 26.98 8.31449 26.5367 7.86412 25.8756C7.75152 25.7094 7.63629 25.5502 7.52546 25.3951C7.12347 24.837 6.76722 24.3422 6.70037 23.8355C6.61592 23.1887 6.87893 19.3095 7.11203 18.7221C7.34602 18.1355 8.69185 17.8062 9.15717 19.1203C9.38588 19.7687 9.45889 20.6023 9.52486 21.3592C9.59171 22.135 9.6524 22.8301 9.86791 23.1578C10.2945 23.8054 11.6668 25.4165 11.6668 25.4165L10.4828 23.4001C10.4828 23.4001 10.3025 23.1214 10.3975 22.5918C10.4925 22.0614 11.2067 21.3204 11.5418 21.9094C11.8779 22.4976 12.4646 23.0288 12.4646 23.0288L14.5361 25.2684C14.5361 25.2684 15.2117 26.0537 15.2301 26.4844C15.2433 26.7908 15.3946 27.8936 15.4808 28.5055V29.2917H10.3587V28.5055ZM15.2882 8.70833C12.8578 8.70833 11.0827 11.0723 11.0827 13.6222C11.0827 19.3143 18.9993 22.9583 18.9993 22.9583C18.9993 22.9583 26.916 19.0792 26.916 13.6222C26.916 11.073 25.1409 8.70833 22.7105 8.70833C21.0234 8.70833 19.7725 9.76917 18.9993 11.2733C18.227 9.76917 16.9753 8.70833 15.2882 8.70833Z"
                fill="#242128"
              />
            </svg>
            <h5 className="text-[24px] font-bold">As an influencer</h5>
            <p className="text-[#7F7789]">
              Lorem ipsum dolor sit amet consectetur. nec integer quam
            </p>
          </div>
        </div>

        <div className="bg-woro-blue text-white text-center py-[20px] min-w-[893px]">
          Next{" "}
        </div>
      </section>
    </main>
  );
};

export default page;