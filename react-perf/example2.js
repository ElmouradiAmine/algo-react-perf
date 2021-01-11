import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
// BAD EXAMPLE
// A bad use of the hook useEffect, the get request will run everytime the posts component updates.
// It can lead to overuse of internet data, poor performance, specially it's not necessary.

const  PostsBadExample = () => {
  const [posts, setPosts] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      '<get-posts-endpoint-url>',
    );
    setData(result.data);
  });
 
  const renderPosts = () => {
      //...
  }
  return (
    <ul>
      {renderPosts()}
    </ul>
  );
}
 
//SOLUTION EXAMPLE:
// We need to add the empty dependency array that will allow us to run the fetch data only one.
// This way it have the same behavior as componentDidMount and we save a lot in term of performance.

const  Posts = () => {
    const [posts, setPosts] = useState([]);
   
    useEffect(async () => {
      const result = await axios(
        '<get-posts-endpoint-url>',
      );
      setData(result.data);
    }, []);
   
    const renderPosts = () => {
        //...
    }
    return (
      <ul>
        {renderPosts()}
      </ul>
    );
  }
   