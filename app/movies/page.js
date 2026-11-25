import Link from "next/link";
export default function Home() {
  return (
    <main className="mx-auto bg-[#f2f4f9] h-screen">
      <div className="text-white w-screen h-[50px] py-3 px-5 bg-[#0e172a]">
        <div className="flex gap-5 items-center">
          <Link href="./" className="text-xl font-medium ">
            🎬 PineCinema
          </Link>
          <Link href="/movies">Кинонууд</Link>
          <Link href="/about">Бидний Тухай</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 px-25 py-20">
        <div className="w-[1500px]">
          <h1 className="text-3xl font-semibold">Өнөөдрийн Кинонууд</h1>
        </div>
        <div className="flex gap-4 w-[1500px] h-[500px]">
          <div className="flex flex-col gap-4">
            <Link
              href="/ticket"
              className="w-[700px] h-[230px] bg-white rounded-[10px] p-7 flex flex-col gap-3"
            >
              <h1 className="text-6xl">🚀 </h1>
              <h1 className="text-4xl font-bold">Сансрын аялал</h1>
              <p className="text-[#9fa3aa] text-2xl">🕑 14:00</p>
            </Link>
            <Link
              href="/ticket"
              className="w-[700px] h-[230px] bg-white rounded-[10px] p-7 flex flex-col gap-3"
            >
              <h1 className="text-6xl">🌲</h1>
              <h1 className="text-4xl font-bold">Ойн нууц</h1>
              <p className="text-[#9fa3aa] text-2xl">🕑 16:30</p>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/ticket"
              className="w-[700px] h-[230px] bg-white rounded-[10px] p-7 flex flex-col gap-3"
            >
              <h1 className="text-6xl">🌊</h1>
              <h1 className="text-4xl font-bold">Далайн баатар</h1>
              <p className="text-[#9fa3aa] text-2xl">🕑 18:00</p>
            </Link>
            <Link
              href="/ticket"
              className="w-[700px] h-[230px] bg-white rounded-[10px] p-7 flex flex-col gap-3"
            >
              <h1 className="text-6xl">🐉</h1>
              <h1 className="text-4xl font-bold">Луу бид хоёр</h1>
              <p className="text-[#9fa3aa] text-2xl">🕑 20:15</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
