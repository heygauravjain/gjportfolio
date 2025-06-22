import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ANIMATION_CONFIG, formatDate, UI_TEXT } from "@/data/site-config";
import { source } from "@/lib/source";

export default function BlogsPage() {
  const posts = source
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-10">
          <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay}>
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {UI_TEXT.pages.blogs.title}
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {UI_TEXT.pages.blogs.description}
              </p>
            </div>
          </BlurFade>

          <div className="mx-auto w-full max-w-4xl space-y-4">
            {posts.length > 0 ? (
              posts.map((post, id) => {
                const formattedDate = formatDate(post.data.date);

                return (
                  <BlurFade
                    key={post.slugs[0]}
                    delay={ANIMATION_CONFIG.blurFadeDelay * 2 + id * 0.05}
                  >
                    <Link href={`/blogs/${post.slugs[0]}`} className="block">
                      <Card className="border-none bg-transparent">
                        <div className="flex flex-col space-y-2">
                          <time className="text-sm text-muted-foreground">
                            {formattedDate}
                          </time>

                          <div className="space-y-1">
                            <h2 className="text-xl font-semibold tracking-tight">
                              {post.data.title}
                            </h2>
                            <p className="text-muted-foreground line-clamp-2">
                              {post.data.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                    {id < posts.length - 1 && <Separator className="my-4" />}
                  </BlurFade>
                );
              })
            ) : (
              <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 2}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {UI_TEXT.pages.blogs.noPostsTitle}
                    </h3>
                    <p className="text-muted-foreground">
                      {UI_TEXT.pages.blogs.noPostsDescription}
                    </p>
                  </div>
                </div>
              </BlurFade>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
