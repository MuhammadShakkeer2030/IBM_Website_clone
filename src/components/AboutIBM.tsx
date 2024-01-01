import { BsArrowRight } from "react-icons/bs";
import {  mubileHomeWomen, xlHomeWomen, mdConsultant, mubileConsultant, xlConsultant } from "../assets/utlity";

interface AboutProps {
    title: string,
    text: string,
    image: string
}
const aboutItem: AboutProps[] = [
    {
        title: "API is the business",
        text: "Axis Bank’s Project NEO deploys IBM API Connect Suite to transform digital banking for its customers",
        image: ""
    },
    {
        title: "Meet our global consultants",
        text: "Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.",
        image: ""
    },
    {
        title: "Inside IBM",
        text: "Solving the world’s problems through technology wouldn’t be possible without our most important invention: the IBMer. Have a look at our talented teams.",
        image: ""
    },

]

export const AboutIBM = () => {
    console.log(aboutItem)
    return (
        <div>
            {/* what's new */}
            <div className="flex flex-col md:flex-row md:h-[600px] xl:h-[900px]">
                <div className="text-start w-full md:w-1/2  p-5 font-ibmPlex md:flex flex-col items-start justify-start md:my-5">
                    <span className="text-tiny  font-300 opacity-50">What's new</span>
                    <h2 className="text-[30px] md:mt-2">API is the business</h2>
                    <p className="text-[15px] mt-1 font-400 md:mt-5">Axis Bank’s Project NEO deploys IBM API Connect Suite to transform digital banking for its customers</p>
                </div>
                {/* xl */}
                <img src={xlHomeWomen} alt="women image" className="w-full md:w-1/2  object-contain opacity-50" />
                {/* md */}
                {/* <img src={mdHomeWomen} alt="women image" className="hidden md:block xl:hidden object-contain opacity-50" /> */}
                {/* mubile */}
                {/* <img src={mubileHomeWomen} alt="women image" className="md:hidden object-contain opacity-50" /> */}
            </div>

            {/* global   */}

            <div className="flex flex-col  font-ibmPlex text-start p-4">
                <div className="flex flex-col md:flex-row my-4 md:my-8">
                    <h2 className="text-h3 font-300 leading-[40px] mb-5 md:w-1/2">Meet our global consultants
                    </h2>
                    <div className="md:w-1/2">
                        <p className="text-[15px]">Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.</p>
                        <button className="text-tiny opacity-80 flex items-center gap-2 md:mt-5">View IBM Consulting <BsArrowRight className="text-[20px]" /> </button>
                    </div>
                </div>
                {/* xl */}
                <img src={xlConsultant} alt="consultant image" className="hidden lg:block " />
                {/* md */}
                <img src={mdConsultant} alt="consultant image" className="hidden md:block lg:hidden" />
                {/* // mubile */}
                <img src={mubileConsultant} alt="consultant image" className="md:hidden" />
            </div>

            {/* inside IBM */}

            <div>
                <div className="flex flex-col md:flex-row p-3 py-2 my-4 md:my-8">
                    <h2 className="text-h3 font-300 leading-[40px] mb-5 md:w-1/2">Inside IBM
                    </h2>
                    <div className="md:w-1/2 text-start">
                        <p className="text-[15px]">Solving the world’s problems through technology wouldn’t be possible without our most important invention: the IBMer. Have a look at our talented teams.</p>
                        <button className="text-tiny opacity-80 flex items-center gap-2 md:mt-5">About IBM<BsArrowRight className="text-[20px]" /> </button>
                    </div>
                </div>
                {/* cards mapping */}
                <div className="flex flex-wrap flex-col md:flex-row lg:gap-0">
                    {Array.from({ length: 4 })?.map((_card, index) => <div
                        key={index} className="p-3 py-2 w-full md:w-1/2 lg:w-1/4 text-start">
                        <img src={mubileHomeWomen} alt="image" className="w-1/2 xl:w-full" />
                        <div className=" w-full">
                            <h3 className="text-ibmGray">title</h3>
                            <p className="text-tiny mb-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi rerum provident quae. Enim provident est animi assumenda molestiae.</p>
                            <button className="text-tiny text-ibmBlue ">Join Our team</button>
                        </div>
                    </div>
                    )}
                </div>

                
               


            </div>

        </div>
    );
};
