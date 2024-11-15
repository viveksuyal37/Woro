'use client';

import ConnectSocials from '@/components/modals/ConnectSocials';
import { useState } from 'react';

const AddSocials = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        background:
          'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%) ',
      }}
      onClick={() => {
        setShowModal(true);
      }}
      className='flex-shrink-0 flex  flex-col items-center justify-center rounded-[11px] 2xl:rounded-[20px] w-[122px]  2xl:w-[174px] gap-1  shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]'
    >
      {/* add btn*/}
      <div className='bg-woro-blue cursor-pointer w-[28px] 2xl:w-[40px] h-[28px] 2xl:h-[40px] flex items-center justify-center rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='w-[17px] 2xl:w-[24px] h-[17px] 2xl:h-[24px] '
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z'
            fill='white'
          />
        </svg>
      </div>

      {/* bottom text*/}
      <div className='text-[10px] cursor-pointer 2xl:text-[14px] text-[#7F7789]'>
        Add socials
      </div>

      {/* add account modal */}

      {showModal && (
        <ConnectSocials
          closeModal={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
          overlay='[rgba(0,0,0,0.37)]'
        />
      )}
    </div>
  );
};

export default AddSocials;
