import Image from 'next/image';

const MessageAside = () => {
  return (
    <aside className='flex-shrink-0 text-[13px] 2xl:text-[1rem] grid grid-cols-3 gap-2 2xl:gap-3 bg-white p-[20px_10px] 2xl:p-[30px_13px] '>
      {/* accounts */}

      <section className='flex flex-col gap-4 2xl:gap-6 font-bold child:rounded-lg child:flex child:flex-shrink-0 child:p-2 child:2xl:p-[11px] child:gap-2 child:items-center child:h-[50px] child:2xl:h-[66px] child:w-[139px] child:2xl:w-[169px] child:shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] child:relative child:cursor-pointer'>
        {/* woro messages */}
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='2xl:w-[30px] w-5 h-5 2xl:h-[30px]'
            viewBox='0 0 31 30'
            fill='none'
          >
            <path
              d='M9.43466 22.6562L4.5625 26.4844V6.25C4.5625 5.64594 5.05219 5.15625 5.65625 5.15625H25.3438C25.9478 5.15625 26.4375 5.64594 26.4375 6.25V21.5625C26.4375 22.1666 25.9478 22.6562 25.3438 22.6562H9.43466ZM8.67808 20.4688H24.25V7.34375H6.75V21.9837L8.67808 20.4688ZM14.4062 12.8125H16.5938V15H14.4062V12.8125ZM10.0312 12.8125H12.2188V15H10.0312V12.8125ZM18.7812 12.8125H20.9688V15H18.7812V12.8125Z'
              fill='url(#paint0_linear_2955_35463)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_2955_35463'
                x1='4.5625'
                y1='5.15625'
                x2='28.008'
                y2='7.05097'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#7F1DFE' />
                <stop offset='1' stopColor='#464BD3' />
              </linearGradient>
            </defs>
          </svg>
          Messages
        </div>
        {/* other messages */}
        <div className='!shadow-[0px_4px_27px_5px_rgba(0,_0,_0,_0.30)]'>
          <Image
            src='/assets/images/profile.png'
            width='44'
            height='44'
            className='w-8 h-8 2xl:w-11 2xl:h-11 '
            alt='profile'
          ></Image>
          <span className='truncate'>@BruceBannerrrrr</span>
          <Image
            src='/assets/images/dashboard/youtube.png'
            width='13'
            height='13'
            className='w-2 h-2 2xl:w-[13px] 2xl:h-[13px] absolute bottom-2 left-7 2xl:left-9'
            alt='youtube'
          ></Image>
        </div>

        <div>
          <Image
            src='/assets/images/profile.png'
            width='44'
            height='44'
            className='w-8 h-8 2xl:w-11 2xl:h-11 '
            alt='profile'
          ></Image>
          <span className='truncate'>@James</span>
          <Image
            src='/assets/images/dashboard/linkedIn.png'
            width='13'
            height='13'
            className='w-2 h-2 2xl:w-[13px] 2xl:h-[13px] absolute bottom-2 left-7 2xl:left-9'
            alt='linkedIn'
          ></Image>
        </div>

        <div>
          <Image
            src='/assets/images/profile.png'
            width='44'
            height='44'
            className='w-8 h-8 2xl:w-11 2xl:h-11 '
            alt='profile'
          ></Image>
          <span className='truncate'>@Harry</span>
          <Image
            src='/assets/images/dashboard/twitter.png'
            width='13'
            height='13'
            className='w-2 h-2 2xl:w-[13px] 2xl:h-[13px] absolute bottom-2 left-7 2xl:left-9'
            alt='twitter'
          ></Image>
        </div>
      </section>

      {/* messages */}
      <section className='col-span-2 flex flex-col gap-[11px]'>
        <div className='relative border-b-[0.5px] pb-1 border-[rgba(127,_119,_137,_0.50)]'>
          <div className=' flex items-center gap-3 2xl:gap-5 bg-[rgba(70,_75,_211,_0.05)] rounded-[10px] p-4 2xl:py-[22px]'>
            {/* left */}
            <Image
              src='/assets/images/profile.png'
              width='50'
              height='50'
              className='w-8 2xl:w-[50px]'
              alt='profile'
            />
            {/* right */}
            <div className='w-full'>
              <div className='flex items-center space-x-1 font-bold leading-tight 2xl:text-lg'>
                <h6>Jonathan</h6>
                <div className='rounded-full w-1 2xl:w-2 h-1 2xl:h-2 bg-[#00FABA]'></div>
              </div>
              <div className='flex text-[11px] 2xl:text-[1rem] items-center space-x-2'>
                <div className='rounded-full w-[6px] h-[6px] bg-[#7F7789]'></div>
                <p className='max-w-[100px] truncate'>Hello...</p>
                <div className='rounded-full w-[6px] h-[6px] bg-[#7F7789]'></div>
                <p className='text-[#7F7789]'>4hrs</p>
              </div>
            </div>
          </div>
          <div className='absolute right-2 top-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='4'
              height='14'
              className='w-[2px] h-3 2xl:w-1 2xl:h-[14px]'
              viewBox='0 0 4 14'
              fill='none'
            >
              <rect width='4' height='4' rx='2' fill='black' />
              <rect y='5' width='4' height='4' rx='2' fill='black' />
              <rect y='10' width='4' height='4' rx='2' fill='black' />
            </svg>
          </div>
        </div>

        <div className='relative border-b-[0.5px] pb-1 border-[rgba(127,_119,_137,_0.50)]'>
          <div className=' flex items-center gap-3 2xl:gap-5 bg-[rgba(70,_75,_211,_0.05)] rounded-[10px] p-4 2xl:py-[22px]'>
            {/* left */}
            <Image
              src='/assets/images/profile.png'
              width='50'
              height='50'
              className='w-8 2xl:w-[50px]'
              alt='profile'
            />
            {/* right */}
            <div className='w-full'>
              <div className='flex items-center space-x-1 font-bold leading-tight 2xl:text-lg'>
                <h6>Jonathan</h6>
                <div className='rounded-full w-1 2xl:w-2 h-1 2xl:h-2 bg-[#00FABA]'></div>
              </div>
              <div className='flex text-[11px] 2xl:text-[1rem] items-center space-x-2'>
                <div className='rounded-full w-[6px] h-[6px] bg-[#7F7789]'></div>
                <p className='max-w-[100px] truncate'>Hello...</p>
                <div className='rounded-full w-[6px] h-[6px] bg-[#7F7789]'></div>
                <p className='text-[#7F7789]'>4hrs</p>
              </div>
            </div>
          </div>
          <div className='absolute right-2 top-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='4'
              height='14'
              className='w-[2px] h-3 2xl:w-1 2xl:h-[14px]'
              viewBox='0 0 4 14'
              fill='none'
            >
              <rect width='4' height='4' rx='2' fill='black' />
              <rect y='5' width='4' height='4' rx='2' fill='black' />
              <rect y='10' width='4' height='4' rx='2' fill='black' />
            </svg>
          </div>
        </div>

        <div className='relative border-b-[0.5px] pb-1 border-[rgba(127,_119,_137,_0.50)]'>
          <div className=' flex items-center gap-3 2xl:gap-5 bg-[rgba(70,_75,_211,_0.05)] rounded-[10px] p-4 2xl:py-[22px]'>
            {/* left */}
            <Image
              src='/assets/images/profile.png'
              width='50'
              height='50'
              className='w-8 2xl:w-[50px]'
              alt='profile'
            />
            {/* right */}
            <div className='w-full'>
              <div className='flex items-center space-x-1 font-bold leading-tight 2xl:text-lg'>
                <h6>Jonathan</h6>
                <div className='rounded-full w-1 2xl:w-2 h-1 2xl:h-2 bg-[#00FABA]'></div>
              </div>
              <div className='flex text-[11px] 2xl:text-[1rem] items-center space-x-2'>
                <div className='rounded-full w-[6px] h-[6px] bg-[#7F7789]'></div>
                <p className='max-w-[100px] truncate'>Hello...</p>
                <div className='rounded-full w-[6px] h-[6px] bg-[#7F7789]'></div>
                <p className='text-[#7F7789]'>4hrs</p>
              </div>
            </div>
          </div>
          <div className='absolute right-2 top-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='4'
              height='14'
              className='w-[2px] h-3 2xl:w-1 2xl:h-[14px]'
              viewBox='0 0 4 14'
              fill='none'
            >
              <rect width='4' height='4' rx='2' fill='black' />
              <rect y='5' width='4' height='4' rx='2' fill='black' />
              <rect y='10' width='4' height='4' rx='2' fill='black' />
            </svg>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default MessageAside;
