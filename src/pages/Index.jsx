import { Box, Container, Flex, Heading, Text, VStack, HStack, Progress, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const progressValue = 70; // Example value for market performance
  const chanceValue = 85; // Example value for chance of getting the home

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Tenant Dashboard</Heading>
        <HStack spacing={4}>
          <Text>Home</Text>
          <Text>Listings</Text>
          <Text>Profile</Text>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Market Performance</Heading>
          <Text mb={2}>This section shows how the home is performing on the market.</Text>
          <Progress colorScheme="green" size="lg" value={progressValue} />
          <Text mt={2}>{progressValue}%</Text>
        </Box>

        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Chance of Getting the Home</Heading>
          <Text mb={2}>This section indicates your chance of getting the home.</Text>
          <Progress colorScheme="blue" size="lg" value={chanceValue} />
          <Text mt={2}>{chanceValue}%</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;