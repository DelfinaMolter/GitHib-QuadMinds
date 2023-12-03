import React from "react";
import { useAppContext } from "../../context/context";

function Searcher() {
  const { context, setContext } = useAppContext();

  const handleSearch = (e) =>{
    const getData = setTimeout(() => {
      setContext({...context, query: e.target.value, page: 1})
    }, 2000)
    return () => clearTimeout(getData)
  }
  return (
    <div >
      <input type="text" name="search" placeholder="Find a repository..."  className="text-black" onChange={(e) => handleSearch(e)}/>
    </div>

  );
}

export default Searcher;