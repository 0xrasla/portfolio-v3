import Link from "next/link";
import Image from "next/image";

export default function Navebar() {
  return (
    <div className="w-screen bg-white flex justify-center">
      <nav className="w-[90%] flex fixed top-0 items-center justify-between z-20 backdrop-blur-md shadow-md p-2">
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-xl uppercase text-white font-heading tracking-[4px]"
        >
          RASSOUNIQZ
        </Link>

        <ul className="flex items-center gap-6 font-bold uppercase">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>Projects</Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>Blog</Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>Contact</Link>
          </li>
          <li>
            <div className="cursor-pointer bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Download CV
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
