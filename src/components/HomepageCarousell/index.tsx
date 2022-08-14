import React from 'react';
import { useAppSelector } from '@/src/store/hooks';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './HomepageCarousell.module.scss';

type carousellImageData = {
  id: string;
  imgSrc: string;
  link?: string;
};

const carousellData: Array<carousellImageData> = [
  {
    id: 'civil-tools',
    imgSrc: '/src/assets/homeCarousell/civil-tools.png',
    link: 'https://civil-structural-tools.herokuapp.com/',
  },
  {
    id: 'burger-builder',
    imgSrc: '/src/assets/homeCarousell/burger-builder.png',
    link: 'https://burger-builder-a6e21.web.app/',
  },
  {
    id: 'rust-road-race',
    imgSrc: '/src/assets/homeCarousell/rust-road-race.png',
  },
];

const HomepageCarousell: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  return (
    <div className={style.root} data-dark-mode={isDarkMode}>
      <Swiper
        modules={[Pagination, Autoplay]}
        className={style.swiperContainer}
        spaceBetween={20}
        loop
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {carousellData.map((data: carousellImageData) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="w-full">
                {data.link ? (
                  <a href={data.link || ''} target="_blank" rel="noreferrer">
                    <img src={data.imgSrc} alt={data.id} />
                  </a>
                ) : (
                  <img src={data.imgSrc} alt={data.id} />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="font-raleway h4 mt-4 text-center font-bold">
        And More to go, find them here in{' '}
        <a href="/projects" target="_self" className="text-amber-900 underline dark:text-amber-700">
          Projects.
        </a>
      </p>
    </div>
  );
};

export default HomepageCarousell;
