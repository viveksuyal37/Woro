import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment/moment';
const localizer = momentLocalizer(moment);

const Left = () => {
  const events = [
    {
      title: 'Reel',
      start: new Date(moment().startOf('day')),
      end: new Date(moment().startOf('day').add(1, 'hours')),
      allDay: true,
    },
    {
      title: 'Reel',
      start: new Date(moment().startOf('day').add(49, 'hours')),
      end: new Date(moment().startOf('day').add(50, 'hours')),
      allDay: true,
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
    const formattedLabel = moment(toolbar.label).format('MMMM YYYY');

    return (
      <div className='flex items-center justify-between pb-3 2xl:pb-5'>
        <h2 className='text-xl font-bold 2xl:text-2xl'>{formattedLabel}</h2>

        <div className='flex justify-end gap-2 '>
          <button
            className='p-[6px] bg-white rounded-md shadow-md'
            onClick={goToPrev}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M8.5 12.4989L14.4999 6.69238L16.5 8.62788L12.5 12.4989L16.5 16.3698L14.4999 18.3053L8.5 12.4989Z'
                fill='#080808'
              />
            </svg>
          </button>

          <button
            className='p-[6px] bg-white rounded-md shadow-md'
            onClick={goToNext}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
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

  const customMonthHeader = ({ label }) => {
    return (
      <div className='font-bold h-[45px] 2xl:h-[72px] bg-woro-blue text-white flex justify-center items-center'>
        {label?.slice(0, 2)}
      </div>
    );
  };

  const customEvent = (event) => {
    return (
      <div className='flex justify-end child:w-2 child:h-full child:min-h-[60px]'>
        <div className='bg-[rgba(209,_0,_0,_0.50)]'></div>
        <div className='bg-[rgba(254,_213,_0,_0.50)]'></div>
        <div className='bg-[rgba(0,_178,_255,_0.50)]'></div>
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
          month: {
            header: customMonthHeader,
          },
        }}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: '50vh' }}
      />
      <div className='flex items-center text-[12px] 2xl:text-[1rem] gap-2 mt-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-3 2xl:w-[18px] h-3 2xl:h-[18px]'
          viewBox='0 0 18 18'
          fill='none'
        >
          <ellipse
            cx='8.65385'
            cy='8.74168'
            rx='8.65385'
            ry='8.65379'
            fill='#00FF85'
          />
        </svg>
        <span>Public Holidays</span>
      </div>
      <style global jsx>
        {`
          .rbc-month-view {
            border-radius: 10px;
            overflow: auto;
          }
          .rbc-month-view::-webkit-scrollbar {
            display: none;
          }
          .rbc-month-row {
            min-height: 73px;
          }

          .rbc-month-header {
            position: sticky;
            top: 0;
            z-index: 10;
          }

          .rbc-header {
            padding: 0;
          }

          .rbc-event {
            background: none;
            padding: 0;
          }

          .rbc-date-cell {
            text-align: center;
          }

          @media screen and (max-width: 1400px) {
            .rbc-month-row {
              min-height: 60px;
            }
            .rbc-label {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  );
};
export default Left;
