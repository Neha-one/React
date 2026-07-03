import { useContext } from "react";
import styles from "../cssModule/Post.module.css";
import { MdDelete } from "react-icons/md";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { PostList } from "../store/app-store";

function Post({ post }) {

  const { deletePost } = useContext(PostList);

  return (
    <div className={`${styles.postCard} card`} style={{ width: "30rem" }}>
      {/* <img src=... className={`${styles.iconimg} card-img-top`} alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) =>
          <span key={tag} className={`${styles.hashtag} badge text-bg-primary`}>{tag}</span>
        )}
        <div className={`${styles.reactions} alert alert-success`} role="alert">
          <AiFillLike /> {post.reactions.likes} <br />
          <AiFillDislike /> {post.reactions.dislikes} <br />
          <FaEye /> {post.views}
        </div>
      </div>
    </div>
  )
}
export default Post;