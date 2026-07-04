import { createContext, useCallback, useReducer, useState ,useEffect} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  fetching:false,
  deletePost: () => { }
}
);

const postListReducer = (currPostList, action) => {
  let updatedPostList = currPostList;
  if (action.type === "DELETE_POST") {
    updatedPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  }
  else if (action.type === "ADD_INITIAL_POSTS") {
    updatedPostList = action.payload.posts;
  }
  else if (action.type === "ADD_POST") {
    updatedPostList = [action.payload, ...currPostList]
  }
  return updatedPostList;
}


const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post
    })
  }
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts
      }
    })
  }
  const deletePost = useCallback((postId) => {
    // console.log("deletePost called with id:", idNum); 
    dispatchPostList(
      {
        type: "DELETE_POST",
        payload: {
          postId
        }
      }
    );
  }, [dispatchPostList]);

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
    <PostList.Provider value={{ postList, addPost,fetching , deletePost }}>{children}</PostList.Provider>
  )
}
export default PostListProvider; 