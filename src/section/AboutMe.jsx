import {
    User,
    GraduationCap,
    MapPin,
    Palette,
    Code2,
    Search,
} from "lucide-react";

function AboutMe() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-20"
        >
            {/* Decorative Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 12% 20%, rgba(168,242,67,.22), transparent 32%),
                        radial-gradient(circle at 88% 80%, rgba(168,242,67,.22), transparent 32%)
                    `,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="inline-block rounded-full bg-[#E8F7D3] px-5 py-2 text-sm font-semibold text-[#70A73C] tracking-wide">
                        ABOUT ME
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-bold">
                        Nice to meet you 👋
                    </h2>

                </div>

                <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-10 items-center">

                    {/* LEFT STICKERS */}
                    <div className="flex flex-wrap lg:flex-col justify-center lg:items-end gap-5">

                        <div className="group bg-white rounded-full shadow-md px-3 py-3 flex items-center gap-3 rotate-2 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
                                <User size={18} />
                            </div>

                            <div className="pr-4">
                                <p className="text-xs text-gray-500">
                                    Name
                                </p>

                                <p className="font-medium">
                                    Pranata Eka Pramudya
                                </p>
                            </div>

                        </div>

                        <div className="group bg-white rounded-full shadow-md px-3 py-3 flex items-center gap-3 -rotate-2 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                <GraduationCap size={18} />
                            </div>

                            <div className="pr-4">
                                <p className="text-xs text-gray-500">
                                    Education
                                </p>

                                <p className="font-medium">
                                    Universitas Mulawarman
                                </p>
                            </div>

                        </div>

                        <div className="group bg-white rounded-full shadow-md px-3 py-3 flex items-center gap-3 rotate-1 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white">
                                <MapPin size={18} />
                            </div>

                            <div className="pr-4">
                                <p className="text-xs text-gray-500">
                                    Location
                                </p>

                                <p className="font-medium">
                                    Samarinda
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* CENTER */}
                    <div className="text-center">

                        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                            I'm <span className="text-[#70A73C]">Pramudya</span>.
                        </h3>

                        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-700 font-light">

                            <span className="font-semibold">
                                Part designer,
                            </span>{" "}

                            <span className="font-semibold">
                                part developer,
                            </span>{" "}

                            and passionate about crafting digital experiences that
                            transform messy problems into intuitive and meaningful
                            solutions.

                        </p>

                        <div className="mt-10 flex justify-center">

                            <div className="rounded-full bg-[#70A73C] px-6 py-3 text-white shadow-lg">
                                💡 Always learning something new.
                            </div>

                        </div>

                    </div>

                    {/* RIGHT STICKERS */}
                    <div className="flex flex-wrap lg:flex-col justify-center lg:items-start gap-5">

                        <div className="group bg-[#FFF5F7] rounded-full shadow-md px-3 py-3 flex items-center gap-3 -rotate-2 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
                                <Palette size={18} />
                            </div>

                            <div className="pr-4">
                                <p className="font-medium">
                                    UI / UX Design
                                </p>
                            </div>

                        </div>

                        <div className="group bg-[#F1F9EA] rounded-full shadow-md px-3 py-3 flex items-center gap-3 rotate-2 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-full bg-[#70A73C] flex items-center justify-center text-white">
                                <Code2 size={18} />
                            </div>

                            <div className="pr-4">
                                <p className="font-medium">
                                    Web Development
                                </p>
                            </div>

                        </div>

                        <div className="group bg-[#FFFBEA] rounded-full shadow-md px-3 py-3 flex items-center gap-3 -rotate-1 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white">
                                <Search size={18} />
                            </div>

                            <div className="pr-4">
                                <p className="font-medium">
                                    Detail-Oriented
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutMe;