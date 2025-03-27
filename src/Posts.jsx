import { use } from "react"
import Post from "./Post";

export default function ({fetchPromisePosts}){
    const Posts = use(fetchPromisePosts);
    console.log(Posts);
    return (
      <div className="card">
        <h2>Post is here: {Posts.length}</h2>
       {
        Posts.map(post => <Post post={post}></Post>)
       }
      </div>
    );
}