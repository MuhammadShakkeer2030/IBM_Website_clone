import { FC } from 'react'
import { cardItems1Props, } from '../assets/types';

interface ProductCardProps {
  item: cardItems1Props
  width: string
  height?: string
}

const ProductCard: FC<ProductCardProps> = ({ item, width, height }) => {
  return (
    <div key={item?.id} className={`bg-gray-500  w-[${width}] ${height && `h-[${height}]`} `}>
      <p>{item?.title}</p>
      {item?.image && <img src={item?.image} alt="card_img" />}
      <p>{item?.desc}</p>
    </div>
  );
};

export { ProductCard }