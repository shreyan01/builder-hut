'use client';
import Image from "next/image";
import favicon from './../../public/favicon.png';
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BuilderHut - Create Your Portfolio in Minutes</title>
        <meta
          name="description"
          content="Create and deploy your professional portfolio website instantly. Choose from beautiful templates or start from scratch - no coding required."
        />
        <meta
          name="keywords"
          content="portfolio builder, freelancer portfolio, instant website, portfolio templates"
        />
        <meta name="author" content="BuilderHut" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="fixed top-4 left-4 right-4 z-50 bg-black shadow-lg rounded-xl border border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src={favicon}
                alt="BuilderHut Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-white">builderhut</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/signin">
                <button className="px-6 py-2 text-white border border-gray-700 rounded-lg hover:border-orange-500">
                  Sign In
                </button>
              </Link>
              <Link href="/signin">
                <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg">
                  Sign Up
                </button>
              </Link>
              <Link href="#pricing">
                <p className="text-white px-6 py-2">Pricing</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-start min-h-screen bg-black pt-32 p-6 relative">
        {/* Static background grid */}
        <div className="absolute inset-0 bg-grid-dot opacity-70 pointer-events-none"></div>

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Build Your Portfolio
            <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              In Just Minutes
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Choose a template, customize it, and get your professional portfolio online instantly.
            No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-bold transition-all hover:shadow-lg">
                Start Building →
              </button>
            </Link>
            <Link href="#features">
              <button className="px-8 py-4 bg-gray-800 rounded-lg text-white font-bold transition-all hover:bg-gray-700">
                Explore Features
              </button>
            </Link>
          </div>
        </div>

        {/* Pricing Section */}
        <section id="pricing" className="mt-32 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Cards */}
            {[
              { title: "Monthly", price: "$5/month", features: ["3 Websites", "100+ Templates", "No Code Editor"] },
              { title: "Yearly", price: "$55/year", features: ["5 Websites", "Everything in Monthly"] },
              { title: "Lifetime", price: "$349", features: ["Unlimited Websites", "Lifetime Access"] },
            ].map(({ title, price, features }, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-xl border border-gray-800 hover:border-orange-500"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <div className="text-3xl font-bold text-orange-500 mb-6">{price}</div>
                <ul className="text-gray-400 space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Link href={`/pricing/${title.toLowerCase()}`}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>


        {/* How It Works */}
        <div className="mt-32 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Choose Template</h3>
              <p className="text-gray-400">Browse our collection and pick a template that matches your style</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-xl font-bold text-white mb-4">Customize Design</h3>
              <p className="text-gray-400">Personalize colors, fonts, and layout to match your brand</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Launch Site</h3>
              <p className="text-gray-400">Deploy your portfolio with one click and share with the world</p>
            </div>
          </div>
        </div>

        {/* Powerful Features */}
        <div id="features" className="mt-32 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:border-orange-500/50 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">Drag & Drop Editor</h3>
              <p className="text-gray-400">Intuitive interface for easy customization of your portfolio layout</p>
            </div>
            <div className="bg-black border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:border-orange-500/50 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Responsive Design</h3>
              <p className="text-gray-400">Your portfolio looks perfect on all devices and screen sizes</p>
            </div>
            <div className="bg-black border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:border-orange-500/50 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Performance</h3>
              <p className="text-gray-400">Lightning-fast loading times with optimized code and assets</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-32 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Built with Modern Tech</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-black border border-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-white">React</h3>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-white">Next.js</h3>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-white">Tailwind CSS</h3>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="text-lg font-bold text-white">Cloud Deploy</h3>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Build Your Portfolio?</h2>
          <p className="text-xl text-gray-400 mb-8">Create your stunning portfolio today with BuilderHut</p>
          <Link href="/signin">
            <button className="px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-bold text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25">
              Get Started Now
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
