import React from "react";
import { useAppContext } from "../../context/context";

function Searcher() {
  const {  setContext } = useAppContext();

  const handleSearch = (e) =>{
    const getData = setTimeout(() => {
      setContext({query: e.target.value})
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