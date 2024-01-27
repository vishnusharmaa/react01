function Bloglist({blogs, title}) {
// const blogs = props.blogs;
// const title = props.title
    
    return (
        <div className="Blog-list">
        <h2>{title}</h2>
        {blogs.map((blogs) => (
        <div className="blogs-previw" key={blogs.id}>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
        </div>

      ))}
        </div>
    );
}

export default Bloglist;
  