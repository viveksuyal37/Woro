import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment/moment';
import Image from 'next/image';
const localizer = momentLocalizer(moment, { firstDay: 1 });

const Right = () => {
  const events = [
    {
      title: 'Reel',
      start: new Date(2023, 10, 30, 0, 0),
      end: new Date(2023, 10, 30, 1, 0),
    },
    {
      title: 'Post',
      start: new Date(2023, 10, 30, 2, 0),
      end: new Date(2023, 10, 30, 3, 0),
    },
  ];

  // Custom components for the calendar
  const customToolbar = (toolbar) => {
    const goToPrev = () => {
      toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    // Customizing the label format
    const formattedLabel = moment(toolbar.label).format('DD MMM');

    return (
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>Select Time</h2>
        <div className=' flex justify-end pb-3 gap-[22px]'>
          <button onClick={goToPrev}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M8.5 12.4989L14.4999 6.69238L16.5 8.62788L12.5 12.4989L16.5 16.3698L14.4999 18.3053L8.5 12.4989Z'
                fill='#080808'
              />
            </svg>
          </button>
          <h2>{formattedLabel}</h2>
          <button onClick={goToNext}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M15.5 12.5001L9.50005 6.5L7.5 8.50001L11.5 12.5001L7.5 16.5L9.50005 18.5L15.5 12.5001Z'
                fill='#242128'
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const customEvent = ({ event }) => {
    return (
      <div className='flex gap-2 p-2 text-woro-blue bg-white border-2 border-woro-blue rounded-[10px] max-w-[215px] text-[14px] relative'>
        <Image
          width='78'
          height='59'
          className='w-[78px] h-[59px]'
          alt='event'
          src='/assets/images/news.png'
        />
        <div className='flex flex-col gap-2 '>
          <span className='font-bold'>{event.title}</span>
          <span>Posting to</span>
          <div className='flex gap-1'>
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
        <svg
          className='absolute top-3 right-2'
          xmlns='http://www.w3.org/2000/svg'
          width='5'
          height='15'
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
      </div>
    );
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        components={{
          toolbar: customToolbar,
          event: customEvent,
        }}
        defaultView='day'
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: '50vh' }}
      />
      <button className='w-full py-3 mt-3 font-bold border-2 rounded-md border-woro-blue text-woro-blue'>
        Confirm schedule
      </button>
      <style global jsx>
        {`
          .rbc-time-header {
            display: none !important;
          }
          .rbc-timeslot-group {
            min-height: 120px;
          }
          .rbc-day-slot .rbc-event,
          .rbc-day-slot .rbc-background-event {
            background: none;
            border: 1px solid white;
          }
          .rbc-event-label {
            display: none !important;
          }
        `}
      </style>
    </>
  );
};
export default Right;
