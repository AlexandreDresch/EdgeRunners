import BentoCard from "./bento-card";

export default function Characters() {
  return (
    <section className="bg-black pb-52">
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

          <div className="border-hsla relative my-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src="/images/characters/david-martinez.png"
              title={
                <>
                  <b>D</b>avid <b>M</b>artinez
                </>
              }
              description="David Martinez, a scrappy, hot-headed teen from Night City's rough Santo Domingo district, is fiercely loyal and driven to escape poverty. After a tragedy and gaining a military-grade Sandevistan implant for superhuman speed, he becomes an edgerunner, diving into the perilous world of Night City's mercenary underworld."
            />
          </div>

          <div className="grid h-[135vh] grid-cols-2 grid-rows-3">
            <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 border-hsla">
              <BentoCard
                src="/images/characters/lucy.png"
                title={
                  <>
                    <b>L</b>ucy
                  </>
                }
                className="w-full !left-0"
                invert
                description="Lucy, a skilled netrunner with a mysterious past, is a key member of David's crew. She possesses exceptional hacking abilities and a deep desire to escape the confines of Night City. Her relationship with David evolves as they navigate the dangers of their world together."
              />
            </div>

            <div className="bento-tilt_1 row-span-1 md:col-span-1  border-hsla">
              <BentoCard
                src="/images/characters/rebecca.png"
                title={
                  <>
                    <b>R</b>ebecca
                  </>
                }
                description="Rebecca, a fierce and unpredictable member of David's crew, is known for her combat skills and loyalty. She has a playful yet dangerous personality, often using her dual pistols with deadly precision. Her bond with David deepens as they face the challenges of their dangerous lifestyle."
              />
            </div>

            <div className="bento-tilt_1 row-span-1 md:col-span-1  border-hsla">
              <BentoCard
                src="/images/characters/maine.png"
                title={
                  <>
                    <b>M</b>aine
                  </>
                }
                description="Maine, the leader of David's crew, is a seasoned edgerunner with a strong sense of loyalty and responsibility. He is known for his combat prowess and protective nature towards his team. Maine's character embodies the struggles of survival in Night City while trying to keep his crew safe."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
