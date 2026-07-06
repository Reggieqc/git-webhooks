import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  constructor() {}

  onStar(payload: GitHubStarPayload): string {
    const { starred_at, sender, repository, action } = payload;

    return `User ${sender.login} ${action} star at the repository ${repository.full_name} at ${starred_at}`;
  }
  onIssue(payload: GitHubIssuePayload): string {
    const { issue, sender, repository, action } = payload;
    return `User ${sender.login} ${action} issue #${issue.number} in repository ${repository.full_name}`;
  }
}
