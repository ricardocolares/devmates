import styled from "styled-components";

export default function Home() {
  const Title = styled.h1`
    color: #f54;
  `;

  return (
    <div className="container">
      <Title>Home</Title>
    </div>
  );
}
