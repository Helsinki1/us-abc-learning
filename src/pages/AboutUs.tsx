import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function AboutUs() {

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/public/aboutus/aboutusText1.txt")
    .then((response) => response.text())
    .then((text) => setContent(text))
  }, []);

  const [vidIndex, setVidIndex] = useState(0);

  const vidSrcList = [
    "/public/aboutus/aboutusVid1.mp4",
    "/public/aboutus/aboutusVid2.mp4",
    "/public/aboutus/aboutusVid3.mp4",
    "/public/aboutus/aboutusVid4.mp4"
  ]

  return (
    <div className="bg-slate-200 h-full min-h-screen w-full">
      <div className="relative w-full h-96">
        <img src="/public/aboutus/aboutusBanner.jpg" className="object-cover w-full h-full"></img>
      </div>

      <div className="flex flex-col ml-60 mr-52 mt-10 items-center">

        <div className="flex mt-3 justify-between">
          <div className="flex flex-col w-1/2 h-auto p-6 rounded-3xl bg-slate-300">
            <h1 className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-2 font-bold">我们的外教团队</h1>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-4">{content}</p>
          </div>
          <video src="/public/aboutus/aboutus.mp4" controls playsInline className=" w-5/12 max-w-2xl h-auto rounded shadow-lg sm:"></video>
        </div>

        <div className="bg-blue-400 text-white text-2xl font-bold w-1/2 h-auto mt-20 text-center p-3">课堂回放片段</div>

        {/* navigation buttons with video in the middle */}
        <div className="inset-0 flex justify-center items-center px-4 mt-6 mb-20">
          <button
            onClick={() => setVidIndex((vidIndex===0)? 0:vidIndex-1)}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <video src={vidSrcList[vidIndex]} controls className="w-5/12 h-auto rounded-md"/>
          <button
            onClick={() => setVidIndex((vidIndex===3)? 3:vidIndex+1)}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs