import { ArrowUpRight } from 'lucide-react'
import SimbaIT from '../assets/Simba-IT.png'

function SelectedWorks() {
    return (
        <section className="bg-white py-20" id="works">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-[#70A73C] font-semibold tracking-widest uppercase text-sm">
                        Portfolio
                    </p>

                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                        Selected Works
                    </h2>

                    <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
                        A collection of projects I've worked on, ranging from
                        web development to UI/UX design and IT solutions.
                    </p>
                </div>

                {/* Projects */}
                <div className="max-w-2xl mx-auto">
                    {/* Card */}
                    <article className="group rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-[#70A73C] hover:shadow-2xl transition duration-300">
                        <div className="overflow-hidden p-4">
                            <img
                                src={SimbaIT}
                                alt="Simba IT"
                                className="w-full h-72 object-cover object-top rounded-lg transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-7">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        Simba-IT
                                    </h3>

                                    <p className="text-gray-500 mt-2 leading-relaxed">
                                        Inventory Management Information System
                                        for managing IT consumable assets using
                                        QR Code technology.
                                    </p>
                                </div>

                                <ArrowUpRight
                                    className="text-[#70A73C] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    size={22}
                                />
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6">
                                <span className="px-4 py-2 rounded-full bg-[#c6f99665] text-green-700 text-sm font-medium">
                                    IT Inventory
                                </span>

                                <span className="px-4 py-2 rounded-full bg-[#c6f99665] text-green-700 text-sm font-medium">
                                    Website
                                </span>

                                <span className="px-4 py-2 rounded-full bg-[#c6f99665] text-green-700 text-sm font-medium">
                                    Laravel
                                </span>
                            </div>
                        </div>
                    </article>

                    {/* Card 2 */}
                    {/* <article className="group rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-[#70A73C] hover:shadow-2xl transition duration-300">
                        <div className="overflow-hidden">
                            <img
                                src="/project-2.png"
                                alt="Attendance"
                                className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-7">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        Attendance App
                                    </h3>

                                    <p className="text-gray-500 mt-2 leading-relaxed">
                                        UI/UX design for an attendance
                                        application focused on simplicity,
                                        usability, and clean user experience.
                                    </p>
                                </div>

                                <ArrowUpRight
                                    className="text-[#70A73C] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    size={22}
                                />
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6">
                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                    Attendance
                                </span>

                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                    UI/UX
                                </span>

                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                    Figma
                                </span>
                            </div>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default SelectedWorks
