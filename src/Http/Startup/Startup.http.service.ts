import axios from "axios";
import { Startup, StartupDTO } from "../../Types/Startup";
import StartupMapper from "./Startup.mapper";

export class StartupHttpService {
  public static async getStartupById(id: string | number): Promise<Startup> {
    const response = await axios.get<StartupDTO>(`/api/startups/${id}`);
    return StartupMapper.map(response.data);
  }
  public static async getStartups() {
    const response = await axios.get("/api/startups");
    const result = response.data.map((item: StartupDTO) =>
      StartupMapper.map(item)
    );
    console.log(result);
    return result;
  }
}
