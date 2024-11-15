import Left from './Left';
import Right from './Right';

const SchedulingUI = () => {
  return (
    <main className='flex items-center justify-center w-screen h-screen overflow-hidden'>
      <div className=' grid grid-cols-3 gap-24 w-full mx-[7.1vw] child:rounded-[11px] child:2xl:rounded-[18px] child:p-[15px_25px] child:2xl:p-[20px_35px] child:shadow-[_0px_4px_27px_5px_rgba(0,_0,_0,_0.15)]'>
        <div
          style={{
            background:
              'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)',
          }}
          className='col-span-2 '
        >
          <Left />
        </div>

        <div
          style={{
            background:
              'linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)',
          }}
        >
          <Right />
        </div>
      </div>
    </main>
  );
};
export default SchedulingUI;
