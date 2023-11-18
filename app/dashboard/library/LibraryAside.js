import { nanoid } from 'nanoid';

const LibraryAside = () => {
  const menuData = [
    {
      menu: 'Location',
      options: [
        'All Media',
        'Device Upload',
        'Google Drive',
        'One Drive',
        'Dropbox',
      ],
    },
    {
      menu: 'FileType',
      options: [
        'All Media',
        'Images (PNG, JPEG)',
        'Videos (MP4, MOV)',
        'GIF (.gif)',
      ],
    },
    {
      menu: 'Usage Type',
      options: ['All Media', 'Previously Used Media', 'Unused Media'],
    },
  ];

  return (
    <aside className='w-[240px] 2xl:w-[310px] min-h-[68vh] 2xl:min-h-[70vh] h-full bg-white shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[20px_32px] 2xl:p-[30px_48px]'>
      {/* top */}
      <div className='flex gap-2 mb-3 2xl:mb-5 pb-2 2xl:pb-[22px] border-b border-black  text-lg 2xl:text-2xl'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 2xl:w-8 2xl:h-8'
          viewBox='0 0 33 33'
          fill='none'
        >
          <path
            d='M9.48664 23.7188C9.98212 22.3169 11.3191 21.3125 12.8906 21.3125C14.4621 21.3125 15.7992 22.3169 16.2946 23.7188H28.5312V26.125H16.2946C15.7992 27.5269 14.4621 28.5312 12.8906 28.5312C11.3191 28.5312 9.98212 27.5269 9.48664 26.125H4.46875V23.7188H9.48664ZM16.7054 15.2969C17.2008 13.895 18.5379 12.8906 20.1094 12.8906C21.6809 12.8906 23.0179 13.895 23.5134 15.2969H28.5312V17.7031H23.5134C23.0179 19.105 21.6809 20.1094 20.1094 20.1094C18.5379 20.1094 17.2008 19.105 16.7054 17.7031H4.46875V15.2969H16.7054ZM9.48664 6.875C9.98212 5.47313 11.3191 4.46875 12.8906 4.46875C14.4621 4.46875 15.7992 5.47313 16.2946 6.875H28.5312V9.28125H16.2946C15.7992 10.6831 14.4621 11.6875 12.8906 11.6875C11.3191 11.6875 9.98212 10.6831 9.48664 9.28125H4.46875V6.875H9.48664ZM12.8906 9.28125C13.5551 9.28125 14.0938 8.74259 14.0938 8.07812C14.0938 7.41366 13.5551 6.875 12.8906 6.875C12.2262 6.875 11.6875 7.41366 11.6875 8.07812C11.6875 8.74259 12.2262 9.28125 12.8906 9.28125ZM20.1094 17.7031C20.7739 17.7031 21.3125 17.1645 21.3125 16.5C21.3125 15.8355 20.7739 15.2969 20.1094 15.2969C19.4449 15.2969 18.9062 15.8355 18.9062 16.5C18.9062 17.1645 19.4449 17.7031 20.1094 17.7031ZM12.8906 26.125C13.5551 26.125 14.0938 25.5864 14.0938 24.9219C14.0938 24.2574 13.5551 23.7188 12.8906 23.7188C12.2262 23.7188 11.6875 24.2574 11.6875 24.9219C11.6875 25.5864 12.2262 26.125 12.8906 26.125Z'
            fill='#242128'
          />
        </svg>
        <span>Filter items</span>
      </div>

      {/* menu items */}

      {menuData.map((data) => {
        return (
          <div className='mb-4 2xl:mb-6' key={nanoid(4)}>
            <h3 className='mb-3 text-sm 2xl:text-[1rem] font-bold 2xl:mb-5'>
              {data.menu}
            </h3>
            {data.options.map((option) => {
              return (
                <div
                  key={nanoid(4)}
                  className='2xl:text-[1rem] text-[12px] flex gap-2'
                >
                  <input value={option} name={data.menu} type='radio'></input>
                  <label>{option}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
};

export default LibraryAside;
