import classNames from 'classnames';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useState } from 'react';

const PostingPlatforms = () => {
  return (
    <div className='flex flex-col w-full h-full col-span-2 gap-8 2xl:gap-11 '>
      <ChoosePlatforms />
      <SelectedPlatforms />
    </div>
  );
};
export default PostingPlatforms;

const ChoosePlatforms = () => {
  const [showAccounts, setShowAccounts] = useState(false);

  return (
    <div className='relative'>
      <div
        style={{
          background:
            'linear-gradient(108deg, rgba(255, 255, 255, 0.40) -2.03%, rgba(164, 209, 223, 0.27) 33.16%, rgba(188, 95, 232, 0.14) 68.74%, rgba(255, 255, 255, 0.00) 104.83%), #FFF',
        }}
        className={classNames(
          'flex relative justify-between items-center p-[6px_19px_6px_14px]  shadow-[_0px_4px_27px_5px_rgba(0,_0,_0,_0.15)] border border-white',
          {
            'rounded-[10px]': !showAccounts,
            'rounded-[10px_10px_0_0]': showAccounts,
          },
        )}
      >
        {/* profile */}
        <div>
          <Image
            src='/assets/images/profile.png'
            width='38'
            height='38'
            alt='profile'
            className='w-[30px] 2xl:w-[38px]  h-[30px] 2xl:h-[38px]'
          />
        </div>

        <div>
          <h6 className='text-[13px] 2xl:text-[18px] flex font-bold'>
            Vivek Suyal
          </h6>
          <p className='text-woro-blue text-[9px] 2xl:text-[14px]'>
            Select social media to post
          </p>
        </div>

        {/* dropdown */}
        <div
          onClick={() => {
            setShowAccounts(!showAccounts);
          }}
          className='cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <path
              d='M12.7188 15.8603L6.71875 9.8604L8.71876 7.86035L12.7188 11.8604L16.7188 7.86035L18.7188 9.8604L12.7188 15.8603Z'
              fill='#7F1DFE'
            />
          </svg>
        </div>
      </div>

      {/* accounts modal*/}
      <div
        className={classNames(
          'z-10 absolute top-11 2xl:top-[3.75rem] transition-all duration-300 ease-linear  w-full overflow-hidden backdrop-blur-[15px]',
          {
            'h-[50vh]': showAccounts,
            'h-0': !showAccounts,
          },
        )}
      >
        <div
          style={{
            background:
              'linear-gradient(108deg, rgba(255, 255, 255, 0.40) -2.03%, rgba(164, 209, 223, 0.27) 33.16%, rgba(188, 95, 232, 0.14) 68.74%, rgba(255, 255, 255, 0.00) 104.83%), #FFF',
          }}
          className='flex w-full flex-col gap-1 p-2 2xl:gap-[10px] shadow-[0px_4px_27px_5px_rgba(0,_0,_0,_0.15)] rounded-[0_0_10px_10px]'
        >
          {/*currently added accounts */}
          <div
            style={{
              background:
                'linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)',
            }}
            className='flex cursor-pointer justify-between relative shadow-md items-center p-[6px_19px_6px_14px] rounded-[10px]  transition-all ease-linear duration-300 '
          >
            {/* profile */}
            <div className='relative flex gap-3'>
              <Image
                src='/assets/images/profile.png'
                width='38'
                height='38'
                alt='profile'
                className='w-[30px] 2xl:w-[38px]  h-[30px] 2xl:h-[38px]'
              />
              <div>
                <h6 className='text-[12px] 2xl:text-[14px] flex font-bold'>
                  @VivekSuyal
                </h6>
                <p className=' text-[9px] 2xl:text-[12px]'>Instagram</p>
              </div>

              <div className='absolute bottom-0 left-5 2xl:left-6'>
                <Image
                  src='/assets/images/dashboard/instagram.png'
                  width='15'
                  height='15'
                  className='w-3 h-3 2xl:w-[15px] 2xl:h-[15px]'
                  alt='instagram'
                />
              </div>
            </div>
          </div>

          <div
            style={{
              background:
                'linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)',
            }}
            className='flex cursor-pointer justify-between relative shadow-md items-center p-[6px_19px_6px_14px] rounded-[10px]  transition-all ease-linear duration-300 '
          >
            {/* profile */}
            <div className='relative flex gap-3'>
              <Image
                src='/assets/images/profile.png'
                width='38'
                height='38'
                alt='profile'
                className='w-[30px] 2xl:w-[38px]  h-[30px] 2xl:h-[38px]'
              />
              <div>
                <h6 className='text-[12px] 2xl:text-[14px] flex font-bold'>
                  @VivekSuyal
                </h6>
                <p className=' text-[9px] 2xl:text-[12px]'>Instagram</p>
              </div>

              <div className='absolute bottom-0 left-5 2xl:left-6'>
                <Image
                  src='/assets/images/dashboard/instagram.png'
                  width='15'
                  height='15'
                  className='w-3 h-3 2xl:w-[15px] 2xl:h-[15px]'
                  alt='instagram'
                />
              </div>
            </div>
          </div>

          <div
            style={{
              background:
                'linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)',
            }}
            className='flex cursor-pointer justify-between relative shadow-md items-center p-[6px_19px_6px_14px] rounded-[10px]  transition-all ease-linear duration-300 '
          >
            {/* profile */}
            <div className='relative flex gap-3'>
              <Image
                src='/assets/images/profile.png'
                width='38'
                height='38'
                alt='profile'
                className='w-[30px] 2xl:w-[38px]  h-[30px] 2xl:h-[38px]'
              />
              <div>
                <h6 className='text-[12px] 2xl:text-[14px] flex font-bold'>
                  @VivekSuyal
                </h6>
                <p className=' text-[9px] 2xl:text-[12px]'>Instagram</p>
              </div>

              <div className='absolute bottom-0 left-5 2xl:left-6'>
                <Image
                  src='/assets/images/dashboard/instagram.png'
                  width='15'
                  height='15'
                  className='w-3 h-3 2xl:w-[15px] 2xl:h-[15px]'
                  alt='instagram'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedPlatforms = () => {
  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <div className='flex flex-col  gap-4 2xl:gap-[21px] '>
      {['', '', ''].map((it, indx) => {
        return (
          <SelectedPlatformCard
            setActiveCard={setActivePlatform}
            activeCard={activePlatform}
            key={nanoid(4)}
            indx={indx}
          />
        );
      })}
    </div>
  );
};

const SelectedPlatformCard = ({ indx, activeCard, setActiveCard }) => {
  return (
    <div
      onClick={() => {
        setActiveCard(indx);
      }}
      style={{
        background:
          'linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)',
      }}
      className={classNames(
        'flex cursor-pointer justify-between relative shadow-md items-center p-[6px_19px_6px_14px] rounded-[10px]  transition-all ease-linear duration-300 ',
        {
          'w-4/5 self-end ': activeCard !== indx,
        },
      )}
    >
      {/* profile */}
      <div className='relative flex gap-3'>
        <Image
          src='/assets/images/profile.png'
          width='38'
          height='38'
          alt='profile'
          className='w-[30px] 2xl:w-[38px]  h-[30px] 2xl:h-[38px]'
        />
        <div>
          <h6 className='text-[12px] 2xl:text-[14px] flex font-bold'>
            @VivekSuyal
          </h6>
          <p className=' text-[9px] 2xl:text-[12px]'>Instagram</p>
        </div>

        <div className='absolute bottom-0 left-5 2xl:left-6'>
          <Image
            src='/assets/images/dashboard/instagram.png'
            width='15'
            height='15'
            className='w-3 h-3 2xl:w-[15px] 2xl:h-[15px]'
            alt='instagram'
          />
        </div>
      </div>

      {/* switch btn if more than one accounts exists  ((for now temp logic))*/}
      {activeCard === indx && (
        <div className='justify-self-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <path
              d='M7.02145 19.4324C7.03965 19.4469 7.06035 19.4575 7.07865 19.4719C7.17755 19.5483 7.28455 19.6123 7.38645 19.6845C7.61465 19.8478 7.84315 20.0101 8.08485 20.1499C8.09245 20.1542 8.10065 20.1573 8.10825 20.1617C8.41105 20.3357 8.72035 20.4979 9.04205 20.6336L9.14755 20.6775C9.29695 20.74 9.44245 20.8005 9.60755 20.8582C10.0333 21.0008 10.3956 21.0994 10.7423 21.1697C10.9639 21.2155 11.1744 21.25 11.3748 21.2763C11.4054 21.2805 11.4366 21.2815 11.4674 21.2853C11.6076 21.3019 11.7477 21.3182 11.8733 21.3249C12.1065 21.3484 12.3516 21.3601 12.585 21.3601C17.5479 21.3601 21.5849 17.323 21.5849 12.3601C21.5849 11.8074 21.1376 11.3601 20.5849 11.3601C20.0322 11.3601 19.5849 11.8074 19.5849 12.3601C19.5849 16.2195 16.4444 19.3601 12.585 19.3601C12.3564 19.3601 12.1313 19.3369 11.9062 19.3148C11.7435 19.3017 11.5676 19.274 11.39 19.2439C11.2327 19.2164 11.0757 19.1873 10.9213 19.1493C10.8073 19.1217 10.6985 19.0905 10.5887 19.058C10.0665 18.9017 9.56235 18.6938 9.09235 18.4232C9.08995 18.4218 9.08745 18.4209 9.08505 18.4195C8.90425 18.3152 8.73505 18.1924 8.56415 18.0724C8.47545 18.0092 8.38265 17.9548 8.29635 17.887C8.20015 17.8125 8.11325 17.7263 8.02085 17.6468C7.87965 17.5239 7.73565 17.4035 7.60235 17.2711C7.53615 17.2042 7.47865 17.1285 7.41505 17.0588L9.20615 16.7361C9.74915 16.6375 10.1104 16.1179 10.0127 15.574C9.91415 15.031 9.40145 14.6697 8.85065 14.7674L4.67485 15.5203C4.41415 15.5672 4.18265 15.7166 4.03125 15.9344C3.87985 16.1522 3.82125 16.4207 3.86815 16.6824L4.62105 20.8572C4.70895 21.3406 5.12985 21.6795 5.60445 21.6795C5.66305 21.6795 5.72265 21.6746 5.78315 21.6639C6.32615 21.5653 6.68745 21.0457 6.58975 20.5018L6.27775 18.7735C6.28535 18.7809 6.29415 18.787 6.30175 18.7944C6.55205 19.0369 6.78775 19.2493 7.02145 19.4324ZM18.2822 5.28779C18.2646 5.27379 18.2448 5.26359 18.2271 5.24969C18.1233 5.16949 18.0112 5.10209 17.9041 5.02659C17.6808 4.86739 17.4577 4.70839 17.2215 4.57159C17.2042 4.56159 17.1853 4.55449 17.1679 4.54459C16.8735 4.37679 16.5739 4.21839 16.2618 4.08669L16.1562 4.04279C16.0069 3.98029 15.8614 3.91979 15.6962 3.86209C15.2695 3.71949 14.9071 3.61989 14.5605 3.55059C14.3399 3.50479 14.1297 3.47029 13.9293 3.44389C13.8988 3.43969 13.8679 3.43879 13.8373 3.43489C13.6971 3.41829 13.5568 3.40199 13.4307 3.39529C13.1973 3.37179 12.9522 3.36009 12.7188 3.36009C7.75585 3.36009 3.71875 7.39719 3.71875 12.3601C3.71875 12.9128 4.16605 13.3601 4.71875 13.3601C5.27145 13.3601 5.71875 12.9128 5.71875 12.3601C5.71875 8.50069 8.85935 5.36009 12.7188 5.36009C12.9473 5.36009 13.1725 5.38329 13.3975 5.40539C13.5603 5.41849 13.736 5.44619 13.9136 5.47629C14.071 5.50379 14.228 5.53289 14.3823 5.57089C14.4964 5.59859 14.6052 5.62979 14.7149 5.66219C15.4453 5.88089 16.1313 6.21819 16.7516 6.65579C16.8353 6.71569 16.9233 6.76709 17.0049 6.83119C17.1005 6.90519 17.1868 6.99109 17.2787 7.06999C17.4221 7.19479 17.5678 7.31699 17.7045 7.45289C17.7694 7.51869 17.8261 7.59299 17.8885 7.66149L16.0976 7.98409C15.5546 8.08269 15.1933 8.60229 15.291 9.14619C15.379 9.62959 15.7999 9.96849 16.2745 9.96849C16.3331 9.96849 16.3926 9.96359 16.4531 9.95289L20.629 9.19999C20.8897 9.15309 21.1212 9.00369 21.2726 8.78589C21.424 8.56809 21.4825 8.29959 21.4356 8.03789L20.6828 3.86309C20.5842 3.32009 20.0695 2.95689 19.5207 3.05649C18.9777 3.15509 18.6164 3.67469 18.7141 4.21859L19.0261 5.94659C19.014 5.93459 18.9999 5.92499 18.9877 5.91309C18.7434 5.67719 18.5123 5.46909 18.2822 5.28779Z'
              fill='url(#paint0_linear_2674_19175)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_2674_19175'
                x1='3.71875'
                y1='21.6016'
                x2='22.5969'
                y2='20.508'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#FED170' />
                <stop offset='0.291667' stopColor='#E65351' />
                <stop offset='0.614583' stopColor='#C6338E' />
                <stop offset='1' stopColor='#4F62D2' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};
