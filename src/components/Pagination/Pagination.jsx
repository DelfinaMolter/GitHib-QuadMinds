import { useAppContext } from "../../context/context";
import Arrow from "../Arrow/Arrow";
import Button from "../Button/Button";


function Pagination() {
  const { context, setContext} = useAppContext();
  const { page, totalPages } = context;

  const handlePageChange = (direction) =>{
    const nextPage = page + direction;
    const isFirstPage = nextPage === 1;
    const isLastPage = nextPage === totalPages;
    if((nextPage >= 1 && nextPage <= totalPages) && (!isFirstPage || !isLastPage)){
      setContext({...context, page: nextPage});
    }
  }
console.log(totalPages)
  return (
    <div>
      <Button onClick={()=>handlePageChange(-1)} >
        <Arrow active={page > 1}/>
      </Button>
      <h1>paginacion {page} / {totalPages}</h1>
      <Button  onClick={()=>handlePageChange(1)}>
        <Arrow active={page < totalPages}/>
      </Button>
    </div>
  );
}

export default Pagination;