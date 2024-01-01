import { FC } from 'react'
import { cardItems1Props, } from '../assets/types';

interface ProductCardProps {
  item: cardItems1Props
  width: string
  height?: string
  mobWdith?: string
  tabWidth?: string
  pcWidth?: string,
}

export const ProductCard: FC<ProductCardProps> = ({ item, height }) => {
  return (
    <div key={item?.id} className={`bg-ibmText  flex-shrink-0 w-full  my-2 md:my-0 md:w-1/2 lg:w-1/4 flex items-center flex-row gap-2 text-start  h-${height || 'auto'} md:h-48`}>
      {item?.image && <img className='w-24 md:w-36 lg:w-24 h-auto object-contain' src={item?.image} alt="card_img" />}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xs md:text-sm lg:text-xs text-ibmGray" >{item?.title}</h3>
        <p className='text-sm md:text-lg lg:text-sm'>{item?.desc}</p>
      </div>
    </div>

  );
};
