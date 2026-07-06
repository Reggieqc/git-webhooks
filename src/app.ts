import express from "express";
import { envs } from "./config";
import { GitHubController } from "./presentation/github/controller";

(() => {
  main();
})();

function main() {
  const app = express();
  const githubController = new GitHubController();

  app.use(express.json());

  app.post("/api/github", githubController.webhookHandler);

  app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
  });
}
