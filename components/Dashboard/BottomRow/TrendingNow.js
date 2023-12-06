/*BuiltIn imports */
import Image from 'next/image';

/*custom components */
import ExpandBtn from '../ExpandBtn';

/*External imports */
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

const TrendingNow = ({ cardId, expandedCard }) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  return (
    <div
      style={{
        background:
          ' linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
      }}
      className={classNames(
        ' relative rounded-[11px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] opacity-1  overflow-hidden transition-all duration-300 ease-in-out',
        { 'w-0 h-0 opacity-0 p-0': expandedCard && expandedCard !== cardId },
        { 'w-full h-[66vh] p-8 2xl:p-[41px_46px]': expandedCard === cardId },
        {
          'w-[39.68vw] 4xl:w-full p-[11px_0_11px_14px] 2xl:p-[20px_0px_14px_14px] ':
            !expandedCard,
        },
      )}
    >
      {!expandedCard && (
        <div className='mb-[5px] 2xl:mb-[10px] text-[11.5px] 2xl:text-[1rem] '>
          <p className='font-bold text-woro-blue'>
            Popular News <span className='font-normal text-black'>and</span>{' '}
            Viral topics
          </p>
        </div>
      )}

      {!expandedCard && (
        <div
          {...events}
          ref={ref}
          className='flex w-full h-full gap-2 pr-3 overflow-auto child:flex-shrink-0 scrollableContainer'
        >
          {/* news card*/}

          <div className='flex gap-[10px] rounded-[11px] 2xl:gap-4 p-[6.44px] 2xl:p-[10px_15px_10px_10px] max-w-[670px] h-4/5 w-2/3 2xl:w-1/2 2xl:min-w-[334px] bg-white leading-tight shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.35)]'>
            <div className='w-[61px] 2xl:w-[80px] 3xl:w-[90px] 4xl:w-[150px]  flex-shrink-0 '>
              <Image
                className='rounded-[5px] w-full h-full'
                src='/assets/images/news.png'
                alt=''
                width='95'
                height='119'
              ></Image>
            </div>
            <div className='flex flex-col gap-[6px] 4xl:gap-3 '>
              <h6 className='text-[9px] 2xl:text-[14px] 4xl:text-[1rem]  font-bold'>
                "Scientists Make Breakthrough in Renewable Energy Storage”
              </h6>
              <p className='text-[6.5px] 2xl:text-[10px] font-bold'>
                <span className='text-[#7F7789] font-normal'>By</span> Jackie
                Chen
              </p>
              <p className='text-[9px] 2xl:text-[11px] 3xl:text-[14px] text-[#7F7789] '>
                <span className='max-w-[170px] '>
                  In a groundbreaking development th{' '}
                </span>
              </p>
              <p className='mt-[2px] text-[5px] 2xl:text-[8px]'>
                November 17, 2023
              </p>
            </div>
          </div>

          <div className='flex gap-[10px] rounded-[11px] 2xl:gap-4 p-[6.44px] 2xl:p-[10px_15px_10px_10px] max-w-[670px] h-4/5 w-2/3 2xl:w-1/2 2xl:min-w-[334px] bg-white leading-tight shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.35)]'>
            <div className='w-[61px] 2xl:w-[80px] 3xl:w-[90px] 4xl:w-[150px]  flex-shrink-0 '>
              <Image
                className='rounded-[5px] w-full h-full'
                src='/assets/images/news.png'
                alt=''
                width='95'
                height='119'
              ></Image>
            </div>
            <div className='flex flex-col gap-[6px] 4xl:gap-3 '>
              <h6 className='text-[9px] 2xl:text-[14px] 4xl:text-[1rem]  font-bold'>
                "Scientists Make Breakthrough in Renewable Energy Storage”
              </h6>
              <p className='text-[6.5px] 2xl:text-[10px] font-bold'>
                <span className='text-[#7F7789] font-normal'>By</span> Jackie
                Chen
              </p>
              <p className='text-[9px] 2xl:text-[11px] 3xl:text-[14px] text-[#7F7789] '>
                <span className='max-w-[170px] '>
                  In a groundbreaking development th{' '}
                </span>
              </p>
              <p className='mt-[2px] text-[5px] 2xl:text-[8px]'>
                November 17, 2023
              </p>
            </div>
          </div>
        </div>
      )}

      {expandedCard === cardId && (
        <section className='h-full overflow-y-scroll scrollableContainer'>
          {/* top Popular */}
          <h1 className='text-2xl 2xl:text-[36px] mb-2 font-bold text-woro-blue w-max'>
            Popular
          </h1>
          <PopularNews />
          {/* bottom latest News */}

          <h1 className='text-2xl 2xl:text-[36px] mb-2 mt-6 2xl:mt-8 font-bold text-woro-blue w-max'>
            Latest News
          </h1>
          <LatestNews />
        </section>
      )}

      <div
        className={classNames('absolute ', {
          'top-[13px] 2xl:top-4 right-4': !expandedCard,
          'top-8 2xl:top-[41px] right-8 2xl:right-[46px]': expandedCard,
        })}
      >
        <ExpandBtn cardId={cardId} />
      </div>
    </div>
  );
};

export default TrendingNow;

const PopularNews = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <div
      ref={ref}
      {...events}
      className='flex w-full gap-5 overflow-x-auto scrollableContainer 2xl:gap-8'
    >
      {/* cards */}

      {['', '', '', '']?.map(() => {
        return (
          <div
            key={nanoid(4)}
            className='flex flex-col flex-shrink-0 w-[360px] 2xl:w-[502px] gap-[22px]'
          >
            <div className="bg-[url('/assets/images/newsExpanded.png')] w-full h-[188px] rounded-[10px] bg-cover bg-center"></div>
            <h2 className='text-xl 2xl:text-[26px] leading-tight 2xl:leading-[29px] font-bold'>
              "Scientists make breakthrough in renewable energy storage”
            </h2>
            <div className='flex text-sm 2xl:text-[16px] justify-between'>
              <div className='space-x-2'>
                <span>Guwahati, Assam</span>
                <span>5h ago</span>
                <span>November 17, 2023</span>
              </div>
              <p>
                By <strong>Jacki Chen</strong>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const LatestNews = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className='flex w-full gap-5 overflow-x-auto scrollableContainer 2xl:gap-8'
    >
      {/*  cards */}

      {['', '', '', '']?.map(() => {
        return (
          <div
            key={nanoid(4)}
            className='flex flex-col flex-shrink-0 w-[360px] 2xl:w-[502px] gap-[22px]'
          >
            <div className="bg-[url('/assets/images/newsExpanded.png')] w-full h-[188px] rounded-[10px] bg-cover bg-center"></div>
            <h2 className='text-xl 2xl:text-[26px] leading-tight 2xl:leading-[29px] font-bold'>
              "Scientists make breakthrough in renewable energy storage”
            </h2>
            <div className='flex text-sm 2xl:text-[16px] justify-between'>
              <div className='space-x-2'>
                <span>Guwahati, Assam</span>
                <span>5h ago</span>
                <span>November 17, 2023</span>
              </div>
              <p>
                By <strong>Jacki Chen</strong>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
