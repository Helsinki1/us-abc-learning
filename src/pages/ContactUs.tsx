import React from 'react'
import {useState} from 'react'
import {collection, addDoc} from 'firebase/firestore'
import {database} from '../firebase-config'


function ContactUs() {

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
    <div className="bg-blue-900 h-full min-h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl text-center font-bold mt-20">Contact Us</h1>
        
        <div className="flex items-center space-x-20 mt-20">
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-6xl">✉</h1>
            <p className="text-black text-2xl font-bold">电子邮件</p>
            <p className="text-gray-700 text-md text-center mt-3">Email: info@usabclearning.com</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-6xl">💬</h1>
            <p className="text-black text-2xl font-bold mt-4">WeChat</p>
            <p className="text-gray-700 text-lg text-center mt-3">微信号: 14019565582</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-5xl">📍</h1>
            <p className="text-black text-2xl font-bold mt-4">US abc 地址</p>
            <p className="text-gray-700 text-lg text-center mt-1">58 Osceola Dr. Boxborough, MA  01719</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-5xl">📞</h1>
            <p className="text-black text-2xl font-bold mt-5">电话 Phone</p>
            <p className="text-gray-700 text-lg text-center mt-2">US: 1-401-965-5582 China:17879574832</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-cyan-500 w-5/12 h-auto p-10 -mt-10 z-0">
          <h1 className="text-white text-3xl mt-10 font-bold">
            联系我们
          </h1>
          <input className="mt-6 w-2/3 h-12 p-4"
            placeholder="您的名字"
            onChange={(event)=>{setNameIn(event.target.value);}}
          />
          <input className="mt-3 w-2/3 h-12 p-4"
            placeholder="您的微信号"
            onChange={(event)=>{setNameIn(event.target.value);}}
          />
          <input className="mt-3 w-2/3 h-12 p-4"
            placeholder="您的手机号码"
            onChange={(event)=>{setNameIn(event.target.value);}}
          />
          <input className="mt-3 w-2/3 h-12 p-4"
            placeholder="想试听的课程"
            onChange={(event)=>{setNameIn(event.target.value);}}
          />
          <button className="bg-red-500 rounded-lg w-28 h-10 mt-5 hover:border text-white font-bold hover:border-white"
            onClick={createPost}
          >
            立即领取
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs