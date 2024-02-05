import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ dados }) {
  const teste = dados;
  return (
    <>
      <Head>
        <title>Blog do @TiuLiel</title>
        <meta name="description" content="Web App blog criado com Next.js" />
        <meta name="keywords" content="noticia para todo tipo de gente" />
      </Head>
      <StyledHome>
        <h1>Notícias recentes</h1>
        {teste.map((noticia) => (
          <div key={noticia.id}>
            <p>{noticia.title}</p>
          </div>
        ))}
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
