class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector("#submit-button");
    const repoInputEl = document.querySelector("#repo-name-input");

    submitButtonEl.addEventListener("click", () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (repoData) => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const name = document.querySelector("#repo-name");
    name.innerText = repoData.full_name;

    // access the repo-description element
    // add description from the repoData

    const description = document.querySelector("#repo-description");
    description.innerText = repoData.description;

    // access organize element
   // add url from repoData

    const org = document.querySelector("#organize")
    org.setAttribute("src", repoData.organization.avatar_url)

  }
}

module.exports = GithubView;
