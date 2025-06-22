import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SkillBadge } from "@/components/skill-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import {
  ANIMATION_CONFIG,
  formatGreeting,
  formatWorkPeriod,
  UI_TEXT,
} from "@/data/site-config";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="hero" aria-labelledby="hero-heading">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:gap-2">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={ANIMATION_CONFIG.blurFadeDelay}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={formatGreeting(DATA.name.split(" ")[0])}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={ANIMATION_CONFIG.blurFadeDelay}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay}>
              <Avatar className="size-24 sm:size-28 md:size-36 border mx-auto sm:mx-0">
                <AvatarImage
                  alt={`${DATA.name} - ${DATA.work[0].title}`}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="about">
        <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 3}>
          <h2 className="text-xl font-bold">
            {UI_TEXT.pages.home.sections.about}
          </h2>
        </BlurFade>
        <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 5}>
            <h2 className="text-xl font-bold">
              {UI_TEXT.pages.home.sections.work}
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={ANIMATION_CONFIG.blurFadeDelay * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={formatWorkPeriod(work.start, work.end)}
                highlights={work.highlights}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 7}>
            <h2 className="text-xl font-bold">
              {UI_TEXT.pages.home.sections.education}
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={ANIMATION_CONFIG.blurFadeDelay * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 9}>
            <h2 className="text-xl font-bold">
              {UI_TEXT.pages.home.sections.skills}
            </h2>
          </BlurFade>
          <div className="space-y-3 md:space-y-2">
            {DATA.skills.map((skillCategory, categoryId) => (
              <BlurFade
                key={skillCategory.category}
                delay={ANIMATION_CONFIG.blurFadeDelay * 10 + categoryId * 0.1}
              >
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {skillCategory.items.map((skill, skillId) => (
                      <BlurFade
                        key={skill.title}
                        delay={
                          ANIMATION_CONFIG.blurFadeDelay * 11 +
                          categoryId * 0.1 +
                          skillId * 0.02
                        }
                      >
                        <SkillBadge title={skill.title} icon={skill.icon} />
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {UI_TEXT.pages.home.projects.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {UI_TEXT.pages.home.projects.title}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {UI_TEXT.pages.home.projects.description}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={ANIMATION_CONFIG.blurFadeDelay * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  status={project.status}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* biome-ignore lint/nursery/useUniqueElementIds: Navigation section requires static ID */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={ANIMATION_CONFIG.blurFadeDelay * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {UI_TEXT.pages.home.contact.badge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {UI_TEXT.pages.home.contact.title}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {UI_TEXT.pages.home.contact.description}{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  {UI_TEXT.pages.home.contact.twitterLinkText}
                </Link>{" "}
                {UI_TEXT.pages.home.contact.ignoreSoliciting}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
