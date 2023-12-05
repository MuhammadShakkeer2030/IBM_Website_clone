interface SubCategory {
    title: string;
    desc: string;
  }
  
  interface ProductNavLink {
    id: number;
    category:string,
    title: string;
    subCategory: SubCategory[];
  }

  export type {
    SubCategory,ProductNavLink
  }