
import axios from 'axios';

// const GetRepoList = async () => {
//   return new Promise((resolve) => {
//     axios({
//       method: "GET",
//       url: `${process.env.REACT_APP_GITHUB_API_URL}/user/repos`,
//       headers: {
//         Accept: "application/vnd.github+json",
//           Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
//           "X-GitHub-Api-Version": "2022-11-28",
//       }
//     })
//       .then((response) => resolve(response))
//       .catch((error) => resolve(error));
//   });

// };
// export default GetRepoList;


// Simular un retraso de 2 segundos para visualizar el loading.

const GetRepoList = async () => {
  return new Promise((resolve) => {
    setTimeout(() => { 
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_GITHUB_API_URL}/user/repos`,
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
          "X-GitHub-Api-Version": "2022-11-28",
        }
      })
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
    }, 2000); 
  });
};

export default GetRepoList;