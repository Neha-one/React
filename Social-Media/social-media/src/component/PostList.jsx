import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/app-store";
import Post from "./Post";
import WelcomMsg from "./WelcomMsg";
import LoadingSpinner from "./LoadingSpinner";


function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true)
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    }
  }, []);

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