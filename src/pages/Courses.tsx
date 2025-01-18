import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


function Courses() {

  const [text1, setText1] = useState<string>("");
  const [slide1, setSlide1] = useState<string>("");
  const [slide2, setSlide2] = useState<string>("");
  const [slide3, setSlide3] = useState<string>("");
  const [slide4, setSlide4] = useState<string>("");
  const [slide5, setSlide5] = useState<string>("");
  const [slide6, setSlide6] = useState<string>("");
  const [slide7, setSlide7] = useState<string>("");
  const [slide8, setSlide8] = useState<string>("");
  const [slide9, setSlide9] = useState<string>("");
  const [slide10, setSlide10] = useState<string>("");
  const [slide11, setSlide11] = useState<string>("");
  const [slide12, setSlide12] = useState<string>("");


  useEffect(() => {
    fetch("/public/courses/text1.txt").then((response)=>response.text()).then((text)=>setText1(text));
    fetch("/public/courses/slide1.txt").then((response)=>response.text()).then((text)=>setSlide1(text));
    fetch("/public/courses/slide2.txt").then((response)=>response.text()).then((text)=>setSlide2(text));
    fetch("/public/courses/slide3.txt").then((response)=>response.text()).then((text)=>setSlide3(text));
    fetch("/public/courses/slide4.txt").then((response)=>response.text()).then((text)=>setSlide4(text));
    fetch("/public/courses/slide5.txt").then((response)=>response.text()).then((text)=>setSlide5(text));
    fetch("/public/courses/slide6.txt").then((response)=>response.text()).then((text)=>setSlide6(text));
    fetch("/public/courses/slide7.txt").then((response)=>response.text()).then((text)=>setSlide7(text));
    fetch("/public/courses/slide8.txt").then((response)=>response.text()).then((text)=>setSlide8(text));
    fetch("/public/courses/slide9.txt").then((response)=>response.text()).then((text)=>setSlide9(text));
    fetch("/public/courses/slide10.txt").then((response)=>response.text()).then((text)=>setSlide10(text));
    fetch("/public/courses/slide11.txt").then((response)=>response.text()).then((text)=>setSlide11(text));
    fetch("/public/courses/slide12.txt").then((response)=>response.text()).then((text)=>setSlide12(text));
  },[]);

  const [openTab, setOpenTab] = useState(-1);

  return (
    <div className="bg-slate-200 h-full min-h-screen w-full">
      <div className="relative w-full h-96">
        <img src="/public/coursesBanner.jpg" className="object-cover w-full h-full"></img>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20">
          <h1 className="text-white text-5xl font-bold">
            Our Courses
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mt-10">

        <div className="bg-slate-300 rounded-3xl w-7/12 h-auto p-5">
            <label className="text-gray-700 text-xl font-bold sm:text-md md:text-lg xl:text-2xl">US abc 课程</label>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-1">{text1}</p>
        </div>

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===1)? -1:1))}>
            ↓ Wonders系列教材 K-6
            <svg
                className={`h-5 w-5 transform ${(openTab===1)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===1) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide1pic.webp" className="w-44 h-auto mb-3"></img>
                {slide1}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===2)? -1:2))}>
            ↓ 剑桥KET
            <svg
                className={`h-5 w-5 transform ${(openTab===2)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===2) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide2pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide2}
            </div>
        )}
        
        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===3)? -1:3))}>
            ↓ 剑桥PET
            <svg
                className={`h-5 w-5 transform ${(openTab===3)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===3) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide3pic.webp" className="w-44 h-auto mb-3"></img>
                {slide3}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===4)? -1:4))}>
            ↓ 基础口语
            <svg
                className={`h-5 w-5 transform ${(openTab===4)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===4) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide4pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide4}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===5)? -1:5))}>
            ↓ 新概念英语
            <svg
                className={`h-5 w-5 transform ${(openTab===5)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===5) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide5pic.webp" className="w-44 h-auto mb-3"></img>
                {slide5}
            </div>
        )}
        
        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===6)? -1:6))}>
            ↓ 新语法课程
            <svg
                className={`h-5 w-5 transform ${(openTab===6)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===6) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide6pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide6}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===7)? -1:7))}>
            ↓ 剑桥Kids Box系列（共三册）
            <svg
                className={`h-5 w-5 transform ${(openTab===7)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===7) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide7pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide7}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===8)? -1:8))}>
            ↓ 词汇课程
            <svg
                className={`h-5 w-5 transform ${(openTab===8)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===8) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide8pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide8}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===9)? -1:9))}>
            ↓ 阅读课程
            <svg
                className={`h-5 w-5 transform ${(openTab===9)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===9) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide9pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide9}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===10)? -1:10))}>
            ↓ 雅思/托福备考
            <svg
                className={`h-5 w-5 transform ${(openTab===10)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===10) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide10pic.jpg" className="w-44 h-auto mb-3"></img>
                {slide10}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===11)? -1:11))}>
            ↓ SAT/ACT
            <svg
                className={`h-5 w-5 transform ${(openTab===11)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===11) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide11pic.png" className="w-44 h-auto mb-3"></img>
                {slide11}
            </div>
        )}

        <button className="bg-slate-300 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===12)? -1:12))}>
            ↓ 美国大学申请指导
            <svg
                className={`h-5 w-5 transform ${(openTab===12)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===12) && (
            <div className="bg-slate-300 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <img src="/public/courses/slide12pic.png" className="w-44 h-auto mb-3"></img>
                {slide12}
            </div>
        )}

        <div className="bg-slate-300 mt-10 w-3/4 h-40"></div>
      </div>
    </div>
  )
}

export default Courses