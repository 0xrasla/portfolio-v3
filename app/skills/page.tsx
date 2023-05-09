export default function Skills() {
  return (
    <section className="sec flex flex-col justify-center items-center bg-stone-200">
      <div className="content w-[70%]">
        <div>
          <h1 className="font-heading text-4xl text-primarycolor">Skills</h1>
          <h3 className="text-primarycolor">[Development Arsenal]</h3>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-8 w-[70%]">
          <div className="skill p-4">
            <h1 className="font-heading text-xl text-primarycolor mb-4">
              Frontend Developement
            </h1>

            <ul className="font-content font-bold text-sm">
              <li>React JS</li>
              <li>Next JS</li>
              <li>Tailwind CSS</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>

          <div className="skill p-4">
            <h1 className="font-heading text-xl text-primarycolor mb-4">
              Backend Developement
            </h1>

            <ul className="font-content font-bold text-sm">
              <li>Node JS</li>
              <li>Express JS</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>Javascript</li>
              <li>Postgres</li>
            </ul>
          </div>

          <div className="skill p-4">
            <h1 className="font-heading text-xl text-primarycolor mb-4">
              Game Developement
            </h1>

            <ul className="font-content font-bold text-sm">
              <li>Unity</li>
              <li>C#</li>
              <li>Python</li>
              <li>Animation</li>
              <li>Blender</li>
            </ul>
          </div>

          <div className="skill p-4">
            <h1 className="font-heading text-xl text-primarycolor mb-4">
              Media / Tools
            </h1>

            <ul className="font-content font-bold text-sm">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe XD</li>
              <li>Adobe Primere Pro</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
