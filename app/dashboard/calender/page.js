'use client';

import moment from 'moment/moment';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import customEvent from '@/components/ReactBigCalender/CustomEventComp';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const page = () => {
  const events = [
    {
      title: 'Reel',
      start: new Date(moment().startOf('day')),
      end: new Date(moment().startOf('day').add(1, 'hours')),
    },
    {
      title: 'Post',
      start: new Date(moment().startOf('day').add(2, 'hours')),
      end: new Date(moment().startOf('day').add(3, 'hours')),
    },
  ];

  // Custom components for the calendar
  const customToolbar = ({ label, onNavigate }) => {
    const goToPrev = () => {
      onNavigate('PREV');
    };

    const goToNext = () => {
      onNavigate('NEXT');
    };

    return (
      <div className='flex gap-5 mb-3 2xl:mb-5'>
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

        <h2 className='text-xl font-bold 2xl:text-2xl me-1'>{label}</h2>

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
    );
  };

  const CustomWeekHeader = ({ label }) => {
    return (
      <div className='font-bold h-[45px] 2xl:h-[72px] text-white bg-woro-blue flex justify-center items-center'>
        <span>{label}</span>
      </div>
    );
  };

  return (
    <div className='mt-7 w-full h-[66vh]  rounded-xl '>
      <Calendar
        localizer={localizer}
        defaultView='week'
        components={{
          toolbar: customToolbar,
          event: customEvent,
          week: {
            header: CustomWeekHeader,
          },
        }}
        events={events}
        startAccessor='start'
        endAccessor='end'
      />
      <style global jsx>{`
        .rbc-time-view {
          background: white;
          border: none;
          border-radius: 20px;
          overflow: hidden;
        }
        .rbc-header {
          min-height: 72px;
          padding: 0px;
        }
        .rbc-button-link {
          width: 100%;
        }
        .rbc-time-content::-webkit-scrollbar {
          display: none;
        }

        .rbc-time-header-gutter {
          background: #7f1dfe;
          padding: 0px;
        }
        .rbc-time-header {
          margin: 0px !important;
          max-height: 72px;
        }

        .rbc-allday-cell {
          display: none;
        }

        .rbc-timeslot-group {
          min-height: 110px;

          justify-content: center;
        }

        .rbc-time-slot {
          flex: 0;
          border: none;
        }

        .rbc-day-slot .rbc-time-slot {
          border: none;
        }

        .rbc-day-slot .rbc-event,
        .rbc-day-slot .rbc-background-event {
          background: none;
          border: none;
        }
        .rbc-day-slot .rbc-event-content {
          flex: none;
          padding: 10px;
        }
        .rbc-event-label {
          display: none !important;
        }

        @media screen and (max-width: 1400px) {
          .rbc-header {
            min-height: 45px;
          }
          .rbc-timeslot-group {
            min-height: 65px;
          }
          .rbc-label {
            font-size: 12px;
          }
          .rbc-time-header-gutter {
            max-width: 57px;
          }
          .rbc-time-view {
            border-radius: 11px;
          }
        }
      `}</style>
    </div>
  );
};

export default page;
