"use client";

export default function Contact() {
  return (
    <section className="sec flex flex-col justify-center items-center bg-stone-300">
      <h1 className="text-2xl font-bold text-center font-heading text-primarycolor mb-4">
        Send me a Hello 👋
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-[50%]"
      >
        <div className="form-group mb-6">
          <input type="text" className="form-input" placeholder="Your name " />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-input"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
              form-control
              border-2 border-primarycolor
              block
              w-full
              px-3
              py-1.5
              text-content
              font-content
              text-gray-700
              bg-white bg-clip-padding
              rounded-md
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-primarycolor focus:outline-none
            "
            rows={3}
            placeholder="Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="
            w-[30%]
            px-6
            py-2.5
            bg-backgroundcolor
            text-white
            font-content
            font-bold
            text-xs
            leading-tight
            uppercase
            border-2
            rounded
            shadow-md
            hover:bg-transparent hover:shadow-lg hover:border-primarycolor hover:text-primarycolor
            transition
            duration-150
            ease-in-out"
        >
          Send
        </button>
      </form>
    </section>
  );
}
