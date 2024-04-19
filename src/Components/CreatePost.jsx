import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-store";

const CreatePost = () => {
  const userIdElement = useRef();
  const TitleElememt = useRef();
  const ReactionElement = useRef();
  const BodyElement = useRef();
  const TagsElement = useRef();

  const { addPost } = useContext(PostList);

  const handelSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = TitleElememt.current.value;
    const Reaction = ReactionElement.current.value;
    const Tags = BodyElement.current.value;
    const PostBody = TagsElement.current.value.split("  ");

    userIdElement.current.value = "";
    TitleElememt.current.value = "";
    ReactionElement.current.value = "";
    BodyElement.current.value = "";
    TagsElement.current.value = "";

    addPost(userId, PostTitle, Reaction, Tags, PostBody);
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3 m-3 mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="Write Your Post"
          id="Post Title"
        />
      </div>
      <div className="mb-3 m-3 mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Post Title
        </label>
        <input
          ref={TitleElememt}
          type="text"
          className="form-control"
          placeholder="Write Your Post"
          id="Post Title"
        />
      </div>
      <div className="mb-3 m-3 mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Post Content
        </label>
        <textarea
          ref={BodyElement}
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3 m-3 mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Number of reactions
        </label>
        <input
          type="number"
          ref={ReactionElement}
          className="form-control"
          id="reactions"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3 m-3 mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={TagsElement}
          className="form-control"
          id="tags"
          placeholder="Tell us more about it"
        />
      </div>
      <button type="submit" className="btn btn-primary m-2 mx-5">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
