import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import Layout from '../components/Layout';
import '../styles/nord.css';
import '../styles/globals.css';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
