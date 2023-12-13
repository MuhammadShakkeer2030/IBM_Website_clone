import BannerImage from "/imgs/home banner.png";

export const HomeBanner = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between px-4 py-16">
      {/* Texts */}
      <div className="max-w-xl">
        <h2 className="text-3xl text-start lg:text-center lg:text-5xl font-bold text-ibmBlue mb-4">
          Accelerate speed of security
        </h2>
        <p className="text-lg text-start lg:text-center lg:text-xl text-ibmGray mb-6">
          IBM’s next-generation AI and data platform is now available for free trial
        </p>
        <div className="space-x-4">
          <button className="border-2 border-blue-700 w-full md:w-[300px] bg-[#0f62fe] px-4 py-2 md:px-6 md:py-4 text-white hover:bg-blue-700 transition duration-300 ease-in-out">
            Read latest IBV research
          </button>
          <button className="border-2 border-ibmBlue w-full md:w-[300px] px-4 py-2 md:px-8 md:py-4 hover:bg-ibmBlue hover:text-white transition duration-300 ease-in-out">
            Explore QRadar Suite
          </button>
        </div>
      </div>
      {/* Image */}
      <img src={BannerImage} alt="Banner image" className="md:w-[500px] h-auto p-" />
    </div>
  );
};


