import { clearMenuState } from '@/Redux/slices/CircularMenuSlice';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

const SuccessUI = () => {
  const dispatch = useDispatch();
  return (
    <div className='relative flex items-center justify-center w-full h-full bg-white'>
      <div className='flex flex-col items-center max-w-[450px]  gap-8'>
        {/* rounded green design */}
        <div className='relative w-full flex items-center justify-center h-[260px]'>
          <div className=' flex items-center justify-center w-[181px] h-[181px] bg-[#E3FCF5] rounded-full animate-pulse scaleShadow'>
            <div className='absolute top-[50px] w-[153px] h-[153px] bg-[#00FABA] rounded-full flex items-center justify-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='54'
                height='54'
                viewBox='0 0 54 54'
                fill='none'
              >
                <path
                  d='M27 49.5C14.5736 49.5 4.5 39.4263 4.5 27C4.5 14.5736 14.5736 4.5 27 4.5C39.4263 4.5 49.5 14.5736 49.5 27C49.5 39.4263 39.4263 49.5 27 49.5ZM24.7558 36L40.6658 20.0901L37.4839 16.9081L24.7558 29.6361L18.392 23.272L15.21 26.4541L24.7558 36Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className='text-4xl font-bold text-woro-blue'>
          Post scheduled successfully
        </h1>

        <button
          onClick={() => {
            dispatch(clearMenuState());
          }}
          className='w-3/4 rounded-sm bg-woro-blue text-white h-[48px] flex items-center justify-center'
        >
          Home
        </button>
      </div>

      {/* tiny design figures */}

      {/* circles */}
      {Array(25)
        .fill('')
        .map((fig, indx) => {
          const topPosition = indx * Math.random() * 50;
          const leftPosition = indx * Math.random() * 450;
          // Array of possible colors
          const colors = [
            '#E93838',
            '#00FABA',
            '#7F1DFE',
            '#FEC963',
            '#E2DAED',
            'black',
          ];

          //single random index to select a color
          const randomColorIndex = Math.floor(Math.random() * colors.length);
          const fillColor = colors[randomColorIndex];

          return (
            <svg
              key={nanoid(4)}
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              className='drop'
              style={{
                top: `${topPosition}px`,
                left: `${leftPosition}px`,
                position: 'absolute',
              }}
              viewBox='0 0 18 18'
              fill={fillColor}
            >
              <circle cx='9' cy='9' r='9' fill={fillColor} />
            </svg>
          );
        })}

      {/* triangles */}
      <svg
        className='absolute drop top-2'
        xmlns='http://www.w3.org/2000/svg'
        width='27'
        height='24'
        viewBox='0 0 27 24'
        fill='none'
      >
        <path
          d='M4.40673 20.75L13.5 5L22.5933 20.75H4.40673Z'
          stroke='#C3F1E5'
          stroke-width='5'
        />
      </svg>

      <svg
        className='absolute drop top-6 right-3'
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='24'
        viewBox='0 0 28 24'
        fill='none'
      >
        <path
          d='M23.2651 2.92383L14.1719 18.6738L5.07861 2.92383L23.2651 2.92383Z'
          stroke='#FEC963'
          stroke-width='5'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='27'
        height='24'
        className='absolute drop top-1/2 right-1/4'
        viewBox='0 0 27 24'
        fill='none'
      >
        <path
          d='M22.5933 3.25L13.5 19L4.40673 3.25L22.5933 3.25Z'
          stroke='#7F1DFE'
          stroke-width='5'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='27'
        height='24'
        className='absolute drop top-1/4 right-3/4'
        viewBox='0 0 27 24'
        fill='none'
      >
        <path
          d='M4.40673 20.75L13.5 5L22.5933 20.75H4.40673Z'
          stroke='#C3F1E5'
          stroke-width='5'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        className='absolute drop top-20 left-3/4'
        viewBox='0 0 18 18'
        fill='none'
      >
        <circle cx='9' cy='9' r='6.5' stroke='#7F1DFE' stroke-width='5' />
      </svg>

      <style jsx>
        {`
          .scaleShadow {
            animation: shadow 2s linear infinite;
          }

          .drop {
            animation: dropAnimation 3s ease-out;
          }

          @keyframes dropAnimation {
            from {
              transform: translateY(-100vh);
            }
            to {
              transform: translateY(0);
            }
          }

          @keyframes shadow {
            50% {
              width: 300px;
              height: 300px;
            }
            100% {
              width: 181px;
              height: 181px;
            }
          }
        `}
      </style>
    </div>
  );
};
export default SuccessUI;
