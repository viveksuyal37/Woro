'use client';

//*Internal imports */
import Image from 'next/image';
import { useState } from 'react';

//*External imports */
import classNames from 'classnames';

//*Custom components */
import MenuItemPostingUI from './PostingUI/MenuItemPostingUI';

//*redux */
import {
  getCircularMenuState,
  setSelectedItem,
  toggleCircularMenu,
} from '@/Redux/slices/CircularMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import SchedulingUI from './SchedulingUI/SchedulingUI';
import SuccessUI from './SuccessUI/SuccessUI';

const CircularMenu = () => {
  const { isVisible, itemSelected, schedulePosts, success } =
    useSelector(getCircularMenuState);

  return (
    // blurred layer
    <div
      style={{ zIndex: 50 }}
      className={`flex  items-center justify-center fixed transition-all duration-300   backdrop-blur-lg ${
        isVisible ? 'h-screen inset-0 w-screen ' : 'hidden'
      }`}
    >
      {/*  circular Menu */}
      {!itemSelected && <Menu />}

      {/*posting ui based on selected type of post */}
      {itemSelected && !schedulePosts && (
        <MenuItemPostingUI selectedItem={itemSelected} />
      )}

      {/*post scheduling UI after post saving */}

      {schedulePosts && !success && <SchedulingUI />}

      {/*success UI  */}
      {success && <SuccessUI />}
    </div>
  );
};

export default CircularMenu;

