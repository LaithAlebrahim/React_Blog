import { Link } from "react-router-dom";

 const NotFound = () => {
     return ( 
        <div>
            <h1>Sorry</h1>          
            <p>The page you are looking for does not exist</p>     
            <Link to="/React_Blog">Back to HomePage ......</Link>
        </div>
       
      );
 }
  
 export default NotFound;