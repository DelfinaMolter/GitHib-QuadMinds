import useSWR from "swr";

const fetcher = (url) => //{
  // Simulando un retraso inicial de 2 segundos antes de hacer la llamada para visualizar el Loading.
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
      fetch(url,{
          method:"GET",
          headers:{
            Accept: "application/vnd.github+json",
            Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
            "X-GitHub-Api-Version": "2022-11-28",
          }
        })
      .then(res=> res.json())
//       .then((data) => {
//         setTimeout(() => {
//           resolve(data);
//         }, 2000);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   }, 2000);
// });
// };
export const useGetRepoList = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_GITHUB_API_URL}/user/repos`,
    (url)=>fetcher(url)
  );

  return {
    repos: data,
    isLoading,
    isError: error
  };
};
