import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment/moment';
import customEvent from '@/components/ReactBigCalender/CustomEventComp';
import { useDispatch } from 'react-redux';
import { confirmPostsScheduling } from '@/Redux/slices/CircularMenuSlice';
const localizer = momentLocalizer(moment, { firstDay: 1 });

const Right = () => {
  const dispatch = useDispatch();
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

    // Customizing the label format
    const formattedLabel = moment(label).format('DD MMM');

    return (
      <div className='flex justify-between'>
        <h2 className='text-xl font-bold 2xl:text-2xl'>Select Time</h2>
        <div className=' flex justify-end pb-3 gap-3 2xl:gap-[22px]'>
          <button onClick={goToPrev}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6 '
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M8.5 12.4989L14.4999 6.69238L16.5 8.62788L12.5 12.4989L16.5 16.3698L14.4999 18.3053L8.5 12.4989Z'
                fill='#080808'
              />
            </svg>
          </button>
          <h2>
            <span className='text-xl font-bold 2xl:text-2xl me-1'>
              {formattedLabel.split(' ')[0]}
            </span>
            {formattedLabel.split(' ')[1]}
          </h2>
          <button onClick={goToNext}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6 '
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
      <button
        onClick={() => {
          dispatch(confirmPostsScheduling());
        }}
        className='w-full text-[12px] 2xl:text-[1rem] py-2 mt-3 font-bold border 2xl:border-2 rounded-md 2xl:py-3 hover:bg-woro-blue hover:text-white border-woro-blue text-woro-blue'
      >
        Confirm schedule
      </button>
      <style global jsx>
        {`
          .rbc-time-view {
            border-radius: 10px;
          }
          .rbc-time-header {
            display: none !important;
          }

          .rbc-timeslot-group {
            min-height: 120px;
            border: none;
            justify-content: center;
          }
          .rbc-time-slot {
            flex: 0;
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
          .rbc-time-content {
            border: none;
          }
          .rbc-time-content::-webkit-scrollbar {
            display: none;
          }
          @media screen and (max-width: 1400px) {
            .rbc-timeslot-group {
              min-height: 65px;
            }
          }
        `}
      </style>
    </>
  );
};
export default Right;
