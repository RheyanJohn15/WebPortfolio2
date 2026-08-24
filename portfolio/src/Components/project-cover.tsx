import Image from "next/image";
import { cn } from "@/lib/utils";

const GRADIENT_VARS = ["--chart-1", "--chart-2", "--chart-4"] as const;
const GRADIENT_POSITIONS = ["30% 20%", "75% 30%", "50% 80%"] as const;

function hashIndex(id: string, length: number) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  return hash % length;
}

function gradientStyle(id: string) {
  const variable = GRADIENT_VARS[hashIndex(id, GRADIENT_VARS.length)];
  const position = GRADIENT_POSITIONS[hashIndex(id + "-pos", GRADIENT_POSITIONS.length)];
  return {
    backgroundImage: `radial-gradient(circle at ${position}, hsl(var(${variable}) / 0.32), transparent 65%), linear-gradient(160deg, hsl(var(--card)), hsl(var(--background)))`,
  };
}

type ProjectCoverProps = {
  id: string;
  title: string;
  image?: string;
  logo?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectCover({
  id,
  title,
  image,
  logo,
  className,
  priority,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: ProjectCoverProps) {
  return (
    <div
      className={cn(
        "group relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-card",
        className
      )}
    >
      {image ? (
        <>
          <div className="relative z-10 flex h-7 items-center gap-1.5 border-b border-border bg-secondary/70 px-3">
            <span className="h-2 w-2 rounded-full bg-destructive/50" />
            <span className="h-2 w-2 rounded-full bg-accent/50" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          </div>
          <div className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes={sizes}
              priority={priority}
            />
          </div>
          {logo && (
            <div className="absolute bottom-2.5 left-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/85 p-1.5 backdrop-blur-sm">
              <Image
                src={logo}
                alt=""
                width={20}
                height={20}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </>
      ) : (
        <div
          className="bg-noise flex h-full w-full items-center justify-center"
          style={gradientStyle(id)}
        >
          {logo ? (
            <Image
              src={logo}
              alt={`${title} logo`}
              width={176}
              height={56}
              className="h-12 w-36 object-contain sm:h-14 sm:w-44"
            />
          ) : (
            <span className="mono-label">{title}</span>
          )}
        </div>
      )}
    </div>
  );
}
