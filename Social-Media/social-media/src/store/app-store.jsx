import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  addInitialPosts: () => { },
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

  const addPost = (userId, title, body, tags, views, likes, dislikes) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reactions: {
          likes,
          dislikes,
        },
        views,
        userId,
        tags,
      }
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

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>{children}</PostList.Provider>
  )
}
export default PostListProvider;