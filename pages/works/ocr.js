import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  <Layout title="OCR App">
    <Container>
      <Title>
        OCR App
        <Badge>2021</Badge>
      </Title>
      <P>
        A text-recognition website that allows a user to upload a picture, and
        copy the text extracted from it using Tesseract. Written in ReactJS.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pro-ocr.web.app/"></Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Material UI, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/ocr.png" />
    </Container>
  </Layout>;
};

export default Work;
export { getServerSideProps } from "../../components/chakra";
