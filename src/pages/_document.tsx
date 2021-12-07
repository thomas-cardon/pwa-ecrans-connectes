import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='fr'>
        <Head />
        <body className="text-gray-800 dark:text-white dark:bg-purple-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
