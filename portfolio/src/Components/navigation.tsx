import React, { useRef, useState } from "react";
import { m, motion } from "framer-motion";

const Navigation: React.FC = () => {
    const nav = [
        {
            name: "About Me",
        },
        {
            name: "Experience",
        },
        {
            name: "Tools"
        },
        {
            name: "Projects"
        }, 
        {
            name: "Hire Me"
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
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
    {
        nav.map((n, index)=> {
            return(
                <Tab key={index} setPosition={setPosition}>{n.name}</Tab>
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
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
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