import React from "react";
import {BsArrowRightShort} from "react-icons/bs";

const Button = ({text}) => {
    return(
        <div>
            <button className="flex gap-x-0 items-center relative white-btn text-lg text-[#05445E] bg-white rounded-md py-2 
            px-10 w-full justify-center font-Dmsans font-semibold">
                {text}
                <BsArrowRightShort/>
            </button>
        </div>
    );
}

export default Button;