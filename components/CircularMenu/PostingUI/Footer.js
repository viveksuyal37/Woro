import { clearMenuState } from '@/Redux/slices/CircularMenuSlice';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        background:
          'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)',
      }}
      className='flex rounded-[20px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] mx-auto w-max gap-[10px] p-2 2xl:p-[14px] child:flex child:gap-[10px] child:w-[150px] child:2xl:w-[175px] child:h-[65px] child:2xl:h-[90px] child:items-center child:justify-center font-bold'
    >
      <button
        onClick={() => {
          dispatch(clearMenuState());
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
        >
          <path
            d='M7.59343 0.46955C7.99234 0.165614 8.48822 0 8.99936 0C9.51049 0 10.0064 0.165614 10.4053 0.46955L17.1553 5.60542C17.6889 6.0114 18 6.62648 18 7.27703V15.8601C18 16.4276 17.7629 16.9719 17.341 17.3732C16.919 17.7745 16.3467 18 15.75 18H11.25C10.9943 18 10.749 17.9034 10.5681 17.7314C10.3873 17.5594 10.2857 17.3261 10.2857 17.0829V10.663H7.71429V17.0829C7.71429 17.3261 7.61269 17.5594 7.43185 17.7314C7.25101 17.9034 7.00574 18 6.75 18H2.25C1.65326 18 1.08097 17.7745 0.65901 17.3732C0.237053 16.9719 0 16.4276 0 15.8601V7.27581C0 6.62648 0.311143 6.0114 0.844714 5.60542L7.59343 0.46955ZM9.20057 1.90148C9.14361 1.85822 9.07289 1.83466 9 1.83466C8.92711 1.83466 8.85639 1.85822 8.79943 1.90148L2.04943 7.03735C2.01161 7.06607 1.9811 7.10255 1.96018 7.14404C1.93925 7.18554 1.92845 7.231 1.92857 7.27703V15.8601C1.92857 16.0288 2.07257 16.1658 2.25 16.1658H5.78571V9.74592C5.78571 9.50268 5.88731 9.26941 6.06815 9.09741C6.24899 8.92542 6.49426 8.8288 6.75 8.8288H11.25C11.5057 8.8288 11.751 8.92542 11.9319 9.09741C12.1127 9.26941 12.2143 9.50268 12.2143 9.74592V16.1658H15.75C15.8352 16.1658 15.917 16.1336 15.9773 16.0762C16.0376 16.0189 16.0714 15.9411 16.0714 15.8601V7.27581C16.0714 7.22999 16.0605 7.18477 16.0395 7.14349C16.0186 7.10222 15.9882 7.06595 15.9506 7.03735L9.20057 1.90148Z'
            fill='#242128'
          />
        </svg>
        <p>Home</p>
      </button>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <g clipPath='url(#clip0_2650_20412)'>
            <path
              d='M21.99 8C21.99 7.28 21.62 6.65 21.05 6.3L13.01 1.59C12.39 1.22 11.61 1.22 10.99 1.59L2.95 6.3C2.38 6.65 2 7.28 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18L21.99 8ZM10.94 12.34L3.74 7.84L10.99 3.59C11.61 3.22 12.39 3.22 13.01 3.59L20.26 7.84L13.06 12.34C12.41 12.74 11.59 12.74 10.94 12.34Z'
              fill='black'
            />
          </g>
          <defs>
            <clipPath id='clip0_2650_20412'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <p>Drafts</p>
      </div>
    </div>
  );
};
export default Footer;
