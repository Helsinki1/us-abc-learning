import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { database, provider } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

function Home() {
  const [title1, setTitle1] = useState<string>("");
  const [title2, setTitle2] = useState<string>("");
  const [title3, setTitle3] = useState<string>("");
  const [content1, setContent1] = useState<string>("");
  const [content2, setContent2] = useState<string>("");
  const [content3, setContent3] = useState<string>("");

  useEffect(() => {
    fetch("/public/home-p1-title.txt")
      .then((response) => response.text())
      .then((text) => setTitle1(text));
    fetch("/public/home-p2-title.txt")
      .then((response) => response.text())
      .then((text) => setTitle2(text));
    fetch("/public/home-p3-title.txt")
      .then((response) => response.text())
      .then((text) => setTitle3(text));
    fetch("/public/home-p1.txt")
      .then((response) => response.text())
      .then((text) => setContent1(text));
    fetch("/public/home-p2.txt")
      .then((response) => response.text())
      .then((text) => setContent2(text));
    fetch("/public/home-p3.txt")
      .then((response) => response.text())
      .then((text) => setContent3(text));
  }, []);

  const [nameIn, setNameIn] = useState<string>("");
  const [wechatIn, setWechatIn] = useState<string>("");
  const [phoneIn, setPhoneIn] = useState<number>(0);
  const [subjectIn, setSubjectIn] = useState<string>("");

  const collectionRef = collection(database, "posts");
  const createPost = async () => {
    await addDoc(collectionRef, {
      name: nameIn,
      wechat: wechatIn,
      phone: phoneIn,
      subject: subjectIn
    });
  }
  
  return (
    <div className="bg-slate-200 h-full min-h-screen w-full">
      <div className="relative w-full h-96">
        <img src="/public/columbiaBanner.jpg" className="object-cover w-full h-full"></img>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-white text-4xl">
            <span className="font-bold">US abc</span> 北美教育
          </h1>
          <h1 className="text-white text-2xl mt-1">英语培训和美国留学与升学指导</h1>
          <button className="bg-red-500 rounded-lg w-28 h-10 mt-5 hover:border hover:border-white">
            <Link to="/appt" className="text-white text-lg">
              预约咨询
            </Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col ml-60 mr-52 mt-10">
        <div className="flex mt-3 justify-between">
          <div className="flex flex-col w-1/2 h-auto p-5 rounded-3xl bg-slate-300">
            <h1 className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-1 font-bold">{title1}</h1>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-2">{content1}</p>
          </div>
          <video src="/public/homevid.mp4" controls playsInline className=" w-1/3 max-w-2xl h-auto rounded shadow-lg sm:"></video>
        </div>
        <div className="flex mt-3 justify-between">
          <div className="flex flex-col w-1/2 h-auto p-5 rounded-3xl bg-slate-300">
            <h1 className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-1 font-bold">{title2}</h1>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-2">{content2}</p>
          </div>
          <img src="/public/homepic1.jpg" className=" w-1/3 h-auto"></img>
        </div>
        <div className="flex mt-3 justify-between">
          <div className="flex flex-col w-1/2 h-auto p-5 rounded-3xl bg-slate-300">
            <h1 className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-1 font-bold">{title3}</h1>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-2">{content3}</p>
          </div>
          <img src="/public/ivies.jpg" className=" w-1/3 h-auto"></img>
        </div>
      </div>

      <div className=" flex flex-col place-content-center items-center bg-blue-400 w-full h-96 mt-16">
        <h1 className="text-white text-2xl">
          免费领取399元在线英语课
        </h1>
        <input className="mt-4 w-1/3 h-12 p-4"
          placeholder="您的名字"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <input className="mt-3 w-1/3 h-12 p-4"
          placeholder="您的微信号"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <input className="mt-3 w-1/3 h-12 p-4"
          placeholder="您的手机号码"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <input className="mt-3 w-1/3 h-12 p-4"
          placeholder="想试听的课程"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <button className="bg-red-500 rounded-lg w-28 h-10 mt-5 hover:border text-white font-bold hover:border-white"
          onClick={createPost}
        >
          立即领取
        </button>
      </div>

      <div className="bg-slate-300 w-full h-24"></div>
    </div>
  )
}

export default Home