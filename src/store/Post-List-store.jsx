import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  // addPost: () => {},
  deletePost: () => {},
  addPostInitial: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST_Initial") {
    newPostList = action.payload.posts;
  } //else if (action.type === "ADD_POST") {
  //   newPostList = [action.payload, ...currPostList];
  // }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostDataList] = useReducer(PostListReducer, []);

  // const addPost = (userId, PostTitle, Reaction, Tags, PostBody) => {
  //   dispatchPostDataList({
  //     type: "ADD_POST",
  //     payload: {
  //       id: Date.now(),
  //       title: PostTitle,
  //       body: PostBody,
  //       reactions: Reaction,
  //       userId: userId,
  //       tags: Tags,
  //     },
  //   });
  // };

  const addPostInitial = (posts) => {
    dispatchPostDataList({
      type: "ADD_POST_Initial",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostDataList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, deletePost, addPostInitial }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
