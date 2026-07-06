import express from "express";
import { envs } from "./config";

(() => {
  main();
})();

function main() {
  const app = express();

  app.post("/api/github", (req, res) => {
    // Handle the GitHub webhook payload here
    res.status(200).send("Webhook received");
  });

  app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
  });
}
