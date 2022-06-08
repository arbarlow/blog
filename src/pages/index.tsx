import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getPosts } from '../lib/getPosts';

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};

export const Index = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold sm:pt-20">
        Programmer, mostly using Go, TS, Rust & Neovim. <br />
        Creator of <a href="https://github.com/lileio/lile">Lile</a> and lover
        of Coffee, Cycling, and Dogs.
      </h2>
      <h4 className="mt-12">Blog Posts</h4>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <p>
              <Link href={`/blog/${p.slug}`} passHref>
                <a>
                  {p.meta.title} -{' '}
                  <span className="text-slate-400">
                    {new Date(p.meta.date).toLocaleString()}
                  </span>
                </a>
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
