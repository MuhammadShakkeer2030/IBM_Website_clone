import { headerNavLinks } from "../assets/utlity";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <ul className="relative">
        {headerNavLinks?.map((item) => (
          <li className="flex items-center">
            {item.categoryName} <BsArrowRight />
          </li>
        ))}
        <ul className="absolute">
          {headerNavLinks?.map((item) => (
              {item.subCategories.map((subLink) => (
                <li>{subLink.name}</li>
              ))}
          ))}
        </ul>
      </ul>
    </div>
  );
};

export { Header };
