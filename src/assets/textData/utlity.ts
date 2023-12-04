export const Logo = "./logo.jpg";
const headerNavLinks: headerNavLinksProps[] = [
  {
    id: 1,
    categoryName: "Products",
    subCategory: [
      {
        name: "Product 1",
        description: "Description of Product 1",
      },
      {
        name: "Product 2",
        description: "Description of Product 2",
      },
      // Add more product subcategories if needed
    ],
  },
  {
    id: 2,
    categoryName: "Solutions",
    subCategory: [
      {
        name: "Solution 1",
        description: "Description of Solution 1",
      },
      {
        name: "Solution 2",
        description: "Description of Solution 2",
      },
      // Add more solution subcategories if needed
    ],
  },
  {
    id: 3,
    categoryName: "Consulting",
    subCategory: [
      {
        name: "Consulting Service 1",
        description: "Description of Consulting Service 1",
      },
      {
        name: "Consulting Service 2",
        description: "Description of Consulting Service 2",
      },
      // Add more consulting subcategories if needed
    ],
  },
  {
    id: 4,
    categoryName: "Support",
    subCategory: [
      {
        name: "Support Option 1",
        description: "Description of Support Option 1",
      },
      {
        name: "Support Option 2",
        description: "Description of Support Option 2",
      },
      // Add more support subcategories if needed
    ],
  },
  {
    id: 5,
    categoryName: "More",
    subCategory: [
      {
        name: "More Option 1",
        description: "Description of More Option 1",
      },
      {
        name: "More Option 2",
        description: "Description of More Option 2",
      },
      // Add more 'More' subcategories if needed
    ],
  },
];

const discover = [
  { name: "Discover", url: "URL_for_Discover" },
  { name: "Products", url: "URL_for_Products" },
  { name: "Trials", url: "URL_for_Trials" },
  { name: "Services", url: "URL_for_Services" },
  { name: "Industries", url: "URL_for_Industries" },
  { name: "IBM discounts", url: "URL_for_IBM_discounts" },
  { name: "Case studies", url: "URL_for_Case_studies" },
  { name: "Financing", url: "URL_for_Financing" },
];
const connectWithUs = [
  { name: "Engage IBM Consulting" },
  { name: "Support" },
  { name: "Find a Business Partner" },
  { name: "Developers" },
  { name: "Business Partners" },
];

const learnAbout = [
  { name: "What is IaaS, PaaS & SaaS?" },
  { name: "What is Cloud Computing?" },
  { name: "What is Virtual Machine?" },
  { name: "What is Object Storage?" },
  { name: "What is Containerization?" },
  { name: "What is Kubernetes?" },
  { name: "What is FaaS?" },
];

const aboutIBM = [
  { name: "Careers" },
  { name: "Latest news" },
  { name: "Investor relations" },
  { name: "Corporate responsibility" },
];

import card1 from "../imgs/card1/card1.png";
import card2 from "../imgs/card1/card2.jpeg";
import card3 from "../imgs/card1/card3.jpeg";
import card4 from "../imgs/card1/card4.png";
// -----------------------------------

import { cardItems1Props, cardItems2Props, headerNavLinksProps } from "../types";
const cardItems1: cardItems1Props[] = [
  {
    id: 1,
    image: card1,
    title: "IBM Storage FlashSystem",
    desc: " Sustainable and cyber resilient storage for your enterprise",
  },
  {
    id: 2,
    image: card2,
    title: "Guardium Data Protection",
    desc: " Simplify data privacy and protection",
  },
  {
    id: 3,
    image: card3,
    title: "IBM Instana",
    desc: " Real time observability for  your aplication",
  },
  {
    id: 4,
    image: card4,
    title: "IBM Storage FlashSystem",
    desc: "Streamline ESG reporting to meet compliace",
  },
];
// -----------------------------------
import { CiBasketball } from "react-icons/ci";
import { BsGraphDown, BsFillBuildingFill } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const cardItems2: cardItems2Props[] = [
  {
    id: 1,
    icon: CiBasketball,
    title: "AI & machine learning",
    desc: " Use IBM Watsonx’s AI or build your own machine learning models",
  },
  {
    id: 2,
    icon: BsGraphDown,
    title: "analytics",
    desc: "Aggregate and analyze large datasets",
  },
  {
    id: 3,
    icon: BsFillBuildingFill,
    title: "Compute & servers",
    desc: "Run workloads on hybrid cloud infrastructure",
  },
  {
    id: 4,
    icon: AiOutlineAppstoreAdd,
    title: "Database",
    desc: "Store, query and analyze structured data",
  },
  {
    id: 5,
    icon: AiOutlineAppstoreAdd,
    title: "Devops",
    desc: "Manage infrastructure, environments and deployments",
  },
  {
    id: 6,
    icon: AiOutlineAppstoreAdd,
    title: "IT automation",
    desc: "Automate IT infrastructure management",
  },
  {
    id: 7,
    icon: AiOutlineAppstoreAdd,
    title: "Database",
    desc: "Run code on real quantum systems using a full-stack SDK",
  },
  {
    id: 8,
    icon: AiOutlineAppstoreAdd,
    title: "Quantum",
    desc: "Run code on real quantum systems using a full-stack SDK",
  },
  {
    id: 9,
    icon: AiOutlineAppstoreAdd,
    title: "Security & Identity",
    desc: "Cloud-native software to secure resources and simplify compliance",
  },
];
// -----------------------------------

export {
  discover,
  connectWithUs,
  learnAbout,
  aboutIBM,
  cardItems2,
  cardItems1,
  headerNavLinks,
};
