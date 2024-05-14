import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title: "My Page Title",
};
export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <script
          src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"
          async
        ></script>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
