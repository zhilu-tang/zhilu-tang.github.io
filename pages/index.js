import Head from "next/head";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import CardLayout from "../components/CardLayout.js";

import { getAllPostsMetadata } from "../lib/get-all-posts-data.js";
import { getAllTagsArray } from '../lib/get-all-tags'


const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const header_background = c4,
  greetings_heading = c6,
  greetings_statement = c6,
  quote_color = c5;

const home_page_url = "https://zhilu-tang.github.io/";
const description =
  "I'm Zhilu Tang, a voyager on mission exploring digital universe to understand how it works.";

export default function Home({ postsMetaData, tags = [] }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Zhilu Tang" />
        <meta name="keywords" content={"Blog,Tutorial,Java,Javascript"} />

        <meta
          property="og:title"
          content={"Zhilu Tang"}
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={home_page_url} key="ogurl" />
        <meta
          property="og:image"
          content={home_page_url + "images/Zhilu Tang logo.png"}
          key="ogimage"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:article:publisher"
          content={home_page_url}
          key="ogaritclepublisher"
        />
        <meta
          property="og:site_name"
          content={"Zhilu Tang"}
          key="ogsitename"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={"Zhilu Tang"} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={home_page_url} />
        <meta name="twitter:site" content="@santhalakshminarayana" />
        <meta
          name="twitter:image"
          content={home_page_url + "images/Zhilu Tang logo.png"}
        />
        <meta name="twitter:creator" content="@santhalakshminarayana" />

        <link rel="icon" href="/images/zhilu-tang-logo.png?" />
        <link rel="canonical" href="https://zhilu-tang.github.io/" />
        <meta 
          name="google-site-verification" 
          content="OM2XxzZggsJsi_pWFwcLlvOsyx9cDjpImwe8dsyfDTs" 
        />
        {/* <meta
          name="google-site-verification"
          content="3p5W6wHr-TDhnkyuewv0nYJd2S9OuTQlj5__OUyLLcU"
        /> */}
        <script 
          async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9497000770523459"
          crossOrigin="anonymous">
        </script>

        <title>{"Zhilu Tang"}</title>
      </Head>

      <div>
        <Header tags={tags} />

        <div className="header-info">
          <div className="greetings">
            <p className="greetings-heading">
              Greetings, Programs! in the Matrix called Earth.
            </p>
            <p className="greetings-statement">
              I'm Zhilu Tang, a voyager on a mission to explore the
              digital universe.
            </p>
          </div>
        </div>

        <div className="posts-display-container">
          <p className="quote">All Posts</p>
        </div>
        <CardLayout postsMetaData={postsMetaData} />

        <Footer
          bg_color={c4 + "f2"}
          normal_color={c2}
          icon_size={"calc(1rem + 1vw)"}
          horizontal_margin={"1vw"}
          horizontal_padding={"5vw"}
          vertical_padding={"1vw"}
          github={true}
          linkedin={true}
          medium={false}
          kaggle={false}
          need_copy_right={true}
        />
      </div>

      <style jsx>{`
        .header-info {
          background: ${header_background};
        }

        .greetings {
          padding: 2vw 10vw 2vw 10vw;
        }

        .greetings-heading {
          font-family: "Ubuntu", sans-serif;
          font-size: 2em;
          text-align: center;
          color: ${greetings_heading};
        }

        .greetings-statement {
          font-family: "Ubuntu", sans-serif;
          font-size: 1.5em;
          padding-top: 1vh;
          text-align: center;
          color: ${greetings_statement};
        }

        .greetings-tags {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          padding: 1vw 5vw 1vw 5vw;
        }

        .posts-display-container {
          padding: 1vh 10vw 1vh 10vw;
        }

        .quote {
          color: ${quote_color};
          font-family: "Ubuntu", sans-serif;
          font-size: calc(2rem + 0.5vw);
        }

        @media screen and (max-width: 920px) {
          .greetings-heading {
            font-size: 20px;
          }

          .greetings-statement {
            font-size: 18px;
          }

          .greetings-tags {
            display: none;
          }

          .posts-display-container {
            padding: 1vh 5vw 1vh 5vh;
          }
        }

        @media screen and (max-width: 480px) {
          .greetings-heading {
            font-size: 18px;
          }

          .greetings-statement {
            font-size: 16px;
          }

          .greetings-tags {
            display: none;
          }

          .posts-display-container {
            padding: 1vh 5vw 1vh 5vh;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const postsMetaData = getAllPostsMetadata();
  const tags = getAllTagsArray();
  return {
    props: {
      postsMetaData,
      tags,
    },
  };
}
