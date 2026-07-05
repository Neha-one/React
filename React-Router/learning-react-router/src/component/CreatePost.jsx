import styles from "../cssModule/CreatePost.module.css";
import { Form, redirect } from 'react-router-dom';

function CreatePost() {

  return (
    <Form method="POST" className={`${styles.createPost}`}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input name="userId" type="number" placeholder="Enter your userId here" className="form-control" id="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input name="title" type="text" placeholder="Enter your Title here..." className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea name="body" rows={4} type="text" placeholder="share more about it here..." className="form-control" id="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Post Tags</label>
        <input name="tags" type="text" placeholder="Enter your tags here with space..." className="form-control" id="tags" />
      </div>


      <div className="mb-3">
        <label htmlFor="likes" className="form-label">Likes</label>
        <input name="likes" type="number" placeholder="Enter Likes" className="form-control" id="likes" />
      </div>


      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">Dislikes</label>
        <input name="dislikes" type="number" placeholder="Enter dislikes" className="form-control" id="dislikes" />
      </div>


      <div className="mb-3">
        <label htmlFor="views" className="form-label">Views</label>
        <input name="views" type="number" placeholder="Enter views" className="form-control" id="views" />
      </div>


      <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  )

}
export async function postAction(data) {
  const formdata = await data.request.formData();
  const postdata = Object.fromEntries(formdata);
  postdata.tags = postdata.tags.split(" ")
  // console.log(postdata);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postdata),
  })
    .then(res => res.json())
    .then((post) => {
      console.log(post)
    });
  return redirect("/");
}

export default CreatePost;