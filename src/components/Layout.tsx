import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="p-8">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-semibold no-underline text-xl">
              <h1>Alex Barlow</h1>
            </a>
          </Link>
        </div>
      </nav>
      <div className="mt-12 sm:flex flex-col items-center">
        <div className="prose lg:prose-xl">{children}</div>
      </div>
    </div>
  );
}
