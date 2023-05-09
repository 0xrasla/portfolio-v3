import Contact from "./contact/page";
import About from "./about/page";
import Skills from "./skills/page";
import Sticky from "@/components/Sticky";
import Image from "next/image";
import Experience from "./experience/page";

export default function Home() {
  return (
    <main className="flex w-full bg-gunmetal">
      <div className="w-[50%] fixed">
        <Sticky />
      </div>
      <article className="ml-[49%] w-[50%]">
        <section className="sec flex justify-center items-center bg-brightprimary">
          <Image
            src="/assets/images/me.png"
            alt="Thinesh Rasla"
            fill={true}
            className="object-cover"
          />
        </section>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </article>
    </main>
  );
}
