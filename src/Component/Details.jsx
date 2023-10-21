import React from "react";

import {data4} from "../Data/data4";
import Button from "./Button";
import image from "../Assets/AZ-logo.png";

const Details = () => {
    return(
        <div className="relative w-full lg:w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] m-auto rounded-t-lg">
            {/* Top */}
            <div className="details-top realtive flex flex-col">
                <div className="flex relative" id="">
                    <div className="w-full realtive opacity-100 p-8">
                        <p className=" font-Dmsans text-xs lg:text-md font-semibold">
                            Premium Victory Batch
                        </p>
                        <div className="pt-6">
                            <del className=" font-rubik text-2xl lg:text-4xl font-bold text-[#818181]">
                                ₹19,999
                            </del>
                            <p className="font-rubik text-[32px] lg:text-[47px] font-bold text-[#05445E] price">
                                ₹13,999
                            </p>
                        </div> 
                    </div>
                    <div className="logoAZ"></div>
                </div>

                {/* Bottom */}
                <div className="details-bottom rounded-b-lg px-8 pt-8">
                    {
                        data4.map((data) => (
                            <div key={data.id} className="flex items-center gap-x-6 py-4">
                                <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-md rectangle"></div>
                                <p className=" w-[77%] lg:w-[70%] text-white text-sm lg:text-lg">
                                    {data.text}
                                </p>
                            </div>
                        ))
                    }

                    <div className="py-5 pb-8">
                        <Button text={"Join now"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;