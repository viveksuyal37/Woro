import Image from 'next/image';

const LeftFooter = () => {
  return (
    <div className='flex w-[18.594vw] text-[10px] 2xl:text-[12px] 3xl:text-[1rem] 2xl:w-[300px] 3xl:w-[19vw] flex-col gap-[15px] 3xl:gap-[22px]'>
      {/* top */}

      <div className=' w-full  h-[32.5px] 2xl:h-[47px] p-[6px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] flex gap-1 2xl:gap-[10px] justify-center items-center text-woro-blue rounded-[10px_90px_90px_0px] border-[2px] border-woro-blue'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 2xl:w-6'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M14.8402 15.4515L12.6867 19.9771C12.5482 20.2683 12.1997 20.392 11.9086 20.2535C11.8436 20.2226 11.785 20.18 11.7355 20.1277L8.28897 16.4892C8.19671 16.3917 8.07373 16.3291 7.94071 16.3117L2.9712 15.6621C2.65142 15.6203 2.42608 15.3272 2.46788 15.0074C2.4772 14.9361 2.49961 14.8672 2.53397 14.804L4.92945 10.4018C4.99358 10.284 5.01517 10.1476 4.9906 10.0157L4.07272 5.08873C4.01366 4.77169 4.22279 4.4668 4.53984 4.40773C4.61052 4.39457 4.68303 4.39457 4.75372 4.40773L9.68074 5.32561C9.81264 5.35017 9.94899 5.32859 10.0667 5.26446L14.469 2.86899C14.7523 2.71484 15.1069 2.81952 15.261 3.10279C15.2954 3.16595 15.3178 3.23491 15.3271 3.30621L15.9767 8.27571C15.9941 8.40874 16.0568 8.53172 16.1541 8.62397L19.7928 12.0705C20.0269 12.2923 20.0369 12.6619 19.8151 12.896C19.7657 12.9482 19.707 12.9908 19.6421 13.0217L15.1166 15.1751C14.9954 15.2328 14.8978 15.3304 14.8402 15.4515ZM15.6156 17.327L16.9919 15.9507L21.121 20.0796L19.7447 21.456L15.6156 17.327Z'
            fill='#7F1DFE'
          />
        </svg>

        <span>Bruce, try out our new chatbot WoroGPT!</span>
      </div>

      {/* bottom */}
      <div className='flex items-center justify-between bg-white w-full h-[32.5px] 2xl:h-[47px] p-[6px_6px_6px_26px] rounded-[50px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]'>
        <input
          placeholder='Ask us anything'
          className='text-[9px] 2xl:text-[14px] text-[#455A64] outline-none'
        ></input>

        <div className='flex items-center justify-center w-[23px] 2xl:w-[35px] h-[23px] 2xl:h-[35px] rounded-full  bg-gradient-to-r from-[#7F1DFE] to-[#FD5C5C] '>
          <Image
            src='/assets/images/footer/search.png'
            width='16'
            height='16'
            className='w-3 2xl:w-4'
            alt='footer'
          />
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
