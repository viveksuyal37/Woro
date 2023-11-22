'use client';

import {
  getDrawerVisibility,
  moveDrawer,
} from '@/Redux/slices/LeftDashboardDrawerSlice';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

const LeftDrawer = () => {
  const { visibility } = useSelector(getDrawerVisibility);
  const dispatch = useDispatch();

  return (
    // blurred overlay
    // <div
    //   style={{ zIndex: 10 }}
    //   className='fixed inset-0 w-screen h-screen backdrop-blur-sm'
    // >
    <aside
      style={{ zIndex: 10 }}
      className={classNames(
        'absolute transition-all duration-300 ease-linear flex gap-[7vw] ml-12  h-max',
        {
          'left-0': visibility === 2,
          '-left-[31vw] 2xl:-left-[29.5vw]': !visibility,
        },
      )}
    >
      <div
        style={{
          background:
            'linear-gradient(108deg, rgba(255, 255, 255, 0.40) 0.17%, rgba(164, 209, 223, 0.38) 32.61%, rgba(188, 95, 232, 0.17) 65.41%, rgba(255, 255, 255, 0.22) 98.68%)',
        }}
        className='rounded-[20px]  w-[26.97vw] h-[81vh]  shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.50)] backdrop-blur-[30px]'
      >
        <p>LeftDrawer</p>
        {/* add btn */}
        <div
          title={!visibility ? 'Click to open' : 'Close'}
          onClick={() => {
            visibility === 2
              ? dispatch(moveDrawer({ visibility: false }))
              : dispatch(moveDrawer({ visibility: 2 }));
          }}
          style={{
            background:
              'linear-gradient(108deg, rgba(255, 255, 255, 0.80) 0.17%, rgba(164, 209, 223, 0.76) 32.61%, rgba(188, 95, 232, 0.34) 65.41%, rgba(255, 255, 255, 0.45) 98.68%)',
            top: 'calc(50% - 43px)',
          }}
          className='w-14 2xl:w-[86px] cursor-pointer flex items-center justify-center h-14 2xl:h-[86px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.50)] rounded-full absolute -right-20 2xl:-right-[112px]'
        >
          {!visibility ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 2xl:w-[46px] 2xl:h-[46px]'
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
              className='w-8 h-8 2xl:w-[46px] 2xl:h-[46px]'
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
      {/* <div className='w-[5vw] bg-black h-[82vh] border border-red'></div> */}
    </aside>
    // </div>
  );
};

export default LeftDrawer;
