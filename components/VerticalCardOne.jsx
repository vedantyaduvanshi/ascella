import React, { useState } from 'react';
import Image from 'next/image';
import FormCTA from './FormCTA';

const VerticalCardOne = ({ number, logo, logoSize = 200, title, description, ctaText, stats, backgroundImage, collapsedBackgroundImage, bubbles, onHover, isExpanded }) => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <span
        className={`h-full min-h-[430px] ${isExpanded ? 'w-[600px] 2xl:w-[768px]' : 'w-[150px] md:w-[200px] lg:w-[200px] 2xl:w-[270px]'
          } transition-all duration-500 ease-in-out flex items-center p-20 text-white montserrat text-[25px] flex-col justify-between bg-cover bg-center relative overflow-hidden`}
        style={{
          backgroundImage: `url('${isExpanded ? backgroundImage : collapsedBackgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'all 500ms ease-in-out',
        }}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        {isExpanded && bubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url('${bubble}')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: ['22%', '18%', '15%'][index],
              height: ['22%', '18%', '15%'][index],
              top: ['180px', '420px', 'auto'][index],
              left: ['10px', 'auto', '60px'][index],
              right: ['auto', '50px', 'auto'][index],
              bottom: ['auto', 'auto', '90px'][index],
            }}
          />
        ))}

        {!isExpanded ? (
          <div className="absolute inset-0">
            <div className="absolute left-8 top-8 bottom-8 flex items-center">
              <div className="flex">
                <p className="font-almarai mb-52 whitespace-nowrap text-[#B8B8B8] uppercase text-4xl font-bold text-center 2xl:text-5xl">
                  {title.split(' ')[0].split('').map((char, index) => (
                    <span key={index} className="block">{char}</span>
                  ))}
                </p>
                <p className="font-almarai -ml-7 mt-[21rem] text-[#B8B8B8] uppercase text-4xl font-bold 2xl:text-5xl 2xl:mt-[25rem] 2xl:-ml-9" style={{ letterSpacing: '0.5rem' }}>
                  {title.split(' ')[1]}
                </p>
              </div>
            </div>
            <div className="absolute bottom-8 left-2 text-white font-bold" style={{
              fontFamily: '"Arial Black", Arial, sans-serif',
              color: 'transparent',
              WebkitTextStroke: '1px #B8B8B8',
              fontSize: '200px',
            }}>
              {number}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
            <div className='flex gap-4 items-start'>
              <div
                style={{
                  fontFamily: '"Arial Black", Arial, sans-serif',
                  fontSize: '200px',
                  fontWeight: 'bold',
                  color: 'transparent',
                  lineHeight: '0.8',
                  textShadow: 'none',
                  WebkitTextStroke: '1px #ffffff',
                }}
              >
                {number}
              </div>
              <div className="mt-4">
                <Image src={logo} height={logoSize} width={logoSize} alt="logo" className='-ml-4' />
              </div>
            </div>

            <div className='text-sm montserrat text-[#B8B8B8] font-light 2xl:text-xl'>
              {description}
            </div>
            <button
              className="px-6 py-3 text-white text-lg font-medium bg-transparent border border-gray-600 rounded-full hover:border-green-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 self-start mt-4 2xl:text-3xl"
              onClick={handleOpenForm}
            >
              {ctaText}
            </button>
            <div className="flex justify-center items-center text-center space-x-4 text-[#B8B8B8] text-[12px] font-semibold montserrat mt-4 2xl:text-lg">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span>{stat}</span>
                  {index < stats.length - 1 && <div className="w-px h-12 bg-[#B8B8B8]"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </span>

      {isFormOpen && <FormCTA onClose={handleCloseForm} cardTitle={title} />}
    </>
  );
};

export default VerticalCardOne;