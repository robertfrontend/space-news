import Head from "next/head";
import styled from "styled-components";
import Countdown from "react-countdown";

import { server } from "../config";

import Layout from "../components/Layout";
import CardArticle from "../components/CardArticle";
import CardLaunch from "../components/CardLaunch";

export default function Home({ articles, launcher }) {
  return (
    <>
      <Head>
        <title>Space News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Content>
          <section>
            <header>
              <h3>
                Upcoming Launches <span>🚀</span>
              </h3>
            </header>

            {launcher.map((lanch, index) => (
              <div key={index}>
                <CardLaunch lanch={lanch} />
              </div>
            ))}
          </section>
          <section>
            <header>
              <h3>
                Articles <span>📄</span>
              </h3>
            </header>
            <div className="row">
              {articles.map((art, index) => (
                <div className="col-md-6" key={index}>
                  <CardArticle art={art} />
                </div>
              ))}
            </div>
          </section>
        </Content>
      </Layout>
    </>
  );
}

const Card = styled.div`
  box-shadow: 0px 5px 10px #dfe6e9;
  width: 100%;
  margin: 2em 0;
  border-radius: 12px;
  img {
    width: 220px;
    height: 250px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  h5 {
    font-weight: bold;
  }
  h6 {
    color: #6c5ce7;
    font-weight: 700;
  }
`;

const Content = styled.div`
  section {
    header {
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #dfe6e9;
      color: #6c5ce7;
      h3 {
        font-weight: bold;
      }
      span {
        font-weight: normal;
      }
    }
  }
`;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=5"
  );
  const response_launch = await fetch(`${server}/api/launch`);

  const articles = await res.json();
  const launcher = await response_launch.json();

  return {
    props: {
      articles,
      launcher,
    },
  };
};
