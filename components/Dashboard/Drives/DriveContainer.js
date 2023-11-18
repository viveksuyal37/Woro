import classNames from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

const DriveContainer = ({ expandedCard }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
      }}
      className={classNames(
        'flex justify-end items-center flex-col gap-1 4xl:gap-2   rounded-[20px]  shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] overflow-hidden w-full transition-all duration-300 ease-in-out opacity-1',
        { 'w-0 h-0 p-0 opacity-0 hidden': expandedCard },
        {
          'h-[61px] 2xl:h-[80px] 3xl:h-[97.5px] 4xl:h-[120px] p-[10px] 2xl:p-[14px_15px]':
            !expandedCard,
        },
      )}
    >
      <div className='flex child:w-5 child:2xl:w-[27px] gap-7 '>
        <Image
          src='/assets/images/dashboard/onedrive.png'
          width='27'
          height='27'
          alt='drive'
        />
        <Image
          src='/assets/images/dashboard/onedrive.png'
          width='27'
          height='27'
          alt='drive'
        />
        <Image
          src='/assets/images/dashboard/onedrive.png'
          width='27'
          height='27'
          alt='drive'
        />
      </div>
      <Link
        href='/dashboard/library'
        className='text-center w-full text-[10px] 2xl:text-[12px] 3xl:text-[1rem] border py-1 3xl:py-2 rounded-[10px] text-woro-blue border-woro-blue'
      >
        Content Library
      </Link>
    </div>
  );
};

export default DriveContainer;
