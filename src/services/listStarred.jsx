import axios from 'axios';

const ListStarred = async () => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_GITHUB_API_URL}/users/${process.env.REACT_APP_GITHUB_USER}/starred`,
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
export default ListStarred;