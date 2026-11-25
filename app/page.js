import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto bg-[#f2f4f9] h-screen">
      <div className="text-white w-screen h-[50px] py-3 px-5 bg-[#0e172a]">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-medium ">🎬 PineCinema</h1>
          <Link href="/movies">Кинонууд</Link>
          <Link href="/about">Бидний Тухай</Link>
        </div>
      </div>
      <div className="text-center mt-35">
        <h1 className="text-6xl  font-semibold">🍿 PineCinema</h1>
        <p className="text-[#575c6b] text-3xl mt-3">
          Улаанбаатарын хамгийн жижиг кино театр
        </p>
        <Link
          href="/movies"
          className="border-2 rounded-[5px] w-[200px] h-[40px] font-bold hover:bg-[#ffc700] hover:border-none mt-10"
        >
          Кинонууд
        </Link>
        <Link
          href="/about"
          className="border-2 rounded-[5px] w-[200px] h-[40px] font-bold ml-[10px] hover:bg-[#ffc700] hover:border-none"
        >
          Бидний Тухай
        </Link>
      </div>
    </main>
  );
}
