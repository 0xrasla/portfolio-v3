export default function Experience() {
  return (
    <section className="sec flex justify-center items-center  bg-stone-300">
      <ol className="border-l-2 border-neutral-300 dark:border-neutral-500 p-4 flex flex-col gap-6 w-[70%]">
        <h1 className="font-heading text-4xl text-primarycolor">
          Experience 💪
        </h1>
        <li className="font-content font-semibold text-primarycolor">
          <div className="flex items-center">
            <div className="-ml-[22px] h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <h3 className="text-2xl ml-[15px]">
              Software Developer at Jtech World
            </h3>
          </div>
          <h5>[July 2022 - Present]</h5>
          <ul className="pt-2">
            <li>
              ✨ Utilized the latest Software Development tools and
              technologies.
            </li>
            <li>
              ✨ Worked on various projects and Developers around the world.
            </li>
            <li>
              ✨ Tech Used :{" "}
              <span className="text-lg">
                React, NextJs, Node, Typescript, Tailwind, Mongodb, AWS, Graphql
              </span>
            </li>
          </ul>
        </li>

        <li className="mt-4 font-content font-semibold text-primarycolor">
          <div className="flex items-center">
            <div className="-ml-[22px] h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <h3 className="text-2xl ml-[15px]">
              Full Stack Developer at Theecode Technologies, Chennai
            </h3>
          </div>
          <h5>[Oct 2021 - December 2021]</h5>
          <ul className="pt-2">
            <li>
              ✨ Effectively multi-tasked and worked well with internal and
              external teams.
            </li>
            <li>
              ✨ Tech Used :{" "}
              <span className="text-lg">
                Angular, NestJS, PostgreSQL, Git, Heroku
              </span>
            </li>
          </ul>
        </li>

        <li className="mt-4 font-content font-semibold text-primarycolor">
          <div className="flex items-center">
            <div className="-ml-[22px] h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <h3 className="text-2xl ml-[15px]">
              Web Developer Intern at Virtualmaze, Chennai
            </h3>
          </div>

          <h5>[Nov 2020 - April 2021]</h5>
          <ul className="pt-2">
            <li>
              ✨ Served as a dedicated and supportive web developer Intern in a
              fast-pased environment.
            </li>
            <li>
              ✨ Tech Used :{" "}
              <span className="text-lg">
                Python, Flask, Django, React, Javascript
              </span>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
}
