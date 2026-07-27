import {
    User,
    GraduationCap,
    MapPin,
    Palette,
    Code2,
    Search,
} from 'lucide-react'

function AboutMe() {
    return (
        <section id="about" className="relative bg-white py-16 md:py-24 overflow-hidden">
            {/* Background gradient lingkaran - dekoratif */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle closest-side at 15% 50%, rgba(168,242,67,0.35) 0%, transparent 100%),
            radial-gradient(circle closest-side at 85% 85%, rgba(168,242,67,0.35) 0%, transparent 100%)
        `,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl font-helvetica text-center mb-8 md:mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-8">

                    {/* Elevator Pitch - tampil duluan di mobile, tengah di desktop */}
                    <p className="order-1 md:order-2 max-w-xs sm:max-w-sm text-center text-lg sm:text-xl leading-relaxed shrink-0">
                        I'm <em>Pramudya</em>.{' '}
                        <strong>Part designer, part developer,</strong> and
                        fully obsessed with turning{' '}
                        <strong>messy problems</strong> into{' '}
                        <strong>interfaces that just make sense</strong>.
                    </p>

                    {/* Badge Identitas - kiri di desktop, tengah di mobile */}
                    <div className="order-2 md:order-1 flex flex-row flex-wrap md:flex-col gap-3 md:gap-6 items-center md:items-end justify-center w-full md:w-56 shrink-0">
                        <div className="bg-gray-100 text-gray-850 rounded-full px-2 py-2 text-xs sm:text-sm text-center rotate-2 hover:rotate-0 transition-transform flex flex-row gap-2 items-center justify-center shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-700 rounded-full flex items-center justify-center shrink-0">
                                <User size={16} className="text-white" />
                            </div>
                            <p className="pr-3">Pranata Eka Pramudya</p>
                        </div>
                        <div className="bg-gray-100 text-gray-850 rounded-full px-2 py-2 text-xs sm:text-sm text-center -rotate-1 hover:rotate-0 transition-transform flex flex-row gap-2 items-center justify-center shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                                <GraduationCap size={16} className="text-white" />
                            </div>
                            <p className="pr-3">Universitas Mulawarman</p>
                        </div>
                        <div className="bg-gray-100 text-gray-850 rounded-full px-2 py-2 text-xs sm:text-sm text-center rotate-1 hover:rotate-0 transition-transform flex flex-row gap-2 items-center justify-center shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center shrink-0">
                                <MapPin size={16} className="text-white" />
                            </div>
                            <p className="pr-3">Samarinda</p>
                        </div>
                    </div>

                    {/* Badge Skill - kanan di desktop, tengah di mobile */}
                    <div className="order-3 flex flex-row flex-wrap md:flex-col gap-3 md:gap-6 items-center md:items-start justify-center w-full md:w-56 shrink-0">
                        <div className="bg-gray-100 text-gray-850 rounded-full pl-2 pr-2 py-2 text-xs sm:text-sm text-center -rotate-2 hover:rotate-0 transition-transform flex flex-row gap-2 items-center justify-center shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-400 rounded-full flex items-center justify-center shrink-0">
                                <Palette size={16} className="text-white" />
                            </div>
                            <p className="pr-1">UI/UX Design</p>
                        </div>
                        <div className="bg-gray-100 text-gray-850 rounded-full pl-2 pr-2 py-2 text-xs sm:text-sm text-center rotate-1 hover:rotate-0 transition-transform flex flex-row gap-2 items-center justify-center shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-400 rounded-full flex items-center justify-center shrink-0">
                                <Code2 size={16} className="text-white" />
                            </div>
                            <p className="pr-1">Web Developer</p>
                        </div>
                        <div className="bg-gray-100 text-gray-850 rounded-full pl-2 pr-2 py-2 text-xs sm:text-sm text-center -rotate-1 hover:rotate-0 transition-transform flex flex-row gap-2 items-center justify-center shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400 rounded-full flex items-center justify-center shrink-0">
                                <Search size={16} className="text-white" />
                            </div>
                            <p className="pr-1">Detail-Oriented</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe