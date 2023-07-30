import React from 'react';
import { FaEye } from "react-icons";


function MemberInfo() {
  return (
    <div className="text-left p-4 bg-whitesmoke">
      <div className="w-full rounded bg-white">
        <article className="bg-white rounded-full p-4 mt-4 mb-4 ml-4 mr-4">
          <header>
            <h2 className="text-2xl font-bold">
              Member Cards
            </h2>
            <h5 className="flex items-center">
              <span className="w-1/2">TOTAL ALLOCATED</span>  
              <span className="w-1/2">TOTAL MEMBERS</span>
              <button className="ml-auto bg-white text-blue-500 rounded-full border-2 border-whitesmoke px-4 py-2 text-lg">Add Funds</button>
            </h5>
            <h1 className="text-4xl font-bold">
              <span className="w-1/2">$8,194.00</span>
              <span className="w-1/2">184</span>
            </h1>
          </header>
          <br />
          <hr />
          <p>
            <span className="inline-block w-2/3">
              <img src='images/img_avatar.png' className="inline-block align-middle w-10 h-10 rounded-full" alt='' />
              Christofer Workman
            </span>         
            <span className="inline-block w-1/3 text-right">$2,490.00 &nbsp; &nbsp;<button className="bg-white border-white text-xl"></button></span>
          </p>
          {/* Other member details... */}
        </article>

        <article className="bg-white rounded-full p-4 mb-4 ml-4 mr-4">
          <header>
            <h2 className="text-2xl font-bold">
              Card
            </h2>
          </header>
          <div className="grid grid-cols-3 gap-5 items-center">
            <div className="max-w-full max-h-full">
              <img src='images/visa.png' className='logo' alt=''/>
            </div>

            <div className="text-xl">
              <br />
              <p className="sp">
                <span className="inline-block w-full text-4xl">.......   .....   ..... 4921</span>
              </p>
              <p>
                <span className="inline-block w-full text-3xl">EXP: .../...   CSV: .....</span>
                <span className="inline-block w-full text-right"><a href=' '><FaEye /></a> &nbsp; &nbsp; &nbsp;   ....</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default MemberInfo;
