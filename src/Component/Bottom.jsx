import React from "react";

import {data2} from "../Data/data2";
import Details from "./Details";

const Bottom = () => {
    return(
        <div>
            <div className="bottom w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between pt-24 pb-8">
                {/* Left part */}
                <div className="flex flex-col p-10 w-full lg:w-[50%] text-center lg:text-left">
                    <h2 className="text-4xl  md:text-7xl font-semibold font-rubik">
                        Invest in skills,{" "}
                        <span className="span-text">earn 10X</span> 
                        {" "}of what you paid.
                    </h2>

                    <p className="py-16 text-center lg:text-left lg:w-[80%] font-Dmsans font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.
                    </p>

                    <div className="grid grid-cols-2 gap-8 m-auto justify-center lg:justify-items-normal">
                        {
                            data2.map((data) => (
                                <div key={data.id} className="flex items-center gap-4">
                                    <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] bg-[#D9D9D9] rounded-md"></div>
                                    <div>
                                        <p className="font-extrabold text-left text-[14px] lg:text-xl font-Dmsans">
                                            {data.text1}
                                        </p>
                                        <p className="font-Dmsans text-left text-[12px] lg:text-base lg:font-semibold">
                                            {data.text2}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Right Part */}
                <div className="p-10">
                    <Details />
                </div>
            </div>
        </div>
    );
}

export default Bottom;