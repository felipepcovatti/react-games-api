import { Box, Center, Heading, Image, SimpleGrid, Spinner, Stack, Tag, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { TheHeader } from "../components/TheHeader"
import { useGame } from "../hooks/useGame"

export default function Game() {
  const { id } = useParams<{ id: string }>()
  const { data: game, isLoading } = useGame(Number(id))

  console.log({ test: game?.platforms })

  return (
    <>
      <TheHeader />

      {isLoading
        ? <Center><Spinner size="lg" /></Center>
        : game && (
          <SimpleGrid
            bg="blue.800"
            columns={[1, 1, 2]}
            gap="8"
            maxW="1120"
            mx="auto"
            borderRadius="md"
            boxShadow="base"
          >
            <Image src={game.background_image} />

            <Box p="4">
              <Heading>{game.name}</Heading>

              <Stack spacing="2" my="2">
                <Box>
                  <Text>Categorias</Text>
                  {game.genres.map(genre => (
                    <Tag key={genre.id} mb="1" mt="1" mr="2">
                      {genre.name}
                    </Tag>
                  ))}
                </Box>

                <Box>
                  <Text>Plataformas</Text>
                  {game.platforms.map(platform => (
                    <Tag key={platform.platform.id} mb="1" mt="1" mr="2">
                      {platform.platform.name}
                    </Tag>
                  ))}
                </Box>

                <Box>
                  <Text>Desenvolvedores</Text>
                  {game.developers.map(developer => (
                    <Tag key={developer.id} mb="1" mt="1" mr="2">
                      {developer.name}
                    </Tag>
                  ))}
                </Box>
              </Stack>

            </Box>
          </SimpleGrid>
        )
      }
    </>
  )
}