import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{__html: `
        const start = Date.now()
        while (Date.now() < start + 3000) {}
        `}}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
