import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore"; 
import { database, auth } from "../firebase-config" // .. means from parent folder
// addDoc allows you to add a document to a firebase collection you created
// collection allows you to specify which collection you're talking about

function CreatePost() {
  const navigator = useNavigate();

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  // db obj helps fetch all your info, "posts" specifies which collection
  const postsCollectionRef = collection(database, "posts");

  // we need an async thread to communicate w firebase as other things happen
  const createPost = async () => { // function to make a post
    // firebase is noSQL
    // arg1: a ref to specific collection, arg2: data to store
    // we plan on structuring our data like: title|postText|author
    // logging in w Google will store user's name & id in 'auth' obj
    await addDoc(postsCollectionRef, {
      title: title, 
      postText: postText, 
      author:{name: auth.currentUser?.displayName, id: auth.currentUser?.uid}
    });
    // the "?" accounts for the possibility of the entry being null (ex it was never initialized)
    navigator("/");
  }

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title: </label>
          <input 
            placeholder="Title..."
            onChange={(event)=>{
              setTitle(event.target.value); // we set the 'title' state equal to what the user wrote
          }}/>
        </div>
        <div className="inputGp">
          <label> Post: </label>
          {/* textarea allows for more text space than 'input' */}
          <textarea 
            placeholder="Post Contents..."
            onChange={(event)=>{
              setPostText(event.target.value); // set 'postText' to user input
            }}/>
        </div>
        <div>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost