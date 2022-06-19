import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id}= useParams();
    const {data:blog,isPending,error}= useFetch(`http://localhost:8000/blogs/`+id);
    const history=useHistory();
    const handleClick=()=>{
            fetch(`http://localhost:8000/blogs/`+blog.id,{
                method:'DELETE'
            }).then(()=>{
                console.log('Blog Deleted');
                history.push('/');

            })
    }
    return (  
        <div className="blog-details">
           {isPending && <p>Loading...</p>}
              {error && <p>{error}</p>}
                {blog && <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by {blog.author}</h3>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>}
        </div>
    );
}
 
export default BlogDetails;