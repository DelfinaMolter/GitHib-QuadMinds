
const Starred = async (full_name) => {
  return new Promise((resolve) => {
    fetch(`${process.env.REACT_APP_GITHUB_API_URL}/user/starred/${full_name}`, {
      method: "PUT",
      headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
          "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
  });
};
export default Starred;


