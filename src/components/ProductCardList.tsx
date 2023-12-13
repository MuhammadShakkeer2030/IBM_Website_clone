


import { FC } from "react";
import { cardItems1Props, cardItems2Props } from "../assets/types";
import { cardItems1, cardItems2 } from "../assets/textData/utlity";
import { ProductCard, TechCard } from "../paths";

interface CardListProps {
  key: number,
  item: cardItems1Props[] | cardItems2Props[];
  width: string
  mubWidth?: string,
  tabWidth?: string,
  pcWidth?: string,
  height?: string
}

export const ProductCardList: FC<CardListProps> = () => {
  return (
    <div className="flex flex-wrap justify-start  gap-8">
      <div className="flex flex-col ">
        <h3 className="text-start">Recommended for you</h3>
        <div className="flex gap-2 flex-wrap justify-center md:justify-start lg:justify-start overflow-hidden">
          {cardItems1?.map((item) => (
            <ProductCard key={item.id} item={item} width={""} />
          ))}
        </div>
      </div>

      <div className="text-start">
        <h3 className="text-h3 font-300">Browse our technology</h3>
        <p>From our flagship products for enterprise <span className="text-ibmBlue">hybrid cloud infrastructure</span> to next-generation AI, security and storage solutions, find the answer to your business challenge.</p>
      </div>

      <div className="flex flex-wrap border">
        {cardItems2?.map((item) => (
          <TechCard key={item.id} item={item} width="500px" height="300px" />
        ))}
      </div>
    </div>
  );
};


