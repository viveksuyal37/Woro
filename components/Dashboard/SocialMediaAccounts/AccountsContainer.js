/*Custom components */
import classNames from 'classnames';
import AddSocials from './AddSocials';
import SocialMediaCard from './SocialMediaCard';
import { useDraggable } from 'react-use-draggable-scroll';
import { useRef } from 'react';

const AccountsContainer = ({ expandedCard }) => {
  const accountsContainerRef = useRef();
  const { events } = useDraggable(accountsContainerRef);

  return (
    <div
      className={classNames(
        'flex gap-[21px] transition-all opacity-1 duration-300 ease-in-out overflow-hidden',
        {
          ' w-0 h-0 opacity-0 hidden': expandedCard,
          'w-full h-full': !expandedCard,
        },
      )}
    >
      <div
        ref={accountsContainerRef}
        {...events}
        className='gap-[14.7px] child:flex-shrink-0 2xl:gap-[21px] overflow-auto scrollableContainer flex max-w-full '
      >
        {!expandedCard &&
          ['', '', '', '', '', '', '', '', '', ''].map((i, indx) => {
            return <SocialMediaCard key={indx} />;
          })}
      </div>
      <AddSocials />
    </div>
  );
};

export default AccountsContainer;
