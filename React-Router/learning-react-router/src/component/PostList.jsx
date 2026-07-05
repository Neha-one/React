import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/app-store";
import Post from "./Post";
import WelcomMsg from "./WelcomMsg";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";


function PostList() {
  
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export const postLoader = () => {
return  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
}

export default PostList;