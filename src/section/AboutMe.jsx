function AboutMe() {
    return (
        <section id="about" className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-helvetica text-center mb-12">
                    About Me
                </h2>

                <div className="flex flex-row items-center justify-between gap-8">
                    {/* Badge Identitas - kiri, rata kanan */}
                    <div className="flex flex-col gap-6 items-end w-56 shrink-0">
                        <div className="bg-gray-950 text-white rounded-full px-5 py-2 text-sm text-center rotate-2 hover:rotate-0 transition-transform">
                            Pranata Eka Pramudya
                        </div>
                        <div className="bg-gray-950 text-white rounded-full px-5 py-2 text-sm text-center ">
                            Universitas Mulawarman
                        </div>
                        <div className="bg-gray-950 text-white rounded-full px-5 py-2 text-sm text-center rotate-1 hover:rotate-0 transition-transform">
                            Samarinda
                        </div>
                    </div>

                    {/* Elevator Pitch - tengah */}
                    <p className="max-w-sm text-center text-xl leading-relaxed shrink-0">
                        I'm <em>Pramudya</em>.{' '}
                        <strong>Part designer, part developer,</strong> and
                        fully obsessed with turning{' '}
                        <strong>messy problems</strong> into{' '}
                        <strong>interfaces that just make sense</strong>.
                    </p>

                    {/* Badge Skill - kanan, rata kiri */}
                    <div className="flex flex-col gap-6 items-start w-56 shrink-0">
                        <div className="bg-gray-950 text-white rounded-full px-5 py-2 text-sm text-center -rotate-2 hover:rotate-0 transition-transform">
                            UI/UX Design
                        </div>
                        <div className="bg-gray-950 text-white rounded-full px-5 py-2 text-sm text-center transition-transform">
                            Web Developer
                        </div>
                        <div className="bg-gray-950 text-white rounded-full px-5 py-2 text-sm text-center -rotate-1 hover:rotate-0 transition-transform">
                            Detail-Oriented
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
