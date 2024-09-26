import { Link } from "react-router-dom";

const Blogs = ({ data, title }) => {
  return (
    <div>
      <h1 className="blogs-title">{title}</h1>
      {data.map((blog, index) => {
        const url = `/blogs/${blog._id.toString()}`; 
        return (
            <section key={index}>
              <h3>
                <Link to={url}>{blog.title}</Link>
              </h3>
              <p>{blog.sector}</p>
              <p>by {blog.author}</p>
            </section>
        );
      })}
    </div>
  );
};

export default Blogs;


//* why key?
//In React, when you're rendering a list of elements, each element needs a unique key prop. This key prop is used by React to keep track of the elements and optimize rendering.

//* why map?
//In React, when you're working with an array of data, you need to transform that data into a format that React can understand and render. This is where map comes in.

//map is a method on the Array prototype that takes a callback function as an argument. This callback function is called for each element in the array, and it returns a new value. The map method then returns a new array containing these new values.

//In the context of React, we use map to transform an array of data into an array of React elements
