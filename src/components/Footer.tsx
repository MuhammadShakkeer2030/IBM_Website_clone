import { SelectRegion } from "../paths";
import { useState } from "react";

import {
  aboutIBM,
  connectWithUs,
  discover,
  learnAbout,
} from "../assets/utlity";
type Props = {};

const Footer = (props: Props) => {
  const [showRegion, setShowRegion] = useState(false);
  return (
    <div>
      {/* logo & language */}
      <div className="relative flex justify-between">
        <img src="" alt="logo" />
        <button
          onClick={() => setShowRegion(true)}
          className="px-8 py-2 border-2 bg-white text-black"
        >
          India-English
        </button>
        {/* if click this button popup card */}
        {showRegion && <SelectRegion setShowRegion={setShowRegion} />}
      </div>
      <hr />

      <div className="flex justify-between">
        <ul
          className="flex text-[10px]
        flex-col items-start"
        >
          {discover?.map((item) => (
            <th>{item.name}</th>
          ))}
        </ul>
        <ul
          className="flex text-[10px]
        flex-col items-start"
        >
          {connectWithUs?.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <ul
          className="flex text-[10px]
        flex-col items-start"
        >
          {aboutIBM?.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>

      <hr />

      <div></div>
    </div>
  );
};

export { Footer };
