import BentoCard from "./bento-card";
import { characters } from "../utils/characters";

export default function Characters() {
  const [firstCharacter, ...otherCharacters] = characters;

  return (
    <section className="bg-black pb-52" id="characters">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-tomorrow text-4xl text-blue-50">Meet the Crew</p>

          <p className="max-w-3xl font-barlow text-lg text-blue-50 opacity-50">
            In the neon-lit streets of Night City, a group of misfits and
            outcasts come together to form a crew of edgerunners. Each member
            brings their unique skills and personalities to the table, creating
            a dynamic team that navigates the dangerous world of mercenaries and
            cybernetic enhancements. From the hot-headed David Martinez to the
            enigmatic Lucy, their stories intertwine in a thrilling tale of
            loyalty, betrayal, and survival.
          </p>

          <div className={`border-hsla ${firstCharacter.gridClass}`}>
            <BentoCard
              src={firstCharacter.src}
              title={firstCharacter.title}
              description={firstCharacter.description}
            />
          </div>

          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-2">
            {otherCharacters.slice(0, 3).map((character, index) => (
              <div key={index} className={character.gridClass}>
                <BentoCard
                  src={character.src}
                  title={character.title}
                  description={character.description}
                  invert={character.invert}
                  className={character.className}
                />
              </div>
            ))}
          </div>

          <div className="grid h-[135vh] grid-cols-2 grid-rows-5 gap-2 -mt-96">
            {otherCharacters.slice(3).map((character, index) => (
              <div key={index} className={character.gridClass}>
                <BentoCard
                  src={character.src}
                  title={character.title}
                  description={character.description}
                  invert={character.invert}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
