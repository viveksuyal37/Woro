'use client';
/*BuiltIn Imports */
import Image from 'next/image';
import { useState } from 'react';

/*External Imports */
import classNames from 'classnames';

const PostInfo = ({ expandedCard }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      style={{
        background:
          ' linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
      }}
      className={classNames(
        'rounded-[11px] flex h-full flex-shrink-0 overflow-hidden transition-all duration-300 ease-in-out  flex-col ',
        { ' hidden': expandedCard },
        {
          'p-[13px] 2xl:p-[20px_18px] w-[22.1vw] opacity-1 max-w-[600px] 5xl:max-w-[800px]':
            !expandedCard,
        },
      )}
    >
      <div className='flex justify-center gap-[22px] text-[12px] 2xl:text-[18px] font-bold'>
        <div className='relative'>
          <h6
            onClick={() => setActiveItem(0)}
            className={classNames(
              'cursor-pointer transition-all duration-300 linear',
              {
                'text-woro-blue': activeItem === 0,
                'translate-y-[-4px]': activeItem === 0,
              },
            )}
          >
            Upcoming posts
          </h6>
          <div
            className={classNames(
              'bg-woro-blue h-[2px] 2xl:h-[3px] w-full absolute bottom-[-3px] 2xl:bottom-[-9px] transition-opacity duration-300',
              {
                'opacity-0': activeItem === 1,
              },
            )}
          ></div>
        </div>
        <div className='relative'>
          <h6
            onClick={() => setActiveItem(1)}
            className={classNames(
              'cursor-pointer transition-all duration-300 linear',
              {
                'text-woro-blue': activeItem === 1,
                'translate-y-[-4px]': activeItem === 1,
              },
            )}
          >
            Previous posts
          </h6>
          <div
            className={classNames(
              'bg-woro-blue h-[2px] 2xl:h-[3px] w-full absolute bottom-[-3px] 2xl:bottom-[-9px] transition-opacity duration-300',
              {
                'opacity-0': activeItem === 0,
              },
            )}
          ></div>
        </div>
      </div>

      <div className='w-full scrollableContainer overflow-auto mt-2 2xl:mt-4 text-[11.7px] 2xl:text-[16px] 3xl:text-[18px]'>
        {['', '', ''].map((i, indx) => {
          //! add nanoid
          return (
            <div
              key={indx}
              className={classNames(
                ' border-[#7F7789] p-[12px_2px] flex gap-[12px] items-center justify-between leading-tight',
                { 'border-b-[1px]': indx !== 2 },
              )}
            >
              <Image
                alt=''
                src='/assets/images/dashboard/fb.png'
                width='41'
                height='41'
                className='max-w-[27px] 2xl:max-w-[41px]'
              />
              <p>
                <strong>Facebook</strong>
              </p>
              <p>20 Sep</p>
              <p>5 mins ago</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostInfo;
