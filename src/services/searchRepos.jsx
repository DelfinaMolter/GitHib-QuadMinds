import axios from 'axios';

const SearchRepos = async (query,page) => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_GITHUB_API_URL}/search/repositories?q=${query}&page=${page}`,
      headers: {
        Accept: "application/vnd.github+json",
          Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
          "X-GitHub-Api-Version": "2022-11-28",
      }
    })
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
  });
};
export default SearchRepos;