import ImageSlider from '/Programs/shop/src/components/ImageSlider'
import { Heading1 } from '../components/Typography';
import { homeText } from '../content/homePageText';
import TextSection from '../components/TextSection';


const sliderImages = [
  { id: 1, url: '/images/Slide1.jpg' },
  { id: 2, url: 'https://via.placeholder.com/600x300?text=Товар+2' },
  { id: 3, url: 'https://via.placeholder.com/600x300?text=Товар+3' },
];

const HomePage = () => {
  return (
    <div className="mx-auto mt-10 p-8 max-w-6xl bg-white rounded-2xl shadow-xl space-y-6">
  <Heading1>✨ Вироби з бісеру та все для творчості</Heading1>
  <p className="text-center text-gray-600 text-lg italic">
    Створи щось унікальне разом з нами!
  </p>

  <ImageSlider images={sliderImages}/>
  {homeText.map((section,index)=>(<TextSection key={index} {...section}/>))}
</div>
  );
};

export default HomePage;
