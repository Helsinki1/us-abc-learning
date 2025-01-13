import React from 'react';
import { useState, useEffect } from 'react';
import { database } from '../firebase-config';
import { getDocs, collection, DocumentData } from 'firebase/firestore';

function Home() {
  const [postList, setPostList] = useState<DocumentData[]>([]);

  const collectionRef = collection(database, "posts"); // create a ref obj to your specific collection in your db

  // if you declare a JS function inside of useEffect, it wont be run automatically
  useEffect(()=>{ //  create a piece of functional JS to retrieve posts from firebase
    const getPosts = async () => { // has to be async bc we're communicating w firebase
      const data = await getDocs(collectionRef); 
      // if you print 'data', youll see a huge multi-layer obj w many many fields of info (a query snapshot), you need to parse thru docs & its data
      
      const temp = data.docs.map((doc) => doc.data());

      setPostList( temp );
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post)=>{
        return(
          <div className="post">
            <h1 style={{ color: 'black' }}>{post.title}</h1>
            <label style={{ color: 'black' }}>{post.author.name}</label>
            <p style={{ color: 'black' }}>{post.postText}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home