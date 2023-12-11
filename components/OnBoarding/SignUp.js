'use client';

/*BuiltIn Imports */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SignUp = ({ setOnBoardingStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className=' text-center max-w-[842px] 2xl:max-w-[1042px] mt-10 3xl:mt-20 mx-auto flex flex-col gap-[28px] 2xl:gap-[46px] items-center'>
      {/* logo */}
      <Image
        src='/assets/images/logo.png'
        width='217'
        height='52'
        className='2xl:w-[217px] w-[160px]'
        alt='woro'
      />
      {/* desc */}
      <div className='space-y-3 2xl:space-y-[22px]'>
        <h1 className='text-3xl font-bold 2xl:text-5xl'>
          Try free for <span className='text-woro-blue'>14days</span> and choose
          the best fit plan.
        </h1>
        <p className='text-lg 2xl:text-2xl text-[#7F7789]'>
          For starters, tell us a bit about yourself
        </p>
      </div>

      <form method='post' className='w-full '>
        <div className='grid w-full grid-cols-2 gap-y-4 2xl:gap-y-[22px] gap-x-8'>
          <label className='w-full col-span-2 text-xl font-bold text-left 2xl:text-2xl'>
            Enter name
          </label>
          <input
            className='bg-[rgba(190,_148,_243,_0.20)] px-[18px] rounded h-[46px] 2xl:h-[68px]'
            type='text'
            placeholder='Enter First name'
          ></input>
          <input
            className='bg-[rgba(190,_148,_243,_0.20)] px-[18px]  rounded h-[46px 2xl:h-[68px]'
            type='text'
            placeholder='Enter Last name'
          ></input>
        </div>

        <div className=' relative flex flex-col my-8 2xl:my-11 gap-4 2xl:gap-[22px]'>
          <label className='text-xl font-bold text-left 2xl:text-2xl '>
            Enter email
          </label>
          <input
            className='bg-[rgba(190,_148,_243,_0.20)] px-[18px] h-[46px] 2xl:h-[68px]'
            type='email'
            placeholder='Enter e-mail'
          ></input>
          <div className='flex gap-4'>
            <input
              className='bg-[rgba(190,_148,_243,_0.20)] flex-1 px-[18px]  rounded h-[46px] 2xl:h-[68px]'
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              placeholder='Enter password'
            ></input>
            <input
              className='bg-[rgba(190,_148,_243,_0.20)] flex-1 px-[18px]  rounded h-[46px] 2xl:h-[68px]'
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              placeholder='Confirm password'
            ></input>
          </div>
          {/* svg show/hide pass */}
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            title={showPassword ? 'Hide password' : 'Show password'}
            className='absolute bottom-0 right-0 flex items-center justify-center w-16 h-12 cursor-pointer 2xl:h-16'
          >
            {!showPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            )}
          </div>
        </div>

        <div className='flex items-center justify-between '>
          <div className='space-x-3'>
            <input type='checkbox'></input>
            <label className='text-[14px] 2xl:text-[18px]'>
              I accept the{' '}
              <span className='underline cursor-pointer text-woro-blue'>
                terms and condition
              </span>
            </label>
          </div>
          <button
            onClick={() => {
              setOnBoardingStep(2);
            }}
            type='button'
            className='p-[10px_30px] 2xl:p-[19px_50px] rounded-[4px] text-white font-bold bg-woro-blue'
          >
            Next
          </button>
        </div>
      </form>

      <p className='text-[14px] 2xl:text-[18px] relative -top-4'>
        Already have an account?{' '}
        <Link href='/login' className='underline text-woro-blue '>
          Log in
        </Link>
      </p>
    </section>
  );
};

export default SignUp;
