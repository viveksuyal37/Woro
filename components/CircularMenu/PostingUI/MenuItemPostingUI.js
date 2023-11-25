import Footer from './Footer';
import Header from './Header';
import PostDescription from './PostDescription';
import PostEffects from './PostEffects';
import PostingPlatforms from './PostingPlatforms';

const MenuItemPostingUI = () => {
  return (
    <div className='w-full h-full text-[14px] 2xl:text-[1rem] relative  py-[2.58vh] 2xl:py-[2.58427vh] 4xl:py-[4vh] px-[7.1vw] '>
      <Header />
      <Mid />
      <Footer />
    </div>
  );
};

export default MenuItemPostingUI;

const Mid = () => {
  return (
    <div className='grid grid-cols-10 gap-8 w-full h-[62vh] 3xl:min-h-[609px] my-10 2xl:my-[46px]'>
      <PostingPlatforms />
      <PostDescription />
      <PostEffects />
    </div>
  );
};
