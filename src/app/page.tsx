'use client'
import Image from "next/image";
import favicon from './../../public/favicon.png';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex text-black text-6xl font-bold flex-col items-center justify-center">
        <p>builderhut</p>
        <p className="text-xl font-normal">building a place where people can build cool shit because I got inspired by buildspace</p>
        <Image src={favicon} alt="maintext" width={300} height={300}/>
      </div>
        <Link href="https://forms.gle/SNnZVLBNxK1CiTzMA" className=" flex flex-row w-1/4 text-2xl font-bold text-white p-5 items-center justify-center bg-black rounded-2xl shadow-lg backdrop-blur-lg drop-shadow-lg hover:bg-gray-800 active:shadow-none">
        <button >
        join builderhut
        </button>
        </Link>
    </main>
  );
}
