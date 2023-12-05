


import { FC } from "react";
import { cardItems1Props, cardItems2Props } from "../assets/types";
import { cardItems1, cardItems2 } from "../assets/textData/utlity";
import { ProductCard } from "./ProductCard";

interface CardListProps {
  key: number,
  item: cardItems1Props[] | cardItems2Props[];
  width:string
  height?:string
}

export const ProductCardList: FC<CardListProps> = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 ">
      <div className="flex flex-col">
        <h3 className="text-start">Recommanded for you</h3>
       <div className="flex flex-col md:flex-row ">
       {cardItems1?.map((item) => (
          <ProductCard key={item.id} item={item} width={`400px`} />
        ))}
       </div>
      </div>
      {cardItems2?.map((item) => (
        <ProductCard key={item.id} item={item} width={`500px`} height={`300px`} />
      ))}
    </div>
  );
};


