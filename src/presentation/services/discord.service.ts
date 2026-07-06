import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;
  constructor() {}

  async notify(message: string): Promise<void> {
    try {
      const response = await fetch(this.discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          // embeds: [
          //   {
          //     image: {
          //       url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamFweWtzNXEwN3NnMTVnMHdwc2prM2syYmEwNHNlYmRjdHh2cWtocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif",
          //     },
          //   },
          // ],
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to send notification to Discord. Status: ${response.status}`,
        );
      }
    } catch (error) {
      console.error("Error sending notification to Discord:", error);
    }
  }
}
