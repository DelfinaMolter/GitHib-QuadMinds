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
  const [ loading, setLoading ] = useState(true);
  const [ isErrorRepo, setErrorRepo ] = useState(false);


  const getDataStar = async() =>{
    const response = await ListStarred();
    if(response.status === 200){
      const fullNamesStarred = response.data.map(obj => obj.full_name);
      setDataStar(fullNamesStarred)
    } 
  }

  const getRepos = async() =>{
    setLoading(true);
    let response ={}
    if( context.hasOwnProperty("query") & context.query !== ""){
      response = await SearchRepos(context.query );
      response.status === 200 && setRepos( response.data.items)
    }else{
      response = await GetRepoList()
      response.status === 200 && setRepos(response.data)
    }

    if(response.status === 200){
      getDataStar()
      setErrorRepo(false)
      setLoading(false);
    } else{
      console.log(response.message)
      setErrorRepo(true)
      setLoading(false);
    }
  }


  useEffect(()=>{
    getRepos()
  },[ context.query])

  if(loading) return <h1> Loading... </h1>

  if(isErrorRepo) return <h1> Error al obtener los datos, intentelo más tarde.</h1>

  return (
    <div className="w-full">

      {
        repos.length > 0 ?
        repos.map((repo, index)=> <RepoCard key={index} data={repo} starred={dataStar.some(fullName => fullName === repo.full_name)}/>)
        :
        <h1>No se encontraron repositorios.</h1>
      }
    </div>

  );
}

export default RepoBoxList;