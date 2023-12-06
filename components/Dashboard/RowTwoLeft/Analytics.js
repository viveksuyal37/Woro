'use client';
import classNames from 'classnames';
import ExpandBtn from '../ExpandBtn';

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const Analytics = ({ cardId, expandedCard }) => {
  const data = [
    {
      name: '20 Sep',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '20 Sep',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '20 Sep',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '20 Sep',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '20 Sep',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '20 Sep',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '20 Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // graph margin
  const smallScreenMargin = { top: 26, left: -20, bottom: 12 };
  const bigScreenMargin = { top: 26, bottom: 30 };

  // Determine the screen size and set the appropriate margin and datakey sizes
  const screenWidth = typeof window === 'object' ? window.innerWidth : '';

  // graph datakey sizes
  const datakeySize = screenWidth > 1500 ? { fontSize: 14 } : { fontSize: 11 };
  const margin = screenWidth > 1500 ? bigScreenMargin : smallScreenMargin;

  return (
    <section
      className={classNames(
        'flex flex-col relative w-full h-full gap-[22px] ',
        {
          ' hidden': expandedCard && cardId !== expandedCard,
        },
      )}
    >
      <div
        style={{
          background:
            'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
        }}
        className={classNames(
          ' transition-all  duration-300 overflow-hidden opacity-1 ease-in-out rounded-[11px] 2xl:rounded-[20px] shadow-[_3px_0px_11px_1px_rgba(190,_148,_243,_0.20)]',
          {
            'h-[34vh]  w-full p-[15px_20px_25px_20px] 3xl:p-[32px_20px_40px_20px]  ':
              cardId === expandedCard,
            'w-[43.58vw] h-[34.35vh] 4xl:h-[40vh] min-h-[213px] 2xl:min-h-[305px] p-[12px] 2xl:p-[20px] max-w-[1000px] 4xl:max-w-[1300px] 5xl:max-w-[1500px] ':
              !expandedCard,
          },
        )}
      >
        {/* header */}
        <div className='flex items-center justify-between'>
          {!expandedCard && (
            <select className='w-[108px] 2xl:w-[142px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
              <option>Reach overview</option>
              <option value=''>Volvo</option>
              <option value=''>Saab</option>
              <option value=''>Mercedes</option>
              <option value=''>Audi</option>
            </select>
          )}

          {expandedCard === cardId && (
            <div className='flex flex-col text-[10px] 2xl:text-[14px] ml-10 2xl:ml-16 font-bold '>
              <h3 className='text-lg 2xl:text-xl 3xl:text-[28px] text-woro-blue '>
                Reach Overview
              </h3>
              <span>Users-Date graph</span>
            </div>
          )}

          <div className='flex  items-center mr-7 gap-[10px]  text-[10px] 2xl:text-[14px] text-[#7F7789] child:2xl:p-[9px]'>
            <select className=' w-[77px] 2xl:w-[111px] outline-none h-[25px]  2xl:h-[46px]   border border-[#C8C7C9] rounded-[6px]'>
              <option>Post</option>
            </select>
            <select className='w-[25px] 2xl:w-[67px] outline-none h-[25px]  2xl:h-[46px]   border border-[#C8C7C9] rounded-[6px]'>
              <option>Fb</option>
            </select>
            <select className='w-[137px] outline-none h-[25px]  2xl:h-[46px]    border border-[#C8C7C9] rounded-[6px]'>
              <option>Last & days</option>
            </select>
          </div>
        </div>

        {/* graph */}

        <ResponsiveContainer width='100%' h='100%'>
          <AreaChart width={500} height={400} data={data} margin={margin}>
            <defs>
              <linearGradient
                id='colorUv'
                x1='404.5'
                y1='-126.752'
                x2='404.5'
                y2='165.806'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#00FABA' />
                <stop offset='1' stopColor='#D9D9D9' stopOpacity='0' />
              </linearGradient>
            </defs>

            <XAxis dataKey='name' tick={datakeySize} />
            <YAxis tick={datakeySize} />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#00FABA'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* last row  */}
      {cardId === expandedCard && (
        <div className='grid grid-cols-5 h-[32vh]  gap-[22px] w-full'>
          {/* left graph */}
          <div
            style={{
              background:
                'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
            }}
            className='col-span-3 w-full h-[32vh] rounded-[11px] 2xl:rounded-[20px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[15px_20px_25px_20px] 3xl:p-[32px_20px_40px_20px]'
          >
            {/* header */}
            <div className='flex items-center justify-between'>
              <div className='flex flex-col text-[10px] 2xl:text-[14px] ml-10 2xl:ml-16 font-bold '>
                <h3 className='text-lg 2xl:text-xl 3xl:text-[28px] text-woro-blue '>
                  Impressions Overview
                </h3>
                <span>Users-Date graph</span>
              </div>

              <div className='flex  items-center mr-7  gap-[10px]'>
                <select className='w-[111px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] p-1 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
                  <option>Post</option>
                </select>
                <select className='w-[67px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] p-1 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
                  <option>Fb</option>
                </select>
                <select className='w-[137px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] p-1 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
                  <option>Last & days</option>
                </select>
              </div>
            </div>

            {/* graph */}

            <ResponsiveContainer width='100%' h='100%'>
              <AreaChart width={500} height={150} data={data} margin={margin}>
                <defs>
                  <linearGradient
                    id='colorUv2'
                    x1='353.5'
                    y1='-117.96'
                    x2='353.5'
                    y2='154.305'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#7F1DFE' />
                    <stop offset='1' stopColor='#D9D9D9' stopOpacity='0' />
                  </linearGradient>
                </defs>

                <XAxis dataKey='name' tick={datakeySize} />
                <YAxis tick={datakeySize} />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='uv'
                  stroke='#7F1DFE'
                  fillOpacity={1}
                  fill='url(#colorUv2)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* right graph */}
          <div
            style={{
              background:
                'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
            }}
            className='col-span-2 w-full h-[32vh] p-[15px_20px_25px_20px] 3xl:p-[32px_20px_40px_20px] rounded-[11px] 2xl:rounded-[20px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] '
          >
            {/* header */}
            <div className='flex items-center justify-between'>
              <div className='flex flex-col text-[10px] 2xl:text-[14px] ml-10 2xl:ml-16 font-bold '>
                <h3 className='text-lg 2xl:text-xl 3xl:text-[28px] text-woro-blue '>
                  Engagement Overview
                </h3>
                <span>Users-Date graph</span>
              </div>

              <div className='flex  items-center mr-7  gap-[10px]'>
                <select className='2xl:w-[111px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] p-1 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
                  <option>Post</option>
                </select>
                <select className='w-[67px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] p-1 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
                  <option>Fb</option>
                </select>
                {/* <select className='2xl:w-[137px] outline-none h-[25px] 2xl:h-[46px] text-[10px] 2xl:text-[14px] text-[#7F7789] p-1 2xl:p-[9px]  border border-[#C8C7C9] rounded-[6px]'>
                  <option>Last & days</option>
                </select> */}
              </div>
            </div>

            {/* graph */}

            <ResponsiveContainer width='100%' h='100%'>
              <AreaChart width={500} height={150} data={data} margin={margin}>
                <defs>
                  <linearGradient
                    id='colorUv3'
                    x1='356'
                    y1='-117.228'
                    x2='356'
                    y2='153.347'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#FEC963' />
                    <stop offset='1' stopColor='#D9D9D9' stopOpacity='0' />
                  </linearGradient>
                </defs>

                <XAxis dataKey='name' tick={datakeySize} />
                <YAxis tick={datakeySize} />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='uv'
                  stroke='#FEC963'
                  fillOpacity={1}
                  fill='url(#colorUv3)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* expand btn  */}
      <div className='absolute top-3 right-3 2xl:top-[20px] 2xl:right-[20px]'>
        <ExpandBtn cardId={cardId} />
      </div>
    </section>
  );
};

export default Analytics;
