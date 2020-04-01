import { PlayerApi, Player } from "../apis/PlayerApi";
import { arbitraryPlayer } from "./arbitraryObjects";

export const stubPlayerApi = (): PlayerApi => {
  return {
    getPlayers: () => Promise.resolve([arbitraryPlayer()] as Player[])
  };
}