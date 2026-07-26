import bgHero from '../assets/bg-hero.png'
import fotoPramudya from '../assets/foto-pramudya-hd.png'

function Hero() {
    return (
        <div
            className="flex flex-col items-center min-h-screen"
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Container utama - membatasi lebar maksimal & menjaga margin kiri-kanan konsisten */}
            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center px-8">

                {/* Navigation menu */}
                <div className="flex flex-row m-8 w-96 h-12 bg-gray-950 rounded-full items-center justify-between px-8 font-medium text-white shadow-lg">
                    <p className="cursor-pointer hover:text-green-400 transition-colors">Home</p>
                    <p className="cursor-pointer hover:text-green-400 transition-colors">About</p>
                    <p className="cursor-pointer hover:text-green-400 transition-colors">Projects</p>
                    <p className="cursor-pointer hover:text-green-400 transition-colors">Contacts</p>
                </div>

                {/* Headline */}
                <h1 className="mt-8 text-6xl font-light text-gray-800 font-sans tracking-tight">
                    Hi, I'm{' '}
                    <span className="font-script text-9xl font-medium text-gray-800">P</span>
                    ramudya
                </h1>

                {/* Foto Diri + Badge + CTA dalam satu baris */}
                <div className="flex flex-row items-center justify-between w-full mt-8 font-medium text-gray-800">

                    {/* Availability badge */}
                    <div className="flex flex-row items-center justify-center gap-4 w-64 p-2 text-center text-sm rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p>Available for new journey</p>
                    </div>

                    {/* Foto Diri - di tengah */}
                    <img
                        src={fotoPramudya}
                        alt="Foto Pramudya"
                        className="h-96 object-contain pl-6"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        }}
                    />

                    {/* CTA: Let's Connect + button */}
                    <div className="flex flex-col gap-24 justify-center items-end">
                        <p className="text-gray-700 font-light text-right leading-relaxed">
                            I bring innovative ideas to life through <br />
                            my design and collaborations.
                        </p>
                        <button className="w-52 p-4 text-center rounded-full border border-green-400 bg-white/70 backdrop-blur-sm hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            Get in Touch
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero