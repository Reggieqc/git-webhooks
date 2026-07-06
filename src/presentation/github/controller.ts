import { Request, Response } from "express";
import { GitHubService } from "../services/github.service";
export class GitHubController {
  constructor(private readonly githubService = new GitHubService()) {}

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header("x-github-event") ?? "unknown";
    const payload = req.body;
    let message: string;
    switch (githubEvent) {
      case "star":
        message = this.githubService.onStar(payload);
        break;
      case "issues":
        message = this.githubService.onIssue(payload);
        break;
      default:
        message = `Unhandled GitHub event: ${githubEvent}`;
    }
    console.log({ message });
    res.status(202).send("Accepted");
  };
}
