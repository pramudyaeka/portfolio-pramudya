import bgHero from '../assets/bg-hero.png'
import fotoPramudya from '../assets/foto-pramudya-hd.png'
import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
    return (
        <section
            id="home"
            className="relative flex flex-col items-center h-screen overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, transparent 65%, white 100%), url(${bgHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Navigation */}
            <nav className="shrink-0 mt-4 z-50">
                <div className="flex items-center gap-8 px-8 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg text-sm">
                    <a href="#home" className="hover:text-[#70A73C] transition">
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:text-[#70A73C] transition"
                    >
                        About
                    </a>
                    <a
                        href="#works"
                        className="hover:text-[#70A73C] transition"
                    >
                        Works
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-[#70A73C] transition"
                    >
                        Contact
                    </a>
                </div>
            </nav>

            <div className="w-full max-w-7xl mx-auto px-6 pt-6 flex-1 flex flex-col justify-center min-h-0">
                {/* Headline */}
                <div className="text-center shrink-0">
                    <h1 className="font-light text-gray-900 tracking-tight">
                        <span className="text-3xl md:text-5xl">Hi, I'm </span>
                        <span className="font-script text-6xl md:text-[7rem] font-medium">
                            P
                        </span>
                        <span className="text-3xl md:text-5xl">ramudya</span>
                    </h1>
                    <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        I enjoy turning
                        <span className="font-semibold text-gray-900 shadow-sm px-1 rounded-md">
                            {' '}
                            ideas into delightful digital experiences
                        </span>{' '}
                        through thoughtful design, clean code, and a little bit
                        of curiosity.
                    </p>
                </div>

                {/* Hero Content */}
                <div className="mt-6 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10 flex-1 min-h-0">
                    {/* LEFT - Status badges */}
                    <div className="order-2 lg:order-1 hidden lg:flex flex-col gap-4">
                        <div className="group bg-white rounded-full px-5 py-2.5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                <p className="font-medium text-sm">
                                    Open to exciting opportunities
                                </p>
                            </div>
                        </div>
                        <div className="group bg-white rounded-full px-5 py-2.5 shadow-lg rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all">
                            <div className="flex items-center gap-3">
                                <Sparkles
                                    size={16}
                                    className="text-[#70A73C]"
                                />
                                <p className="text-sm">
                                    Loves building meaningful products
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CENTER - Foto diri + floating stickers */}
                    <div className="relative order-1 lg:order-2 flex-1 flex items-center justify-center min-h-0">
                        {/* Glow effect di belakang foto */}
                        <div className="absolute inset-0 bg-[#70A73C] blur-[90px] opacity-20 rounded-full"></div>

                        {/* Floating stickers - hanya tampil di desktop besar */}
                        <div className="hidden xl:flex absolute left-0 top-8 bg-white rounded-full shadow-lg px-4 py-2 rotate-[-10deg] text-sm">
                            🎨 UI/UX
                        </div>
                        <div className="hidden xl:flex absolute right-0 bottom-12 bg-white rounded-full shadow-lg px-4 py-2 rotate-[8deg] text-sm">
                            💻 React
                        </div>
                        <div className="hidden xl:flex absolute left-8 bottom-2 bg-white rounded-full shadow-lg px-4 py-2 rotate-2 text-sm">
                            ☕ Coffee Powered
                        </div>

                        <img
                            src={fotoPramudya}
                            alt="Pramudya"
                            className="relative h-full max-h-[45vh] object-contain"
                            style={{
                                maskImage:
                                    'linear-gradient(to bottom, black 75%, transparent)',
                                WebkitMaskImage:
                                    'linear-gradient(to bottom, black 75%, transparent)',
                            }}
                        />
                    </div>

                    {/* RIGHT - Deskripsi + CTA */}
                    <div className="order-3 hidden lg:flex flex-col items-end gap-5">
                        <p className="text-right text-gray-700 leading-relaxed max-w-xs text-sm">
                            Whether it's designing interfaces, solving problems,
                            or building websites, I'm always up for creating
                            something people genuinely enjoy using.
                        </p>
                        <button className="group flex items-center gap-3 rounded-full bg-[#70A73C] px-6 py-3 text-white shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm">
                            Let's Build Something
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
