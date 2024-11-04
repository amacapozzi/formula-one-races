import { config } from "@/config/config";
import { Root } from "@/types/Races";

export class Formula {
  static async getLastRace(): Promise<Root> {
    const response = await fetch(
      `${config.ERGAST_API_URL}/current/last/results.json`
    );
    if (!response.ok) {
      throw new Error("Error when trying to obtaing the last race");
    }

    const data = await response.json();
    return data.MRData;
  }
}
