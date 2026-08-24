import { skillGroups } from "@/data/site";
import { getSkillIcon } from "@/lib/icons";

const items = skillGroups.flatMap((group) => group.items);

export function TechMarquee() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-border bg-noise py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10">
        {[...items, ...items].map((item, index) => {
          const Icon = getSkillIcon(item.icon);
          return (
            <span
              key={`${item.name}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-muted-foreground"
            >
              <Icon size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.14em]">
                {item.name}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
