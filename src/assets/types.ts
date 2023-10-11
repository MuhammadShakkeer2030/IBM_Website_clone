import React from "react";
type headerNavLinksProps ={
categoryName:string,
subCategories:{
    name:string,description:string
}[]
}[]

type cardItems2Props = {
  icon:  React.ReactNode;
  title: string;
  desc: string;
}[];
type cardItems1Props = {
    image :string;
    title:string,
    desc:string
}[]


export type { cardItems2Props,cardItems1Props , headerNavLinksProps};
