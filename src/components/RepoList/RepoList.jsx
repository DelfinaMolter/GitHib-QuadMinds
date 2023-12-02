import { useEffect, useState } from "react";
import GetRepoList from "../../services/getRepos";
import SearchRepos from "../../services/searchRepos";
import RepoCard from "../RepoCard/RepoCard";
import { useAppContext } from "../../context/context";
import ListStarred from "../../services/listStarred";


function RepoBoxList() {
  const { context} = useAppContext();
  const [ repos, setRepos] = useState([])
  const [ dataStar, setDataStar ] = useState([])
  const [loading, setLoading] = useState(true);


  const getDataStar = async() =>{
    const response = await ListStarred();
    if(response.status === 200){
      const fullNamesStarred = response.data.map(obj => obj.full_name);
      setDataStar(fullNamesStarred)
    } 
  }

  const getRepos = async() =>{
    setLoading(true);
    if( context.hasOwnProperty("query") & context.query !== ""){
      const response = await SearchRepos(context.query );
      response.status === 200 && setRepos( response.data.items)
      getDataStar()
      setLoading(false);
    }else{
      const infoRepo = await GetRepoList()
      infoRepo.status === 200 && setRepos(infoRepo.data)
      getDataStar()
      setLoading(false);
    }
  }


  useEffect(()=>{
    getRepos()
  },[ context.query])

  if(loading) return <h1> Loading... </h1>

  return (
    <div className="w-full">

      {
        !loading & repos.length < 0 ?
        <h1>No se encontraron repositorios.</h1>
        :
        repos.map((repo, index)=> <RepoCard key={index} data={repo} starred={dataStar.some(fullName => fullName === repo.full_name)}/>)
      }
    </div>

  );
}

export default RepoBoxList;