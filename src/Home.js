import { useState,useEffect } from "react";
import BlogList from "./Blog-list";
import useFetch from "./useFetch";


const Home = () => {
  
const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending&& <div>Loading...</div>}
   {blogs&&<BlogList blogs={blogs} title='All Blogs are Here!'/>}
 
  
    </div>
  );
}
 
export default Home;