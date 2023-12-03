import { useAppContext } from "../../context/context";
import Arrow from "../Arrow/Arrow";
import Button from "../Button/Button";


function Pagination() {
  const { context, setContext} = useAppContext();
  const prev = -1;
  const next = 1; 
  const habdlePage = (direction) =>{
    if(((context.page >= 1 & context.page < context.totalPages) & direction === next) | (context.page > 1 & direction === prev) ){
      setContext({...context, page: (context.page + direction)});
    }
  }
console.log(context.totalPages)
  return (
    <div>
      <Button onClick={()=>habdlePage(prev)} >
        <Arrow active={context.page > 1}/>
      </Button>
      <h1>paginacion {context.page} / {context.totalPages}</h1>
      <Button  onClick={()=>habdlePage(next)}>
        <Arrow active={context.page < context.totalPages}/>
      </Button>
    </div>
  );
}

export default Pagination;