import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
        Hello, I&apos;m a developer from Norway!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Morten Berge
          </Heading>
          <p> Certified Nerd ( Music / Development / Design) </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
