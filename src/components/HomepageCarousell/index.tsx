import React from 'react';
import { useAppSelector } from '@/src/store/hooks';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import style from './HomepageCarousell.module.scss';

type carousellImageData = {
  id: string;
  imgSrc: string;
  link: string;
};

// image production path
const civilToolsUrl = new URL('../../assets/projectData/projectprofilepic/civil-tools-rect.png', import.meta.url).href;
const burgerBuilderUrl = new URL('../../assets/projectData/projectprofilepic/burger-builder-rect.png', import.meta.url)
  .href;
const roadRaceUrl = new URL('../../assets/projectData/projectprofilepic/road-race-rect.png', import.meta.url).href;

const carousellData: Array<carousellImageData> = [
  {
    id: 'civil-tools',
    imgSrc: civilToolsUrl,
    link: '/projects?category=featureProjects',
  },
  {
    id: 'burger-builder',
    imgSrc: burgerBuilderUrl,
    link: '/projects?category=featureProjects',
  },
  {
    id: 'rust-road-race',
    imgSrc: roadRaceUrl,
    link: '/projects?category=featureProjects',
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
                {
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <img src={data.imgSrc} alt={data.id} />
                  </a>
                }
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="font-raleway h4 mt-4 text-center font-bold">
        And More to go, find them here in{' '}
        <Link to="/projects" className="text-amber-900 underline dark:text-amber-700">
          Projects.
        </Link>
      </p>
    </div>
  );
};

export default HomepageCarousell;
