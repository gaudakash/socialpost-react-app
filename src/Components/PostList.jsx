import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-List-store";
import WelcomeMeassage from "./WelcomeMeassage";

const PostList = () => {
  const { postList, addPostInitial } = useContext(postListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostInitial(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMeassage />}
      {postList.map((post) => (
        <Post key={post.id} lists={post} />
      ))}
    </>
  );
};

export default PostList;
