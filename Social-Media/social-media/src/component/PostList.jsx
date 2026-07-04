import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/app-store";
import Post from "./Post";
import WelcomMsg from "./WelcomMsg";
import LoadingSpinner from "./LoadingSpinner";


function PostList() {
  const { postList,fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomMsg />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;