import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navigation: React.FC = () => {
  const nav = [
    {
      name: "Experience",
      href: "/#experience"
    },
    {
      name: "About Me",
      href: "/#aboutme"
    },
    {
      name: "Tools",
      href: "/#tools",
    },
    {
      name: "Projects",
      href: "/#projects"
    },
    {
      name: "Hire Me",
      href: "/ResumeRheyanJohnBlanco.pdf"
    }
  ]
  return (
    <SlideTabs nav={nav} />
  );
};

interface Position {
  left: number;
  width: number;
  opacity: number;
}
interface NavItem {
  name: string;
  href: string;
}

type NavArray = NavItem[];

interface SlideTabsProps {
  nav: NavArray
}

const SlideTabs: React.FC<SlideTabsProps> = ({ nav }) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="relative mx-auto  flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {
        nav.map((n, index) => {
          return (
            <Tab key={index} href={n.href} setPosition={setPosition}>{n.name}</Tab>
          )
        })
      }


      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, href }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black hover:text-white  md:px-5 md:py-3 md:text-base"
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

interface CursorProps {
  position: Position;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Navigation;