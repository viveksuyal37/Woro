'use client';

import classNames from 'classnames';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const ref = useRef(null);
  return (
    <header>
      <div className='flex items-center justify-between'>
        {/* left */}

        <div className='flex items-end space-x-[50px] 2xl:space-x-[55px] 3xl:space-x-[78px]'>
          <div className='w-[124px] h-[29.5px] 2xl:w-[177px] 2xl:h-[42px]'>
            <Image
              src='/assets/images/logo.png'
              alt='woro logo'
              width='177'
              height='42'
            />
          </div>
          <div className='text-2xl font-bold text-woro-blue 2xl:text-3xl 3xl:text-4xl'>
            Welcome back, Vivek
          </div>
        </div>

        {/* mid btn start free trial*/}
        <div className='bg-[#00FABA] text-black text-[14px] 2xl:text-[16px] font-bold rounded-xl flex flex-col items-center justify-center leading-tight p-[6px_16px] 2xl:p-[11px_30px] 3xl:p-[11px_50px] gap-0'>
          <h6>Start 14-Day Free Trial </h6>
          <span className='text-[8px] text-[#8B8B8B] 3xl:text-[10px] font-normal'>
            No commitments, no credit card, just pure awesomeness.
          </span>
        </div>

        {/* right */}
        <div className='flex items-center gap-[22px] '>
          {/* get support */}
          <button className='rounded-full text-[13px] 2xl:text-[18px]  font-bold text-[#7F1DFE]  border 2xl:border-2 border-[#7F1DFE] p-[9px_16px] 2xl:p-[13px_24px] h-[35px] 2xl:h-[49px] leading-[0px] hover:bg-woro-blue hover:text-white'>
            Get Support Now
          </button>
          <button className='rounded-full text-[12px] 2xl:text-[18px] text-[#7F1DFE] font-bold border-2 border-[#7F1DFE] w-[35px]  h-[35px] 2xl:w-[49px]  2xl:h-[49px] hover:bg-woro-blue hover:text-white'>
            ?
          </button>

          {/* user profile card with modal */}

          <div
            style={{
              background:
                'linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)',
            }}
            className='flex relative gap-2 2xl:gap-4 items-center p-[6px_19px_6px_14px] rounded-[20px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]'
          >
            {/* profile */}
            <div className='w-[35px] 2xl:w-[50px]  h-[35px] 2xl:h-[50px]'>
              <Image
                src='/assets/images/profile.png'
                width='50'
                height='50'
                alt='profile'
              />
            </div>

            {/* username and role */}
            <div className='flex-col 2xl:space-y-[5px]'>
              <div className=' flex space-x-[4px] 2xl:space-x-[6px]'>
                <h6 className='text-[13px] 2xl:text-[18px] flex font-bold'>
                  Vivek Suyal
                </h6>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z'
                    fill='#7E1CFD'
                  />
                </svg>
              </div>
              <p className='text-[9px] 2xl:text-[14px] text-woro-blue'>Admin</p>
            </div>

            {/* plan icon */}
            <div
              style={{
                background:
                  'linear-gradient(225deg, #B500C3 21.66%, #9D51FF 76.10%)',
              }}
              className='flex items-center justify-center w-[28px]  2xl:w-[32px] h-[28px]  2xl:h-[32px] rounded-full'
            >
              <Image
                src='/assets/images/plan1.png'
                alt='plan badge'
                width='25'
                height='25'
              />
            </div>

            {/*dropdown icon */}
            <div
              ref={ref}
              onClick={() => {
                setIsModelOpen(!isModalOpen);
              }}
              className='ml-1 cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={classNames(
                  'w-4 h-4 transition-all duration-300  2xl:w-6 2xl:h-6',
                  { 'rotate-180': isModalOpen },
                )}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>

            {/* modal */}
            <Modal
              isModalOpen={isModalOpen}
              dropIconRef={ref}
              setIsModelOpen={setIsModelOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Modal = ({ isModalOpen, setIsModelOpen, dropIconRef }) => {
  const modalRef = useRef(null);

  const [accountsList, setAccountsList] = useState({
    activeAccount: 0,
    show: false,
  });

  const loggedAccounts = ['Vivek', 'Harry', 'Jimmy'];

  const handleClick = (e) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      !dropIconRef.current.contains(e.target)
    ) {
      setIsModelOpen(false);
    } else {
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    // cleanup
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className={classNames(
        'absolute z-10 rounded-xl top-14 2xl:top-[72px] left-0 w-full  transition-all duration-300 ease-linear text-[#7F7789] text-[12px] 2xl:text-[14px] shadow-lg bg-white child:flex child:p-[6px_9px]  child:gap-1 child:2xl:gap-[6px] child:w-max  overflow-clip ',
        {
          'h-max  p-[10px_4px]  2xl:p-[10px]': isModalOpen,
          'h-0': !isModalOpen,
        },
      )}
    >
      <Link
        // onClick={handleClick}
        href='/account'
        className='group hover:text-woro-blue '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[21px] h-[21px] 2xl:w-[29px] 2xl:h-[29px]'
          viewBox='0 0 29 30'
          fill='none'
        >
          <path
            d='M6.04297 25.5732C6.04297 20.9018 9.82989 17.1149 14.5013 17.1149C19.1727 17.1149 22.9596 20.9018 22.9596 25.5732H20.8451C20.8451 22.0697 18.0048 19.2295 14.5013 19.2295C10.9977 19.2295 8.15755 22.0697 8.15755 25.5732H6.04297ZM14.5013 16.0576C10.9964 16.0576 8.15755 13.2188 8.15755 9.71387C8.15755 6.20895 10.9964 3.37012 14.5013 3.37012C18.0062 3.37012 20.8451 6.20895 20.8451 9.71387C20.8451 13.2188 18.0062 16.0576 14.5013 16.0576ZM14.5013 13.943C16.8379 13.943 18.7305 12.0505 18.7305 9.71387C18.7305 7.37725 16.8379 5.4847 14.5013 5.4847C12.1647 5.4847 10.2721 7.37725 10.2721 9.71387C10.2721 12.0505 12.1647 13.943 14.5013 13.943Z'
            className='fill-[#7F7789] group-hover:fill-woro-blue'
          />
        </svg>
        <span>Profile</span>
      </Link>

      <Link
        // onClick={handleClick}
        href='/account/id'
        className='group hover:text-woro-blue '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[21px] h-[21px] 2xl:w-[29px] 2xl:h-[29px]'
          viewBox='0 0 29 30'
          fill='none'
        >
          <path
            d='M14.5013 27.0837C7.82786 27.0837 2.41797 21.6737 2.41797 15.0003C2.41797 8.32688 7.82786 2.91699 14.5013 2.91699C21.1747 2.91699 26.5846 8.32688 26.5846 15.0003C26.5846 21.6737 21.1747 27.0837 14.5013 27.0837ZM14.5013 24.667C19.8401 24.667 24.168 20.3391 24.168 15.0003C24.168 9.66157 19.8401 5.33366 14.5013 5.33366C9.16255 5.33366 4.83464 9.66157 4.83464 15.0003C4.83464 20.3391 9.16255 24.667 14.5013 24.667ZM13.293 8.95866H15.7096V11.3753H13.293V8.95866ZM13.293 13.792H15.7096V21.042H13.293V13.792Z'
            className='fill-[#7F7789] group-hover:fill-woro-blue'
          />
        </svg>
        <span>Account ID</span>
      </Link>

      <div
        onMouseOver={() => {
          setAccountsList({ ...accountsList, show: true });
        }}
        // href='/account/switch'
        className='cursor-pointer group hover:text-woro-blue'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[21px] h-[21px] 2xl:w-[29px] 2xl:h-[29px]'
          viewBox='0 0 29 30'
          fill='none'
        >
          <path
            d='M14.4385 10.1059L12.7296 11.8148L9.66675 8.7505L9.66584 24.6667H7.24918L7.25008 8.7505L4.18541 11.8148L2.47656 10.1059L8.45751 4.125L14.4385 10.1059ZM26.5218 19.8941L20.5408 25.875L14.5599 19.8941L16.2687 18.1852L19.3334 21.2495L19.3325 5.33333H21.7491L21.7501 21.2495L24.813 18.1852L26.5218 19.8941Z'
            className='fill-[#7F7789] group-hover:fill-woro-blue'
          />
        </svg>
        <span>Switch account</span>
      </div>

      <div
        className={classNames(
          'flex overflow-clip !pt-0 flex-col justify-start gap-2 transition-all duration-200 ease-linear w-max ml-9 child:flex child:gap-2 child:cursor-pointer child:items-center',
          { 'h-0 !p-0': !accountsList.show },
        )}
      >
        {loggedAccounts?.map((account, indx) => {
          return (
            <div
              onClick={() => {
                setAccountsList({ show: false, activeAccount: indx });
                setIsModelOpen(false);
              }}
              key={nanoid(4)}
            >
              {accountsList.activeAccount == indx ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-3 h-3 2xl:w-4 2xl:h-4'
                  viewBox='0 0 38 38'
                  fill='none'
                >
                  <circle
                    cx='19'
                    cy='19'
                    r='13.5'
                    stroke='#7F1DFE'
                    strokeWidth='3'
                  />
                  <circle cx='19' cy='19' r='6' fill='#7F1DFE' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-3 h-3 2xl:w-4 2xl:h-4'
                  viewBox='0 0 38 38'
                  fill='none'
                >
                  <circle
                    cx='19'
                    cy='19'
                    r='11'
                    fill='white'
                    stroke='#7F7789'
                    strokeWidth='8'
                  />
                </svg>
              )}
              {account}
            </div>
          );
        })}
      </div>

      <Link
        // onClick={handleClick}
        href='/account/verification'
        className='group hover:text-woro-blue '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[21px] h-[21px] 2xl:w-[29px] 2xl:h-[29px]'
          viewBox='0 0 29 30'
          fill='none'
        >
          <path
            d='M10.3904 27.6875L8.09453 23.8208L3.74453 22.8542L4.16745 18.3833L1.20703 15L4.16745 11.6167L3.74453 7.14583L8.09453 6.17917L10.3904 2.3125L14.4987 4.06458L18.607 2.3125L20.9029 6.17917L25.2529 7.14583L24.8299 11.6167L27.7904 15L24.8299 18.3833L25.2529 22.8542L20.9029 23.8208L18.607 27.6875L14.4987 25.9354L10.3904 27.6875ZM13.2299 19.2896L20.057 12.4625L18.3654 10.7104L13.2299 15.8458L10.632 13.3083L8.94036 15L13.2299 19.2896Z'
            className='fill-[#7F7789] group-hover:fill-woro-blue'
          />
        </svg>
        <span>Verification</span>
      </Link>

      <Link
        // onClick={handleClick}
        href='/account/plan-upgrade'
        className='group hover:text-woro-blue '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[21px] h-[21px] 2xl:w-[29px] 2xl:h-[29px]'
          viewBox='0 0 29 30'
          fill='none'
        >
          <path
            d='M3.39043 6.78324L8.46456 10.166L13.5229 3.08422C13.9108 2.54118 14.6655 2.41541 15.2086 2.80329C15.3171 2.8808 15.4119 2.97572 15.4895 3.08422L20.548 10.166L25.622 6.78324C26.1773 6.41306 26.9275 6.56311 27.2977 7.11837C27.4568 7.35715 27.5258 7.64479 27.4924 7.92982L25.5068 24.8072C25.4352 25.4157 24.9195 25.8743 24.3067 25.8743H4.70574C4.09302 25.8743 3.57727 25.4157 3.50568 24.8072L1.52011 7.92982C1.44214 7.26705 1.91621 6.66655 2.57899 6.58858C2.86401 6.55505 3.15165 6.62404 3.39043 6.78324ZM14.5063 18.6243C15.8409 18.6243 16.923 17.5423 16.923 16.2076C16.923 14.873 15.8409 13.791 14.5063 13.791C13.1716 13.791 12.0896 14.873 12.0896 16.2076C12.0896 17.5423 13.1716 18.6243 14.5063 18.6243Z'
            className='fill-[#7F7789] group-hover:fill-woro-blue'
          />
        </svg>
        <span>Upgrade plan</span>
      </Link>

      <Link href='/' className='group hover:text-woro-blue '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[21px] h-[21px] 2xl:w-[29px] 2xl:h-[29px]'
          viewBox='0 0 29 30'
          fill='none'
        >
          <path
            d='M6.74826 26.0766C6.13654 26.0766 5.64062 25.5807 5.64062 24.969V5.03147C5.64062 4.41974 6.13654 3.92383 6.74826 3.92383H22.2552C22.867 3.92383 23.3628 4.41974 23.3628 5.03147V8.35438H21.1476V6.13911H7.8559V23.8613H21.1476V21.6461H23.3628V24.969C23.3628 25.5807 22.867 26.0766 22.2552 26.0766H6.74826ZM21.1476 19.4308V16.1079H13.3941V13.8926H21.1476V10.5697L26.6858 15.0002L21.1476 19.4308Z'
            className='fill-[#7F7789] group-hover:fill-woro-blue'
          />
        </svg>
        <span>Logout</span>
      </Link>
    </div>
  );
};
