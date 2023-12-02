import { useEffect, useState } from "react";
import DeleteStarred from "../../services/deleteStarred";
import Starred from "../../services/putStarred";
import Button from "../Button/Button";
import Star from "../Star/Star";
function RepoCard({data}) {
  const [ star, setStar ] = useState(false)

  useEffect(()=>{
    setStar(data.stargazers_count)
  },[data])


  const handleStar = async() => {
    if(!star){
      const response = await Starred(data.full_name );
      response.status === 204 && setStar(!star)
    }
    if(star === 1){
      const response = await DeleteStarred(data.full_name);
      response.status === 204 && setStar(!star)
    }
  }
  return (
    <div className="w-full flex flex-row justify-between items-center ">
      <h1>{data.name}</h1>
      <Button onClick={handleStar}>
        <Star isFull={star }/>
        <p className="p-2">{star? "Starred" :"Star"}</p>
      </Button>
    </div>

  );
}

export default RepoCard;