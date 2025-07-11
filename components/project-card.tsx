import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UI_TEXT } from "@/data/site-config";
import { cn } from "@/lib/utils";
import type { ProjectLink } from "@/types";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  status?: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly ProjectLink[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  status,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border bg-transparent h-full relative">
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <link.icon className="size-3" />
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>

      {status && (
        <Badge
          variant={status === UI_TEXT.common.active ? "default" : "secondary"}
          className={`absolute bottom-2 right-2 px-1 py-0 text-[10px] ${status === UI_TEXT.common.active ? "bg-green-500 hover:bg-green-600" : ""}`}
        >
          {status === UI_TEXT.common.active
            ? UI_TEXT.common.active
            : UI_TEXT.common.inactive}
        </Badge>
      )}
    </Card>
  );
}
