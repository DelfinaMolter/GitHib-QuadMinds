import { useEffect } from "react";
import { useGetRepoList } from "../../services/getRepos";
import RepoCard from "../RepoCard/RepoCard";
import { useAppContext } from "../../context/context";
import ListStarred from "../../services/listStarred";


function RepoBoxList() {
  const { context, setContext } = useAppContext();
  const { repos, isError, isLoading } = useGetRepoList();

  const getInfoStar = async() =>{
    const infoStar = await ListStarred()
    console.log(infoStar);
  }


  useEffect(()=>{
    if( !context.hasOwnProperty("query") | context.query === ""){
      setContext( {...context, repos: repos})
    }
    getInfoStar();
  },[repos])


  if (isError ) return ( <h2>No se encontraron repositorios, intentelo más tarde.</h2>)
  return (
    <div className="w-full">
      {
        isLoading && <h1> Loading...</h1>
      }

      {
        context.repos && 
        
        context.repos.map((repo, index)=> <RepoCard key={index} data={repo}/>)
      }
    </div>

  );
}

export default RepoBoxList;