"use client";

//*redux */
import {
  getCircularMenuState,
  toggleCircularMenu,
} from "@/Redux/slices/CircularMenuSlice";
import { useDispatch, useSelector } from "react-redux";

const CircularMenu = () => {
  const { isVisible } = useSelector(getCircularMenuState);
  const dispatch = useDispatch();

  return (
    <div
      style={{ zIndex: 10 }}
      className={`flex  items-center justify-center fixed transition-all duration-300   backdrop-blur-lg ${
        isVisible ? "h-screen inset-0 w-screen " : "hidden"
      }`}
    >
      {/* outer circle */}
      <div
        style={{
          background:
            " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
          animation: "grow 300ms linear",
        }}
        className="border-[1px] border-white relative overflow-clip flex items-center justify-center w-[744px] h-[744px] rounded-full bg-white"
      >
        {/* inner circle */}
        <div className="z-10 w-[334px] h-[334px] rounded-full bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]"></div>

        {/* menu items */}

        <div
          //   style={{ clipPath: "polygon(0 0, 100% 1%, 62% 100%, 37% 100%)" }}
          className=" absolute top-[50px]  flex flex-col items-center gap-[6px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M55.9987 8C57.4715 8 58.6654 9.19392 58.6654 10.6667V48C58.6654 49.4728 57.4715 50.6667 55.9987 50.6667H17.212L5.33203 60V10.6667C5.33203 9.19392 6.52595 8 7.9987 8H55.9987ZM53.332 13.3333H10.6654V49.0267L15.3676 45.3333H53.332V13.3333ZM34.6654 18.6667V40H29.332V18.6667H34.6654ZM45.332 24V40H39.9987V24H45.332ZM23.9987 29.3333V40H18.6654V29.3333H23.9987Z"
              fill="#242128"
            />
          </svg>
          <p className="font-bold text-[18px]">Poll</p>
        </div>

        <div
          //   style={{ clipPath: "polygon(0 51%, 100% 2%, 100% 100%, 0 100%)" }}
          className="  absolute top-[152px] right-[96px]  flex flex-col items-center gap-[6px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M57.412 19.0667C57.0067 18.8326 56.5468 18.7094 56.0787 18.7094C55.6106 18.7094 55.1508 18.8326 54.7454 19.0667L45.332 23.7067C45.2561 21.6362 44.3798 19.6759 42.8877 18.2385C41.3955 16.8011 39.4039 15.9986 37.332 16H13.332C11.2103 16 9.17547 16.8429 7.67518 18.3431C6.17489 19.8434 5.33203 21.8783 5.33203 24V40C5.33203 42.1217 6.17489 44.1566 7.67518 45.6569C9.17547 47.1571 11.2103 48 13.332 48H37.332C39.4039 48.0014 41.3955 47.1989 42.8877 45.7615C44.3798 44.3241 45.2561 42.3638 45.332 40.2933L54.8254 45.04C55.1888 45.2263 55.5903 45.3267 55.9987 45.3333C56.498 45.3349 56.9877 45.1963 57.412 44.9333C57.7963 44.6931 58.1131 44.359 58.3324 43.9624C58.5517 43.5658 58.6663 43.1199 58.6654 42.6667V21.3333C58.6663 20.8802 58.5517 20.4342 58.3324 20.0376C58.1131 19.641 57.7963 19.3069 57.412 19.0667ZM39.9987 40C39.9987 40.7072 39.7177 41.3855 39.2176 41.8856C38.7176 42.3857 38.0393 42.6667 37.332 42.6667H13.332C12.6248 42.6667 11.9465 42.3857 11.4464 41.8856C10.9463 41.3855 10.6654 40.7072 10.6654 40V24C10.6654 23.2928 10.9463 22.6145 11.4464 22.1144C11.9465 21.6143 12.6248 21.3333 13.332 21.3333H37.332C38.0393 21.3333 38.7176 21.6143 39.2176 22.1144C39.7177 22.6145 39.9987 23.2928 39.9987 24V40ZM53.332 38.3467L45.332 34.3467V29.6533L53.332 25.6533V38.3467Z"
              fill="black"
            />
          </svg>
          <p className="font-bold text-[18px]">Video content</p>
        </div>

        <div
          //   style={{ clipPath: "polygon(0 51%, 100% 2%, 100% 100%, 0 100%)" }}
          className=" absolute top-[395px] right-[80px] flex flex-col items-center gap-[6px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M8.00131 55.9998C6.53464 55.9998 5.27864 55.4772 4.23331 54.4318C3.18797 53.3865 2.6662 52.1314 2.66797 50.6665V18.6665C2.66797 17.1998 3.19064 15.9438 4.23597 14.8985C5.28131 13.8532 6.53642 13.3314 8.00131 13.3332H16.4013L21.3346 7.99984H37.3346V13.3332H23.668L18.8013 18.6665H8.00131V50.6665H50.668V26.6665H56.0013V50.6665C56.0013 52.1332 55.4786 53.3892 54.4333 54.4345C53.388 55.4798 52.1329 56.0016 50.668 55.9998H8.00131ZM50.668 18.6665V13.3332H45.3346V7.99984H50.668V2.6665H56.0013V7.99984H61.3346V13.3332H56.0013V18.6665H50.668ZM29.3346 46.6665C32.668 46.6665 35.5018 45.4994 37.836 43.1652C40.1702 40.8309 41.3364 37.9981 41.3346 34.6665C41.3346 31.3332 40.1675 28.4994 37.8333 26.1652C35.4991 23.8309 32.6662 22.6647 29.3346 22.6665C26.0013 22.6665 23.1675 23.8336 20.8333 26.1678C18.4991 28.5021 17.3329 31.3349 17.3346 34.6665C17.3346 37.9998 18.5018 40.8336 20.836 43.1678C23.1702 45.5021 26.0031 46.6683 29.3346 46.6665ZM29.3346 41.3332C27.468 41.3332 25.8902 40.6887 24.6013 39.3998C23.3124 38.1109 22.668 36.5332 22.668 34.6665C22.668 32.7998 23.3124 31.2221 24.6013 29.9332C25.8902 28.6443 27.468 27.9998 29.3346 27.9998C31.2013 27.9998 32.7791 28.6443 34.068 29.9332C35.3569 31.2221 36.0013 32.7998 36.0013 34.6665C36.0013 36.5332 35.3569 38.1109 34.068 39.3998C32.7791 40.6887 31.2013 41.3332 29.3346 41.3332Z"
              fill="#242128"
            />
          </svg>
          <p className="font-bold text-[18px]">Post</p>
        </div>
        
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            bottom: -1000px;
          }

          to {
            bottom: 0px;
          }
        }
      `}</style>

      {/* close btn */}
      <div
        onClick={() => {
          dispatch(toggleCircularMenu());
        }}
        style={{
          background:
            " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
        }}
        className="cursor-pointer flex items-center justify-center absolute top-[15vh] right-[30vw] w-[87px] h-[87px] rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularMenu;
