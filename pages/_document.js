import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        class="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800
        dark:to-gray-900 text-gray-900 dark:text-gray-200 "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
