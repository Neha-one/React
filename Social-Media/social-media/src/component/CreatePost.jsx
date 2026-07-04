import { useContext, useRef } from "react";
import styles from "../cssModule/CreatePost.module.css";
import { PostList } from "../store/app-store";
function CreatePost() {

  const { addPost } = useContext(PostList);


  const UserIdElement = useRef();
  const TitleELement = useRef();
  const bodyElement = useRef();
  const TageElement = useRef();
  const LikesElement = useRef();
  const DislikesElement = useRef();
  const ViewsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = UserIdElement.current.value;
    const title = TitleELement.current.value;
    const body = bodyElement.current.value;
    const tags = TageElement.current.value.split(" ");
    const dislikes = DislikesElement.current.value;
    const likes = LikesElement.current.value;
    const views = ViewsElement.current.value;


    UserIdElement.current.value = "";
    TitleELement.current.value = "";
    bodyElement.current.value = "";
    TageElement.current.value = "";
    LikesElement.current.value = "";
    DislikesElement.current.value = "";
    ViewsElement.current.value = "";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        body,
        reactions: {
          likes,
          dislikes,
        },
        views,
        userId,
        tags,
      })
    })
      .then(res => res.json())
      .then((post) => {
        addPost(post)
      });
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.createPost}`}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input ref={UserIdElement} type="number" placeholder="Enter your userId here" className="form-control" id="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input ref={TitleELement} type="text" placeholder="Enter your Title here..." className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea ref={bodyElement} rows={4} type="text" placeholder="share more about it here..." className="form-control" id="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Post Tags</label>
        <input ref={TageElement} type="text" placeholder="Enter your tags here with space..." className="form-control" id="tags" />
      </div>


      <div className="mb-3">
        <label htmlFor="likes" className="form-label">Likes</label>
        <input ref={LikesElement} type="number" placeholder="Enter Likes" className="form-control" id="likes" />
      </div>


      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">Dislikes</label>
        <input ref={DislikesElement} type="number" placeholder="Enter dislikes" className="form-control" id="dislikes" />
      </div>


      <div className="mb-3">
        <label htmlFor="views" className="form-label">Views</label>
        <input ref={ViewsElement} type="number" placeholder="Enter views" className="form-control" id="views" />
      </div>


      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
} export default CreatePost;