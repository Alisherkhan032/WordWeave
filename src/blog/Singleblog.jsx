import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const Singleblog = () => {
    const {id} = useParams();
    const url = 'http://localhost:4000/blogs/' + id;

    const navigate = useNavigate();

    let {error, data, loading} = useFetch(url);
    function handleDelete(){
        console.log(url)
        fetch(url, {method : 'DELETE'})
            .then(()=>{
                console.log("blog deleted successfully");
                navigate('/allblogs')
            })
            .catch((err)=>{
                console.log("error occurred");
            })
    }
    return ( 
        <section>
            {error && <section>{error.message}</section>}
            {loading && <section>The page is loading...</section>}
            {data && 
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <p>by {data.author}</p>
                    <button className="delete-button" onClick={handleDelete}>Delete</button>
                </div>
            }
        </section>
    );
}
 
export default Singleblog;