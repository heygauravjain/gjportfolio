import defaultMdxComponents from "fumadocs-ui/mdx";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlurFade from "@/components/magicui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { ANIMATION_CONFIG, formatDate, UI_TEXT } from "@/data/site-config";
import { source } from "@/lib/source";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const page = source.getPage([slug]);

  if (!page) {
    notFound();
  }

  // Generate structured data
  const blogPostSchema = generateBlogPostSchema(
    page.data.title,
    page.data.description || page.data.title,
    page.data.date.toISOString(),
    slug
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: DATA.url },
    { name: "Blogs", url: `${DATA.url}/blogs` },
    { name: page.data.title, url: `${DATA.url}/blogs/${slug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section>
          <div className="mx-auto w-full max-w-4xl space-y-6">
            <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay}>
              <Link
                href="/blogs"
                className="inline-flex mb-4 items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                {UI_TEXT.pages.blogs.backToBlogsText}
              </Link>
            </BlurFade>

            <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 2}>
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {page.data.title}
                </h1>
                {page.data.description && (
                  <p className="text-muted-foreground text-lg">
                    {page.data.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  {page.data.author && (
                    <span>
                      {UI_TEXT.pages.blogs.byText} {page.data.author}
                    </span>
                  )}
                  {page.data.date && <span>{formatDate(page.data.date)}</span>}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 2.5}>
              <Separator className="mt-8" />
            </BlurFade>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full max-w-4xl mb-12">
            <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 3}>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <page.data.body components={defaultMdxComponents} />
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const page = source.getPage([slug]);

  if (!page) {
    return {};
  }

  const keywords = page.data.tags
    ? page.data.tags.join(", ")
    : "blog, programming, software engineering";

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: keywords,
    authors: page.data.author ? [{ name: page.data.author }] : undefined,
    category: "Technology",
    alternates: {
      canonical: `${DATA.url}/blogs/${slug}`,
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      publishedTime: page.data.date,
      authors: page.data.author ? [page.data.author] : undefined,
      url: `${DATA.url}/blogs/${slug}`,
      siteName: `${DATA.name} Blog`,
      images: [
        {
          url: `${DATA.url}${DATA.avatarUrl}`,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [`${DATA.url}${DATA.avatarUrl}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
