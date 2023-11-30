import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex items-center justify-between py-2 2xl:py-4'>
      {/* left */}
      <div className='flex items-center gap-5 text-xl font-bold 2xl:text-2xl text-woro-blue'>
        <h2>Upload Files</h2>
        <Image
          src='/assets/images/dashboard/onedrive.png'
          alt='library'
          width='27'
          height='27'
          className='w-5 h-5 2xl:h-[27px] 2xl:w-[27px]'
        />
        <Image
          src='/assets/images/dashboard/dropbox.png'
          alt='library'
          width='27'
          height='27'
          className='w-5 h-5 2xl:h-[27px] 2xl:w-[27px]'
        />
        <Image
          src='/assets/images/dashboard/google-drive.png'
          alt='library'
          width='27'
          height='27'
          className='w-5 h-5 2xl:h-[27px] 2xl:w-[27px]'
        />
      </div>
      {/* right */}
      <div className='flex items-center child:items-center text-[12px] 2xl:text-[1rem] gap-5 font-bold'>
        <div className='flex space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 2xl:w-6 2xl:h-6'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5ZM11.0026 16.5L18.0737 9.42893L16.6595 8.01472L11.0026 13.6716L8.17421 10.8431L6.75999 12.2574L11.0026 16.5Z'
              fill='black'
            />
          </svg>
          <span>Select All</span>
        </div>
        <div className='flex space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 2xl:w-6 2xl:h-6'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M5 21.5V5.5C5 4.95 5.196 4.479 5.588 4.087C5.98 3.695 6.45067 3.49934 7 3.5H17C17.55 3.5 18.021 3.696 18.413 4.088C18.805 4.48 19.0007 4.95067 19 5.5V21.5L12 18.5L5 21.5Z'
              fill='#C1C1C1'
            />
          </svg>
          <span>Tags</span>
        </div>
        <div className='flex space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 2xl:w-6 2xl:h-6'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M12.001 5.02853C14.35 2.92 17.98 2.99 20.2426 5.25736C22.5053 7.52472 22.583 11.137 20.4786 13.493L11.9999 21.985L3.52138 13.493C1.41705 11.137 1.49571 7.51901 3.75736 5.25736C6.02157 2.99315 9.64519 2.91687 12.001 5.02853Z'
              fill='#C1C1C1'
            />
          </svg>
          <span>Favourite</span>
        </div>
        <div className='flex space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 2xl:w-6 2xl:h-6'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M16.0502 12.4498L14.636 11.0356L17.172 8.50079L4 8.50004L4 6.50004L17.172 6.50079L14.636 3.96451L16.0503 2.55029L21 7.50004L16.0502 12.4498ZM7.9497 22.4498L3 17.5L7.9497 12.5503L9.364 13.9645L6.828 16.5008L20 16.5L20 18.5L6.828 18.5008L9.364 21.0356L7.9497 22.4498Z'
              fill='#C1C1C1'
            />
          </svg>
          <span>Move</span>
        </div>
        <div className='flex space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 2xl:w-6 2xl:h-6'
            viewBox='0 0 24 25'
            fill='none'
          >
            <g clipPath='url(#clip0_2056_6583)'>
              <path
                d='M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM8.46 12.38L9.87 10.97L12 13.09L14.12 10.97L15.53 12.38L13.41 14.5L15.53 16.62L14.12 18.03L12 15.91L9.88 18.03L8.47 16.62L10.59 14.5L8.46 12.38ZM15.5 4.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5H15.5Z'
                fill='#C1C1C1'
              />
            </g>
            <defs>
              <clipPath id='clip0_2056_6583'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
