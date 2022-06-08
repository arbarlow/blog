import fs from 'fs';
import path from 'path';

export const getPosts = async () => {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), 'src', 'pages', 'blog'),
    {
      withFileTypes: true
    }
  );

  return await Promise.all(
    dirFiles.map(async (f) => {
      const { meta } = await import(`../pages/blog/${f.name}`);
      const slug = f.name.replace(/.mdx$/, '');
      return { meta, slug };
    })
  );
};
