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
      <div>
        <div className="flex justify-center w-full h-full my-50">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Бидний тухай</h1>
            <p className="text-xl">
              📍 Хаяг: Сүхбаатар дүүрэгь Pinecone-ийн 3 давхар
            </p>
            <p className="text-xl">🕑 Цагийн хуваарь: Өдөр бүр 10:00 - 22:00</p>
            <p className="text-xl">☎️ Утас: 7700-0000</p>
            <Link href="./" className="text-blue-800">
              ← Нүүр хуудас руу буцах
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
