export default function About() {
  return (
    <section className="sec flex justify-center bg-stone-200">
      <div className="flex flex-col justify-center w-[70%]">
        <h1 className="font-heading text-3xl text-primarycolor mb-1">
          About Me 🐰
        </h1>
        <p className="text-lightcolor pb-4">[My Story]</p>

        <article className="text-primarycolor flex flex-col gap-2 font-content">
          <section className="text-2xl font-bold">
            I'm ,a self-taught coder and passionate Developer from Tamilnadu,
            India. From an early age, I was drawn to the world of technology and
            the limitless possibilities it presented. In college, I took it upon
            myself to learn how to code, and I quickly discovered my love for
            building things using Programming.
          </section>
          <h2 className="font-heading text-2xl text-primarycolor">
            [Tecnical]
          </h2>
          <section className="text-lg font-bold">
            As a skilled developer, I have worked extensively with JavaScript
            and Python, using these languages to bring my innovative ideas to
            life. Now, i am mainly focusing on Next.js, Tailwind Css, Cms,
            Graphql and genraly anything Html, Css and Javascript Related.
          </section>{" "}
          <h2 className="font-heading text-2xl text-primarycolor">
            [Personal]
          </h2>
          <section className="text-lg font-bold">
            Beyond my work as a developer, I am a dedicated partner and a proud
            resident Tamil Nadu, India. I take pride in my community and am
            passionate about making a positive impact on the world around me. In
            my free time, I enjoy exploring new places and trying new foods, as
            well as spending time with my loved ones. I am driven by a desire to
            inspire others to follow their dreams, and I believe that with hard
            work, dedication, and the right mindset, anything is possible.
          </section>
        </article>
      </div>
    </section>
  );
}
