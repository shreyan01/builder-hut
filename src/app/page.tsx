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
        <meta name="description" content="Create and deploy your professional portfolio website instantly. Choose from beautiful templates or start from scratch - no coding required." />
        <meta name="keywords" content="portfolio builder, freelancer portfolio, instant website, portfolio templates" />
        <meta name="author" content="BuilderHut" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="BuilderHut - Instant Portfolio Websites" />
        <meta property="og:description" content="Create and deploy your professional portfolio website instantly. Choose from beautiful templates or start from scratch - no coding required." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://builderhut.club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BuilderHut" />
        <meta name="twitter:description" content="Create stunning portfolio websites in minutes" />
        <meta name="twitter:image" content="/favicon.png" />
      </Head>

      <nav className="fixed top-4 left-4 right-4 z-50 bg-black shadow-lg rounded-xl border border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image 
                src={favicon} 
                alt="BuilderHut Logo" 
                width={40} 
                height={40} 
                className="rounded-full hover:scale-105 transition-transform"
              />
              <span className="ml-2 text-xl font-bold text-white">builderhut</span>
            </div>
            <div className="flex space-x-2">
              <Link href="/signin">
                <button className="px-6 py-2 text-white border border-transparent bg-black hover:border-orange-500/50 rounded-lg transition-all duration-300 animate-border-shimmer">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Sign Up
                </button>
              </Link>
              <Link href="#pricing"><p className="text-white px-6 py-2 ">Pricing</p></Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-start bg-black pt-32 p-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-orange-700 rounded-full blur-3xl opacity-10 animate-pulse"></div>

        {/* Rest of the code remains exactly the same as the previous edit, starting from Hero Section to the end */}
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build Your Portfolio
            <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              In Just Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8">
            Choose a template, customize it, and get your professional portfolio online instantly.
            No coding required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25">
                Start Building
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            <Link href="#features">
              <button className="px-8 py-4 bg-gray-800 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:bg-gray-700 transform hover:-translate-y-1">
                Explore Features
              </button>
            </Link>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mt-32 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Monthly</h3>
              <div className="text-3xl font-bold text-orange-500 mb-6">$5/month</div>
              <ul className="text-gray-400 space-y-4 mb-8">
                <li>✓ 3 Websites</li>
                <li>✓ 100+ Templates</li>
                <li>✓ No Code Editor</li>
                <li>✓ Access to Template Code</li>
              </ul>
              <Link href="/pricing/monthly">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Yearly</h3>
              <div className="text-3xl font-bold text-orange-500 mb-6">$55/year</div>
              <ul className="text-gray-400 space-y-4 mb-8">
                <li>✓ 5 Websites</li>
                <li>✓ Everything in Monthly</li>
                <li>✓ No Cost Deployment</li>
              </ul>
              <Link href="/pricing/yearly">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Lifetime</h3>
              <div className="text-3xl font-bold text-orange-500 mb-6">$349</div>
              <ul className="text-gray-400 space-y-4 mb-8">
                <li>✓ Unlimited Websites</li>
                <li>✓ Everything in Yearly</li>
                <li>✓ Lifetime Access</li>
              </ul>
              <Link href="/pricing/lifetime">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

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
          <Link href="/signup">
            <button className="px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-bold text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25">
              Get Started Now
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
