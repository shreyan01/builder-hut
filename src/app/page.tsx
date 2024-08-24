import Image from "next/image";
import favicon from './../../public/favicon.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex text-black text-6xl font-bold flex-col items-center justify-center">
        <p>builderhut</p>
        <p className="text-xl font-normal">building a place where people can build cool shit because I got inspired by buildspace</p>
        <Image src={favicon} alt="maintext" width={300} height={300}/>
      </div>
        <button className=" flex flex-row w-1/4 text-2xl font-bold text-white p-5 items-center justify-center bg-black rounded-2xl">join builderhut</button>
    </main>
  );
}
