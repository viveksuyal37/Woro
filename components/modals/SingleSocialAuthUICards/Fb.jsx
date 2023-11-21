'use client';

import Image from 'next/image';

const Fb = () => {
  const loginHandler = async () => {
    // fb login dialog

    window.FB.login(
      (response) => {
        console.log('response=>', response);

        if (response.status === 'connected') {
          console.log('userAccessToken=>', response.authResponse.accessToken);
          // fetch(
          //   `/api/fb/getAppAccessToken?token=${response.authResponse.accessToken}`,
          // )
          //   .then((data) => {
          //     return data.json();
          //   })
          //   .then((data) => {
          //     console.log('node appAccessToken', data);
          //   });
        } else {
          console.log('user aborted login.');
        }
      },
      {
        // scope: 'instagram_basic, instagram_content_publish',
        scope: 'public_profile,instagram_basic',
        return_scopes: true,
        config_id: process.env.NEXT_PUBLIC_CONFIG_ID,
      },
    );
  };

  return (
    <>
      <div
        style={{
          background:
            ' linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)',
        }}
        className='flex flex-col p-[11px_46px] rounded-[21px] gap-2 items-center justify-center text-[14px] font-bold h-[100px]'
      >
        <div
          onClick={loginHandler}
          className='bg-white flex items-center justify-center w-[50px] h-[50px] rounded-full shadow-[0px_4px_20px_rgba(190,_148,_243,_0.20)]'
        >
          <Image
            src='/assets/images/dashboard/fb.png'
            alt='facebook'
            width='22'
            height='22'
          />
        </div>
        <span>Add account</span>
      </div>
    </>
  );
};

export default Fb;
