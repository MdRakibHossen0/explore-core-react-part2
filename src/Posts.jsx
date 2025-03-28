import { use } from "react";
import Post from "./Post";

export default function Posts({PostsPromise}) {
  const Posts = use(PostsPromise);
   

  return (
    <div className="card">
      <h2>Post is here: {Posts.length}</h2>
     {
      Posts.map(post=> <Post key={post.id} post={post}></Post>)
     }
       
    </div>
  );
}