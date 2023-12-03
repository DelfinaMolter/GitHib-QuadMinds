import Star from "../Star/Star";

function DetailRepo({data}) {

  return (
    <div>
      <h3>{data.name}</h3>
      {
        data.description && <p>{data.description}</p>
      }
      <div>
        <Star/>
        <p>{data.stargazers_count}</p>
      </div>
    </div>
  );
}

export default DetailRepo;