import { useState,useEffect } from "react";
const useFetch=(url) => { 
    const [data, setData] = useState(null);

 const[isPending,setisPending]=useState(true);
 const [error,setError]=useState(null);

    useEffect(()=>{
      const abortController = new AbortController();


        setTimeout(() => {
          fetch(url, { signal: abortController.signal })
        .then(res => { 
          if(!res.ok){
            throw Error('they cant fetch the data ');
          }
          return res.json()
        })
        .then(data =>{ 
       
          setData(data);
          setisPending(false);
          setError(null);
        }).catch(err=>{
          if(err.name==='AbortError'){
            console.log('request canceled');
          }else{
          setisPending(false);
          setError(err.message);}
        })
        }, 1000);
        return ()=>{
          abortController.abort();
        }
        
        
      },[url]);
      return {data,isPending,error};
}
export default useFetch;