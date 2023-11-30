import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment/moment';
const localizer = momentLocalizer(moment);

const Left = () => {
  // Custom components for the calendar
  const CustomToolbar = (toolbar) => {
    const goToPrev = () => {
      toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    // Customizing the label format
    const formattedLabel = moment(toolbar.label).format('MMMM YYYY');

    return (
      <div className='flex justify-between'>
        <h2 className='pb-5 text-2xl font-bold'>{formattedLabel}</h2>

        <div className='flex justify-end gap-1 '>
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

  const CustomMonthHeader = ({ label }) => {
    return (
      <div className='font-bold h-[72px] flex justify-center items-center'>
        {label?.slice(0, 2)}
      </div>
    );
  };

  return (
    <Calendar
      localizer={localizer}
      components={{
        toolbar: CustomToolbar,
        month: {
          header: CustomMonthHeader,
        },
      }}
      startAccessor='start'
      endAccessor='end'
      style={{ height: '50vh' }}
    />
  );
};
export default Left;
