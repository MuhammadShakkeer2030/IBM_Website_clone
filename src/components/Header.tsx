import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, } from "../assets/textData/utlity";
import { BsChevronDown,  BsProjectorFill, BsSearch } from "react-icons/bs";
import { productNavLinks } from '../assets/textData/ProductNavLInk';
import { solutionsNavLinks } from '../assets/textData/solutionsNavLinks';
import { consultingNavLinks } from '../assets/textData/consultingNavLink';
import { supportNavLink } from '../assets/textData/supportNavLink';
import { AiOutlineMenu } from 'react-icons/ai';

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

  const toggleMenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  return (
    <header className="flex justify-between items-center h-[70px] px-4 lg:px-8 text-black bg-white shadow-md relative">

      {
        showSubmenu && <ul className="flex flex-col p-mp text-start absolute  h-[350px] z-50 inset-0 top-10 left-0 bg-ibmText md:hidden">
          {headerNavLinks?.map((item, index) => <Link to={''}>
            <li key={index} className="py-2 border-b border-gray-500" >{item}</li>
          </Link>)}
        </ul>
      }

      <div className="flex items-center relative">
        <Link to="/">
          <img src={Logo} alt="logo" width={50} />
        </Link>
        {/* Mubile version */}
        {/* <div className='relative'> */}

        <button onClick={toggleMenu} className='block md:hidden' ><AiOutlineMenu /></button>

        {/* </div> */}

        <ul className="hidden relative md:flex ml-4 space-x-4">
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