const Menu = () => {
  const [innerMenuDataIndex, setInnerMenuDataIndex] = useState(null);
  const dispatch = useDispatch();

  const InnerMenuData = [
    {
      title: 'Poll',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
    },
    {
      title: 'Video content',
      desc: 'Embrace the effectiveness of video content, employing its dynamic visuals and audio to convey messages with depth and impact.',
    },
    {
      title: 'Post',
      desc: "Craft impactful individual posts that deliver your message concisely and powerfully, capturing your audience's attention.",
    },
    {
      title: 'Live/event',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
    },
    {
      title: 'Carousels',
      desc: 'Utilize carousels to compose visually compelling narratives, leveraging multiple images or videos to convey a comprehensive and engaging story.',
    },
    {
      title: 'Reels/Shorts',
      desc: 'Short, engaging video clips designed for quick and captivating storytelling.',
    },
  ];

  return (
    <>
      <ul
        style={{
          background:
            ' linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
        }}
        className='shadow-md menu'
      >
        {/* inner circle */}
        <div
          className={classNames(
            'flex circle justify-center hover:border-woro-blue hover:border-[2px] items-center z-10 w-[233px] 2xl:w-[334px] h-[233px] 2xl:h-[334px] rounded-full bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]',
            { 'border-woro-blue border-[2px]': innerMenuDataIndex !== null },
          )}
        >
          <div className='flex min-h-[150px]  2xl:min-h-[220px] leading-tight flex-col text-[9px] 2xl:text-[14px] p-4 2xl:p-2 max-w-[200px] items-center justify-between'>
            <div className='flex flex-col items-center gap-3 text-center'>
              <h2 className='font-bold text-[12px] 2xl:text-[18px] text-woro-blue'>
                {innerMenuDataIndex !== null
                  ? InnerMenuData[innerMenuDataIndex].title
                  : 'What would you like to make?'}
              </h2>
              <p>
                {innerMenuDataIndex !== null
                  ? InnerMenuData[innerMenuDataIndex].desc
                  : 'From reels to versatile carousels, the choice is yours to make, enabling a tailored and professional social media profile.'}
              </p>
            </div>

            <div className='flex flex-col w-full gap-1 font-bold text-center 2xl:gap-3'>
              <h3>Supported Platforms</h3>
              {/* Supported platforms icons */}
              <div className='flex child:w-[14px]  child:2xl:w-[21px]  justify-center w-full gap-[10px]'>
                <Image
                  width='21'
                  height='21'
                  src='/assets/images/dashboard/fb.png'
                  alt='fb'
                ></Image>
                <Image
                  width='21'
                  height='21'
                  src='/assets/images/dashboard/instagram.png'
                  alt='instagram'
                ></Image>
                <Image
                  width='21'
                  height='21'
                  src='/assets/images/dashboard/twitter.png'
                  alt='twitter'
                ></Image>
                <Image
                  width='21'
                  height='21'
                  src='/assets/images/dashboard/linkedIn.png'
                  alt='linkedIn'
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* outer circle items */}
        <li
          onClick={() => {
            dispatch(setSelectedItem({ selectedItem: 'poll' }));
          }}
          onMouseEnter={() => {
            setInnerMenuDataIndex(0);
          }}
          onMouseLeave={() => {
            setInnerMenuDataIndex(null);
          }}
          className='one group'
        >
          <div>
            <span className='icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 2xl:w-12 2xl:h-12'
                viewBox='0 0 64 64'
                fill='none'
              >
                <path
                  d='M55.9987 8C57.4715 8 58.6654 9.19392 58.6654 10.6667V48C58.6654 49.4728 57.4715 50.6667 55.9987 50.6667H17.212L5.33203 60V10.6667C5.33203 9.19392 6.52595 8 7.9987 8H55.9987ZM53.332 13.3333H10.6654V49.0267L15.3676 45.3333H53.332V13.3333ZM34.6654 18.6667V40H29.332V18.6667H34.6654ZM45.332 24V40H39.9987V24H45.332ZM23.9987 29.3333V40H18.6654V29.3333H23.9987Z'
                  className='fill-black group-hover:fill-white'
                />
              </svg>
              <br />
              <p className='font-bold text-[12px] 2xl:text-[18px]'>Poll</p>
            </span>
          </div>
        </li>
        <li
          onClick={() => {
            dispatch(setSelectedItem({ selectedItem: 'video-content' }));
          }}
          onMouseEnter={() => {
            setInnerMenuDataIndex(1);
          }}
          onMouseLeave={() => {
            setInnerMenuDataIndex(null);
          }}
          className='two group'
        >
          <div>
            <span className='icon' style={{ transform: 'rotate(300deg)' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 2xl:w-12 2xl:h-12'
                viewBox='0 0 64 64'
                fill='none'
              >
                <path
                  d='M57.412 19.0667C57.0067 18.8326 56.5468 18.7094 56.0787 18.7094C55.6106 18.7094 55.1508 18.8326 54.7454 19.0667L45.332 23.7067C45.2561 21.6362 44.3798 19.6759 42.8877 18.2385C41.3955 16.8011 39.4039 15.9986 37.332 16H13.332C11.2103 16 9.17547 16.8429 7.67518 18.3431C6.17489 19.8434 5.33203 21.8783 5.33203 24V40C5.33203 42.1217 6.17489 44.1566 7.67518 45.6569C9.17547 47.1571 11.2103 48 13.332 48H37.332C39.4039 48.0014 41.3955 47.1989 42.8877 45.7615C44.3798 44.3241 45.2561 42.3638 45.332 40.2933L54.8254 45.04C55.1888 45.2263 55.5903 45.3267 55.9987 45.3333C56.498 45.3349 56.9877 45.1963 57.412 44.9333C57.7963 44.6931 58.1131 44.359 58.3324 43.9624C58.5517 43.5658 58.6663 43.1199 58.6654 42.6667V21.3333C58.6663 20.8802 58.5517 20.4342 58.3324 20.0376C58.1131 19.641 57.7963 19.3069 57.412 19.0667ZM39.9987 40C39.9987 40.7072 39.7177 41.3855 39.2176 41.8856C38.7176 42.3857 38.0393 42.6667 37.332 42.6667H13.332C12.6248 42.6667 11.9465 42.3857 11.4464 41.8856C10.9463 41.3855 10.6654 40.7072 10.6654 40V24C10.6654 23.2928 10.9463 22.6145 11.4464 22.1144C11.9465 21.6143 12.6248 21.3333 13.332 21.3333H37.332C38.0393 21.3333 38.7176 21.6143 39.2176 22.1144C39.7177 22.6145 39.9987 23.2928 39.9987 24V40ZM53.332 38.3467L45.332 34.3467V29.6533L53.332 25.6533V38.3467Z'
                  className='fill-black group-hover:fill-white'
                />
              </svg>
              <br />
              <p className='font-bold text-[12px] 2xl:text-[18px]'>
                Video content
              </p>
            </span>
          </div>
        </li>
        <li
          onClick={() => {
            dispatch(setSelectedItem({ selectedItem: 'post' }));
          }}
          onMouseEnter={() => {
            setInnerMenuDataIndex(2);
          }}
          onMouseLeave={() => {
            setInnerMenuDataIndex(null);
          }}
          className='three group'
        >
          <div>
            <span className='icon' style={{ transform: 'rotate(240deg)' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 2xl:w-12 2xl:h-12'
                viewBox='0 0 64 64'
                fill='none'
              >
                <path
                  d='M8.00131 55.9998C6.53464 55.9998 5.27864 55.4772 4.23331 54.4318C3.18797 53.3865 2.6662 52.1314 2.66797 50.6665V18.6665C2.66797 17.1998 3.19064 15.9438 4.23597 14.8985C5.28131 13.8532 6.53642 13.3314 8.00131 13.3332H16.4013L21.3346 7.99984H37.3346V13.3332H23.668L18.8013 18.6665H8.00131V50.6665H50.668V26.6665H56.0013V50.6665C56.0013 52.1332 55.4786 53.3892 54.4333 54.4345C53.388 55.4798 52.1329 56.0016 50.668 55.9998H8.00131ZM50.668 18.6665V13.3332H45.3346V7.99984H50.668V2.6665H56.0013V7.99984H61.3346V13.3332H56.0013V18.6665H50.668ZM29.3346 46.6665C32.668 46.6665 35.5018 45.4994 37.836 43.1652C40.1702 40.8309 41.3364 37.9981 41.3346 34.6665C41.3346 31.3332 40.1675 28.4994 37.8333 26.1652C35.4991 23.8309 32.6662 22.6647 29.3346 22.6665C26.0013 22.6665 23.1675 23.8336 20.8333 26.1678C18.4991 28.5021 17.3329 31.3349 17.3346 34.6665C17.3346 37.9998 18.5018 40.8336 20.836 43.1678C23.1702 45.5021 26.0031 46.6683 29.3346 46.6665ZM29.3346 41.3332C27.468 41.3332 25.8902 40.6887 24.6013 39.3998C23.3124 38.1109 22.668 36.5332 22.668 34.6665C22.668 32.7998 23.3124 31.2221 24.6013 29.9332C25.8902 28.6443 27.468 27.9998 29.3346 27.9998C31.2013 27.9998 32.7791 28.6443 34.068 29.9332C35.3569 31.2221 36.0013 32.7998 36.0013 34.6665C36.0013 36.5332 35.3569 38.1109 34.068 39.3998C32.7791 40.6887 31.2013 41.3332 29.3346 41.3332Z'
                  className='fill-black group-hover:fill-white'
                />
              </svg>{' '}
              <br />
              <p className='font-bold text-[12px] 2xl:text-[18px]'>Post</p>
            </span>
          </div>
        </li>
        <li
          onClick={() => {
            dispatch(setSelectedItem({ selectedItem: 'live-event' }));
          }}
          onMouseEnter={() => {
            setInnerMenuDataIndex(3);
          }}
          onMouseLeave={() => {
            setInnerMenuDataIndex(null);
          }}
          className='four group'
        >
          <div>
            <span className='icon' style={{ transform: 'rotate(-180deg)' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 2xl:w-12 2xl:h-12'
                viewBox='0 0 64 64'
                fill='none'
              >
                <g clipPath='url(#clip0_1291_4722)'>
                  <path
                    d='M32.508 53.3277C32.8582 53.3194 33.2066 53.3803 33.5333 53.5067C33.86 53.6331 34.1586 53.8226 34.412 54.0644C34.6654 54.3062 34.8688 54.5956 35.0104 54.916C35.152 55.2363 35.2291 55.5815 35.2374 55.9317C35.2456 56.2819 35.1848 56.6303 35.0584 56.9569C34.9319 57.2836 34.7424 57.5822 34.5006 57.8356C34.2588 58.0891 33.9695 58.2924 33.6491 58.434C33.3287 58.5757 32.9836 58.6528 32.6334 58.661L31.9987 58.6663L31.364 58.6583C31.0138 58.6501 30.6687 58.573 30.3483 58.4314C30.0279 58.2898 29.7386 58.0864 29.4968 57.833C29.255 57.5795 29.0654 57.281 28.939 56.9543C28.8126 56.6276 28.7518 56.2792 28.76 55.929C28.7683 55.5788 28.8454 55.2337 28.987 54.9133C29.1286 54.5929 29.3319 54.3035 29.5854 54.0617C29.8388 53.8199 30.1374 53.6304 30.4641 53.504C30.7908 53.3776 31.1392 53.3168 31.4894 53.325L31.9987 53.333L32.508 53.3277ZM46.7667 51.1063C46.9494 51.4052 47.0714 51.7371 47.1258 52.0832C47.1802 52.4292 47.1659 52.7826 47.0836 53.1231C47.0014 53.4636 46.8529 53.7846 46.6466 54.0677C46.4404 54.3508 46.1803 54.5904 45.8814 54.773C45.5202 54.9933 45.1539 55.2049 44.7827 55.4077C44.4754 55.5758 44.138 55.6817 43.7898 55.7194C43.4416 55.7571 43.0893 55.7258 42.7532 55.6274C42.0743 55.4286 41.5022 54.9683 41.1627 54.3477C40.8232 53.7271 40.7442 52.997 40.943 52.3181C41.1418 51.6393 41.6021 51.0672 42.2227 50.7277C42.5201 50.566 42.8135 50.397 43.1027 50.221C43.7061 49.8529 44.4309 49.7393 45.1179 49.9053C45.805 50.0714 46.398 50.5033 46.7667 51.1063ZM20.8974 50.221C21.1854 50.397 21.4787 50.5677 21.7774 50.7277C22.398 51.0675 22.8582 51.64 23.0567 52.3191C23.2552 52.9982 23.1759 53.7284 22.836 54.349C22.4962 54.9696 21.9238 55.4298 21.2446 55.6283C20.5655 55.8269 19.8353 55.7475 19.2147 55.4077C18.8434 55.205 18.4771 54.9934 18.116 54.773C17.5124 54.4042 17.08 53.8107 16.914 53.123C16.7479 52.4354 16.8619 51.71 17.2307 51.1063C17.5995 50.5027 18.193 50.0703 18.8807 49.9043C19.5683 49.7383 20.2937 49.8522 20.8974 50.221ZM31.9987 15.9997C36.2422 15.9997 40.3118 17.6854 43.3124 20.686C46.313 23.6865 47.9987 27.7562 47.9987 31.9997C47.9987 36.2431 46.313 40.3128 43.3124 43.3134C40.3118 46.314 36.2422 47.9997 31.9987 47.9997C27.7552 47.9997 23.6856 46.314 20.685 43.3134C17.6844 40.3128 15.9987 36.2431 15.9987 31.9997C15.9987 27.7562 17.6844 23.6865 20.685 20.686C23.6856 17.6854 27.7552 15.9997 31.9987 15.9997ZM54.3454 41.165C54.966 41.5042 55.4264 42.0759 55.6254 42.7545C55.8245 43.4332 55.7458 44.1631 55.4067 44.7837C55.204 45.157 54.9907 45.5223 54.772 45.8823C54.5894 46.1812 54.3497 46.4412 54.0666 46.6475C53.7835 46.8537 53.4625 47.0022 53.1221 47.0844C52.4344 47.2504 51.709 47.1365 51.1054 46.7677C50.5017 46.3988 50.0693 45.8053 49.9033 45.1177C49.7373 44.4301 49.8512 43.7046 50.22 43.101C50.396 42.813 50.5667 42.5197 50.7267 42.221C50.8951 41.9138 51.1223 41.6428 51.3955 41.4235C51.6686 41.2042 51.9823 41.0408 52.3186 40.9427C52.6549 40.8447 53.0072 40.8138 53.3554 40.852C53.7036 40.8901 54.0409 40.9965 54.348 41.165H54.3454ZM13.2707 42.2237C13.4324 42.5211 13.6013 42.8145 13.7774 43.1037C13.9639 43.4026 14.0894 43.7356 14.1465 44.0834C14.2036 44.4311 14.1912 44.7867 14.11 45.1296C14.0288 45.4726 13.8805 45.796 13.6736 46.0812C13.4666 46.3665 13.2052 46.6079 12.9044 46.7915C12.6036 46.9751 12.2694 47.0973 11.9212 47.151C11.5729 47.2046 11.2174 47.1887 10.8753 47.1042C10.5332 47.0196 10.2112 46.8681 9.92803 46.6584C9.64483 46.4487 9.40601 46.1849 9.22536 45.8823C9.0051 45.5212 8.79349 45.1549 8.5907 44.7837C8.25122 44.1631 8.17218 43.433 8.37097 42.7541C8.56976 42.0753 9.03009 41.5032 9.6507 41.1637C10.2713 40.8242 11.0014 40.7452 11.6802 40.9439C12.3591 41.1427 12.9312 41.6031 13.2707 42.2237ZM31.9987 21.333C29.1697 21.333 26.4566 22.4568 24.4562 24.4572C22.4558 26.4576 21.332 29.1707 21.332 31.9997C21.332 34.8287 22.4558 37.5418 24.4562 39.5421C26.4566 41.5425 29.1697 42.6663 31.9987 42.6663C34.8277 42.6663 37.5408 41.5425 39.5412 39.5421C41.5416 37.5418 42.6654 34.8287 42.6654 31.9997C42.6654 29.1707 41.5416 26.4576 39.5412 24.4572C37.5408 22.4568 34.8277 21.333 31.9987 21.333ZM31.9987 26.6663C33.4132 26.6663 34.7697 27.2282 35.7699 28.2284C36.7701 29.2286 37.332 30.5852 37.332 31.9997C37.332 33.4142 36.7701 34.7707 35.7699 35.7709C34.7697 36.7711 33.4132 37.333 31.9987 37.333C30.5842 37.333 29.2277 36.7711 28.2275 35.7709C27.2273 34.7707 26.6654 33.4142 26.6654 31.9997C26.6654 30.5852 27.2273 29.2286 28.2275 28.2284C29.2277 27.2282 30.5842 26.6663 31.9987 26.6663ZM8.06803 28.7597C8.41825 28.768 8.76341 28.8452 9.08377 28.987C9.40414 29.1287 9.69343 29.3322 9.93513 29.5858C10.1768 29.8393 10.3662 30.1381 10.4924 30.4649C10.6186 30.7917 10.6792 31.1401 10.6707 31.4903L10.6654 31.9997C10.6654 32.1703 10.6654 32.341 10.6707 32.509C10.6873 33.2163 10.4223 33.9011 9.93396 34.413C9.44562 34.9248 8.77394 35.2217 8.0667 35.2383C7.35945 35.255 6.67457 34.99 6.16273 34.5016C5.65088 34.0133 5.35399 33.3416 5.33736 32.6343L5.33203 31.9997C5.33203 31.7863 5.33203 31.573 5.34003 31.365C5.34799 31.0148 5.42488 30.6696 5.5663 30.3491C5.70773 30.0286 5.91091 29.7391 6.16425 29.4971C6.41758 29.2552 6.71611 29.0655 7.04277 28.939C7.36943 28.8125 7.71782 28.7515 8.06803 28.7597ZM55.9294 28.7597C56.2796 28.7515 56.628 28.8125 56.9546 28.939C57.2813 29.0655 57.5798 29.2552 57.8332 29.4971C58.0865 29.7391 58.2897 30.0286 58.4311 30.3491C58.5725 30.6696 58.6494 31.0148 58.6574 31.365L58.6654 31.9997L58.6574 32.6343C58.6491 32.9845 58.572 33.3297 58.4304 33.6501C58.2888 33.9704 58.0854 34.2598 57.832 34.5016C57.5786 34.7434 57.28 34.9329 56.9533 35.0593C56.6266 35.1857 56.2782 35.2466 55.928 35.2383C55.5778 35.2301 55.2327 35.153 54.9123 35.0114C54.5919 34.8698 54.3026 34.6664 54.0608 34.413C53.819 34.1595 53.6294 33.861 53.503 33.5343C53.3766 33.2076 53.3158 32.8592 53.324 32.509L53.332 31.9997L53.3267 31.4903C53.3182 31.1401 53.3788 30.7917 53.505 30.4649C53.6312 30.1381 53.8206 29.8393 54.0623 29.5858C54.304 29.3322 54.5933 29.1287 54.9136 28.987C55.234 28.8452 55.5791 28.768 55.9294 28.7597ZM54.772 18.117C54.9907 18.477 55.204 18.845 55.4067 19.2157C55.5748 19.523 55.6807 19.8604 55.7184 20.2086C55.7561 20.5568 55.7249 20.9091 55.6264 21.2452C55.528 21.5814 55.3643 21.8948 55.1447 22.1677C54.9252 22.4406 54.654 22.6676 54.3467 22.8357C53.7261 23.1752 52.996 23.2542 52.3172 23.0554C51.6383 22.8566 51.0662 22.3963 50.7267 21.7757C50.5648 21.4784 50.3959 21.1849 50.22 20.8957C50.0335 20.5967 49.908 20.2637 49.8509 19.916C49.7938 19.5682 49.8062 19.2126 49.8874 18.8697C49.9686 18.5268 50.1169 18.2034 50.3238 17.9181C50.5308 17.6329 50.7922 17.3915 51.093 17.2078C51.3938 17.0242 51.728 16.9021 52.0762 16.8484C52.4245 16.7947 52.78 16.8106 53.1221 16.8952C53.4642 16.9797 53.7862 17.1312 54.0694 17.3409C54.3526 17.5507 54.5914 17.8144 54.772 18.117ZM12.892 17.2317C13.191 17.4142 13.451 17.6539 13.6573 17.937C13.8636 18.2201 14.0121 18.5411 14.0943 18.8816C14.1765 19.2221 14.1909 19.5755 14.1365 19.9215C14.0821 20.2675 13.9601 20.5995 13.7774 20.8983C13.6014 21.1863 13.4307 21.4797 13.2707 21.7783C12.9309 22.3989 12.3584 22.8591 11.6793 23.0577C11.0002 23.2562 10.27 23.1768 9.64936 22.837C9.02876 22.4972 8.56857 21.9247 8.37003 21.2456C8.17149 20.5665 8.25087 19.8363 8.5907 19.2157C8.79336 18.8423 9.0067 18.477 9.22536 18.117C9.40794 17.8181 9.64762 17.558 9.93072 17.3517C10.2138 17.1454 10.5348 16.9969 10.8753 16.9147C11.2158 16.8325 11.5691 16.8182 11.9152 16.8726C12.2612 16.9269 12.5932 17.049 12.892 17.2317ZM44.7827 8.59167C45.156 8.79434 45.5214 9.00767 45.8814 9.22634C46.485 9.59517 46.9174 10.1887 47.0834 10.8763C47.2495 11.5639 47.1355 12.2894 46.7667 12.893C46.3979 13.4966 45.8044 13.929 45.1167 14.0951C44.4291 14.2611 43.7037 14.1472 43.1 13.7783C42.8108 13.6025 42.5174 13.4335 42.22 13.2717C41.5994 12.9318 41.1392 12.3594 40.9407 11.6803C40.7422 11.0011 40.8215 10.2709 41.1614 9.65034C41.5012 9.02973 42.0736 8.56954 42.7528 8.37101C43.4319 8.17247 44.1621 8.25184 44.7827 8.59167ZM22.836 9.65034C23.0044 9.95776 23.1104 10.2953 23.1482 10.6438C23.1859 10.9922 23.1546 11.3447 23.056 11.681C22.9575 12.0173 22.7936 12.331 22.5737 12.6039C22.3538 12.8768 22.0823 13.1038 21.7747 13.2717C21.4774 13.4335 21.184 13.6025 20.8947 13.7783C20.2919 14.1257 19.5771 14.2237 18.903 14.0515C18.2289 13.8792 17.6488 13.4503 17.2866 12.8563C16.9243 12.2622 16.8086 11.5502 16.964 10.872C17.1195 10.1938 17.5339 9.60325 18.1187 9.22634C18.4787 9.00767 18.8467 8.79434 19.2174 8.59167C19.8377 8.25237 20.5673 8.17328 21.2459 8.37181C21.9245 8.57033 22.4964 9.03021 22.836 9.65034ZM32.6334 5.34101C33.3406 5.35763 34.0123 5.65452 34.5006 6.16637C34.989 6.67822 35.254 7.3631 35.2374 8.07034C35.2207 8.77759 34.9239 9.44926 34.412 9.9376C33.9002 10.4259 33.2153 10.691 32.508 10.6743L31.9987 10.6663L31.4894 10.6717C30.7821 10.6883 30.0972 10.4233 29.5854 9.93494C29.0735 9.44659 28.7767 8.77492 28.76 8.06767C28.7434 7.36043 29.0084 6.67555 29.4968 6.1637C29.9851 5.65185 30.6568 5.35496 31.364 5.33834L31.9987 5.33301L32.6334 5.34101Z'
                    className='fill-black group-hover:fill-white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1291_4722'>
                    <rect width='64' height='64' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <br />
              <p className='font-bold text-[12px] 2xl:text-[18px]'>
                Live/event
              </p>
            </span>
          </div>
        </li>
        <li
          onClick={() => {
            dispatch(setSelectedItem({ selectedItem: 'carousel' }));
          }}
          onMouseEnter={() => {
            setInnerMenuDataIndex(4);
          }}
          onMouseLeave={() => {
            setInnerMenuDataIndex(null);
          }}
          className='five group'
        >
          <div>
            <span className='icon' style={{ transform: 'rotate(120deg)' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 2xl:w-12 2xl:h-12'
                viewBox='0 0 64 64'
                fill='none'
              >
                <path
                  d='M52 8H20C18.9391 8 17.9217 8.42143 17.1716 9.17157C16.4214 9.92172 16 10.9391 16 12V16H12C10.9391 16 9.92172 16.4214 9.17157 17.1716C8.42143 17.9217 8 18.9391 8 20V52C8 53.0609 8.42143 54.0783 9.17157 54.8284C9.92172 55.5786 10.9391 56 12 56H44C45.0609 56 46.0783 55.5786 46.8284 54.8284C47.5786 54.0783 48 53.0609 48 52V48H52C53.0609 48 54.0783 47.5786 54.8284 46.8284C55.5786 46.0783 56 45.0609 56 44V12C56 10.9391 55.5786 9.92172 54.8284 9.17157C54.0783 8.42143 53.0609 8 52 8ZM20 12H52V29.345L47.825 25.17C47.0749 24.4204 46.0579 23.9994 44.9975 23.9994C43.9371 23.9994 42.9201 24.4204 42.17 25.17L23.3425 44H20V12ZM44 52H12V20H16V44C16 45.0609 16.4214 46.0783 17.1716 46.8284C17.9217 47.5786 18.9391 48 20 48H44V52ZM26 22C26 21.2089 26.2346 20.4355 26.6741 19.7777C27.1136 19.1199 27.7384 18.6072 28.4693 18.3045C29.2002 18.0017 30.0044 17.9225 30.7804 18.0769C31.5563 18.2312 32.269 18.6122 32.8284 19.1716C33.3878 19.731 33.7688 20.4437 33.9231 21.2196C34.0775 21.9956 33.9983 22.7998 33.6955 23.5307C33.3928 24.2616 32.8801 24.8864 32.2223 25.3259C31.5645 25.7654 30.7911 26 30 26C28.9391 26 27.9217 25.5786 27.1716 24.8284C26.4214 24.0783 26 23.0609 26 22Z'
                  className='fill-black group-hover:fill-white'
                />
              </svg>
              <br />
              <p className='font-bold text-[12px] 2xl:text-[18px]'>Carousel</p>
            </span>
          </div>
        </li>
        <li
          onClick={() => {
            dispatch(setSelectedItem({ selectedItem: 'reels/shorts' }));
          }}
          onMouseEnter={() => {
            setInnerMenuDataIndex(5);
          }}
          onMouseLeave={() => {
            setInnerMenuDataIndex(null);
          }}
          className='group six'
        >
          <div>
            <span className='icon' style={{ transform: 'rotate(60deg)' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 h-7 2xl:w-12 2xl:h-12'
                viewBox='0 0 51 51'
                fill='none'
              >
                <g clipPath='url(#clip0_1291_1662)'>
                  <path
                    d='M14.5769 0.333008H36.0897C40.0928 0.333008 43.735 1.96582 46.3774 4.58822C49.024 7.21474 50.6667 10.8391 50.6667 14.8222V36.5146C50.6667 40.4895 49.024 44.1097 46.3857 46.7362L46.3774 46.7445C43.7308 49.371 40.0886 50.9997 36.0939 50.9997H14.5769C10.5697 50.9997 6.92342 49.3669 4.28099 46.7445L4.18143 46.6331C1.60122 44.019 0 40.44 0 36.5105V14.8222C0 10.835 1.63856 7.21474 4.28099 4.58822C6.92342 1.9617 10.5656 0.333008 14.5769 0.333008ZM37.9606 13.1234L37.9896 13.1687H46.9498C46.5889 10.8267 45.4648 8.72385 43.847 7.11165C41.8558 5.13249 39.1097 3.90375 36.0897 3.90375H32.4102L37.9606 13.1234ZM33.8165 13.1687L28.2371 3.90375H15.9998L21.6455 13.1687H33.8165ZM17.4683 13.1687L12.0092 4.20475C10.0139 4.68305 8.22597 5.70974 6.81972 7.11165C5.2019 8.71973 4.08187 10.8267 3.71683 13.1687H17.4683ZM47.0743 16.7395H3.59238V36.5146C3.59238 39.471 4.79122 42.1635 6.72845 44.1344L6.81972 44.221C8.81087 46.2002 11.5612 47.4331 14.5769 47.4331H36.0897C39.1097 47.4331 41.8558 46.2043 43.8428 44.2293L43.8511 44.221C45.8381 42.246 47.0743 39.5164 47.0743 36.5146V16.7395ZM21.1353 22.9903L32.2651 30.1854C32.4434 30.3009 32.6052 30.4493 32.7338 30.6308C33.2399 31.3606 33.0532 32.3625 32.319 32.8656L21.2349 39.3679C20.9569 39.5947 20.6002 39.7308 20.2061 39.7308C19.3101 39.7308 18.5841 39.0092 18.5841 38.1186V24.3098H18.5924C18.5924 23.9923 18.6878 23.6707 18.8828 23.3903C19.3972 22.6605 20.4052 22.4832 21.1353 22.9903Z'
                    className='fill-black group-hover:fill-white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1291_1662'>
                    <rect
                      width='50.6667'
                      height='50.6667'
                      fill='white'
                      transform='translate(0 0.333008)'
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className='mt-3 font-bold text-[12px] 2xl:text-[18px]'>
                Reels/Shorts
              </p>
            </span>
          </div>
        </li>
        {/* close btn */}
        <div
          onClick={() => {
            dispatch(toggleCircularMenu());
          }}
          style={{
            background:
              ' linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
          }}
          title='Close'
          className='cursor-pointer flex items-center justify-center absolute top-0 right-0 w-[57px] 2xl:w-[87px] h-[57px] 2xl:h-[87px] rounded-full'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 2xl:w-6 2xl:h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      </ul>
      {/* clip path */}
      <svg height={0} width={0}>
        <defs>
          <clipPath clipPathUnits='objectBoundingBox' id='sector'>
            <path
              fill='none'
              stroke='#111'
              strokeWidth={1}
              className='sector'
              d='M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z'
            />
          </clipPath>
        </defs>
      </svg>

      <style jsx>
        {`
          .menu {
            padding: 0;
            list-style: none;
            position: relative;
            margin: 30px auto;
            width: 744px;
            height: 744px;
            border-radius: 50%;
            animation:
              bounce 1s ease-in,
              grow 300ms linear;
          }

          @keyframes grow {
            from {
              bottom: -1000px;
            }

            to {
              bottom: 0px;
            }
          }

          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }

            40% {
              transform: translateY(-15px);
            }

            60% {
              transform: translateY(-5px);
            }
          }

          @media all and (max-width: 1400px) {
            .menu {
              width: 521px;
              height: 521px;
            }
          }

          .menu li {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-clip-path: url(#sector);
            clip-path: url(#sector);
          }

          .menu li div {
            width: 100%;
            height: 100%;
            display: block;
            color: #242128;
            text-align: center;
          }

          .menu li div:hover {
            background-color: #7f1dfe;
            color: white;
          }

          .one {
            transform: rotate(0deg);
          }

          .two {
            transform: rotate(60deg);
          }

          .three {
            transform: rotate(120deg);
          }

          .four {
            transform: rotate(180deg);
          }

          .five {
            transform: rotate(240deg);
          }

          .six {
            transform: rotate(300deg);
          }

          .icon {
            position: absolute;
            right: 14%;
            top: 28%;
            font-size: 35px;
            line-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 7px;
          }

          .circle {
            position: absolute;
            height: 40%;
            width: 40%;
            border-radius: 50%;
            background: white;
            top: 30%;
            left: 30%;
            z-index: 8;
          }
        `}
      </style>
    </>
  );
};
