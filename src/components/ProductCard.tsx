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

export const ProductCard: FC<ProductCardProps> = ({ item,  height }) => {
  return (
    <div key={item?.id} className={`bg-ibmText p-boxP flex-shrink-0 w-full flex flex-col md:flex-row gap-2 text-start md:w-[340px] lg:w-[250px] h-${height || 'auto'} md:h-[345px]`}>
      {item?.image && <img className='w-[100px] md:w-[150px] lg:w-[100px] h-auto object-contain' src={item?.image} alt="card_img" />}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[12px] md:text-[14px] lg:text-[12px] text-ibmGray" >{item?.title}</h3>
        <p className='text-[14px] md:text-[16px] lg:text-[14px]' >{item?.desc}</p>
      </div>
    </div>

  );
};
