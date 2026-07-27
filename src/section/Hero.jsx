import bgHero from '../assets/bg-hero.png'
import fotoPramudya from '../assets/foto-pramudya-hd.png'

function Hero() {
    return (
        <div
            className="flex flex-col items-center min-h-screen"
            style={{
                backgroundImage: `linear-gradient(to bottom, transparent 60%, white 100%), url(${bgHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Container utama */}
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8">

                {/* Navigation menu */}
                <div className="flex flex-row m-4 sm:m-6 md:m-8 w-full max-w-xs sm:max-w-sm md:w-96 h-12 bg-gray-950 rounded-full items-center justify-between px-4 sm:px-6 md:px-8 font-medium text-white shadow-lg text-xs sm:text-sm md:text-base">
                    <p className="cursor-pointer hover:text-green-400 transition-colors">Home</p>
                    <p className="cursor-pointer hover:text-green-400 transition-colors">About</p>
                    <p className="cursor-pointer hover:text-green-400 transition-colors">Projects</p>
                    <p className="cursor-pointer hover:text-green-400 transition-colors">Contacts</p>
                </div>

                {/* Headline */}
                <h1 className="mt-4 md:mt-8 text-3xl sm:text-4xl md:text-6xl font-light text-gray-800 font-sans tracking-tight text-center">
                    Hi, I'm{' '}
                    <span className="font-script text-5xl sm:text-6xl md:text-9xl font-medium text-gray-800">P</span>
                    ramudya
                </h1>

                {/* Foto Diri + Badge + CTA */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full mt-6 md:mt-8 font-medium text-gray-800 gap-6 md:gap-4">

                    {/* Availability badge */}
                    <div className="order-2 md:order-1 flex flex-row items-center justify-center gap-3 md:gap-4 w-56 sm:w-64 p-2 text-center text-xs sm:text-sm rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                        <p>Available for new journey</p>
                    </div>

                    {/* Foto Diri - di tengah */}
                    <img
                        src={fotoPramudya}
                        alt="Foto Pramudya"
                        className="order-1 md:order-2 h-64 sm:h-80 md:h-96 object-contain md:pl-8"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        }}
                    />

                    {/* CTA: Let's Connect + button */}
                    <div className="order-3 flex flex-col gap-4 md:gap-24 justify-center items-center md:items-end">
                        <p className="text-gray-700 font-light text-center md:text-right leading-relaxed text-sm sm:text-base">
                            I bring innovative ideas to life through <br className="hidden sm:block" />
                            my design and collaborations.
                        </p>
                        <button className="w-44 sm:w-52 p-3 sm:p-4 text-center text-sm sm:text-base rounded-full border border-green-400 bg-white/70 backdrop-blur-sm hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            Get in Touch
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero