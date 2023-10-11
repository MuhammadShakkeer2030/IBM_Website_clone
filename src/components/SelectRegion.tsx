import { Dispatch, SetStateAction } from "react";
type Props = {
  setShowRegion: Dispatch<SetStateAction<boolean>>;
};

const SelectRegion = ({ setShowRegion }: Props) => {
  return (
    <div className="absolute md:w-[700]px md:h-[700px]">
      <div className="flex justify-end">
        <button onClick={() => setShowRegion(false)}>close</button>
      </div>
      <h3>Select geographic area</h3>
      <div className="w-[300px] h-[200px] bg-[#f4f4f4]">
        America
        {/* icon */}
      </div>
      <div className="w-[300px] h-[200px] bg-[#f4f4f4]">
        Asia pasafic
        {/* icon */}
      </div>
      <div className="w-[300px] h-[200px] bg-[#f4f4f4]">
        Europe
        {/* icon */}
      </div>
    </div>
  );
};

export { SelectRegion };
