import React from "react"
import { Images} from "../Constants/Images"
function Card () {
    const progressPercentage = 30;
    return(
        <main className=" p-5">
        <div className=" md:w-1/2 border shadow-md h-56 p-3 rounded-md">
          <h1 className=" font-bold mb-7 text-blue-950 text-lg">
            {" "}
            Active payment request
          </h1>
          <h1 className=" text-blue-950 font-medium mb-4">
            {" "}
            You requested $40.00 For Monthly dues
          </h1>
          <div className=" flex gap-2">
            <div className=" flex">
              {Images.map((img) => (
                <img
                  key={img.id}
                  src={img.url}
                  className=" h-7 w-7 object-cover rounded-full"
                />
              ))}
            </div>
            <h1 className=" mb-3 text-gray-500">
              {" "}
              283 Participant • Optional • Feb 19,2023{" "}
            </h1>
          </div>
          <div>
            <div className="h-1 w-full bg-slate-300 rounded-md overflow-hidden mb-3">
              <div
                className="h-full bg-green-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className=" text-gray-600 text-base font-meduim">
              {" "}
              $180.14 (32%){" "}
            </h2>
            <h2 className=" text-gray-400 text-sm"> Goal: $420.00</h2>
          </div>
         </div> 
        </main> 
    );
};
export default Card;
