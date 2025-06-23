import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';




interface SlideImage {
  id: number;
  url: string;
}

const ImageSlider: FC = () => {
  const images: SlideImage[] = [
    { id: 1, url: '/images/Slide1.jpg' },
    { id: 2, url: 'https://via.placeholder.com/600x300?text=Товар+2' },
    { id: 3, url: 'https://via.placeholder.com/600x300?text=Товар+3' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.url}
              alt={`Слайд ${image.id}`}
              className="w-full h-[300px] object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
