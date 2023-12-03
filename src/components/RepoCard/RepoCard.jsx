import { useEffect, useState } from "react";
import DeleteStarred from "../../services/deleteStarred";
import Starred from "../../services/putStarred";
import Button from "../Button/Button";
import Star from "../Star/Star";
import Swal from 'sweetalert2'
import DetailRepo from "../DetailRepo/DetailRepo";

function RepoCard({data, starred}) {
  const [ star, setStar ] = useState(false)

  useEffect(()=>{
    setStar(starred)
  },[data, starred])


  const handleStar = async() => {
    let response = {}
    if(!star){
      response = await Starred(data.full_name );
    }else{
      response = await DeleteStarred(data.full_name);
    }
    if(response.status === 204){
      setStar(!star)
    }else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "No se pudo procesar tu cambio, intenta más tarde.",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className="w-full flex flex-row justify-between items-center ">
      <DetailRepo data={data}/>
      <Button onClick={handleStar}>
        <Star isFull={star }/>
        <p className="p-2">{star? "Starred" :"Star"}</p>
      </Button>
    </div>

  );
}

export default RepoCard;