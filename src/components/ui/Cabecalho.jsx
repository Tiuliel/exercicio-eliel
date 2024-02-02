import Link from "next/link";
import styled from "styled-components";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">Blog do @TiuLiel</Link>
        </h1>
        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #000;
  box-shadow: var(--sombra-box);

  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem 1.2rem;
    border-radius: var(--borda-arredondada);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus {
      color: var(--cor-secundaria-hover);
    }
  }

  img {
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 700px) {
    div {
      flex-direction: row;
    }
    h1 a {
      font-size: 2rem;
    }
  }
`;
