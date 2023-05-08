export default function Sticky() {
  return (
    <div className="h-screen w-full bg-slate-700 text-white">
      <div className="h-[90%] w-[60%] m-auto flex flex-col justify-center font-heading gap-2">
        <h3 className="text-xl">Hi 👋,I am </h3>
        <h1 className="text-6xl">
          <span className="text-blue-500">Thinesh</span> Rasla
        </h1>
        <p className="font-content text-md -tracking-wide leading-relaxed mb-6">
          As a web developer based in India, I am passionate about creating
          innovative and visually stunning websites that engage and inspire
          users. I am constantly pushing myself to learn new things and stay
          up-to-date with the latest trends and technologies in the field of web
          development. In particular, I am deeply interested in the exciting
          possibilities of AI and ML, and I am always looking for ways to
          incorporate these cutting-edge technologies into my work. Whether it's
          building responsive designs, optimizing website performance, or
          crafting intuitive user interfaces, I am committed to delivering
          high-quality results that exceed my clients' expectations..
        </p>
        <button className="bg-slate-200 p-2 rounded-md w-[200px] text-slate-500 hover:bg-slate-600 hover:text-white">
          Contact Me
        </button>
      </div>
    </div>
  );
}
