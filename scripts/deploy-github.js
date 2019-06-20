const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/papermana/dominik.click.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
