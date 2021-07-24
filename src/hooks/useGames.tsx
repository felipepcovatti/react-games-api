import { useQuery } from 'react-query'
import api from "../services/api";

type Game = {
  id: number
  name: string
  background_image: string
}

export async function getGames(): Promise<Game[]> {
  const { data } = await api.get('/games')

  const games = data.results

  return games
}

export function useGames() {
  return useQuery('games', getGames, {
    staleTime: 1000 * 60 * 10 // 10 min
  })
}
