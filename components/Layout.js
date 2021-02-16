import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Layout({ children, meta: pageMeta }) {
  const [theme, setTheme] = useState('okaidia');
  const meta = {
    title: 'Alex Barlow',
    description:
      "I'm Alex Barlow, a programmer based in UK. Creator of Lile and other things.",
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
          rel="stylesheet"
        />
      </Head>
      <nav>
        <div className="flex justify-between items-center p-8 mx-2">
          <Link href="/">
            <a className="invisible font-semibold no-underline sm:visible">
              <h1>Home</h1>
            </a>
          </Link>
          <ul className="flex items-center justify-between space-x-4">
            <li>
              <div className="relative inline-block w-32">
                <select
                  onChange={(e) => setTheme(e.target.value)}
                  value={theme}
                  className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
                >
                  <option value="okaidia">Okaidia</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="coy">Coy</option>
                  <option value="funky">Funky</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div id="skip">
        <article
          className="max-w-3xl px-8 m-auto my-4 prose"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </>
  );
}
