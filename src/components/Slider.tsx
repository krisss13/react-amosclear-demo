import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface SliderProps {
  items: string[];
  title: string;
}

const Slider: React.FC<SliderProps> = ({ items, title }) => (
  <Carousel
    swipeable
    emulateTouch
  >
    {items.map((item: string, index: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className="relative bg-gray-900">
        <img src={item} alt={title} className="w-full h-full object-cover" />
      </div>
    ))}
  </Carousel>
);

export default Slider;
