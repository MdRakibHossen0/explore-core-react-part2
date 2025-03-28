 

export default function Post ({post}){

    return (
      <div className="card">
        <h3>{post.id}</h3>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    );


}