import { Flex, Heading, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

type Game = {
  id: number
  name: string
  background_image: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <LinkBox
      key={game.id}
      bg="blue.800"
      borderRadius="md"
      overflow="hidden"
      boxShadow="base"
      transition="0.2s"
      _hover={{
        boxShadow: "dark-lg"
      }}
    >
      <Flex h="36" align="center" justify="center" overflow="hidden">
        <Image
          src={game.background_image}
          maxW="150%"
        />
      </Flex>

      <LinkOverlay as={Link} to={`games/${game.id}`}>
        <Heading size="md" p="2" fontSize="lg">{game.name}</Heading>
      </LinkOverlay>
    </LinkBox>
  )
}