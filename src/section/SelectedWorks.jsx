import { ArrowUpRight } from 'lucide-react'
import SimbaIT from '../assets/Simba-IT.png'
import TravelinAja from '../assets/TravelinAja.png'

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ==================== Card 1 ==================== */}

                    <a href="https://github.com/pramudyaeka/SIMBA-IT" target="_blank" rel="noopener noreferrer">
                        <article className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-[#70A73C] hover:shadow-2xl transition-all duration-300">
                            <div className="overflow-hidden p-4">
                                <img
                                    src={SimbaIT}
                                    alt="Simba-IT"
                                    className="w-full h-72 object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col flex-1 p-7">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            Simba-IT
                                        </h3>

                                        <p className="mt-2 text-gray-500 leading-relaxed min-h-[96px]">
                                            Inventory Management Information
                                            System for managing IT consumable
                                            assets using QR Code technology.
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={22}
                                        className="shrink-0 text-[#70A73C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        IT Inventory
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        Website
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        Laravel
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        Tailwind CSS
                                    </span>
                                </div>
                            </div>
                        </article>
                    </a>

                    {/* ==================== Card 2 ==================== */}
                    <a href="https://github.com/IkhwanWahyudi/TravelinAja" target="_blank" rel="noopener noreferrer">
                        <article className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-[#70A73C] hover:shadow-2xl transition-all duration-300">
                            <div className="overflow-hidden p-4">
                                <img
                                    src={TravelinAja}
                                    alt="TravelinAja"
                                    className="w-full h-72 object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col flex-1 p-7">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            TravelinAja
                                        </h3>

                                        <p className="mt-2 text-gray-500 leading-relaxed min-h-24">
                                            A travel discovery website developed
                                            as a final practical project to help
                                            users explore destinations and plan
                                            trips through a clean, responsive,
                                            and user-friendly interface.
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={22}
                                        className="shrink-0 text-[#70A73C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        Travel
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        Website
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        Laravel
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-[#C6F996]/40 text-green-700 text-sm font-medium">
                                        MySQL
                                    </span>
                                </div>
                            </div>
                        </article>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SelectedWorks
