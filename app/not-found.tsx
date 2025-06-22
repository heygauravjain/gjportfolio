import { Frown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ANIMATION_CONFIG, UI_TEXT } from "@/data/site-config";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen -my-12 sm:-my-24">
      <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay}>
        <div className="text-center space-y-6">
          <Frown className="h-20 w-20 text-muted-foreground mx-auto" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {UI_TEXT.pages.notFound.title}
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-md mx-auto">
            {UI_TEXT.pages.notFound.description}
          </p>
        </div>
      </BlurFade>
    </main>
  );
}
