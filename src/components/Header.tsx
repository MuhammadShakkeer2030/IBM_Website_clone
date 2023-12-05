import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, } from "../assets/textData/utlity";
import { BsChevronDown, BsProjectorFill, BsSearch } from "react-icons/bs";
import { productNavLinks } from '../assets/textData/ProductNavLInk';
import { solutionsNavLinks } from '../assets/textData/solutionsNavLinks';
import { consultingNavLinks } from '../assets/textData/consultingNavLink';
import { supportNavLink } from '../assets/textData/supportNavLink';

const Header = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showHoverMenu, setShowHoverMenu] = useState(false);
  const headerNavLinks = ["Products", "Solutions", "Consulting", "Support", "More"]

  // merge all nav links arrays
  const mergedLink = [...productNavLinks, ...solutionsNavLinks, ...consultingNavLinks, ...supportNavLink]
  console.log(mergedLink)
  const showHoveredCategory = (item: string) => {
    console.log(item)
    setShowHoverMenu(true)
  }
  return (
    <header className="flex justify-between items-center h-[70px] px-4 lg:px-8 text-black bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="logo" width={50} />
        </Link>
        <ul className="relative flex ml-4 space-x-4">
          {headerNavLinks?.map((item, index) => (
            <li key={index} className="flex items-center">
              <span
                className="cursor-pointer"
                onClick={() => setShowSubmenu(!showSubmenu)}
                onMouseEnter={() => showHoveredCategory(item)}
              >
                {item} <BsChevronDown />
              </span>
              {(showHoverMenu) && (
                <ul className="absolute top-10 md:flex flex-col w-[250px] mt-8 text-black bg-white shadow-md py-2 px-4 rounded-md h-[400px]">
                  {productNavLinks?.map((link) => (
                    item === link.category && <li key={link.id}>
                      <Link to={``}>{link.title}</Link>
                    </li>

                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <BsSearch className="text-ibmBlue text-xl mr-4 cursor-pointer" />
        <BsProjectorFill className="text-ibmBlue text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export { Header };
