import React from "react";
import { useAppContext } from "../../context/context";
import SearchRepos from "../../services/searchRepos";


function Searcher() {
  const { context, setContext } = useAppContext();
  const [query, setQuery] = React.useState("");

  const searchData = async() => {
    const response = await SearchRepos(query );
    response.status === 200 && setContext( {query: query, repos: response.data.items})
  }
  
  React.useEffect(() => {
    if(query !== ""){
      const getData = setTimeout(() => {
        searchData()
      }, 2000)

      return () => clearTimeout(getData)
    }else{
      setContext( { ...context, query: query})
    }

  }, [query])


  return (
    <div >
      <input type="search" name="search" placeholder="Find a repository..."  className="text-black" onChange={(e) => setQuery(e.target.value)}/>
    </div>

  );
}

export default Searcher;