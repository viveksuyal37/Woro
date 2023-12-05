'use client';

import { toggleCard } from '@/Redux/slices/CardSlice';
import { toggleCircularMenu } from '@/Redux/slices/CircularMenuSlice';
import {
  getDrawerVisibility,
  moveDrawer,
} from '@/Redux/slices/LeftDashboardDrawerSlice';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LeftDrawer = () => {
  const { visibility } = useSelector(getDrawerVisibility);
  const drawerRef = useRef(null);
  const dispatch = useDispatch();

  const closeDrawerOnBlur = (e) => {
    if (e.target !== drawerRef.current) {
      dispatch(moveDrawer({ visibility: 0 }));
    }
  };

  useEffect(() => {
    if (visibility) document.addEventListener('click', closeDrawerOnBlur);
    // cleanup
    return () => {
      document.removeEventListener('click', closeDrawerOnBlur);
    };
  }, [visibility]);

  return (
    <aside
      style={{ zIndex: 10 }}
      className={classNames(
        'absolute transition-all duration-300 ease-linear flex gap-[7vw] ml-12  h-max',
        {
          '-left-7 2xl:left-0': visibility === 2,
          '-left-[22vw] 2xl:-left-[21.5vw] 4xl:-left-[21vw] ': visibility === 1,
          '-left-[30vw] ': visibility === 0,
        },
      )}
    >
      <div
        ref={drawerRef}
        style={{
          background:
            'linear-gradient(108deg, rgba(255, 255, 255, 0.40) 0.17%, rgba(164, 209, 223, 0.38) 32.61%, rgba(188, 95, 232, 0.17) 65.41%, rgba(255, 255, 255, 0.22) 98.68%)',
        }}
        className=' text-woro-blue text-[1rem] 2xl:text-xl font-semibold rounded-[20px]   shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.50)] backdrop-blur-[30px]     '
      >
        {/* drawer items */}
        <div className=' flex flex-col items-center gap-2 2xl:gap-4  w-[18.43vw] h-[81vh] child:flex child:h-11 child:p-[10px] child:w-4/5 child:gap-[1rem] child:2xl:gap-[22px] child:items-center scrollableContainer overflow-y-auto py-[22px] child:rounded-[10px] child:cursor-pointer'>
          <div className='shadow-[0px_4px_27px_5px_rgba(0,_0,_0,_0.15)]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-3 h-3 2xl:w-4 2xl:h-4'
              viewBox='0 0 17 16'
              fill='none'
            >
              <path
                d='M1.09984 8.79883H6.50357C6.99891 8.79883 7.40419 8.43883 7.40419 7.99883V1.59883C7.40419 1.15883 6.99891 0.798828 6.50357 0.798828H1.09984C0.604498 0.798828 0.199219 1.15883 0.199219 1.59883V7.99883C0.199219 8.43883 0.604498 8.79883 1.09984 8.79883ZM1.09984 15.1988H6.50357C6.99891 15.1988 7.40419 14.8388 7.40419 14.3988V11.1988C7.40419 10.7588 6.99891 10.3988 6.50357 10.3988H1.09984C0.604498 10.3988 0.199219 10.7588 0.199219 11.1988V14.3988C0.199219 14.8388 0.604498 15.1988 1.09984 15.1988ZM10.1061 15.1988H15.5098C16.0051 15.1988 16.4104 14.8388 16.4104 14.3988V7.99883C16.4104 7.55883 16.0051 7.19883 15.5098 7.19883H10.1061C9.61071 7.19883 9.20543 7.55883 9.20543 7.99883V14.3988C9.20543 14.8388 9.61071 15.1988 10.1061 15.1988ZM9.20543 1.59883V4.79883C9.20543 5.23883 9.61071 5.59883 10.1061 5.59883H15.5098C16.0051 5.59883 16.4104 5.23883 16.4104 4.79883V1.59883C16.4104 1.15883 16.0051 0.798828 15.5098 0.798828H10.1061C9.61071 0.798828 9.20543 1.15883 9.20543 1.59883Z'
                fill='url(#paint0_linear_2987_2095)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_2095'
                  x1='0.199219'
                  y1='0.798828'
                  x2='17.5512'
                  y2='2.33802'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Dashboard
            <svg
              className='items-end'
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M17.0199 10.9163L11.2089 5.1053L12.7409 3.57324L21.1673 11.9996L12.7409 20.4259L11.2089 18.8939L17.0199 13.083H3.83398V10.9163H17.0199Z'
                fill='url(#paint0_linear_2987_2096)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_2096'
                  x1='3.83398'
                  y1='3.57324'
                  x2='22.4111'
                  y2='5.07874'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M6.8027 19.072C6.8209 19.0865 6.8416 19.0971 6.8599 19.1115C6.9588 19.1879 7.0658 19.2519 7.1677 19.3241C7.3959 19.4874 7.6244 19.6497 7.8661 19.7895C7.8737 19.7938 7.8819 19.7969 7.8895 19.8013C8.1923 19.9753 8.5016 20.1375 8.8233 20.2732L8.9288 20.3171C9.0782 20.3796 9.2237 20.4401 9.3888 20.4978C9.8146 20.6404 10.1769 20.739 10.5236 20.8093C10.7452 20.8551 10.9557 20.8896 11.156 20.9159C11.1866 20.9201 11.2179 20.9211 11.2486 20.9249C11.3888 20.9415 11.5289 20.9578 11.6545 20.9645C11.8877 20.988 12.1328 20.9997 12.3662 20.9997C17.3291 20.9997 21.3662 16.9626 21.3662 11.9997C21.3662 11.447 20.9189 10.9997 20.3662 10.9997C19.8135 10.9997 19.3662 11.447 19.3662 11.9997C19.3662 15.8591 16.2256 18.9997 12.3662 18.9997C12.1376 18.9997 11.9125 18.9765 11.6875 18.9544C11.5247 18.9413 11.3489 18.9136 11.1713 18.8835C11.014 18.856 10.857 18.8269 10.7026 18.7889C10.5886 18.7613 10.4797 18.7301 10.37 18.6976C9.8478 18.5413 9.3436 18.3334 8.8736 18.0628C8.8712 18.0614 8.8687 18.0605 8.8663 18.0591C8.6855 17.9548 8.5163 17.832 8.3454 17.712C8.2567 17.6488 8.1639 17.5944 8.0776 17.5266C7.9814 17.4521 7.8945 17.3659 7.8021 17.2864C7.6609 17.1635 7.5169 17.0431 7.3836 16.9107C7.3174 16.8438 7.2599 16.7681 7.1963 16.6984L8.9874 16.3757C9.5304 16.2771 9.8917 15.7575 9.794 15.2136C9.6954 14.6706 9.1827 14.3093 8.6319 14.407L4.4561 15.1599C4.1954 15.2068 3.9639 15.3562 3.8125 15.574C3.6611 15.7918 3.6025 16.0603 3.6494 16.322L4.4023 20.4968C4.4902 20.9802 4.9111 21.3191 5.3857 21.3191C5.4443 21.3191 5.5039 21.3142 5.5644 21.3035C6.1074 21.2049 6.4687 20.6853 6.371 20.1414L6.059 18.4131C6.0666 18.4205 6.0754 18.4266 6.083 18.434C6.3333 18.6765 6.569 18.8889 6.8027 19.072ZM18.0635 4.92743C18.0459 4.91343 18.026 4.90323 18.0083 4.88933C17.9045 4.80913 17.7924 4.74173 17.6853 4.66623C17.462 4.50704 17.2389 4.34804 17.0027 4.21124C16.9854 4.20124 16.9665 4.19414 16.9491 4.18424C16.6547 4.01644 16.3552 3.85803 16.043 3.72633L15.9375 3.68243C15.7881 3.61993 15.6426 3.55944 15.4775 3.50174C15.0507 3.35914 14.6884 3.25954 14.3418 3.19024C14.1212 3.14444 13.9109 3.10994 13.7106 3.08354C13.6801 3.07934 13.6491 3.07844 13.6186 3.07454C13.4783 3.05794 13.3381 3.04164 13.212 3.03494C12.9785 3.01144 12.7334 2.99974 12.5 2.99974C7.5371 2.99974 3.5 7.03683 3.5 11.9997C3.5 12.5524 3.9473 12.9997 4.5 12.9997C5.0527 12.9997 5.5 12.5524 5.5 11.9997C5.5 8.14033 8.6406 4.99973 12.5 4.99973C12.7286 4.99973 12.9537 5.02293 13.1787 5.04503C13.3415 5.05813 13.5173 5.08583 13.6949 5.11593C13.8523 5.14343 14.0092 5.17253 14.1636 5.21054C14.2776 5.23823 14.3865 5.26943 14.4962 5.30184C15.2266 5.52053 15.9125 5.85783 16.5328 6.29543C16.6165 6.35533 16.7046 6.40673 16.7862 6.47083C16.8818 6.54483 16.9681 6.63073 17.06 6.70963C17.2034 6.83443 17.349 6.95663 17.4857 7.09254C17.5506 7.15833 17.6073 7.23264 17.6697 7.30114L15.8789 7.62373C15.3359 7.72233 14.9746 8.24194 15.0723 8.78583C15.1602 9.26924 15.5811 9.60813 16.0557 9.60813C16.1143 9.60813 16.1739 9.60323 16.2344 9.59253L20.4102 8.83963C20.6709 8.79273 20.9024 8.64333 21.0538 8.42554C21.2052 8.20774 21.2638 7.93923 21.2169 7.67754L20.464 3.50274C20.3654 2.95974 19.8507 2.59654 19.3019 2.69614C18.7589 2.79474 18.3976 3.31434 18.4953 3.85824L18.8074 5.58624C18.7953 5.57423 18.7812 5.56463 18.769 5.55273C18.5247 5.31683 18.2936 5.10873 18.0635 4.92743Z'
                fill='url(#paint0_linear_2987_2114)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_2114'
                  x1='3.5'
                  y1='2.67969'
                  x2='22.6646'
                  y2='4.12709'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Switch Account
          </div>

          <Link href='/dashboard/library'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <g clipPath='url(#clip0_2987_3567)'>
                <path
                  d='M4.16667 7.00033H2.5V11.167H2.50833L2.5 18.667C2.5 19.5837 3.25 20.3337 4.16667 20.3337H19.1667V18.667H4.16667V7.00033ZM8.33333 14.5003H20L17.0833 10.7503L15 13.2587L12.0833 9.50033L8.33333 14.5003ZM20.8333 5.33366H14.1667L12.5 3.66699H7.5C6.58333 3.66699 5.84167 4.41699 5.84167 5.33366L5.83333 15.3337C5.83333 16.2503 6.58333 17.0003 7.5 17.0003H20.8333C21.75 17.0003 22.5 16.2503 22.5 15.3337V7.00033C22.5 6.08366 21.75 5.33366 20.8333 5.33366ZM20.8333 15.3337H7.5V5.33366H11.8083L12.9833 6.50866L13.475 7.00033H20.8333V15.3337Z'
                  fill='url(#paint0_linear_2987_3567)'
                />
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear_2987_3567'
                  x1='2.5'
                  y1='3.66699'
                  x2='23.8847'
                  y2='5.68896'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
                <clipPath id='clip0_2987_3567'>
                  <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
            Media Library
          </Link>

          <div
            onClick={() => {
              dispatch(toggleCard({ cardId: 'analytics' }));
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M20.6 19.2H5.3V3.9C5.3 3.66131 5.20518 3.43239 5.0364 3.2636C4.86761 3.09482 4.63869 3 4.4 3C4.16131 3 3.93239 3.09482 3.7636 3.2636C3.59482 3.43239 3.5 3.66131 3.5 3.9V20.1C3.5 20.3387 3.59482 20.5676 3.7636 20.7364C3.93239 20.9052 4.16131 21 4.4 21H20.6C20.8387 21 21.0676 20.9052 21.2364 20.7364C21.4052 20.5676 21.5 20.3387 21.5 20.1C21.5 19.8613 21.4052 19.6324 21.2364 19.4636C21.0676 19.2948 20.8387 19.2 20.6 19.2Z'
                fill='url(#paint0_linear_2987_7738)'
              />
              <path
                d='M8.89961 16.5004V12.0004C8.89961 11.7617 8.80479 11.5328 8.63601 11.364C8.46722 11.1952 8.2383 11.1004 7.99961 11.1004C7.76091 11.1004 7.532 11.1952 7.36321 11.364C7.19443 11.5328 7.09961 11.7617 7.09961 12.0004V16.5004C7.09961 16.7391 7.19443 16.968 7.36321 17.1368C7.532 17.3056 7.76091 17.4004 7.99961 17.4004C8.2383 17.4004 8.46722 17.3056 8.63601 17.1368C8.80479 16.968 8.89961 16.7391 8.89961 16.5004ZM12.4996 16.5004V8.40039C12.4996 8.1617 12.4048 7.93278 12.236 7.76399C12.0672 7.59521 11.8383 7.50039 11.5996 7.50039C11.3609 7.50039 11.132 7.59521 10.9632 7.76399C10.7944 7.93278 10.6996 8.1617 10.6996 8.40039V16.5004C10.6996 16.7391 10.7944 16.968 10.9632 17.1368C11.132 17.3056 11.3609 17.4004 11.5996 17.4004C11.8383 17.4004 12.0672 17.3056 12.236 17.1368C12.4048 16.968 12.4996 16.7391 12.4996 16.5004ZM16.0996 16.5004V6.60039C16.0996 6.3617 16.0048 6.13278 15.836 5.96399C15.6672 5.79521 15.4383 5.70039 15.1996 5.70039C14.9609 5.70039 14.732 5.79521 14.5632 5.96399C14.3944 6.13278 14.2996 6.3617 14.2996 6.60039V16.5004C14.2996 16.7391 14.3944 16.968 14.5632 17.1368C14.732 17.3056 14.9609 17.4004 15.1996 17.4004C15.4383 17.4004 15.6672 17.3056 15.836 17.1368C16.0048 16.968 16.0996 16.7391 16.0996 16.5004ZM19.6996 16.5004V4.80039C19.6996 4.5617 19.6048 4.33278 19.436 4.16399C19.2672 3.99521 19.0383 3.90039 18.7996 3.90039C18.5609 3.90039 18.332 3.99521 18.1632 4.16399C17.9944 4.33278 17.8996 4.5617 17.8996 4.80039V16.5004C17.8996 16.7391 17.9944 16.968 18.1632 17.1368C18.332 17.3056 18.5609 17.4004 18.7996 17.4004C19.0383 17.4004 19.2672 17.3056 19.436 17.1368C19.6048 16.968 19.6996 16.7391 19.6996 16.5004Z'
                fill='url(#paint1_linear_2987_7738)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_7738'
                  x1='3.5'
                  y1='3'
                  x2='22.7985'
                  y2='4.52059'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_2987_7738'
                  x1='7.09961'
                  y1='3.90039'
                  x2='20.6193'
                  y2='4.89464'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Analytics
          </div>

          <Link href='/dashboard/calender'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M9.5 1V3H15.5V1H17.5V3H21.5C22.0523 3 22.5 3.44772 22.5 4V20C22.5 20.5523 22.0523 21 21.5 21H3.5C2.94772 21 2.5 20.5523 2.5 20V4C2.5 3.44772 2.94772 3 3.5 3H7.5V1H9.5ZM20.5 11H4.5V19H20.5V11ZM11.5 13V17H6.5V13H11.5ZM7.5 5H4.5V9H20.5V5H17.5V7H15.5V5H9.5V7H7.5V5Z'
                fill='url(#paint0_linear_2987_12304)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_12304'
                  x1='2.5'
                  y1='1'
                  x2='23.9427'
                  y2='2.68955'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Calendar
          </Link>

          <div
            onClick={() => {
              dispatch(toggleCircularMenu());
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M3.5 21C2.95 21 2.479 20.804 2.087 20.412C1.695 20.02 1.49934 19.5493 1.5 19V7C1.5 6.45 1.696 5.979 2.088 5.587C2.48 5.195 2.95067 4.99933 3.5 5H6.65L8.5 3H14.5V5H9.375L7.55 7H3.5V19H19.5V10H21.5V19C21.5 19.55 21.304 20.021 20.912 20.413C20.52 20.805 20.0493 21.0007 19.5 21H3.5ZM19.5 7V5H17.5V3H19.5V1H21.5V3H23.5V5H21.5V7H19.5ZM11.5 17.5C12.75 17.5 13.8127 17.0623 14.688 16.187C15.5633 15.3117 16.0007 14.2493 16 13C16 11.75 15.5623 10.6873 14.687 9.812C13.8117 8.93667 12.7493 8.49933 11.5 8.5C10.25 8.5 9.18734 8.93767 8.312 9.813C7.43667 10.6883 6.99934 11.7507 7 13C7 14.25 7.43767 15.3127 8.313 16.188C9.18834 17.0633 10.2507 17.5007 11.5 17.5ZM11.5 15.5C10.8 15.5 10.2083 15.2583 9.725 14.775C9.24167 14.2917 9 13.7 9 13C9 12.3 9.24167 11.7083 9.725 11.225C10.2083 10.7417 10.8 10.5 11.5 10.5C12.2 10.5 12.7917 10.7417 13.275 11.225C13.7583 11.7083 14 12.3 14 13C14 13.7 13.7583 14.2917 13.275 14.775C12.7917 15.2583 12.2 15.5 11.5 15.5Z'
                fill='url(#paint0_linear_2987_1085)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_1085'
                  x1='1.5'
                  y1='1'
                  x2='25.0565'
                  y2='3.04171'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Create Post
          </div>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M10.5 13H3.5C3.23478 13 2.98043 13.1054 2.79289 13.2929C2.60536 13.4804 2.5 13.7348 2.5 14V21C2.5 21.2652 2.60536 21.5196 2.79289 21.7071C2.98043 21.8946 3.23478 22 3.5 22H10.5C10.7652 22 11.0196 21.8946 11.2071 21.7071C11.3946 21.5196 11.5 21.2652 11.5 21V14C11.5 13.7348 11.3946 13.4804 11.2071 13.2929C11.0196 13.1054 10.7652 13 10.5 13ZM9.5 20H4.5V15H9.5V20ZM21.5 2H14.5C14.2348 2 13.9804 2.10536 13.7929 2.29289C13.6054 2.48043 13.5 2.73478 13.5 3V10C13.5 10.2652 13.6054 10.5196 13.7929 10.7071C13.9804 10.8946 14.2348 11 14.5 11H21.5C21.7652 11 22.0196 10.8946 22.2071 10.7071C22.3946 10.5196 22.5 10.2652 22.5 10V3C22.5 2.73478 22.3946 2.48043 22.2071 2.29289C22.0196 2.10536 21.7652 2 21.5 2ZM20.5 9H15.5V4H20.5V9ZM21.5 13H14.5C14.2348 13 13.9804 13.1054 13.7929 13.2929C13.6054 13.4804 13.5 13.7348 13.5 14V21C13.5 21.2652 13.6054 21.5196 13.7929 21.7071C13.9804 21.8946 14.2348 22 14.5 22H21.5C21.7652 22 22.0196 21.8946 22.2071 21.7071C22.3946 21.5196 22.5 21.2652 22.5 21V14C22.5 13.7348 22.3946 13.4804 22.2071 13.2929C22.0196 13.1054 21.7652 13 21.5 13ZM20.5 20H15.5V15H20.5V20ZM10.5 2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V10C2.5 10.2652 2.60536 10.5196 2.79289 10.7071C2.98043 10.8946 3.23478 11 3.5 11H10.5C10.7652 11 11.0196 10.8946 11.2071 10.7071C11.3946 10.5196 11.5 10.2652 11.5 10V3C11.5 2.73478 11.3946 2.48043 11.2071 2.29289C11.0196 2.10536 10.7652 2 10.5 2ZM9.5 9H4.5V4H9.5V9Z'
                fill='url(#paint0_linear_2987_12223)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_12223'
                  x1='2.5'
                  y1='2'
                  x2='23.9427'
                  y2='3.68955'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            App Integration
          </div>

          <Link href='/account/messages'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M7.64773 18.125L3.75 21.1875V5C3.75 4.51675 4.14175 4.125 4.625 4.125H20.375C20.8583 4.125 21.25 4.51675 21.25 5V17.25C21.25 17.7333 20.8583 18.125 20.375 18.125H7.64773ZM7.04247 16.375H19.5V5.875H5.5V17.587L7.04247 16.375ZM11.625 10.25H13.375V12H11.625V10.25ZM8.125 10.25H9.875V12H8.125V10.25ZM15.125 10.25H16.875V12H15.125V10.25Z'
                fill='url(#paint0_linear_2987_1065)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_1065'
                  x1='3.75'
                  y1='4.125'
                  x2='22.5064'
                  y2='5.64078'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Messages
          </Link>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M7.64773 18.125L3.75 21.1875V5C3.75 4.51675 4.14175 4.125 4.625 4.125H20.375C20.8583 4.125 21.25 4.51675 21.25 5V17.25C21.25 17.7333 20.8583 18.125 20.375 18.125H7.64773ZM7.04247 16.375H19.5V5.875H5.5V17.587L7.04247 16.375ZM11.625 10.25H13.375V12H11.625V10.25ZM8.125 10.25H9.875V12H8.125V10.25ZM15.125 10.25H16.875V12H15.125V10.25Z'
                fill='url(#paint0_linear_2987_1065)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_1065'
                  x1='3.75'
                  y1='4.125'
                  x2='22.5064'
                  y2='5.64078'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Team Space
          </div>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M14.4566 4H10.5436C10.3706 4 10.2047 4.06871 10.0824 4.19102C9.9601 4.31332 9.89139 4.47921 9.89139 4.65217V7.26087C9.89139 7.43384 9.9601 7.59972 10.0824 7.72203C10.2047 7.84433 10.3706 7.91304 10.5436 7.91304H14.4566C14.6296 7.91304 14.7955 7.84433 14.9178 7.72203C15.0401 7.59972 15.1088 7.43384 15.1088 7.26087V4.65217C15.1088 4.47921 15.0401 4.31332 14.9178 4.19102C14.7955 4.06871 14.6296 4 14.4566 4ZM13.1523 6.93478H11.1957C11.1093 6.93478 11.0263 6.90043 10.9652 6.83927C10.904 6.77812 10.8697 6.69518 10.8697 6.6087C10.8697 6.52221 10.904 6.43927 10.9652 6.37812C11.0263 6.31696 11.1093 6.28261 11.1957 6.28261H13.1523C13.2387 6.28261 13.3217 6.31696 13.3828 6.37812C13.444 6.43927 13.4783 6.52221 13.4783 6.6087C13.4783 6.69518 13.444 6.77812 13.3828 6.83927C13.3217 6.90043 13.2387 6.93478 13.1523 6.93478ZM13.8044 5.63043H11.1957C11.1093 5.63043 11.0263 5.59608 10.9652 5.53493C10.904 5.47377 10.8697 5.39083 10.8697 5.30435C10.8697 5.21786 10.904 5.13492 10.9652 5.07377C11.0263 5.01262 11.1093 4.97826 11.1957 4.97826H13.8044C13.8909 4.97826 13.9739 5.01262 14.035 5.07377C14.0962 5.13492 14.1305 5.21786 14.1305 5.30435C14.1305 5.39083 14.0962 5.47377 14.035 5.53493C13.9739 5.59608 13.8909 5.63043 13.8044 5.63043ZM14.4566 9.54348H10.5436C10.3706 9.54348 10.2047 9.61219 10.0824 9.7345C9.9601 9.8568 9.89139 10.0227 9.89139 10.1957V12.8043C9.89139 12.9773 9.9601 13.1432 10.0824 13.2655C10.2047 13.3878 10.3706 13.4565 10.5436 13.4565H14.4566C14.6296 13.4565 14.7955 13.3878 14.9178 13.2655C15.0401 13.1432 15.1088 12.9773 15.1088 12.8043V10.1957C15.1088 10.0227 15.0401 9.8568 14.9178 9.7345C14.7955 9.61219 14.6296 9.54348 14.4566 9.54348ZM13.1523 12.4783H11.1957C11.1093 12.4783 11.0263 12.4439 10.9652 12.3828C10.904 12.3216 10.8697 12.2387 10.8697 12.1522C10.8697 12.0657 10.904 11.9827 10.9652 11.9216C11.0263 11.8604 11.1093 11.8261 11.1957 11.8261H13.1523C13.2387 11.8261 13.3217 11.8604 13.3828 11.9216C13.444 11.9827 13.4783 12.0657 13.4783 12.1522C13.4783 12.2387 13.444 12.3216 13.3828 12.3828C13.3217 12.4439 13.2387 12.4783 13.1523 12.4783ZM13.8044 11.1739H11.1957C11.1093 11.1739 11.0263 11.1396 10.9652 11.0784C10.904 11.0173 10.8697 10.9343 10.8697 10.8478C10.8697 10.7613 10.904 10.6784 10.9652 10.6172C11.0263 10.5561 11.1093 10.5217 11.1957 10.5217H13.8044C13.8909 10.5217 13.9739 10.5561 14.035 10.6172C14.0962 10.6784 14.1305 10.7613 14.1305 10.8478C14.1305 10.9343 14.0962 11.0173 14.035 11.0784C13.9739 11.1396 13.8909 11.1739 13.8044 11.1739ZM14.4566 15.087H10.5436C10.3706 15.087 10.2047 15.1557 10.0824 15.278C9.9601 15.4003 9.89139 15.5662 9.89139 15.7391V18.3478C9.89139 18.5208 9.9601 18.6867 10.0824 18.809C10.2047 18.9313 10.3706 19 10.5436 19H14.4566C14.6296 19 14.7955 18.9313 14.9178 18.809C15.0401 18.6867 15.1088 18.5208 15.1088 18.3478V15.7391C15.1088 15.5662 15.0401 15.4003 14.9178 15.278C14.7955 15.1557 14.6296 15.087 14.4566 15.087ZM13.1523 18.0217H11.1957C11.1093 18.0217 11.0263 17.9874 10.9652 17.9262C10.904 17.8651 10.8697 17.7821 10.8697 17.6957C10.8697 17.6092 10.904 17.5262 10.9652 17.4651C11.0263 17.4039 11.1093 17.3696 11.1957 17.3696H13.1523C13.2387 17.3696 13.3217 17.4039 13.3828 17.4651C13.444 17.5262 13.4783 17.6092 13.4783 17.6957C13.4783 17.7821 13.444 17.8651 13.3828 17.9262C13.3217 17.9874 13.2387 18.0217 13.1523 18.0217ZM13.8044 16.7174H11.1957C11.1093 16.7174 11.0263 16.683 10.9652 16.6219C10.904 16.5607 10.8697 16.4778 10.8697 16.3913C10.8697 16.3048 10.904 16.2219 10.9652 16.1607C11.0263 16.0996 11.1093 16.0652 11.1957 16.0652H13.8044C13.8909 16.0652 13.9739 16.0996 14.035 16.1607C14.0962 16.2219 14.1305 16.3048 14.1305 16.3913C14.1305 16.4778 14.0962 16.5607 14.035 16.6219C13.9739 16.683 13.8909 16.7174 13.8044 16.7174ZM16.4131 5.63043C16.3266 5.63043 16.2437 5.66479 16.1826 5.72594C16.1214 5.7871 16.087 5.87004 16.087 5.95652C16.087 6.04301 16.1214 6.12595 16.1826 6.1871C16.2437 6.24825 16.3266 6.28261 16.4131 6.28261C19.5044 6.28261 19.8957 10.2511 17.3066 11.063C17.3588 10.9992 17.3848 10.918 17.3795 10.8357C17.3742 10.7535 17.338 10.6763 17.2781 10.6197C17.2182 10.563 17.139 10.5312 17.0566 10.5306C16.9742 10.53 16.8945 10.5606 16.8338 10.6163C16.2077 11.2457 16.149 11.288 16.1131 11.3761C16.0882 11.4355 16.0813 11.5009 16.0935 11.5642C16.1057 11.6274 16.1364 11.6857 16.1816 11.7315C16.8925 12.4424 16.8892 12.4783 17.0653 12.4783C17.1301 12.4786 17.1935 12.4597 17.2475 12.4239C17.3014 12.3881 17.3435 12.337 17.3684 12.2772C17.3932 12.2174 17.3997 12.1515 17.3869 12.088C17.3742 12.0245 17.3428 11.9663 17.2968 11.9207L17.1468 11.7739C17.8566 11.6396 18.4974 11.2619 18.9587 10.706C19.42 10.1501 19.6729 9.45066 19.674 8.72826C19.674 7.14348 18.461 5.63043 16.4131 5.63043ZM8.58704 11.8261C8.67353 11.8261 8.75647 11.7917 8.81762 11.7306C8.87877 11.6694 8.91313 11.5865 8.91313 11.5C8.91313 11.4135 8.87877 11.3306 8.81762 11.2694C8.75647 11.2083 8.67353 11.1739 8.58704 11.1739C6.51965 11.1739 5.32617 12.7065 5.32617 14.2717C5.32724 14.9941 5.5802 15.6936 6.0415 16.2495C6.5028 16.8054 7.14354 17.1831 7.85335 17.3174L7.70335 17.4641C7.64194 17.5255 7.60745 17.6088 7.60745 17.6957C7.60745 17.7825 7.64194 17.8658 7.70335 17.9272C7.76475 17.9886 7.84803 18.0231 7.93487 18.0231C8.02171 18.0231 8.10499 17.9886 8.16639 17.9272C9.17074 16.9196 9.17074 17.1641 8.16639 16.1598C8.10562 16.1041 8.02602 16.0735 7.94358 16.0741C7.86115 16.0747 7.78202 16.1065 7.7221 16.1631C7.66218 16.2198 7.62593 16.297 7.62063 16.3792C7.61534 16.4615 7.6414 16.5427 7.69356 16.6065C7.12182 16.4273 6.63561 16.0447 6.32697 15.5312C6.01833 15.0176 5.90867 14.4087 6.01875 13.8198C6.12883 13.2308 6.45101 12.7026 6.92431 12.3352C7.3976 11.9678 7.98917 11.7867 8.58704 11.8261ZM18.1381 16.1598L17.0653 17.2359L16.6447 16.812C16.6142 16.7816 16.5782 16.7574 16.5384 16.741C16.4987 16.7245 16.4561 16.7161 16.4131 16.7161C16.3701 16.7161 16.3276 16.7245 16.2878 16.741C16.2481 16.7574 16.212 16.7816 16.1816 16.812C16.1512 16.8424 16.1271 16.8785 16.1106 16.9182C16.0942 16.9579 16.0857 17.0005 16.0857 17.0435C16.0857 17.0865 16.0942 17.1291 16.1106 17.1688C16.1271 17.2085 16.1512 17.2446 16.1816 17.275C17.2544 18.3446 16.8338 18.3837 18.6012 16.6228C18.6626 16.5614 18.6971 16.4781 18.6971 16.3913C18.6971 16.3045 18.6626 16.2212 18.6012 16.1598C18.5398 16.0984 18.4565 16.0639 18.3697 16.0639C18.2828 16.0639 18.1995 16.0984 18.1381 16.1598ZM6.30443 5.95652C8.02943 5.95652 7.8403 5.91413 7.70335 6.05109C7.65736 6.0967 7.62599 6.15497 7.61325 6.21847C7.60051 6.28198 7.60697 6.34784 7.63181 6.40766C7.65665 6.46748 7.69874 6.51854 7.75271 6.55435C7.80668 6.59015 7.8701 6.60907 7.93487 6.6087C8.11095 6.6087 8.12074 6.55978 8.81856 5.86196C8.87734 5.80115 8.91019 5.71989 8.91019 5.63533C8.91019 5.55076 8.87734 5.4695 8.81856 5.4087L8.16639 4.75652C8.10424 4.70602 8.02569 4.68016 7.9457 4.68385C7.86571 4.68755 7.78987 4.72055 7.73265 4.77657C7.67542 4.83258 7.64081 4.90769 7.63541 4.98759C7.63 5.06748 7.65419 5.14657 7.70335 5.20978C7.83378 5.33696 8.10117 5.30435 6.30443 5.30435C6.21795 5.30435 6.13501 5.3387 6.07385 5.39986C6.0127 5.46101 5.97835 5.54395 5.97835 5.63043C5.97835 5.71692 6.0127 5.79986 6.07385 5.86101C6.13501 5.92217 6.21795 5.95652 6.30443 5.95652Z'
                fill='url(#paint0_linear_2987_12265)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_12265'
                  x1='5.32617'
                  y1='4'
                  x2='20.7171'
                  y2='5.15998'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Work Flow
          </div>

          <Link href='/dashboard/UGC'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <g clipPath='url(#clip0_2987_7869)'>
                <path
                  d='M20.501 12C22.7092 12 24.5 10.2095 24.5 8C24.5 5.79105 22.7092 4 20.501 4C18.2911 4 16.5 5.79134 16.5 8C16.4997 10.2095 18.2911 12 20.501 12Z'
                  fill='url(#paint0_linear_2987_7869)'
                />
                <path
                  d='M12 12C13.933 12 15.5 10.433 15.5 8.5C15.5 6.567 13.933 5 12 5C10.067 5 8.5 6.567 8.5 8.5C8.5 10.433 10.067 12 12 12Z'
                  fill='url(#paint1_linear_2987_7869)'
                />
                <path
                  d='M3.8997 13.2289C5.6078 13.2289 6.99311 11.8352 6.99311 10.115C6.99311 8.39423 5.6078 7 3.8997 7C2.19106 7 0.806284 8.39423 0.806284 10.115C0.806284 11.8355 2.19079 13.2289 3.8997 13.2289ZM3.8997 13.9402C1.93807 13.9402 0.5 15.6804 0.5 17.4781V18.6882C0.5 18.8594 0.638531 19 0.80899 19H6.98959C7.16059 19 7.29913 18.8594 7.29913 18.6882V17.4781C7.29913 15.6804 5.86105 13.9402 3.8997 13.9402ZM11.7007 13.3771C9.52131 13.3771 7.92306 15.311 7.92306 17.3088V18.6535C7.92306 18.8436 8.07701 19 8.26641 19H15.134C15.225 19.0001 15.3124 18.9636 15.3769 18.8987C15.4413 18.8337 15.4777 18.7455 15.4779 18.6535V17.3088C15.4782 15.3112 13.8802 13.3771 11.7007 13.3771ZM20.3029 12.7528C17.8813 12.7528 16.1059 14.9013 16.1059 17.1214V18.6152C16.1059 18.8266 16.2769 19 16.4874 19H24.1174C24.329 19 24.5 18.8263 24.5 18.6152V17.1214C24.5 14.9015 22.7245 12.7528 20.3029 12.7528Z'
                  fill='url(#paint2_linear_2987_7869)'
                />
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear_2987_7869'
                  x1='16.5'
                  y1='4'
                  x2='25.0771'
                  y2='4.67582'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_2987_7869'
                  x1='8.5'
                  y1='5'
                  x2='16.005'
                  y2='5.59134'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_2987_7869'
                  x1='0.5'
                  y1='7'
                  x2='25.7637'
                  y2='10.9812'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
                <clipPath id='clip0_2987_7869'>
                  <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
            UGC
          </Link>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M17.05 19H7.88C7.6525 19 7.46875 18.8162 7.46875 18.5887C7.46875 18.3612 7.6525 18.1775 7.88 18.1775C8.65438 18.1775 9.28656 17.5475 9.28656 16.7709V5.41125C9.28437 5.18375 9.47031 5 9.69781 5H18.9378C19.1653 5 19.3491 5.18375 19.3491 5.41125V16.7031C19.3491 17.9697 18.3187 19 17.05 19ZM9.60813 18.1775H17.05C17.8637 18.1775 18.5244 17.5169 18.5244 16.7031V5.8225H10.1091V16.7688C10.1091 17.3025 9.92094 17.7925 9.60813 18.1775Z'
                fill='url(#paint0_linear_2987_10151)'
              />
              <path
                d='M7.87945 19.0006C6.65008 19.0006 5.65039 18.0009 5.65039 16.7716V12.0006C5.65039 11.7731 5.83414 11.5894 6.06164 11.5894H9.69508C9.92258 11.5894 10.1063 11.7731 10.1063 12.0006V16.7716C10.1085 18.0009 9.10883 19.0006 7.87945 19.0006ZM6.47508 12.4119V16.7694C6.47508 17.5437 7.10508 18.1759 7.87945 18.1759C8.65383 18.1759 9.28602 17.5459 9.28602 16.7694V12.4119H6.47508ZM17.4541 9.56594H11.421C11.1935 9.56594 11.0098 9.38219 11.0098 9.15469V7.30187C11.0098 7.07438 11.1935 6.89062 11.421 6.89062H17.4541C17.6816 6.89062 17.8654 7.07438 17.8654 7.30187V9.15469C17.8654 9.38219 17.6816 9.56594 17.4541 9.56594ZM11.8345 8.74125H17.0429V7.71312H11.8345V8.74125ZM13.8929 13.6478H11.421C11.1935 13.6478 11.0098 13.4641 11.0098 13.2366V10.7647C11.0098 10.5372 11.1935 10.3534 11.421 10.3534H13.8907C14.1182 10.3534 14.302 10.5372 14.302 10.7647V13.2344C14.3041 13.4641 14.1204 13.6478 13.8929 13.6478ZM11.8345 12.8231H13.4816V11.1759H11.8345V12.8231ZM17.4541 13.6478H15.3957C15.1682 13.6478 14.9845 13.4641 14.9845 13.2366C14.9845 13.0091 15.1682 12.8253 15.3957 12.8253H17.4541C17.6816 12.8253 17.8654 13.0091 17.8654 13.2366C17.8654 13.4641 17.6816 13.6478 17.4541 13.6478ZM17.4541 15.7062H11.421C11.1935 15.7062 11.0098 15.5225 11.0098 15.295C11.0098 15.0675 11.1935 14.8837 11.421 14.8837H17.4541C17.6816 14.8837 17.8654 15.0675 17.8654 15.295C17.8654 15.5225 17.6816 15.7062 17.4541 15.7062Z'
                fill='url(#paint1_linear_2987_10151)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_10151'
                  x1='7.46875'
                  y1='5'
                  x2='20.2281'
                  y2='5.85314'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_2987_10151'
                  x1='5.65039'
                  y1='6.89062'
                  x2='18.7451'
                  y2='7.93135'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Feed
          </div>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 2xl:w-6 2xl:h-6'
              viewBox='0 0 25 24'
              fill='none'
            >
              <path
                d='M22.5 20H2.5V18H3.5V11.0314C3.5 6.04348 7.52944 2 12.5 2C17.4706 2 21.5 6.04348 21.5 11.0314V18H22.5V20ZM5.5 18H19.5V11.0314C19.5 7.14806 16.366 4 12.5 4C8.63401 4 5.5 7.14806 5.5 11.0314V18ZM10 21H15C15 22.3807 13.8807 23.5 12.5 23.5C11.1193 23.5 10 22.3807 10 21Z'
                fill='url(#paint0_linear_2987_12099)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2987_12099'
                  x1='2.5'
                  y1='2'
                  x2='23.9606'
                  y2='3.57298'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7F1DFE' />
                  <stop offset='1' stopColor='#464BD3' />
                </linearGradient>
              </defs>
            </svg>
            Notification
          </div>
        </div>

        {/* add/close btn */}
        <div
          title={visibility < 2 ? 'Click to open' : 'Close'}
          onClick={() => {
            visibility === 2
              ? dispatch(moveDrawer({ visibility: 0 }))
              : dispatch(moveDrawer({ visibility: 2 }));
          }}
          style={{
            background:
              'linear-gradient(108deg, rgba(255, 255, 255, 0.80) 0.17%, rgba(164, 209, 223, 0.76) 32.61%, rgba(188, 95, 232, 0.34) 65.41%, rgba(255, 255, 255, 0.45) 98.68%)',
            top: 'calc(50vh - 43px)',
          }}
          className='w-12 3xl:w-[86px] cursor-pointer flex items-center justify-center h-12 3xl:h-[86px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.50)] rounded-full absolute -right-[70px] 3xl:-right-[112px]'
        >
          {visibility < 2 ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 3xl:w-[46px] 3xl:h-[46px]'
              viewBox='0 0 46 46'
              fill='none'
            >
              <path
                d='M20.5082 20.5082V5.55859H25.4914V20.5082H40.4409V25.4914L25.4914 25.4914L25.4914 40.4409H20.5082V25.4914H5.55859V20.5082H20.5082Z'
                fill='white'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 3xl:w-[46px] 3xl:h-[46px]'
              viewBox='0 0 66 66'
              fill='none'
            >
              <path
                d='M33.002 29.4769L43.5729 18.9059L47.0966 22.4296L36.5256 33.0005L47.0966 43.5715L43.5729 47.0951L33.002 36.5242L22.431 47.0951L18.9074 43.5715L29.4783 33.0005L18.9074 22.4296L22.431 18.9059L33.002 29.4769Z'
                fill='white'
              />
            </svg>
          )}
        </div>
      </div>

      {/* additional div for hovering and opening of drawer */}
      {!visibility && (
        <div
          onMouseEnter={() => {
            dispatch(moveDrawer({ visibility: 1 }));
          }}
          className='w-[5vw]  h-[82vh] '
        ></div>
      )}
    </aside>
  );
};

export default LeftDrawer;
