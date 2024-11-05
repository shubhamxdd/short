import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-bold">Best URL shortner</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
            est.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-800 duration-200">
              <Link href="/short">Try now</Link>
            </button>
            <button className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-800 duration-200">
              <Link href="/github">Github</Link>
            </button>
          </div>
        </div>
        <div className="relative justify-start">
          <Image alt="image hai" src={"/off.png"} fill />
        </div>
      </section>
    </main>
  );
}
