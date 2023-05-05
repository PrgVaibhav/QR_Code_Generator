import Container from "@/components/Container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>QR Generator</title>
        <meta
          name="description"
          content="
        QR Generator is a free tool that allows you to generate QR codes for fun.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qr-code.png" />
      </Head>
      <main>
        <Container />
      </main>

      <footer>
        Build with ❤️ by{" "}
        <a
          href="https://github.com/prgVaibhav/"
          target="_blank"
          aria-label="Created by Vaibhav Kumar"
        >
          Vaibhav Kumar
        </a>{" "}
        using{" "}
        <a
          href="https://goqr.me/"
          target="_blank"
          aria-label="Created with the help of GoQR"
        >
          Go QR
        </a>
      </footer>
    </>
  );
}
