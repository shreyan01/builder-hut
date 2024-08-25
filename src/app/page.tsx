'use client';
import Image from "next/image";
import favicon from './../../public/favicon.png';
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO Optimizations */}
        <title>BuilderHut - Build Cool Stuff with Us</title>
        <meta name="description" content="BuilderHut is a community-driven platform where creators come together to build innovative projects. Join us and turn your ideas into reality!" />
        <meta name="keywords" content="BuilderHut, build projects, community for creators, buildspace inspired" />
        <meta name="author" content="BuilderHut" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="BuilderHut - Build Cool Stuff with Us" />
        <meta property="og:description" content="BuilderHut is a community-driven platform where creators come together to build innovative projects. Join us and turn your ideas into reality!" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://builderhut.club" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-gray-800 to-gray-900 p-6 overflow-hidden">
        <div className="text-center space-y-4 animate-fade-in-up">
          {/* Floating Particles Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute w-72 h-72 bg-gray-600 rounded-full blur-3xl opacity-30 top-10 left-10 transform animate-pulse-fast"></div>
              <div className="absolute w-64 h-64 bg-gray-700 rounded-full blur-3xl opacity-30 bottom-10 right-10 transform animate-pulse-slow"></div>
              <div className="absolute w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-30 bottom-32 left-1/2 transform -translate-x-1/2 animate-pulse-medium"></div>
            </div>
          </div>

          {/* Logo Animation */}
          <div className="animate-spin-slow">
            <Image 
              src={favicon} 
              alt="BuilderHut Logo" 
              width={200} 
              height={200} 
              className="rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-500 grayscale"
            />
          </div>

          {/* Main Title with Typing Animation */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg animate-pulse">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              builderhut
            </span>
          </h1>

          {/* Subtitle with Fade-in Animation */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium opacity-0 animate-fade-in-up">
            Building a place where people can build cool shit because I got inspired by Buildspace.
          </p>
        </div>

        {/* Join Button with Hover Effects and Bounce Animation */}
        <Link href="https://forms.gle/SNnZVLBNxK1CiTzMA">
          <button className="mt-10 text-2xl font-semibold text-white bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 animate-bounce-slow">
            join builderhut
          </button>
        </Link>

        {/* Floating Shapes for Extra Flair */}
        <div className="absolute top-1/3 left-10 w-12 h-12 bg-gray-500 rounded-full shadow-lg animate-float hover:animate-none hover:bg-gray-400"></div>
        <div className="absolute bottom-1/4 right-14 w-16 h-16 bg-gray-600 rounded-full shadow-lg animate-float-slow hover:animate-none hover:bg-gray-500"></div>
        <div className="absolute top-1/4 right-20 w-20 h-20 bg-gray-700 rounded-full shadow-lg animate-float-fast hover:animate-none hover:bg-gray-600"></div>
      </main>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-fast {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-medium {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(360deg);
          }
          100% {
            transform: translateY(0) rotate(720deg);
          }
        }

        @keyframes float-slow {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(360deg);
          }
          100% {
            transform: translateY(0) rotate(720deg);
          }
        }

        @keyframes float-fast {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(360deg);
          }
          100% {
            transform: translateY(0) rotate(720deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 2s ease-in-out forwards;
        }

        .animate-pulse-fast {
          animation: pulse-fast 2s infinite alternate;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s infinite alternate;
        }

        .animate-pulse-medium {
          animation: pulse-medium 3s infinite alternate;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
