
import React from "react";
import Button from "./Button";

import {data1} from "../Data/data1";
import image1 from "../Assets/Group 316.png";


const Top = () => {
    return(
        <div className="container w-full">
            <div className=" flex flex-col w-11/12 lg:flex-row mx-auto text-center text-xs lg:text-[1rem] lg:text-justify 
            items-center lg:items-center justify-center lg:justify-between">
                {/* Left Part */}
                <div className="p-10">
                    <h1 className=" font-bold text-white text-2xl lg:text-6xl font-rubik">
                        Be better at DSA & CP
                    </h1>

                    <p className="text-white py-8 lg:w-[70%] font-Dmsans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>

                    <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row gap-8 order-1 lg:order-0 pt-8 lg:pt-0">
                            <Button text = "Join now" />
                            <button className="btn text-white bg-transparent border py-2  px-8 flex justify-center items-center rounded-md">
                                View Curriculum
                            </button>
                        </div>

                        <div className="flex flex-row justify-center lg:justify-normal order-0 lg:order-1">
                            <div className="pt-4 lg:pt-8 pr-4 lg:pr-8">
                                {
                                    data1.map((data) => (
                                        <div key={data.id} className="flex items-center gap-x-2 lg:gap-x-6 py-2 lg:py-4">
                                            <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-md lg:rounded-md rectangle"></div>
                                            <p className="text-white font-Dmsans text-[10px] lg:text-[1rem] text-left">
                                                {data.text}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="pt-4 lg:pt-8">
                                {
                                    data1.map((data) => (
                                        <div key={data.id} className="flex items-center gap-x-2 lg:gap-x-6 py-2 lg:py-4">
                                            <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-md lg:rounded-md rectangle"></div>
                                            <p className="text-white font-Dmsans text-[10px] lg:text-[1rem] text-left">
                                                {data.text}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Part */}
                <div className="flex items-center justify-center">
                    <img src={image1} alt="Logo Img" width={870} height={810} />
                </div>
            </div>
        </div>
    );
}

export default Top;