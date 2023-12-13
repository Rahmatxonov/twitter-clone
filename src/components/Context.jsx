import { createContext } from "react";
import Layout from "./Layout";
import { useState, useEffect } from "react";

export default function Context() {
  let AppContext = createContext();
  const [tweets, setTweets] = useState();

  //  const fetchData=async()=>{
  //     try{
  //         let url='https://rapidapi.com/omarmhaimdat/api/twitter154';
  //         const response=await fetch(url);
  //         if(response.ok){
  //             const data=await response.json();
  //             setTweets(data)
  //         }
  //     }catch{}
  //  }
  //  useEffect(()=>{
  //     fetchData();
  //  },[])

  return (
    <AppContext.Provider
      value={{
        tweets,
        setTweets,
      }}
    >
      <Layout />
    </AppContext.Provider>
  );
}
