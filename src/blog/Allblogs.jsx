import Blogs from "./Blogs";
import useFetch from "./useFetch";

const Allblogs = () => {
    const url = 'http://localhost:4000/blogs';
    const {data, loading, error} = useFetch(url);
    return ( 
        <>
            {error && <section>{error.message}</section>}
            {loading && <section>The page is loading...</section>}
            {data && <Blogs data={data} title ={"Blogs from AllBlogs"} />}
        </>
    );
}
 
export default Allblogs;