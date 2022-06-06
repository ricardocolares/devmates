import BasicCard from "../../components/cards";
import { Container, Content } from "./styles";

export default function Articles() {
  return (
    <Container>
      <h1>Articles</h1>

      <Content>
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </Content>
    </Container>
  );
}
