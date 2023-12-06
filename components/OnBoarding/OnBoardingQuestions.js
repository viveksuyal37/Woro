'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import questionnaire from '@/constants/onboardingQuestionnarie';
import { useRouter } from 'next/navigation';

const OnBoardingQuestions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { push } = useRouter();

  const [menuData, setMenuData] = useState({
    isHovered: false,
    q1: null,
    q2: null,
    q3: null,
  });

  useEffect(() => {
    console.log('menuData', menuData);
    if (questionIndex === 3) push('/dashboard');
  }, [questionIndex]);

  return (
    <section className='flex items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-r from-purple-50 to-purple-300 animate-shift-gradient'>
      {/*  circle */}
      {questionIndex < 3 && (
        <>
          <ul
            style={{
              background:
                ' linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)',
              animation: 'grow 300ms linear',
            }}
            className=' menu'
          >
            {/* inner circle */}
            <div
              className={classNames(
                'flex h-full circle hover:border-[2px] hover:border-woro-blue justify-center items-center z-10  p-10 rounded-full bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]',
                { 'border-woro-blue border-[2px]': menuData.isHovered },
              )}
            >
              <div className='flex min-h-[150px]  2xl:min-h-[220px] leading-tight flex-col text-[9px] 2xl:text-[14px] max-w-[200px] items-center justify-between'>
                <div className='flex flex-col items-center gap-3 text-center'>
                  <h2 className='font-bold text-[12px] 2xl:text-[18px] text-woro-blue'>
                    {menuData.isHovered
                      ? questionnaire[questionIndex].options[
                          menuData.hoveredOption.optionIndex
                        ].title
                      : questionnaire[questionIndex]?.question}
                  </h2>
                  <p>
                    {menuData.isHovered
                      ? questionnaire[questionIndex].options[
                          menuData.hoveredOption.optionIndex
                        ].desc
                      : questionnaire[questionIndex]?.desc}
                  </p>
                </div>
                <span>
                  Question {questionIndex + 1} of {questionnaire?.length}
                </span>
              </div>
            </div>
            {/* outer circle items */}
            <li
              onMouseEnter={() => {
                setMenuData({
                  ...menuData,
                  isHovered: true,
                  hoveredOption: { questionIndex, optionIndex: 0 },
                });
              }}
              onMouseLeave={() => {
                setMenuData({ ...menuData, isHovered: false });
              }}
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
              }}
              className='one group'
            >
              <div>
                <span className='icon'>
                  <Image
                    className='w-10 h-10 2xl:w-16 2xl:h-16'
                    src={questionnaire[questionIndex]?.options[0].iconUrl}
                    width='64'
                    height='64'
                    alt='logo'
                  ></Image>

                  <p className='font-bold text-[12px] 2xl:text-[18px]'>
                    {questionnaire[questionIndex]?.options[0].title}
                  </p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={() => {
                setMenuData({
                  ...menuData,
                  isHovered: true,
                  hoveredOption: { questionIndex, optionIndex: 1 },
                });
              }}
              onMouseLeave={() => {
                setMenuData({ ...menuData, isHovered: false });
              }}
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
              }}
              className='two group'
            >
              <div>
                <span className='icon' style={{ transform: 'rotate(300deg)' }}>
                  <Image
                    className='w-10 h-10 2xl:w-16 2xl:h-16'
                    src={questionnaire[questionIndex]?.options[1].iconUrl}
                    width='64'
                    height='64'
                    alt='logo'
                  ></Image>
                  <p className='font-bold text-[12px] 2xl:text-[18px]'>
                    {questionnaire[questionIndex]?.options[1].title}
                  </p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={() => {
                setMenuData({
                  ...menuData,
                  isHovered: true,
                  hoveredOption: { questionIndex, optionIndex: 2 },
                });
              }}
              onMouseLeave={() => {
                setMenuData({ ...menuData, isHovered: false });
              }}
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
              }}
              className='three group'
            >
              <div>
                <span className='icon' style={{ transform: 'rotate(240deg)' }}>
                  <Image
                    className='w-10 h-10 2xl:w-16 2xl:h-16'
                    src={questionnaire[questionIndex]?.options[2].iconUrl}
                    width='64'
                    height='64'
                    alt='logo'
                  ></Image>
                  <p className='font-bold text-[12px] 2xl:text-[18px]'>
                    {questionnaire[questionIndex]?.options[2].title}
                  </p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={() => {
                setMenuData({
                  ...menuData,
                  isHovered: true,
                  hoveredOption: { questionIndex, optionIndex: 3 },
                });
              }}
              onMouseLeave={() => {
                setMenuData({ ...menuData, isHovered: false });
              }}
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
              }}
              className='four group'
            >
              <div>
                <span className='icon' style={{ transform: 'rotate(-180deg)' }}>
                  <Image
                    className='w-10 h-10 2xl:w-16 2xl:h-16'
                    src={questionnaire[questionIndex]?.options[3].iconUrl}
                    width='64'
                    height='64'
                    alt='logo'
                  ></Image>
                  <p className='font-bold text-[12px] 2xl:text-[18px]'>
                    {questionnaire[questionIndex]?.options[3].title}
                  </p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={() => {
                setMenuData({
                  ...menuData,
                  isHovered: true,
                  hoveredOption: { questionIndex, optionIndex: 4 },
                });
              }}
              onMouseLeave={() => {
                setMenuData({ ...menuData, isHovered: false });
              }}
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
              }}
              className='five group'
            >
              <div>
                <span className='icon' style={{ transform: 'rotate(120deg)' }}>
                  <Image
                    className='w-10 h-10 2xl:w-16 2xl:h-16'
                    src={questionnaire[questionIndex]?.options[4].iconUrl}
                    width='64'
                    height='64'
                    alt='logo'
                  ></Image>
                  <p className='font-bold text-[12px] 2xl:text-[18px]'>
                    {questionnaire[questionIndex]?.options[4].title}
                  </p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={() => {
                setMenuData({
                  ...menuData,
                  isHovered: true,
                  hoveredOption: { questionIndex, optionIndex: 5 },
                });
              }}
              onMouseLeave={() => {
                setMenuData({ ...menuData, isHovered: false });
              }}
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
              }}
              className='group six'
            >
              <div>
                <span className='icon' style={{ transform: 'rotate(60deg)' }}>
                  <Image
                    className='w-10 h-10 2xl:w-16 2xl:h-16'
                    src={questionnaire[questionIndex]?.options[5].iconUrl}
                    width='64'
                    height='64'
                    alt='logo'
                  ></Image>
                  <p className='font-bold text-[12px] leading-tight 2xl:text-[18px]'>
                    {questionnaire[questionIndex]?.options[5].title}
                  </p>
                </span>
              </div>
            </li>
          </ul>
          {/* clip path */}
          <svg height={0} width={0}>
            <defs>
              <clipPath clipPathUnits='objectBoundingBox' id='sector'>
                <path
                  fill='none'
                  stroke='#111'
                  strokeWidth={1}
                  className='sector'
                  d='M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z'
                />
              </clipPath>
            </defs>
          </svg>

          <style jsx>
            {`
              .menu {
                padding: 0;
                list-style: none;
                position: relative;
                margin: 30px auto;
                width: 744px;
                height: 744px;
                border-radius: 50%;
              }

              @media all and (max-width: 1400px) {
                .menu {
                  width: 521px;
                  height: 521px;
                }
                .icon {
                  max-width: 120px;
                }
              }

              .menu li {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                -webkit-clip-path: url(#sector);
                clip-path: url(#sector);
              }
              .menu li div {
                width: 100%;
                height: 100%;
                display: block;
                color: #242128;
                text-align: center;
              }

              .menu li div:hover {
                background-color: white;
              }

              .one {
                transform: rotate(0deg);
              }

              .two {
                transform: rotate(60deg);
              }

              .three {
                transform: rotate(120deg);
              }

              .four {
                transform: rotate(180deg);
              }

              .five {
                transform: rotate(240deg);
              }

              .six {
                transform: rotate(300deg);
              }

              .icon {
                position: absolute;
                right: 10%;
                top: 27%;
                font-size: 35px;
                width: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 7px;
              }

              .circle {
                position: absolute;
                height: 40%;
                width: 40%;
                border-radius: 50%;
                background: white;
                top: 30%;
                left: 30%;
                z-index: 8;
              }

              @keyframes grow {
                from {
                  bottom: -1000px;
                }

                to {
                  bottom: 0px;
                }
              }
            `}
          </style>
        </>
      )}
    </section>
  );
};

export default OnBoardingQuestions;
