
import { useQuery } from "react-query";
import api from "../services/api";

type GameDeveloper = {
  id: number
  name: string
}

type GamePlatform = {
  platform: {
    id: number
    name: string
  }
}

type GameGenres = {
  id: number
  name: string
}

type Game = {
  id: number
  name: string
  background_image: string
  developers: GameDeveloper[]
  platforms: GamePlatform[]
  genres: GameGenres[]
}

export async function getGame(id: number): Promise<Game> {
  const { data } = await api.get(`/games/${id}`)

  const game = data

  return game
}

export function useGame(id: number) {
  return useQuery(['game', id], () => getGame(id), {
    staleTime: 1000 * 60 * 10 // 10 min
  })
}