import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";

import { ArrowBackIcon } from '@chakra-ui/icons'
import { useHistory, useLocation } from "react-router-dom";

export function TheHeader() {
  const { goBack } = useHistory();
  const { pathname } = useLocation();

  return (
    <Box bg="blue.900">
      <Flex
        px="4"
        pt="12"
        pb="28"
        mb="-14"
        mx="auto"
        as="header"
        align="center"
        justify="center"
        maxW="1120"
        pos="relative"
      >
        {pathname !== '/' && (
          <IconButton
            position="absolute"
            left={0}
            aria-label="Back"
            bg="transparent"
            colorScheme="blue"
            _hover={{ bg: 'transparent' }}
            onClick={goBack}
            fontSize="xx-large"
            icon={<ArrowBackIcon />}
          />
        )}
        <Heading as="span" size="lg">React Games API</Heading>
      </Flex>
    </Box >
  )
}