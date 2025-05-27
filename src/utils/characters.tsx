import type { ReactNode } from "react";

export interface Character {
  id: number;
  src: string;
  title: ReactNode;
  description: string;
  invert?: boolean;
  className?: string;
  gridClass?: string;
}

export const characters: Character[] = [
  {
    id: 0,
    src: "/images/characters/david-martinez.png",
    title: (
      <>
        <b>D</b>avid <b>M</b>artinez
      </>
    ),
    description:
      "David Martinez, a scrappy, hot-headed teen from Night City's rough Santo Domingo district, is fiercely loyal and driven to escape poverty. After a tragedy and gaining a military-grade Sandevistan implant for superhuman speed, he becomes an edgerunner, diving into the perilous world of Night City's mercenary underworld.",
    gridClass: "relative my-2 lg:my-7 h-96 w-full overflow-hidden md:h-[65vh]",
  },
  {
    id: 1,
    src: "/images/characters/lucy.png",
    title: (
      <>
        <b>L</b>ucy
      </>
    ),
    description:
      "Lucy, a skilled netrunner with a mysterious past, is a key member of David's crew. She possesses exceptional hacking abilities and a deep desire to escape the confines of Night City. Her relationship with David evolves as they navigate the dangers of their world together.",
    invert: true,
    className: "!w-full !left-0",
    gridClass: "row-span-1 md:col-span-1 md:row-span-2 border-hsla",
  },
  {
    id: 2,
    src: "/images/characters/rebecca.png",
    title: (
      <>
        <b>R</b>ebecca
      </>
    ),
    description:
      "Rebecca, a fierce and unpredictable member of David's crew, is known for her combat skills and loyalty. She has a playful yet dangerous personality, often using her dual pistols with deadly precision. Her bond with David deepens as they face the challenges of their dangerous lifestyle.",
    gridClass: "row-span-1 md:col-span-1 border-hsla",
  },
  {
    id: 3,
    src: "/images/characters/pilar.png",
    title: (
      <>
        <b>P</b>ilar
      </>
    ),
    description:
      "Pilar, a member of David's crew, is known for his loyalty and dedication to the team. He often serves as a support character, providing assistance during missions and helping to keep the crew together. Pilar's character embodies the themes of friendship and camaraderie that run throughout the story.",
    gridClass: "row-span-1 md:col-span-1 border-hsla",
  },
  {
    id: 4,
    src: "/images/characters/maine.png",
    title: (
      <>
        <b>M</b>aine
      </>
    ),
    invert: true,
    description:
      "Maine, the leader of David's crew, is a seasoned edgerunner with a strong sense of loyalty and responsibility. He is known for his combat prowess and protective nature towards his team. Maine's character embodies the struggles of survival in Night City while trying to keep his crew safe.",
    gridClass: "bento-tilt_2 row-span-2 md:col-span-1 border-hsla",
  },
  {
    id: 5,
    src: "/images/characters/dorio.png",
    title: (
      <>
        <b>D</b>orio
      </>
    ),
    description:
      "Dorio, a skilled and enigmatic member of David's crew, is known for her combat abilities and strategic mind. She often serves as a mentor to the younger members of the team, guiding them through the dangers of their lifestyle. Her loyalty to Maine and the crew is unwavering.",
    gridClass: "bento-tilt_2 row-span-1 md:col-span-1 border-hsla",
  },
  {
    id: 6,
    src: "/images/characters/kiwi.png",
    title: (
      <>
        <b>K</b>iwi
      </>
    ),
    description:
      "Kiwi, a skilled netrunner and hacker, is a member of David's crew with a mysterious background. She is known for her intelligence and resourcefulness, often using her skills to navigate the digital landscape of Night City. Kiwi's character adds depth to the crew's dynamics as they face various challenges together.",
    invert: false,
    gridClass:
      "bento-tilt_2 row-span-1 md:col-span-1 md:row-span-2 border-hsla",
  },
  {
    id: 7,
    src: "/images/characters/falco.png",
    title: (
      <>
        <b>F</b>alco
      </>
    ),
    description:
      "Falco, a skilled driver and mechanic, is a crucial member of David's crew. He is known for his expertise in vehicles and technology, often providing support during missions. Falco's character adds a layer of practicality to the team, ensuring they have the tools they need to survive in Night City's dangerous environment.",
    gridClass:
      "bento-tilt_2 row-span-1 md:col-span-1 md:row-span-2 border-hsla",
  },
];
