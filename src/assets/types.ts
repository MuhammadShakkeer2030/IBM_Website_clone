type subCategory =  {
 
  name: string;
  description: string;
}
type headerNavLinksProps = {
  id: number;
  categoryName: string;
  subCategory:subCategory[]
}

type cardItems2Props = {
  id:number,
  icon?: string;
  title: string;
  desc: string;
};
type cardItems1Props = {
  id:number
  image?: string;
  title: string;
  desc: string;
};

export type { cardItems2Props, cardItems1Props, headerNavLinksProps };
