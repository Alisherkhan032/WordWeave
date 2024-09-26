import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './CreateBlog.css';

const Createblog = () => {
  // create a pending state
  const [pending, setPending] = useState(true);

  //create variable
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sector, setSector] = useState("");
  const [author, setAuthor] = useState("");

  const url = "http://localhost:4000/blogs";
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setPending(false);

    const blog = { title,content: content.trim(), sector, author };
    console.log(blog);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
      credentials : 'include'
    })
      .then((resObj) => {
        setPending(false);
        navigate("/allblogs");
      })
      .catch((err) => {
        console.log("error");
      });
  }

  return (
    <section>
      <h2>Fill the Blog details</h2>
      <form onSubmit={handleSubmit} method="POST" className="create-form">
        <label>
          <h3>Title</h3>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <h3>Content</h3>
          <textarea
            name="content"
            rows={10}
            cols={80}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </label>
        <label>
          <h3>Sector</h3>
          <input
            type="text"
            name="sector"
            value={sector}
            onChange={(e) => {
              setSector(e.target.value);
            }}
            
          />
        </label>
        <label>
          <h3>Author</h3>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </label>
        {pending && (
          <input type="submit" value="Submit Blog" className="submit-btn" />
        )}
        {!pending && (
          <button className="submit-btn">
            <span className="spinner"></span>
            Loading....
          </button>
        )}
      </form>
      {/* <h2>Input for form</h2>
      <p>title : {title}</p>
      <p>content : {content}</p>
      <p>sector : {sector}</p>
      <p>author : {author}</p> */}
    </section>
  );
};

export default Createblog;
