import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [Body,setBody]=useState('');
    const[isPending,setPending]=useState(false);
    const history=useHistory();

        const handleSubmit=(e)=>{
            e.preventDefault();
            const blog={title,Body,author};
            setPending(true);
            fetch('http://localhost:8000/blogs',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                  
                },
                
                body:JSON.stringify(blog)
            }).then(()=>{
                console.log('Blog Created');
                setPending(false);
             //   history.go(-1);
             history.push('/React_Blog');
            })
           
        }

    return (
<div className="create">
    <h2>Add New Blog</h2>
    <form onSubmit={handleSubmit}>
        <label >Blog Title</label>
        <input type="text"required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label >Blog Body:</label>
        <textarea required value={Body} onChange={e=>setBody(e.target.value)}>

        </textarea>
        <label >Author Name:</label>
        <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        
       {!isPending&& <button>Add Blog</button>}
       {isPending&& <button disabled>Adding Blog....</button>}

    </form>
</div>

      );
}
 
export default Create;