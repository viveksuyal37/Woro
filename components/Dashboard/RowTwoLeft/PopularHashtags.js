'use client';

import Image from 'next/image';
import ExpandBtn from '../ExpandBtn';
import classNames from 'classnames';
import { createRef, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useDraggable } from 'react-use-draggable-scroll';

const PopularHashtags = ({ cardId, expandedCard }) => {
  const [activeSocial, setActiveSocial] = useState(0);

  const ref = useRef();
  const { events } = useDraggable(ref);

  const data = [
    {
      name: 'LinkedIn',
      iconUrl: '/assets/images/dashboard/linkedIn.png',
      whiteIconUrl: '/assets/images/dashboard/w-linkedIn.png',
    },
    {
      name: 'Facebook',
      iconUrl: '/assets/images/dashboard/fb.png',
      whiteIconUrl: '/assets/images/dashboard/w-fb.png',
    },
    {
      name: 'YouTube',
      iconUrl: '/assets/images/dashboard/youtube.png',
      whiteIconUrl: '/assets/images/dashboard/w-youtube.png',
    },
    {
      name: 'Instagram',
      iconUrl: '/assets/images/dashboard/instagram.png',
      whiteIconUrl: '/assets/images/dashboard/w-insta.png',
    },
    {
      name: 'Twitter',
      iconUrl: '/assets/images/dashboard/twitter.png',
      whiteIconUrl: '/assets/images/dashboard/w-twitter.png',
    },
  ];

  return (
    <div
      style={{
        background:
          'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
      }}
      className={classNames(
        ' opacity-1 relative transition-all duration-300 ease-in-out overflow-hidden rounded-[20px] bg-white',
        {
          'hidden ': expandedCard && expandedCard !== cardId,
          'w-full  h-[66vh] ': expandedCard === cardId,
          'h-full w-full  p-[10px] 2xl:p-[20px] ': !expandedCard,
        },
      )}
    >
      {!expandedCard && (
        <div className='mb-1 font-bold 2xl:mb-2'>
          <h6 className='text-[10px] 2xl:text-[13px]'>
            Popular hastags For your{' '}
            <span className='text-woro-blue'>Social Media Accounts!</span>
          </h6>
        </div>
      )}

      {/* trendingHashtagsCard */}
      {!expandedCard && (
        <div
          ref={ref}
          {...events}
          className='flex h-full gap-2 w-[24.5vw] 2xl:w-[21vw] 3xl:w-[22vw] overflow-x-auto scrollableContainer '
        >
          <div className='bg-white  relative h-4/5 w-1/2 4xl:w-2/3 max-w-[500px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[9px_8px] 2xl:p-[12px_10px] min-w-[245px] rounded-[10px]'>
            <div className='flex justify-between mb-[5px] gap-[23px] font-bold'>
              <div className='flex w-[14.7px] h-[14.7px] 2xl:h-[20px] 2xl:w-[20px] space-x-[5px]'>
                <Image
                  src='/assets/images/dashboard/fb.png'
                  width='20'
                  alt='socials'
                  height='20'
                ></Image>
                <h6 className='text-[10px] 2xl:text-[14px] font-bold'>
                  {' '}
                  FaceBook
                </h6>
              </div>

              <div className='flex space-x-[5px] items-center'>
                <input type='checkbox'></input>
                <label className='text-[8px] 2xl:text-[10px] '>Latest</label>
                <input type='checkbox'></input>
                <label className='text-[8px] 2xl:text-[10px] '>Month</label>
              </div>
            </div>

            <div className='flex flex-wrap text-[8px] 2xl:text-[10px] font-bold text-woro-blue space-x-1 2xl:space-x-2'>
              <div>#Business</div>
              <div>#Art</div>
              <div>#Passion </div>
              <div>#Levelup</div>
              <div> #Growth</div>
              <div>#Lorem</div>
              <div>#Ipsum</div>
              <div> #Dolor </div>
            </div>
            {/* copy to clipboard */}
            <CopyToClipBoard
              text={
                "Vivek says calm down let the api ready. He'll fix this later."
              }
            />
          </div>

          <div className='bg-white  relative h-4/5 w-1/2 4xl:w-2/3 max-w-[500px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[9px_8px] 2xl:p-[12px_10px] min-w-[245px] rounded-[10px]'>
            <div className='flex justify-between mb-[5px] gap-[23px] font-bold'>
              <div className='flex w-[14.7px] h-[14.7px] 2xl:h-[20px] 2xl:w-[20px] space-x-[5px]'>
                <Image
                  src='/assets/images/dashboard/fb.png'
                  width='20'
                  alt='socials'
                  height='20'
                ></Image>
                <h6 className='text-[10px] 2xl:text-[14px] font-bold'>
                  {' '}
                  FaceBook
                </h6>
              </div>

              <div className='flex space-x-[5px] items-center'>
                <input type='checkbox'></input>
                <label className='text-[8px] 2xl:text-[10px] '>Latest</label>
                <input type='checkbox'></input>
                <label className='text-[8px] 2xl:text-[10px] '>Month</label>
              </div>
            </div>

            <div className='flex flex-wrap text-[8px] 2xl:text-[10px] font-bold text-woro-blue space-x-1 2xl:space-x-2'>
              <div>#Business</div>
              <div>#Art</div>
              <div>#Passion </div>
              <div>#Levelup</div>
              <div> #Growth</div>
              <div>#Lorem</div>
              <div>#Ipsum</div>
              <div> #Dolor </div>
            </div>
            {/* copy to clipboard */}
            <CopyToClipBoard
              text={
                "Vivek says calm down let the api ready. He'll fix this later."
              }
            />
          </div>
        </div>
      )}

      {expandedCard === cardId && (
        <div className='flex justify-between w-full h-full'>
          {/* left */}
          <div className=' p-6 2xl:p-[46px] max-w-[740px] 2xl:max-w-[1057px]'>
            <div>
              <h3 className='text-xl 2xl:text-[24px] font-bold'>
                Select social media
              </h3>
            </div>
            <div className='flex mt-5 2xl:mt-[22px] mb-4 2xl:mb-[40px] gap-[20px]'>
              {data?.map((item, indx) => {
                return (
                  <div
                    key={nanoid(4)}
                    onClick={() => {
                      setActiveSocial(indx);
                    }}
                    className={classNames(
                      'flex gap-2 2xl:gap-[10px] font-bold text-[11px] 2xl:text-[14px] items-center justify-center shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] w-[174px] h-[70px] 2xl:h-[94px] rounded-[20px]',
                      { 'bg-woro-blue text-white': activeSocial === indx },
                    )}
                  >
                    <Image
                      alt='social icon'
                      src={
                        activeSocial === indx
                          ? item?.whiteIconUrl
                          : item?.iconUrl
                      }
                      width='32'
                      height='32'
                      className='w-6 2xl:w-8'
                    />
                    <span>{item?.name}</span>
                  </div>
                );
              })}
            </div>
            <div className='flex flex-col font-bold gap-3 2xl:gap-[23px]'>
              <h3 className='text-xl 2xl:text-[24px]'>Popular Tags</h3>
              <div className='flex text-sm 2xl:text-[1rem] gap-4'>
                <div className='flex gap-2'>
                  <input type='checkbox'></input>
                  <label>Latest |</label>
                </div>
                <div className='flex gap-2'>
                  <input type='checkbox'></input>
                  <label>Month |</label>
                </div>
                <div className='flex gap-2'>
                  <input type='checkbox'></input>
                  <label>Year</label>
                </div>
              </div>

              <div className='flex font-normal  text-woro-blue text-[14px] 2xl:text-[18px] flex-wrap space-x-2'>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
              </div>
              <p className='underline font-normal  text-woro-blue text-[14px] 2xl:text-[18px]'>
                show more
              </p>

              <div className='text-sm 2xl:text-[1rem] flex gap-1 items-center justify-center h-8 2xl:h-[48px] text-white bg-woro-blue'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 2xl:h-6 2xl:w-6'
                  viewBox='0 0 25 24'
                  fill='none'
                >
                  <path
                    d='M7.4998 6V3C7.4998 2.44772 7.94752 2 8.4998 2H20.4998C21.0521 2 21.4998 2.44772 21.4998 3V17C21.4998 17.5523 21.0521 18 20.4998 18H17.4998V20.9991C17.4998 21.5519 17.0499 22 16.493 22H4.50666C3.95059 22 3.5 21.5554 3.5 20.9991L3.5026 7.00087C3.5027 6.44811 3.95264 6 4.50942 6H7.4998ZM5.50242 8L5.50019 20H15.4998V8H5.50242ZM9.4998 6H17.4998V16H19.4998V4H9.4998V6Z'
                    fill='white'
                  />
                </svg>
                <span>Copy tags</span>
              </div>
              <div
                style={{
                  background:
                    'linear-gradient(95deg, #7F1DFE 0%, #FD5C5C 100%)',
                }}
                className='text-sm 2xl:text-[1rem] flex gap-1 items-center justify-center h-8 2xl:h-[48px] text-white bg-woro-blue'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 2xl:h-6 2xl:w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124C8.72757 13.8128 9.81283 12.7276 11.124 12C9.81283 11.2724 8.72757 10.1872 8 8.87601C7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z'
                    fill='white'
                  />
                </svg>
                <span>Create with AI</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full bg-center bg-cover bg-[url('/assets/images/dashboard/popularHashtags.png')]"></div>
        </div>
      )}
      {/* expand btn */}
      <div className='z-100 absolute 2xl:top-[20px] 2xl:right-[20px] top-[10px] right-[10px]'>
        {' '}
        <ExpandBtn cardId={cardId} />
      </div>
    </div>
  );
};

