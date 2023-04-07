import Layout from "../components/layouts/article";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbOCR from "../public/images/ocr.png";
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ocr" title="OCR App" thumbnail={thumbOCR}>
            A Text-recognition tool that allows the user to upload a image to
            extract the text from it.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
