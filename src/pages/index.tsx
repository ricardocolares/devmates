import styled from "styled-components";
import { Container, Content } from "./styles";
import gojouImg from "../../public/gojou.jpg";
import Image from "next/image";
import BasicCard from "../components/cards"
import { Card } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
  return (
    <Container>
      <Content>
        <h1>Hey, I'm Gojo Satori</h1>;

        <span>
          <Image src={gojouImg} alt="The GOAT" width="50" height="50" />
          <FontAwesomeIcon icon={"linkedin"} />
          <FontAwesomeIcon icon={"twitter"} />
        </span>

        <p>ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores rem assumenda voluptatum veritatis repudiandae officia ad eos exercitationem iure minus perspiciatis ullam autem dolorum iste, tempore laboriosam aliquam et libero.</p>
        <p>Working for early stage startups and corporations like the Financial Times taught me a lot about building software. I share what I've learned about software design & architecture through my articles, books and newsletter.</p>

      </Content>

      <h2>Articles</h2>
      <p></p>

      <BasicCard />
      <BasicCard />
      <BasicCard />
    </Container>

  );
}
