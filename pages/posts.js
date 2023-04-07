import Layout from "../components/layouts/article";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import thumbOCR from "../public/images/ocr.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <GridItem
            title="OCR Application"
            thumbnail={thumbOCR}
            href="https://pro-ocr.web.app/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
