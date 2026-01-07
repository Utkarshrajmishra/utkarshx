import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["content:encoded"],
  },
});

export async function fetchMediumPosts() {
  const feed = await parser.parseURL(
    "https://utkarshrajmishra.medium.com/feed"
  );

  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.contentSnippet,
    tags: item.categories ?? [],
    thumbnail: extractImage(item["content:encoded"]),
  }));
}

function extractImage(content?: string) {
  if (!content) return null;
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}
