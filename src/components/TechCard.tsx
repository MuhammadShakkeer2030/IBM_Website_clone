import { FC } from "react"
import { cardItems2Props } from "../assets/types"
import { BsArrowRight, BsImage } from "react-icons/bs"
import { flexJI } from "../assets/globalStyles"

interface ProductCardProps {
    item: cardItems2Props
    width: string
    height?: string
    mobWdith?: string
    tabWidth?: string
    pcWidth?: string,
}

export const TechCard: FC<ProductCardProps> = ({ item }) => {
    return (


        <div className="w-full group h-[319px] md:h-[200px] lg:h-[218px] md:w-boxWidth bg-ibmLightGray hover:bg-ibmLightGray/80  relative transition-all  ease-in-out p-boxP border border-gary-500 flex-shrink-0">
            <BsImage className="text-[20px] lg:text-icon" />

            <h4 className={`${flexJI} transform  absolute inset-0  group-hover:translate-y-2 group-hover:opacity-0 `}>{item?.title}</h4>

            <p className={` absolute inset-0 transform opacity-0 group-hover:opacity-100 ${flexJI}`}>{item?.desc}</p>
            <BsArrowRight className="absolute bottom-5 right-5" />
        </div>





    );
};
