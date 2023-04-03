import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import db from '../lib/db'
// import { useEffect } from "react";

export default function Home({ posts }) {
  console.log({ posts });

  // const createNewPost = async () => {
  //   await db.post.create({
  //     data: {
  //       title: "Ini adalah post selanjutnya",
  //       content: "Ini adalah content post selanjutnya",
  //       published: false,
  //       authorId: "clfi7muxx000008kye7q293q0",
  //     },
  //   });
  // };

  // useEffect(() => {
  //   createNewPost();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = await db.post.findMany()
  
  await db.post.create({
    data: {
      title: "Ini adalah post selanjutnya",
      content: "Ini adalah content post selanjutnya",
      published: false,
      authorId: "clfi7muxx000008kye7q293q0",
    },
  });

  console.log(posts);

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}









