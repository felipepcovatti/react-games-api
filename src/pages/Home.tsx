import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { GameCard } from "../components/GameCard"
import { TheHeader } from "../components/TheHeader"
import { useGames } from "../hooks/useGames"

export default function Home() {
  const { data: games, isLoading } = useGames()

  return (
    <>
      <TheHeader />

      {isLoading
        ? <Center><Spinner size="lg" /></Center>
        : games && (
          <Box
            px="4"
            pb="16"
            maxW="1120"
            mx="auto"
          >

            <SimpleGrid
              spacing={10}
              columns={[1, 2, 3, 4]}
            >
              {games.map(game => (
                <GameCard
                  key={game.id}
                  game={game}
                />
              ))}
            </SimpleGrid>
          </Box>
        )
      }
    </>
  )
}