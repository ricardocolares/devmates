import { Container, Content } from "./styles";
import gojouImg from "../../public/goju.jpg";
import Image from "next/image";
import BasicCard from "../components/cards";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import api from "../service/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/posts");

      return response.data;
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Content>
        <h1>Hey, I'm Gojo Satori</h1>

        <span>
          <Image src={gojouImg} alt="The GOAT" width="60" height="60" />
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
          <FontAwesomeIcon className="icons" icon={faTwitter} />
        </span>

        <p>
          ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Asperiores rem assumenda voluptatum veritatis repudiandae officia ad
          eos exercitationem iure minus perspiciatis ullam autem dolorum iste,
          tempore laboriosam aliquam et libero.
        </p>
        <p>
          Working for early stage startups and corporations like the Financial
          Times taught me a lot about building software. I share what I've
          learned about software design & architecture through my articles,
          books and newsletter.
        </p>
      </Content>

      <h2>Articles</h2>

      <BasicCard />
      <BasicCard />
      <BasicCard />
    </Container>
  );
}
