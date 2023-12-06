'use client';

/*BuiltIn imports */
import Image from 'next/image';
import { useEffect, useState } from 'react';

/*redux */
import { useDispatch } from 'react-redux';
import { toggleCard } from '@/Redux/slices/CardSlice';
import classNames from 'classnames';

const ExpandBtn = ({ cardId }) => {
  const [isCurrentItemExpanded, setIsCardItemExpanded] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        cardId
          ? (dispatch(toggleCard({ cardId })),
            setIsCardItemExpanded(!isCurrentItemExpanded))
          : console.log('no cardId found!!');
      }}
      className={classNames(
        'w-4 2xl:w-[22px] h-4 2xl:h-[22px]  cursor-pointer flex items-center justify-center rounded-full ',
        {
          'bg-[#7F7789] group hover:bg-white border hover:border-[#7F7789]':
            !isCurrentItemExpanded,
        },
      )}
    >
      {isCurrentItemExpanded && (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='arrows'>
          <path d='M11.29,9.71a1,1,0,0,0,1.42,0l5-5a1,1,0,1,0-1.42-1.42L12,7.59,7.71,3.29A1,1,0,0,0,6.29,4.71Zm1.42,4.58a1,1,0,0,0-1.42,0l-5,5a1,1,0,0,0,1.42,1.42L12,16.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'></path>
        </svg>
      )}

      {!isCurrentItemExpanded && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-2 h-2 2xl:w-3 2xl:h-3'
          viewBox='0 0 13 13'
          fill='none'
        >
          <g clipPath='url(#clip0_2625_11338)'>
            <path
              d='M2.05835 7.02801L2.05835 10.1952C2.05835 10.6076 2.39322 10.9425 2.80561 10.9425L5.97282 10.9425C6.38522 10.9425 6.72009 10.6076 6.72009 10.1952C6.72009 9.78283 6.38522 9.44796 5.97282 9.44796L4.60696 9.44796L9.44851 4.60642L9.44851 5.97228C9.44851 6.38467 9.78337 6.71954 10.1958 6.71954C10.6082 6.71954 10.943 6.38467 10.943 5.97228L10.943 2.80507C10.943 2.39267 10.6082 2.0578 10.1958 2.0578L7.02856 2.0578C6.61616 2.0578 6.2813 2.39267 6.2813 2.80507C6.2813 3.21746 6.61616 3.55233 7.02856 3.55233L8.39112 3.55233L3.54958 8.39387L3.54958 7.02801C3.54958 6.61562 3.21471 6.28075 2.80232 6.28075C2.38992 6.28075 2.05505 6.61562 2.05505 7.02801L2.05835 7.02801Z'
              className='fill-white group-hover:fill-[#7F7789]'
            />
          </g>
          <defs>
            <clipPath id='clip0_2625_11338'>
              <rect
                width='11.9443'
                height='11.9443'
                fill='white'
                transform='translate(14.9453 6.5) rotate(135)'
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default ExpandBtn;