export default PopularHashtags;

const CopyToClipBoard = ({ text }) => {
  const [isCopying, setIsCopying] = useState(false);

  function copyToClipboard(text) {
    setIsCopying(true);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Text copied to clipboard');
      })
      .catch((err) => {
        toast.error('Unable to copy text to clipboard');
      })
      .finally(() => {
        // Enable the button after a cooldown period
        setTimeout(() => {
          setIsCopying(false);
        }, 5000);
      });
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (!isCopying) copyToClipboard(text);
      }}
      title='Click to copy'
      className='bg-[#7F7789] group hover:bg-white hover:border hover:border-[#7F7789] cursor-pointer w-4 2xl:w-[21px] h-4 2xl:h-[21px] rounded-full flex justify-center items-center absolute bottom-1 right-1 4xl:bottom-2 4xl:right-2 '
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='2xl:w-[13px] 2xl:h-[13px] w-[9px] h-[9px]'
        viewBox='0 0 13 13'
        fill='none'
      >
        <path
          d='M3.79156 3.25016V1.62516C3.79156 1.32601 4.03407 1.0835 4.33323 1.0835H10.8332C11.1324 1.0835 11.3749 1.32601 11.3749 1.62516V9.2085C11.3749 9.50766 11.1324 9.75016 10.8332 9.75016H9.20822V11.3747C9.20822 11.6741 8.96453 11.9168 8.66287 11.9168H2.17027C1.86907 11.9168 1.625 11.676 1.625 11.3747L1.62641 3.7923C1.62646 3.49289 1.87018 3.25016 2.17177 3.25016H3.79156ZM2.70964 4.3335L2.70844 10.8335H8.12489V4.3335H2.70964ZM4.87489 3.25016H9.20822V8.66683H10.2916V2.16683H4.87489V3.25016Z'
          className='fill-white group-hover:fill-[#7F7789]'
        />
      </svg>
    </div>
  );
};
