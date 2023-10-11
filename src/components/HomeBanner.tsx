import BannerImage from "../assets/imgs/home banner.png";
const HomeBanner = () => {
  return (
    <div className="flex items-center">
      {/* texts */}
      <div>
        <h2>Accelerate speed of security</h2>
        <p>
          IBM’s next-generation AI and data platform is now available for free
          trial
        </p>
        <div>
          <button className="border-2 border-blue-700 bg-[#0f62fe] px-8 py-4">
            Read latest IBV research
          </button>
          <button className="border-2 px-8 py-4">
            Explore QRadar Suite
          </button>
        </div>
      </div>
      {/* imag */}
      <img src={BannerImage} alt="Banner image" className="w-[500px]" />
    </div>
  );
};

export { HomeBanner };
