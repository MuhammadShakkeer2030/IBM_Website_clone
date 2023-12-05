import { SelectRegion } from "../paths";
import { useState } from "react";
import { aboutIBM, connectWithUs, discover } from "../assets/textData/utlity";

export const Footer = () => {
  const [showRegion, setShowRegion] = useState(false);

  return (
    <footer className="bg-ibmBlue text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo & Language */}
        <div className="flex items-center justify-between mb-8">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-12" />
          <button
            onClick={() => setShowRegion(true)}
            className="px-6 py-2 border-2 border-white hover:bg-white hover:text-ibmBlue transition duration-300 ease-in-out"
          >
            India-English
          </button>
          {/* Popup card on button click */}
          {showRegion && <SelectRegion setShowRegion={setShowRegion} />}
        </div>
        <hr className="border-t border-ibmLightGray mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Discover */}
          <div>
            <h4 className="text-lg font-bold mb-4">Discover</h4>
            <ul>
              {discover?.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.url} className="hover:underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul>
              {connectWithUs?.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.name} className="hover:underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About IBM */}
          <div>
            <h4 className="text-lg font-bold mb-4">About IBM</h4>
            <ul>
              {aboutIBM?.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.name} className="hover:underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-t border-ibmLightGray my-8" />

        {/* Additional Content */}
        <div className="text-sm text-ibmLightGray">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};


