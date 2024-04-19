import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-List-store";

const Post = (lists) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card" style={{ width: "18rem", margin: "30px" }}>
      <div className="card-body body">
        <h5 className="card-title">
          {lists.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(lists.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{lists.body}</p>
        {lists.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag  mx-2">
            {tag}
          </span>
        ))}
        <div className="alert alert-primary" role="alert">
          a clintele has be rected for this post is : {lists.reactions}.
        </div>
      </div>
    </div>
  );
};

export default Post;
