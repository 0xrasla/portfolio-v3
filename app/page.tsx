import Contact from "./contact/page";
import About from "./about/page";
import Projects from "./projects/page";
import Sticky from "@/components/Sticky";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full overflow-x-hidden">
      <div className="w-[50%] fixed">
        <Sticky />
      </div>
      <div
        className="ml-[49%] w-[50%]"
        style={{
          overflowX: "hidden",
        }}
      >
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
