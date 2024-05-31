import { Box, Container, Flex, Heading, Text, VStack, HStack, Progress, useBreakpointValue, Divider, Avatar, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "@chakra-ui/react";
import { FaHome, FaEnvelope, FaUser, FaDollarSign, FaMapMarkerAlt, FaCog } from "react-icons/fa";

const Index = () => {
  const progressValue = 70; // Example value for market performance
  const chanceValue = 85; // Example value for chance of getting the home
  const applicationsCount = 5; // Example value for number of applications
  const conversationsCount = 3; // Example value for open conversations
  const priceIndication = "$250,000"; // Example value for price indication
  const neighborhoodInsights = "Quiet neighborhood with parks and good schools."; // Example value for neighborhood insights

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center" borderRadius="md" boxShadow="md">
        <Heading size="md">Tenant Dashboard</Heading>
        <HStack spacing={4}>
          <HStack spacing={1}>
            <FaHome />
            <Text>Home</Text>
          </HStack>
          <HStack spacing={1}>
            <FaEnvelope />
            <Text>Listings</Text>
          </HStack>
          <HStack spacing={1}>
            <FaUser />
            <Text>Profile</Text>
          </HStack>
          <HStack spacing={1}>
            <FaEnvelope />
            <Text>Messages</Text>
          </HStack>
          <HStack spacing={1}>
            <FaCog />
            <Text>Settings</Text>
          </HStack>
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

        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Number of Applications</Heading>
          <Text mb={2}>This section shows the number of applications the home has received.</Text>
          <Stat>
            <StatLabel>Applications</StatLabel>
            <StatNumber>{applicationsCount}</StatNumber>
          </Stat>
        </Box>

        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Open Conversations with Landlord</Heading>
          <Text mb={2}>This section shows the number of open conversations you have with the landlord.</Text>
          <Stat>
            <StatLabel>Conversations</StatLabel>
            <StatNumber>{conversationsCount}</StatNumber>
          </Stat>
        </Box>

        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Information about Applicants</Heading>
          <Text mb={2}>This section provides information about the applicants who have applied for the home.</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
              <HStack spacing={4}>
                <Avatar name="John Doe" />
                <VStack align="start">
                  <Text fontWeight="bold">John Doe</Text>
                  <Text>Credit Score: 750</Text>
                  <Text>Income: $80,000</Text>
                </VStack>
              </HStack>
            </Box>
            <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
              <HStack spacing={4}>
                <Avatar name="Jane Smith" />
                <VStack align="start">
                  <Text fontWeight="bold">Jane Smith</Text>
                  <Text>Credit Score: 720</Text>
                  <Text>Income: $75,000</Text>
                </VStack>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Price Indication</Heading>
          <Text mb={2}>This section provides an indication of the price of the home.</Text>
          <Stat>
            <StatLabel>Price</StatLabel>
            <StatNumber>{priceIndication}</StatNumber>
          </Stat>
        </Box>

        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>Neighborhood Insights</Heading>
          <Text mb={2}>This section provides insights about the neighborhood.</Text>
          <Text>{neighborhoodInsights}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;