import type { ComponentType, SVGProps } from "react";
import { Sparkles } from "lucide-react";
import {
  SiCursor,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";
import type { SkillIcon } from "@/data/site";

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string; color?: string; title?: string }
>;

const map: Record<SkillIcon, IconComponent> = {
  laravel: SiLaravel,
  nextdotjs: SiNextdotjs,
  react: SiReact,
  vuedotjs: SiVuedotjs,
  nodedotjs: SiNodedotjs,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  docker: SiDocker,
  googlecloud: SiGooglecloud,
  firebase: SiFirebase,
  github: SiGithub,
  linux: SiLinux,
  vercel: SiVercel,
  supabase: SiSupabase,
  openai: Sparkles as unknown as IconComponent,
  cursor: SiCursor,
  git: SiGit,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
};

export function getSkillIcon(key: SkillIcon): IconComponent {
  return map[key];
}
