import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  return json(allPosts);
};

const fetchMarkdownPosts = async () => {
  const articleFiles = import.meta.glob('/src/routes/team/*.md');
  const pageFiles = import.meta.glob('/src/routes/pages/*.md');
  const gameFiles = import.meta.glob('/src/routes/games/*.md');

  // returns an array of files
  const iterableArticleFiles = Object.entries(articleFiles);
  const iterablePageFiles = Object.entries(pageFiles);
  const iterableGameFiles = Object.entries(gameFiles);

  const team = await Promise.all(
    iterableArticleFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(17, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );

  const pages = await Promise.all(
    iterablePageFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(18, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );

  const games = await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(18, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );


  return { pages, team, games };
};