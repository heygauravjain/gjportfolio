import { DATA } from "@/data/resume";
import { source } from "@/lib/source";

// biome-ignore lint/style/useNamingConvention: Next.js API route handler must be named GET
export async function GET() {
  const posts = source.getPages();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${DATA.name} - Blog</title>
    <description>${DATA.description}</description>
    <link>${DATA.url}</link>
    <atom:link href="${DATA.url}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${DATA.contact.email} (${DATA.name})</managingEditor>
    <webMaster>${DATA.contact.email} (${DATA.name})</webMaster>
    <ttl>60</ttl>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description || ""}]]></description>
      <link>${DATA.url}/blogs/${post.slugs.join("/")}</link>
      <guid isPermaLink="true">${DATA.url}/blogs/${post.slugs.join("/")}</guid>
      <pubDate>${new Date(post.data.date || Date.now()).toUTCString()}</pubDate>
      <author>${DATA.contact.email} (${post.data.author || DATA.name})</author>
      ${post.data.tags ? post.data.tags.map((tag) => `<category>${tag}</category>`).join("\n      ") : ""}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
