import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-[124px] h-[29.5px] 2xl:w-[177px] 2xl:h-[42px]'>
      <Image
        src='/assets/images/logo.png'
        alt='woro logo'
        width='177'
        height='42'
      />
    </div>
  );
};
export default Header;
