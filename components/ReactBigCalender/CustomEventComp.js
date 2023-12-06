import Image from 'next/image';
import classNames from 'classnames';
import { useState } from 'react';

const customEvent = ({ event }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='relative flex gap-1 2xl:gap-2 p-1 2xl:p-2 text-woro-blue bg-white border-2 border-woro-blue rounded-[10px] max-w-[215px] text-[9px] 2xl:text-[14px] '>
      <Image
        width='78'
        height='59'
        className='w-11 h-9 2xl:w-[78px] 2xl:h-[59px]'
        alt='event'
        src='/assets/images/news.png'
      />
      <div className='flex flex-col gap-1 2xl:gap-2 '>
        <span className='font-bold'>{event.title}</span>
        <span>Posting to</span>
        <div className='flex gap-1 child:2xl:w-[15px] child:w-[10px]'>
          <Image
            width='15'
            height='15'
            alt='platform'
            src='/assets/images/dashboard/youtube.png'
          />
          <Image
            width='15'
            height='15'
            alt='platform'
            src='/assets/images/dashboard/twitter.png'
          />
        </div>
      </div>
      {/* options menu btn */}
      <svg
        onClick={() => {
          setShowPopup(true);
        }}
        className='absolute w-1 h-[10px] 2xl:w-[5px] 2xl:h-[15px] top-1 2xl:top-3 right-2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 5 15'
        fill='none'
      >
        <rect
          x='0.101562'
          y='0.265625'
          width='3.96266'
          height='3.96266'
          rx='1.98133'
          fill='url(#paint0_linear_3001_4528)'
        />
        <rect
          x='0.101562'
          y='5.21875'
          width='3.96266'
          height='3.96266'
          rx='1.98133'
          fill='url(#paint1_linear_3001_4528)'
        />
        <rect
          x='0.101562'
          y='10.1719'
          width='3.96266'
          height='3.96266'
          rx='1.98133'
          fill='url(#paint2_linear_3001_4528)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_3001_4528'
            x1='0.101563'
            y1='0.265625'
            x2='4.35007'
            y2='0.60038'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7F1DFE' />
            <stop offset='1' stopColor='#464BD3' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_3001_4528'
            x1='0.101563'
            y1='5.21875'
            x2='4.35007'
            y2='5.55351'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7F1DFE' />
            <stop offset='1' stopColor='#464BD3' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_3001_4528'
            x1='0.101563'
            y1='10.1719'
            x2='4.35007'
            y2='10.5066'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7F1DFE' />
            <stop offset='1' stopColor='#464BD3' />
          </linearGradient>
        </defs>
      </svg>
      {/* popup */}
      <div
        className={classNames(
          'absolute transition-all duration-150 ease-in-out flex flex-col items-end pt-4 2xl:pt-10 p-[10px] gap-1 font-bold text-[9px] 2xl:text-sm top-1 right-1 w-1/2 text-white bg-woro-blue rounded-md 2xl:rounded-xl ',
          { 'h-0 !p-0 overflow-hidden': !showPopup },
        )}
      >
        <svg
          onClick={() => {
            setShowPopup(false);
          }}
          className='absolute w-3 h-3 cursor-pointer 2xl:w-4 2xl:h-4 top-[2px] 2xl:top-3 right-1 '
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>

        <span>Edit</span>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default customEvent;
